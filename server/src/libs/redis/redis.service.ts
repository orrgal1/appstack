import { Injectable, Logger } from '@nestjs/common';
import { Redis } from 'ioredis';
import Redlock from 'redlock';
import BottleNeck from 'bottleneck';

@Injectable()
export class RedisService {
  private logger: Logger = new Logger(RedisService.name);
  db: Redis;
  lock: Redlock;
  private limiterCache: Map<string, BottleNeck> = new Map();
  private groupLimiterCache: Map<string, BottleNeck.Group> = new Map();

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
    const { id } = opts;
    if (!id) throw new Error('must supply id in opts');
    const cached = this.limiterCache.get(id);
    if (cached) return cached;
    const limiter = new BottleNeck({
      ...opts,
      datastore: 'ioredis',
      clearDatastore: false,
      clientOptions: {
        host: process.env.REDIS_HOST,
        port: Number(process.env.REDIS_PORT),
        password: process.env.REDIS_PASSWORD,
      },
    });
    this.limiterCache.set(id, limiter);
    return limiter;
  }

  getGroupLimiter(
    key: string,
    opts: BottleNeck.ConstructorOptions,
  ): BottleNeck {
    const { id } = opts;
    if (!id) throw new Error('must supply id in opts');
    const cached = this.groupLimiterCache.get(id);
    if (cached) return cached.key(key);
    const group = new BottleNeck.Group({
      ...opts,
      datastore: 'ioredis',
      clearDatastore: false,
      clientOptions: {
        host: process.env.REDIS_HOST,
        port: Number(process.env.REDIS_PORT),
        password: process.env.REDIS_PASSWORD,
      },
    });
    this.groupLimiterCache.set(id, group);
    return group.key(key);
  }
}
