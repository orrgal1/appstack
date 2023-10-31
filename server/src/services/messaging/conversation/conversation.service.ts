import { Injectable, OnModuleInit } from '@nestjs/common';
import { ArangodbService } from '../../../libs/arangodb/arangodb.service';
import { DocumentCollection } from 'arangojs/collection';
import {
  Conversation,
  ConversationCreateOneInput,
  ConversationFindByParticipantInput,
  ConversationFindByParticipantResult,
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

  async createOne(
    input: ConversationCreateOneInput & { isTemp: boolean },
  ): Promise<Conversation> {
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
      if (e.message === 'document not found') {
        return;
      }
      throw e;
    }
  }

  async updateOne(
    input: Partial<
      ConversationUpdateOneInput & {
        isTemp: boolean;
        permissionIntegrityWarning: boolean;
      }
    >,
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
  ): Promise<ConversationFindByParticipantResult> {
    const { filter, opts } = input;
    const query = `
      FOR doc IN conversation
      FILTER @participantId IN doc.participantIds
      AND doc.lastMessageAt >= @fromLastMessageAt
      AND doc.isTemp == false 
      LIMIT @offset, @limit
      RETURN doc
    `;
    const vars = {
      ...filter,
      offset: Number(opts.offset) || 0,
      limit: Number(opts.limit) || 0,
    };
    const cursor = await this.arangodb.db.query(query, vars);
    const results = (await cursor.all()).map(this.arangodb.utils.format);
    return {
      meta: { offset: results.length },
      results,
    };
  }

  async *findByPermissionIntegrityWarning(): AsyncGenerator<Conversation> {
    const query = `
      FOR doc IN conversation
      FILTER doc.permissionIntegrityWarning == true 
      RETURN doc
    `;
    const cursor = await this.arangodb.db.query(query);
    while (cursor.hasNext) {
      const next = await cursor.next();
      yield this.arangodb.utils.format(next);
    }
  }

  async onModuleInit(): Promise<void> {
    await this.arangodb.utils.tryDdl(
      () => this.arangodb.db.createCollection('conversation', {}),
      () =>
        this.arangodb.db.collection('conversation').ensureIndex({
          name: 'idx-conversation-v5',
          type: 'persistent',
          fields: ['participantIds[*]', 'lastMessageAt', 'isTemp'],
        }),
      () =>
        this.arangodb.db.collection('conversation').ensureIndex({
          name: 'idx-conversation-permission-integrity-warning-v1',
          type: 'persistent',
          fields: ['permissionIntegrityWarning'],
        }),
    );
  }
}
