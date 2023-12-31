import { Injectable, OnModuleInit } from '@nestjs/common';
import { MqService } from '../../../../libs/mq/mq.service';
import { ClientService } from '../../../../libs/client/client.service';
import {
  ConversationServiceClient,
  ConversationServiceDefinition,
} from '../../../../libs/client';
import { enableWorker } from '../../../../libs/workers/enableWorker';

const PERMISSION_INTEGRITY_QUEUE_NAME = 'converation.permission.integrity';
const PERMISSION_INTEGRITY_JOB_INTERVAL = 60 * 1000;

@Injectable()
export class ConversationPermissionIntegrityWorkerService
  implements OnModuleInit
{
  private conversationServiceClient: ConversationServiceClient;

  constructor(private mq: MqService, private clientService: ClientService) {
    this.conversationServiceClient =
      this.clientService.getServiceInternalClient<ConversationServiceClient>(
        ConversationServiceDefinition,
      );
  }

  async onJob(): Promise<void> {
    const cursor =
      this.conversationServiceClient.findByPermissionIntegrityWarning({});
    for await (const next of cursor) {
      await this.conversationServiceClient.updateOne({
        id: next.id,
        participantIds: next.participantIds,
      });
    }
  }

  private async triggerRepeatingJob() {
    await this.mq.publish({
      queue: PERMISSION_INTEGRITY_QUEUE_NAME,
      message: {},
      opts: {
        repeat: { every: PERMISSION_INTEGRITY_JOB_INTERVAL },
        repeatJobKey: PERMISSION_INTEGRITY_QUEUE_NAME,
        jobId: PERMISSION_INTEGRITY_QUEUE_NAME,
      },
    });
  }

  private async startWorker() {
    await this.mq.startWorker({
      queue: PERMISSION_INTEGRITY_QUEUE_NAME,
      handler: async () => {
        await this.onJob();
      },
      opts: {
        limiter: { max: 1, duration: PERMISSION_INTEGRITY_JOB_INTERVAL },
      },
    });
  }

  async onModuleInit(): Promise<void> {
    await this.triggerRepeatingJob();
    await enableWorker('CONVERSATION_PERMISSION_INTEGRITY', async () => {
      await this.startWorker();
    });
  }
}
