import { Empty } from './google/protobuf/empty';
export interface DummyCreateOneInput {
  text: string;
  isPublic: boolean;
}

export interface Dummy {
  id: string;
  createdAt: number;
  updatedAt: number;
  text: string;
  isPublic: boolean;
}

export interface DummyUpdateOneInput {
  id: string;
  text: string;
}

export interface DummyFindOneInput {
  id: string;
}

export interface DummyRemoveOneInput {
  id: string;
}

export interface DummySearchInput {
  filter: DummySearchFilter | undefined;
  opts: DummySearchOpts | undefined;
}

export interface DummySearchFilter {
  text: string;
}

export interface DummySearchOpts {
  limit: number;
  offset: number;
  waitForSync: boolean;
}

export interface DummySearchResult {
  meta: DummySearchResultMeta | undefined;
  results: Dummy[];
}

export interface DummySearchResultMeta {
  offset: number;
}

import { postToUnary } from './utils';

export class DummyService {
  private readonly serviceName: string = 'DummyService';

  async createOne(data: Partial<DummyCreateOneInput>): Promise<Dummy> {
    return postToUnary<Dummy>(this.serviceName, 'createOne', data);
  }

  async updateOne(data: Partial<DummyUpdateOneInput>): Promise<Dummy> {
    return postToUnary<Dummy>(this.serviceName, 'updateOne', data);
  }

  async findOne(data: Partial<DummyFindOneInput>): Promise<Dummy> {
    return postToUnary<Dummy>(this.serviceName, 'findOne', data);
  }

  async removeOne(data: Partial<DummyRemoveOneInput>): Promise<Empty> {
    return postToUnary<Empty>(this.serviceName, 'removeOne', data);
  }

  async search(data: Partial<DummySearchInput>): Promise<DummySearchResult> {
    return postToUnary<DummySearchResult>(this.serviceName, 'search', data);
  }
}
