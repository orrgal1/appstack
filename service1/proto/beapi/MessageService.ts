export interface MessageCreateOneInput {
  conversationId: string;
  media: MessageMedia | undefined;
  senderId: string;
  uniqueness: string;
}

export interface MessageMedia {
  text: string;
}

export interface Message {
  id: string;
  createdAt: number;
  updatedAt: number;
  conversationId: string;
  media: MessageMedia | undefined;
  senderId: string;
  sentToIds: string[];
  receivedByIds: string[];
  seenByIds: string[];
  deleted: boolean;
  uniqueness: string;
}

export interface MessageUpdateOneInput {
  id: string;
  media: MessageMedia | undefined;
}

export interface MessageFindOneInput {
  id: string;
}

export interface MessageFindUniqueInput {
  uniqueness: string;
}

export interface MessageRemoveOneInput {
  id: string;
}

export interface MessageFindByConversationInput {
  filter: MessageFindByConversationFilter | undefined;
  opts: MessageFindByConversationOpts | undefined;
}

export interface MessageFindByConversationFilter {
  conversationId: string;
}

export interface MessageFindByConversationOpts {
  limit: number;
  offset: number;
}

export interface MessageFindByConversationResult {
  meta: MessageFindByConversationResultMeta | undefined;
  results: Message[];
}

export interface MessageFindByConversationResultMeta {
  offset: number;
}

import { postToUnary } from './utils';

export class MessageService {
  private readonly serviceName: string = 'MessageService';

  async createOne(data: MessageCreateOneInput): Promise<Message> {
    return postToUnary<Message>(this.serviceName, 'createOne', data);
  }

  async updateOne(data: MessageUpdateOneInput): Promise<Message> {
    return postToUnary<Message>(this.serviceName, 'updateOne', data);
  }

  async findOne(data: MessageFindOneInput): Promise<Message> {
    return postToUnary<Message>(this.serviceName, 'findOne', data);
  }

  async findUnique(data: MessageFindUniqueInput): Promise<Message> {
    return postToUnary<Message>(this.serviceName, 'findUnique', data);
  }

  async removeOne(data: MessageRemoveOneInput): Promise<Message> {
    return postToUnary<Message>(this.serviceName, 'removeOne', data);
  }

  async findByConversation(
    data: MessageFindByConversationInput,
  ): Promise<MessageFindByConversationResult> {
    return postToUnary<MessageFindByConversationResult>(
      this.serviceName,
      'findByConversation',
      data,
    );
  }
}
