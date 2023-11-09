import { Empty } from './google/protobuf/empty';
export interface ConversationCreateOneInput {
  participantIds: string[];
}

export interface Conversation {
  id: string;
  createdAt: number;
  updatedAt: number;
  participantIds: string[];
  lastMessageAt: number;
  isTemp: boolean;
  permissionIntegrityWarning: boolean;
}

export interface ConversationUpdateOneInput {
  id: string;
  participantIds: string[];
  lastMessageAt: number;
  permissionIntegrityWarning: boolean;
}

export interface ConversationFindOneInput {
  id: string;
}

export interface ConversationRemoveOneInput {
  id: string;
}

export interface ConversationFindByParticipantInput {
  filter: ConversationFindByParticipantFilter | undefined;
  opts: ConversationFindByParticipantOpts | undefined;
}

export interface ConversationFindByParticipantFilter {
  participantId: string;
  fromLastMessageAt: number;
}

export interface ConversationFindByParticipantOpts {
  limit: number;
  offset: number;
}

export interface ConversationFindByParticipantResult {
  meta: ConversationFindByParticipantResultMeta | undefined;
  results: Conversation[];
}

export interface ConversationFindByParticipantResultMeta {
  offset: number;
}

export interface ConversationFindTempsInput {
  millisAgo: number;
}

export interface ConversationRemoveTempsInput {
  millisAgo: number;
}

import { postToUnary } from './utils';

export class ConversationService {
  private readonly serviceName: string = 'ConversationService';

  async createOne(
    data: Partial<ConversationCreateOneInput>,
  ): Promise<Conversation> {
    return postToUnary<Conversation>(this.serviceName, 'createOne', data);
  }

  async updateOne(
    data: Partial<ConversationUpdateOneInput>,
  ): Promise<Conversation> {
    return postToUnary<Conversation>(this.serviceName, 'updateOne', data);
  }

  async findOne(
    data: Partial<ConversationFindOneInput>,
  ): Promise<Conversation> {
    return postToUnary<Conversation>(this.serviceName, 'findOne', data);
  }

  async removeOne(
    data: Partial<ConversationRemoveOneInput>,
  ): Promise<Conversation> {
    return postToUnary<Conversation>(this.serviceName, 'removeOne', data);
  }

  async findByParticipant(
    data: Partial<ConversationFindByParticipantInput>,
  ): Promise<ConversationFindByParticipantResult> {
    return postToUnary<ConversationFindByParticipantResult>(
      this.serviceName,
      'findByParticipant',
      data,
    );
  }

  async findByPermissionIntegrityWarning(
    data: Partial<Empty>,
  ): Promise<Conversation> {
    return postToUnary<Conversation>(
      this.serviceName,
      'findByPermissionIntegrityWarning',
      data,
    );
  }

  async findTemps(
    data: Partial<ConversationFindTempsInput>,
  ): Promise<Conversation> {
    return postToUnary<Conversation>(this.serviceName, 'findTemps', data);
  }

  async removeTemps(
    data: Partial<ConversationRemoveTempsInput>,
  ): Promise<Empty> {
    return postToUnary<Empty>(this.serviceName, 'removeTemps', data);
  }
}
