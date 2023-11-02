import {
  Injectable,
  Logger,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import { Redis } from 'ioredis';
import { createAdapter } from '@socket.io/redis-adapter';
import { Server, Socket } from 'socket.io';
import * as jwt from 'jsonwebtoken';

type Callback<T> = (socket: Socket, data: T) => Promise<void>;

@Injectable()
export class PubsubService implements OnModuleDestroy, OnModuleInit {
  private logger: Logger = new Logger(PubsubService.name);
  io: Server;
  callbacks: Map<string, Callback<any>> = new Map();

  onEvent<T, R>(event: string, cb: (data: T) => Promise<R>) {
    const internalCb: Callback<T> = async (socket: Socket, data: T) => {
      const result = await cb(data);
      socket.emit(`${event}:response`, result);
    };
    this.callbacks.set(event, internalCb);
  }

  publish<T>(event: string, room: string, data: T) {
    this.io.to(room).emit(event, data);
  }

  publishToUser<T>(event: string, userId: string, data: T) {
    this.publish(event, `users/${userId}`, data);
  }

  publishToUsers<T>(event: string, userIds: string[], data: T) {
    for (const userId of userIds) {
      this.publishToUser(event, userId, data);
    }
  }

  onModuleDestroy(): any {
    try {
      if (this.io) {
        this.io.close();
      }
    } catch (e) {
      this.logger.warn(e);
    }
  }

  listen() {
    this.io
      .use(function (socket, next) {
        if (socket.handshake.query && socket.handshake.query.token) {
          const extractedToken = socket.handshake?.query?.token;
          const token: string = (
            !Array.isArray(extractedToken) ? [extractedToken] : extractedToken
          )[0];
          if (token) {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            const { sub } = decoded;
            if (sub) {
              const userId = typeof sub === 'function' ? sub() : sub;
              socket.join(`users/${userId}`);
              socket['sub'] = sub;
            }
          }
          next();
        } else {
          next(new Error('Authentication error'));
        }
      })
      .on('connection', (socket) => {
        socket.on('message', async (data: { event: string; payload: any }) => {
          const cb = this.callbacks.get(data.event);
          if (cb) {
            await cb(socket, data.payload);
          }
        });
      });
    this.io.listen(Number(process.env.WS_PORT));
  }

  onModuleInit(): any {
    const redisOpts = {
      host: process.env.REDIS_HOST,
      port: Number(process.env.REDIS_PORT),
      password: process.env.REDIS_PASSWORD,
    };
    this.io = new Server({
      cors: {
        origin: '*', // or use "*" to allow all origins
        methods: ['GET', 'POST'],
      },
    });
    const pubClient = new Redis(redisOpts);
    pubClient.on('error', (error) => {
      this.logger.error({ error: error.message }, error.stack);
    });
    const subClient = pubClient.duplicate();
    this.io.adapter(createAdapter(pubClient, subClient));
  }
}
