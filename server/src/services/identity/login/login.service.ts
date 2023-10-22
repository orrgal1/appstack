import { Injectable, OnModuleInit } from '@nestjs/common';
import { ArangodbService } from '../../../libs/arangodb/arangodb.service';
import { DocumentCollection } from 'arangojs/collection';
import {
  Login,
  LoginCreateOneInput,
  LoginFindOneInput,
  LoginRemoveOneInput,
  LoginUpdateOneInput,
} from '../../../proto/interfaces';
import { LoginFindOneByPlatformIdInput } from '../../../libs/client';

@Injectable()
export class LoginService implements OnModuleInit {
  collection: DocumentCollection;

  constructor(private arangodb: ArangodbService) {
    this.collection = this.arangodb.db.collection('login');
  }

  async createOne(input: Partial<LoginCreateOneInput>): Promise<Login> {
    return this.arangodb.utils.format(
      (
        await this.collection.save(this.arangodb.utils.addTs(input), {
          returnNew: true,
        })
      ).new,
    );
  }

  async updateOne(input: Partial<LoginUpdateOneInput>): Promise<Login> {
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

  async findOne(input: LoginFindOneInput): Promise<Login | void> {
    const query = `
      FOR doc IN login
      FILTER doc.platform == @platform 
      AND doc.platformLoginId == @platformLoginId
      AND doc.platformLoginSecret == @platformLoginSecret
      LIMIT 1
      RETURN doc
    `;
    const vars = {
      ...input,
    };
    const cursor = await this.arangodb.db.query(query, vars);
    const result = await cursor.all();
    if (result?.length > 0) {
      return this.arangodb.utils.format(result[0]);
    }
  }

  async findOneByPlatformId(
    input: LoginFindOneByPlatformIdInput,
  ): Promise<Login | void> {
    const query = `
      FOR doc IN login
      FILTER doc.platform == @platform 
      AND doc.platformLoginId == @platformLoginId
      LIMIT 1
      RETURN doc
    `;
    const vars = {
      ...input,
    };
    const cursor = await this.arangodb.db.query(query, vars);
    const result = await cursor.all();
    if (result?.length > 0) {
      return this.arangodb.utils.format(result[0]);
    }
  }

  async removeOne(input: LoginRemoveOneInput): Promise<Login> {
    const found = this.arangodb.utils.format(
      await this.collection.document(input.id),
    );
    if (found) {
      await this.collection.remove(found.id);
      return found;
    }
  }

  async onModuleInit(): Promise<void> {
    try {
      await this.arangodb.db.createCollection('login', {});
      const collection = this.arangodb.db.collection('login');
      await collection.ensureIndex({
        name: 'idx-login-user',
        type: 'persistent',
        fields: ['platform', 'platformLoginId', 'platformLoginSecret'],
      });
    } catch (e) {
      if (e.message.indexOf('duplicate name') < 0) throw e;
    }
  }
}
