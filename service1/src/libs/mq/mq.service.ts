import { Injectable } from '@nestjs/common';
import {
  ConnectionOptions,
  Job,
  JobsOptions,
  Queue,
  Worker,
  WorkerOptions,
} from 'bullmq';

@Injectable()
export class MqService {
  private queues: Map<string, Queue> = new Map();

  async startWorker(args: {
    queue: string;
    handler: (job: Job) => Promise<any>;
    opts?: WorkerOptions;
  }) {
    const { queue, handler } = args;
    new Worker(queue, handler, {
      ...args.opts,
      removeOnComplete: { age: 3600 },
      connection: this.getConnectionOptions(),
    });
  }

  async publish(args: { queue: string; message: any; opts?: JobsOptions }) {
    const q = this.getQueue(args.queue);
    const job = await q.add(args.queue, args.message, args.opts);
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
      password: process.env.REDIS_PASSWORD,
    };
  }
}
