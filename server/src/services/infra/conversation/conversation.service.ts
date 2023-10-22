import { Injectable, OnModuleInit } from '@nestjs/common';
import { ArangodbService } from '../../../libs/arangodb/arangodb.service';
import { DocumentCollection } from 'arangojs/collection';
import {
  Conversation,
  ConversationCreateOneInput,
  ConversationFindByParticipantInput,
  ConversationFindOneInput,
  ConversationRemoveOneInput,
  ConversationUpdateOneInput,
} from '../../../proto/interfaces';

@Injectable()
export class ConversationService implements OnModuleInit {
  collection: DocumentCollection;

  constructor(private arangodb: ArangodbService) {
    this.collection = this.arangodb.db.collection('conversation');
  }

  async createOne(input: ConversationCreateOneInput): Promise<Conversation> {
    return this.arangodb.utils.format(
      (
        await this.collection.save(this.arangodb.utils.addTs(input), {
          returnNew: true,
        })
      ).new,
    );
  }

  async findOne(input: ConversationFindOneInput): Promise<Conversation | void> {
    try {
      return this.arangodb.utils.format(
        await this.collection.document(input.id),
      );
    } catch (e) {
      if (e.conversation === 'document not found') {
        return;
      }
      throw e;
    }
  }

  async updateOne(
    input: Partial<ConversationUpdateOneInput>,
  ): Promise<Conversation> {
    return this.arangodb.utils.format(
      (
        await this.collection.update(
          input.id,
          this.arangodb.utils.addUpdatedAt(input),
          { returnNew: true },
        )
      ).new,
    );
  }

  async removeOne(
    input: ConversationRemoveOneInput,
  ): Promise<Conversation | void> {
    const found = await this.findOne(input);
    if (found) {
      await this.collection.remove(found.id);
      return found;
    }
  }

  async findByParticipant(
    input: ConversationFindByParticipantInput,
  ): Promise<Conversation[]> {
    const { filter, opts } = input;
    const query = `
      FOR doc IN conversation
      FILTER @participantId IN doc.participantIds
      AND doc.lastMessageAt >= @fromLastMessageAt
      LIMIT @offset, @limit
      RETURN doc
    `;
    const vars = {
      ...filter,
      offset: Number(opts.offset) || 0,
      limit: Number(opts.limit) || 0,
    };
    const cursor = await this.arangodb.db.query(query, vars);
    return (await cursor.all()).map(this.arangodb.utils.format);
  }

  async onModuleInit(): Promise<void> {
    try {
      await this.arangodb.db.createCollection('conversation', {});
      const collection = this.arangodb.db.collection('conversation');
      try {
        await collection.ensureIndex({
          name: 'idx-conversation-v2',
          type: 'persistent',
          fields: ['participantIds[*]', 'fromMessageAt'],
        });
      } catch (e) {
        if (e.conversation.indexOf('duplicate name') < 0) throw e;
      }
    } catch (e) {}
  }
}
