import { Injectable } from '@nestjs/common';
import { ConnectionOptions, Job, Queue, Worker } from 'bullmq';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MqService {
  private queues: Map<string, Queue> = new Map();

  constructor(private config: ConfigService) {}

  async startWorker(args: {
    queue: string;
    handler: (job: Job) => Promise<any>;
  }) {
    const { queue, handler } = args;
    new Worker(queue, handler, {
      connection: this.getConnectionOptions(),
    });
  }

  async publish(args: { queue: string; message: any }) {
    const q = this.getQueue(args.queue);
    const job = await q.add(args.queue, args.message);
    return job.id;
  }

  private getQueue(queue: string) {
    if (this.queues.has(queue)) {
      return this.queues.get(queue);
    }
    const newQueue = new Queue(queue, {
      connection: this.getConnectionOptions(),
    });
    this.queues.set(queue, newQueue);
    return newQueue;
  }

  private getConnectionOptions(): ConnectionOptions {
    return {
      host: this.config.get('REDIS_HOST'),
      port: Number(this.config.get('REDIS_PORT')),
      password: this.config.get('REDIS_PWD'),
    };
  }
}
