import { Injectable, OnModuleInit } from '@nestjs/common';
import { MqService } from '../../../../libs/mq/mq.service';
import { ClientService } from '../../../../libs/client/client.service';
import {
  ConversationServiceClient,
  ConversationServiceDefinition,
} from '../../../../libs/client';
import { enableWorker } from '../../../../libs/workers/enableWorker';

const REMOVE_TEMPS_QUEUE_NAME = 'converation.remove.temps';
const REMOVE_TEMPS_JOB_INTERVAL = 60 * 1000;
const MILLIS_AGO = 60 * 1000;

@Injectable()
export class ConversationRemoveTempsWorkerService implements OnModuleInit {
  private conversationServiceClient: ConversationServiceClient;

  constructor(private mq: MqService, private clientService: ClientService) {
    this.conversationServiceClient =
      this.clientService.getServiceInternalClient<ConversationServiceClient>(
        ConversationServiceDefinition,
      );
  }

  async onJob(): Promise<void> {
    await this.conversationServiceClient.removeTemps({
      millisAgo: MILLIS_AGO,
    });
  }

  private async triggerRepeatingJob() {
    await this.mq.publish({
      queue: REMOVE_TEMPS_QUEUE_NAME,
      message: {},
      opts: {
        repeat: { every: REMOVE_TEMPS_JOB_INTERVAL },
        repeatJobKey: REMOVE_TEMPS_QUEUE_NAME,
        jobId: REMOVE_TEMPS_QUEUE_NAME,
      },
    });
  }

  private async startWorker() {
    await this.mq.startWorker({
      queue: REMOVE_TEMPS_QUEUE_NAME,
      handler: async () => {
        await this.onJob();
      },
      opts: {
        limiter: { max: 1, duration: REMOVE_TEMPS_JOB_INTERVAL },
      },
    });
  }

  async onModuleInit(): Promise<void> {
    await this.triggerRepeatingJob();
    await enableWorker('CONVERSATION_REMOVE_TEMPS', async () => {
      await this.startWorker();
    });
  }
}
