import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { MqService } from '../../libs/mq/mq.service';
import { Job } from 'bullmq';
import { WorkerJobData } from '../types';
import { ClientService } from '../../libs/client/client.service';
import { DummyServiceClient, DummyServiceDefinition } from '../../libs/client';
import { DummyJobPayload } from '../../proto/interfaces';
import { enableWorker } from '../enableWorker';

export type DummyJobData = WorkerJobData<DummyJobPayload>;

@Injectable()
export class DummyWorker implements OnModuleInit {
  private logger: Logger = new Logger(DummyWorker.name);
  private dummyServiceClient: DummyServiceClient;

  constructor(private mq: MqService, private clientService: ClientService) {
    this.dummyServiceClient =
      this.clientService.getServiceInternalClient<DummyServiceClient>(
        DummyServiceDefinition,
      );
  }

  async onJob(dummyJobData: DummyJobData): Promise<void> {
    const { data, jobId } = dummyJobData;
    const dummy = await this.dummyServiceClient.findOne({ id: data.id });
    this.logger.log({ jobId, data, dummy });
  }

  async onModuleInit(): Promise<void> {
    await enableWorker('DUMMY', async () => {
      await this.mq.startWorker({
        queue: 'dummy',
        handler: async (job: Job) => {
          const { data, id } = job;
          const dummyJobData: DummyJobData = {
            jobId: id,
            data,
          };
          await this.onJob(dummyJobData);
        },
      });
    });
  }
}
