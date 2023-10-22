import { Injectable } from '@nestjs/common';
import { Database } from 'arangojs';
import { ArangodbUtils } from './arangodbUtils';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ArangodbService {
  db: Database;

  constructor(public utils: ArangodbUtils, private config: ConfigService) {
    this.setDb();
  }

  private setDb() {
    this.db = new Database({
      url: this.config.get('ARANGO_URL'),
      databaseName: this.config.get('ARANGO_DBNAME'),
      auth: {
        username: this.config.get('ARANGO_USERNAME'),
        password: this.config.get('ARANGO_PASSWORD'),
      },
    });
  }

  async initDb() {
    try {
      const db = new Database({
        url: this.config.get('ARANGO_URL'),
        auth: {
          username: this.config.get('ARANGO_USERNAME'),
          password: this.config.get('ARANGO_PASSWORD'),
        },
      });
      await db.createDatabase(this.config.get('ARANGO_DBNAME'));
    } catch (e) {
      if (e.message.indexOf('duplicate database name') < 0) throw e;
    } finally {
      this.setDb();
    }
  }
}
