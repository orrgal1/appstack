import { Injectable } from '@nestjs/common';
import {
  Message,
  MessageCreateOneInput,
  MessageFindByConversationInput,
  MessageFindOneInput,
  MessageFindUniqueInput,
  MessageRemoveOneInput,
  MessageUpdateOneInput,
} from '../../../../proto/interfaces';
import { MessageService } from './message.service';
import { ClientService } from '../../../../libs/client/client.service';
import {
  ConversationServiceClient,
  ConversationServiceDefinition,
} from '../../../../libs/client';
import { PubsubService } from '../../../../libs/pubsub/pubsub.service';

@Injectable()
export class MessageLogic {
  private conversationServiceClient: ConversationServiceClient;

  constructor(
    private service: MessageService,
    private clientService: ClientService,
    private pubsub: PubsubService,
  ) {
    this.conversationServiceClient =
      this.clientService.getServiceInternalClient<ConversationServiceClient>(
        ConversationServiceDefinition,
      );
  }

  async createOne(input: MessageCreateOneInput): Promise<Message> {
    const conversation = await this.conversationServiceClient.findOne({
      id: input.conversationId,
    });
    const { participantIds } = conversation;
    const created = await this.service.createOne(input);
    await this.conversationServiceClient.updateOne({
      id: conversation.id,
      lastMessageAt: created.createdAt,
    });
    this.pubsub.publishToUsers('message.created', participantIds, created);
    return created;
  }

  async findOne(input: MessageFindOneInput): Promise<Message | void> {
    return await this.service.findOne(input);
  }

  async findUnique(input: MessageFindUniqueInput): Promise<Message | void> {
    return await this.service.findUnique(input);
  }

  async updateOne(input: MessageUpdateOneInput): Promise<Message> {
    const updated = await this.service.updateOne(input);
    const conversation = await this.conversationServiceClient.findOne({
      id: updated.conversationId,
    });
    const { participantIds } = conversation;
    await this.conversationServiceClient.updateOne({
      id: conversation.id,
      lastMessageAt: updated.updatedAt,
    });
    this.pubsub.publishToUsers('message.updated', participantIds, updated);
    return updated;
  }

  async removeOne(input: MessageRemoveOneInput): Promise<Message | void> {
    return await this.service.removeOne(input);
  }

  async findByConversation(
    input: MessageFindByConversationInput,
  ): Promise<Message[]> {
    return await this.service.findByConversation(input);
  }
}
