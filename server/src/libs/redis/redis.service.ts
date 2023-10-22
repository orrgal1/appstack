import { Injectable, Logger } from '@nestjs/common';
import { Redis } from 'ioredis';
import Redlock from 'redlock';
import BottleNeck from 'bottleneck';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class RedisService {
  private logger: Logger = new Logger(RedisService.name);
  db: Redis;
  lock: Redlock;

  constructor(private config: ConfigService) {
    this.db = new Redis({
      host: this.config.get('REDIS_HOST'),
      port: Number(this.config.get('REDIS_PORT')),
      password: this.config.get('REDIS_PASSWORD'),
    });
    this.lock = new Redlock([this.db]);
    this.lock.on('error', (error) => {
      this.logger.error({ error: error.message }, error.stack);
    });
  }

  getLimiter(opts: BottleNeck.ConstructorOptions): BottleNeck {
    return new BottleNeck({
      ...opts,
      Redis: this.db,
    });
  }
}
