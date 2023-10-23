import { Injectable } from '@nestjs/common';
import { ConnectionOptions, Job, Queue, Worker } from 'bullmq';

@Injectable()
export class MqService {
  private queues: Map<string, Queue> = new Map();

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
      host: process.env.REDIS_HOST,
      port: Number(process.env.REDIS_PORT),
      password: process.env.REDIS_PWD,
    };
  }
}
