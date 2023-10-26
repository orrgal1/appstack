import { Injectable, Logger } from '@nestjs/common';
import { Redis } from 'ioredis';
import Redlock from 'redlock';
import BottleNeck from 'bottleneck';

@Injectable()
export class RedisService {
  private logger: Logger = new Logger(RedisService.name);
  db: Redis;
  lock: Redlock;

  constructor() {
    this.db = new Redis({
      host: process.env.REDIS_HOST,
      port: Number(process.env.REDIS_PORT),
      password: process.env.REDIS_PASSWORD,
    });
    this.db.on('error', (error) => {
      this.logger.error({ error: error.message }, error.stack);
    });
    this.lock = new Redlock([this.db]);
    this.lock.on('error', (error) => {
      this.logger.error({ error: error.message }, error.stack);
    });
  }

  getLimiter(opts: BottleNeck.ConstructorOptions): BottleNeck {
    return new BottleNeck({
      ...opts,
      datastore: 'ioredis',
      clearDatastore: false,
      clientOptions: {
        host: process.env.REDIS_HOST,
        port: Number(process.env.REDIS_PORT),
        password: process.env.REDIS_PASSWORD,
      },
    });
  }

  getGroupLimiter(
    key: string,
    opts: BottleNeck.ConstructorOptions,
  ): BottleNeck {
    return new BottleNeck.Group({
      ...opts,
      datastore: 'ioredis',
      clearDatastore: false,
      clientOptions: {
        host: process.env.REDIS_HOST,
        port: Number(process.env.REDIS_PORT),
        password: process.env.REDIS_PASSWORD,
      },
    }).key(key);
  }
}
