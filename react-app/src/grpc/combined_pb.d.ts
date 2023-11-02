import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class Dummy extends jspb.Message {
  getId(): string;
  setId(value: string): Dummy;

  getCreatedat(): number;
  setCreatedat(value: number): Dummy;

  getUpdatedat(): number;
  setUpdatedat(value: number): Dummy;

  getText(): string;
  setText(value: string): Dummy;

  getIspublic(): boolean;
  setIspublic(value: boolean): Dummy;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dummy.AsObject;
  static toObject(includeInstance: boolean, msg: Dummy): Dummy.AsObject;
  static serializeBinaryToWriter(message: Dummy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dummy;
  static deserializeBinaryFromReader(message: Dummy, reader: jspb.BinaryReader): Dummy;
}

export namespace Dummy {
  export type AsObject = {
    id: string,
    createdat: number,
    updatedat: number,
    text: string,
    ispublic: boolean,
  }
}

export class DummyCreateOneInput extends jspb.Message {
  getText(): string;
  setText(value: string): DummyCreateOneInput;

  getIspublic(): boolean;
  setIspublic(value: boolean): DummyCreateOneInput;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DummyCreateOneInput.AsObject;
  static toObject(includeInstance: boolean, msg: DummyCreateOneInput): DummyCreateOneInput.AsObject;
  static serializeBinaryToWriter(message: DummyCreateOneInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DummyCreateOneInput;
  static deserializeBinaryFromReader(message: DummyCreateOneInput, reader: jspb.BinaryReader): DummyCreateOneInput;
}

export namespace DummyCreateOneInput {
  export type AsObject = {
    text: string,
    ispublic: boolean,
  }
}

export class DummyUpdateOneInput extends jspb.Message {
  getId(): string;
  setId(value: string): DummyUpdateOneInput;

  getText(): string;
  setText(value: string): DummyUpdateOneInput;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DummyUpdateOneInput.AsObject;
  static toObject(includeInstance: boolean, msg: DummyUpdateOneInput): DummyUpdateOneInput.AsObject;
  static serializeBinaryToWriter(message: DummyUpdateOneInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DummyUpdateOneInput;
  static deserializeBinaryFromReader(message: DummyUpdateOneInput, reader: jspb.BinaryReader): DummyUpdateOneInput;
}

export namespace DummyUpdateOneInput {
  export type AsObject = {
    id: string,
    text: string,
  }
}

export class DummyFindOneInput extends jspb.Message {
  getId(): string;
  setId(value: string): DummyFindOneInput;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DummyFindOneInput.AsObject;
  static toObject(includeInstance: boolean, msg: DummyFindOneInput): DummyFindOneInput.AsObject;
  static serializeBinaryToWriter(message: DummyFindOneInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DummyFindOneInput;
  static deserializeBinaryFromReader(message: DummyFindOneInput, reader: jspb.BinaryReader): DummyFindOneInput;
}

export namespace DummyFindOneInput {
  export type AsObject = {
    id: string,
  }
}

export class DummyRemoveOneInput extends jspb.Message {
  getId(): string;
  setId(value: string): DummyRemoveOneInput;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DummyRemoveOneInput.AsObject;
  static toObject(includeInstance: boolean, msg: DummyRemoveOneInput): DummyRemoveOneInput.AsObject;
  static serializeBinaryToWriter(message: DummyRemoveOneInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DummyRemoveOneInput;
  static deserializeBinaryFromReader(message: DummyRemoveOneInput, reader: jspb.BinaryReader): DummyRemoveOneInput;
}

export namespace DummyRemoveOneInput {
  export type AsObject = {
    id: string,
  }
}

export class DummySearchFilter extends jspb.Message {
  getText(): string;
  setText(value: string): DummySearchFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DummySearchFilter.AsObject;
  static toObject(includeInstance: boolean, msg: DummySearchFilter): DummySearchFilter.AsObject;
  static serializeBinaryToWriter(message: DummySearchFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DummySearchFilter;
  static deserializeBinaryFromReader(message: DummySearchFilter, reader: jspb.BinaryReader): DummySearchFilter;
}

export namespace DummySearchFilter {
  export type AsObject = {
    text: string,
  }
}

export class DummySearchOpts extends jspb.Message {
  getLimit(): number;
  setLimit(value: number): DummySearchOpts;

  getOffset(): number;
  setOffset(value: number): DummySearchOpts;

  getWaitforsync(): boolean;
  setWaitforsync(value: boolean): DummySearchOpts;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DummySearchOpts.AsObject;
  static toObject(includeInstance: boolean, msg: DummySearchOpts): DummySearchOpts.AsObject;
  static serializeBinaryToWriter(message: DummySearchOpts, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DummySearchOpts;
  static deserializeBinaryFromReader(message: DummySearchOpts, reader: jspb.BinaryReader): DummySearchOpts;
}

export namespace DummySearchOpts {
  export type AsObject = {
    limit: number,
    offset: number,
    waitforsync: boolean,
  }
}

export class DummySearchInput extends jspb.Message {
  getFilter(): DummySearchFilter | undefined;
  setFilter(value?: DummySearchFilter): DummySearchInput;
  hasFilter(): boolean;
  clearFilter(): DummySearchInput;

  getOpts(): DummySearchOpts | undefined;
  setOpts(value?: DummySearchOpts): DummySearchInput;
  hasOpts(): boolean;
  clearOpts(): DummySearchInput;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DummySearchInput.AsObject;
  static toObject(includeInstance: boolean, msg: DummySearchInput): DummySearchInput.AsObject;
  static serializeBinaryToWriter(message: DummySearchInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DummySearchInput;
  static deserializeBinaryFromReader(message: DummySearchInput, reader: jspb.BinaryReader): DummySearchInput;
}

export namespace DummySearchInput {
  export type AsObject = {
    filter?: DummySearchFilter.AsObject,
    opts?: DummySearchOpts.AsObject,
  }
}

export class DummySearchResultMeta extends jspb.Message {
  getOffset(): number;
  setOffset(value: number): DummySearchResultMeta;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DummySearchResultMeta.AsObject;
  static toObject(includeInstance: boolean, msg: DummySearchResultMeta): DummySearchResultMeta.AsObject;
  static serializeBinaryToWriter(message: DummySearchResultMeta, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DummySearchResultMeta;
  static deserializeBinaryFromReader(message: DummySearchResultMeta, reader: jspb.BinaryReader): DummySearchResultMeta;
}

export namespace DummySearchResultMeta {
  export type AsObject = {
    offset: number,
  }
}

export class DummySearchResult extends jspb.Message {
  getMeta(): DummySearchResultMeta | undefined;
  setMeta(value?: DummySearchResultMeta): DummySearchResult;
  hasMeta(): boolean;
  clearMeta(): DummySearchResult;

  getResultsList(): Array<Dummy>;
  setResultsList(value: Array<Dummy>): DummySearchResult;
  clearResultsList(): DummySearchResult;
  addResults(value?: Dummy, index?: number): Dummy;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DummySearchResult.AsObject;
  static toObject(includeInstance: boolean, msg: DummySearchResult): DummySearchResult.AsObject;
  static serializeBinaryToWriter(message: DummySearchResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DummySearchResult;
  static deserializeBinaryFromReader(message: DummySearchResult, reader: jspb.BinaryReader): DummySearchResult;
}

export namespace DummySearchResult {
  export type AsObject = {
    meta?: DummySearchResultMeta.AsObject,
    resultsList: Array<Dummy.AsObject>,
  }
}

export class DummyJobPayload extends jspb.Message {
  getId(): string;
  setId(value: string): DummyJobPayload;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DummyJobPayload.AsObject;
  static toObject(includeInstance: boolean, msg: DummyJobPayload): DummyJobPayload.AsObject;
  static serializeBinaryToWriter(message: DummyJobPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DummyJobPayload;
  static deserializeBinaryFromReader(message: DummyJobPayload, reader: jspb.BinaryReader): DummyJobPayload;
}

export namespace DummyJobPayload {
  export type AsObject = {
    id: string,
  }
}

export class PublishJobInput extends jspb.Message {
  getDummyjobpayload(): DummyJobPayload | undefined;
  setDummyjobpayload(value?: DummyJobPayload): PublishJobInput;
  hasDummyjobpayload(): boolean;
  clearDummyjobpayload(): PublishJobInput;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublishJobInput.AsObject;
  static toObject(includeInstance: boolean, msg: PublishJobInput): PublishJobInput.AsObject;
  static serializeBinaryToWriter(message: PublishJobInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublishJobInput;
  static deserializeBinaryFromReader(message: PublishJobInput, reader: jspb.BinaryReader): PublishJobInput;
}

export namespace PublishJobInput {
  export type AsObject = {
    dummyjobpayload?: DummyJobPayload.AsObject,
  }
}

export class Login extends jspb.Message {
  getId(): string;
  setId(value: string): Login;

  getCreatedat(): number;
  setCreatedat(value: number): Login;

  getUpdatedat(): number;
  setUpdatedat(value: number): Login;

  getPlatform(): string;
  setPlatform(value: string): Login;

  getPlatformloginid(): string;
  setPlatformloginid(value: string): Login;

  getPlatformloginsecret(): string;
  setPlatformloginsecret(value: string): Login;

  getUserid(): string;
  setUserid(value: string): Login;

  getIsnew(): boolean;
  setIsnew(value: boolean): Login;

  getCredentials(): Credentials | undefined;
  setCredentials(value?: Credentials): Login;
  hasCredentials(): boolean;
  clearCredentials(): Login;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Login.AsObject;
  static toObject(includeInstance: boolean, msg: Login): Login.AsObject;
  static serializeBinaryToWriter(message: Login, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Login;
  static deserializeBinaryFromReader(message: Login, reader: jspb.BinaryReader): Login;
}

export namespace Login {
  export type AsObject = {
    id: string,
    createdat: number,
    updatedat: number,
    platform: string,
    platformloginid: string,
    platformloginsecret: string,
    userid: string,
    isnew: boolean,
    credentials?: Credentials.AsObject,
  }
}

export class Credentials extends jspb.Message {
  getLocal(): LocalCredentials | undefined;
  setLocal(value?: LocalCredentials): Credentials;
  hasLocal(): boolean;
  clearLocal(): Credentials;

  getGoogle(): GoogleCredentials | undefined;
  setGoogle(value?: GoogleCredentials): Credentials;
  hasGoogle(): boolean;
  clearGoogle(): Credentials;

  getCredentialsCase(): Credentials.CredentialsCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Credentials.AsObject;
  static toObject(includeInstance: boolean, msg: Credentials): Credentials.AsObject;
  static serializeBinaryToWriter(message: Credentials, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Credentials;
  static deserializeBinaryFromReader(message: Credentials, reader: jspb.BinaryReader): Credentials;
}

export namespace Credentials {
  export type AsObject = {
    local?: LocalCredentials.AsObject,
    google?: GoogleCredentials.AsObject,
  }

  export enum CredentialsCase { 
    CREDENTIALS_NOT_SET = 0,
    LOCAL = 1,
    GOOGLE = 2,
  }
}

export class LocalCredentials extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): LocalCredentials;

  getPassword(): string;
  setPassword(value: string): LocalCredentials;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocalCredentials.AsObject;
  static toObject(includeInstance: boolean, msg: LocalCredentials): LocalCredentials.AsObject;
  static serializeBinaryToWriter(message: LocalCredentials, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocalCredentials;
  static deserializeBinaryFromReader(message: LocalCredentials, reader: jspb.BinaryReader): LocalCredentials;
}

export namespace LocalCredentials {
  export type AsObject = {
    username: string,
    password: string,
  }
}

export class GoogleCredentials extends jspb.Message {
  getId(): string;
  setId(value: string): GoogleCredentials;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GoogleCredentials.AsObject;
  static toObject(includeInstance: boolean, msg: GoogleCredentials): GoogleCredentials.AsObject;
  static serializeBinaryToWriter(message: GoogleCredentials, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GoogleCredentials;
  static deserializeBinaryFromReader(message: GoogleCredentials, reader: jspb.BinaryReader): GoogleCredentials;
}

export namespace GoogleCredentials {
  export type AsObject = {
    id: string,
  }
}

export class LoginCreateOneInput extends jspb.Message {
  getPlatform(): string;
  setPlatform(value: string): LoginCreateOneInput;

  getPlatformloginid(): string;
  setPlatformloginid(value: string): LoginCreateOneInput;

  getPlatformloginsecret(): string;
  setPlatformloginsecret(value: string): LoginCreateOneInput;

  getUserid(): string;
  setUserid(value: string): LoginCreateOneInput;

  getCredentials(): Credentials | undefined;
  setCredentials(value?: Credentials): LoginCreateOneInput;
  hasCredentials(): boolean;
  clearCredentials(): LoginCreateOneInput;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginCreateOneInput.AsObject;
  static toObject(includeInstance: boolean, msg: LoginCreateOneInput): LoginCreateOneInput.AsObject;
  static serializeBinaryToWriter(message: LoginCreateOneInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginCreateOneInput;
  static deserializeBinaryFromReader(message: LoginCreateOneInput, reader: jspb.BinaryReader): LoginCreateOneInput;
}

export namespace LoginCreateOneInput {
  export type AsObject = {
    platform: string,
    platformloginid: string,
    platformloginsecret: string,
    userid: string,
    credentials?: Credentials.AsObject,
  }
}

export class LoginUpdateOneInput extends jspb.Message {
  getId(): string;
  setId(value: string): LoginUpdateOneInput;

  getPlatform(): string;
  setPlatform(value: string): LoginUpdateOneInput;

  getPlatformloginid(): string;
  setPlatformloginid(value: string): LoginUpdateOneInput;

  getPlatformloginsecret(): string;
  setPlatformloginsecret(value: string): LoginUpdateOneInput;

  getUserid(): string;
  setUserid(value: string): LoginUpdateOneInput;

  getCredentials(): Credentials | undefined;
  setCredentials(value?: Credentials): LoginUpdateOneInput;
  hasCredentials(): boolean;
  clearCredentials(): LoginUpdateOneInput;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginUpdateOneInput.AsObject;
  static toObject(includeInstance: boolean, msg: LoginUpdateOneInput): LoginUpdateOneInput.AsObject;
  static serializeBinaryToWriter(message: LoginUpdateOneInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginUpdateOneInput;
  static deserializeBinaryFromReader(message: LoginUpdateOneInput, reader: jspb.BinaryReader): LoginUpdateOneInput;
}

export namespace LoginUpdateOneInput {
  export type AsObject = {
    id: string,
    platform: string,
    platformloginid: string,
    platformloginsecret: string,
    userid: string,
    credentials?: Credentials.AsObject,
  }
}

export class LoginFindOneInput extends jspb.Message {
  getId(): string;
  setId(value: string): LoginFindOneInput;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginFindOneInput.AsObject;
  static toObject(includeInstance: boolean, msg: LoginFindOneInput): LoginFindOneInput.AsObject;
  static serializeBinaryToWriter(message: LoginFindOneInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginFindOneInput;
  static deserializeBinaryFromReader(message: LoginFindOneInput, reader: jspb.BinaryReader): LoginFindOneInput;
}

export namespace LoginFindOneInput {
  export type AsObject = {
    id: string,
  }
}

export class LoginFindWhereInput extends jspb.Message {
  getPlatform(): string;
  setPlatform(value: string): LoginFindWhereInput;

  getPlatformloginid(): string;
  setPlatformloginid(value: string): LoginFindWhereInput;

  getPlatformloginsecret(): string;
  setPlatformloginsecret(value: string): LoginFindWhereInput;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginFindWhereInput.AsObject;
  static toObject(includeInstance: boolean, msg: LoginFindWhereInput): LoginFindWhereInput.AsObject;
  static serializeBinaryToWriter(message: LoginFindWhereInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginFindWhereInput;
  static deserializeBinaryFromReader(message: LoginFindWhereInput, reader: jspb.BinaryReader): LoginFindWhereInput;
}

export namespace LoginFindWhereInput {
  export type AsObject = {
    platform: string,
    platformloginid: string,
    platformloginsecret: string,
  }
}

export class LoginFindByPlatformIdInput extends jspb.Message {
  getPlatform(): string;
  setPlatform(value: string): LoginFindByPlatformIdInput;

  getPlatformloginid(): string;
  setPlatformloginid(value: string): LoginFindByPlatformIdInput;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginFindByPlatformIdInput.AsObject;
  static toObject(includeInstance: boolean, msg: LoginFindByPlatformIdInput): LoginFindByPlatformIdInput.AsObject;
  static serializeBinaryToWriter(message: LoginFindByPlatformIdInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginFindByPlatformIdInput;
  static deserializeBinaryFromReader(message: LoginFindByPlatformIdInput, reader: jspb.BinaryReader): LoginFindByPlatformIdInput;
}

export namespace LoginFindByPlatformIdInput {
  export type AsObject = {
    platform: string,
    platformloginid: string,
  }
}

export class LoginRemoveOneInput extends jspb.Message {
  getId(): string;
  setId(value: string): LoginRemoveOneInput;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginRemoveOneInput.AsObject;
  static toObject(includeInstance: boolean, msg: LoginRemoveOneInput): LoginRemoveOneInput.AsObject;
  static serializeBinaryToWriter(message: LoginRemoveOneInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginRemoveOneInput;
  static deserializeBinaryFromReader(message: LoginRemoveOneInput, reader: jspb.BinaryReader): LoginRemoveOneInput;
}

export namespace LoginRemoveOneInput {
  export type AsObject = {
    id: string,
  }
}

export class User extends jspb.Message {
  getId(): string;
  setId(value: string): User;

  getCreatedat(): number;
  setCreatedat(value: number): User;

  getUpdatedat(): number;
  setUpdatedat(value: number): User;

  getName(): string;
  setName(value: string): User;

  getEmail(): string;
  setEmail(value: string): User;

  getPhoto(): string;
  setPhoto(value: string): User;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User.AsObject;
  static toObject(includeInstance: boolean, msg: User): User.AsObject;
  static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): User;
  static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
  export type AsObject = {
    id: string,
    createdat: number,
    updatedat: number,
    name: string,
    email: string,
    photo: string,
  }
}

export class UserCreateOneInput extends jspb.Message {
  getName(): string;
  setName(value: string): UserCreateOneInput;

  getEmail(): string;
  setEmail(value: string): UserCreateOneInput;

  getPhoto(): string;
  setPhoto(value: string): UserCreateOneInput;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserCreateOneInput.AsObject;
  static toObject(includeInstance: boolean, msg: UserCreateOneInput): UserCreateOneInput.AsObject;
  static serializeBinaryToWriter(message: UserCreateOneInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserCreateOneInput;
  static deserializeBinaryFromReader(message: UserCreateOneInput, reader: jspb.BinaryReader): UserCreateOneInput;
}

export namespace UserCreateOneInput {
  export type AsObject = {
    name: string,
    email: string,
    photo: string,
  }
}

export class UserUpdateOneInput extends jspb.Message {
  getId(): string;
  setId(value: string): UserUpdateOneInput;

  getName(): string;
  setName(value: string): UserUpdateOneInput;

  getEmail(): string;
  setEmail(value: string): UserUpdateOneInput;

  getPhoto(): string;
  setPhoto(value: string): UserUpdateOneInput;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserUpdateOneInput.AsObject;
  static toObject(includeInstance: boolean, msg: UserUpdateOneInput): UserUpdateOneInput.AsObject;
  static serializeBinaryToWriter(message: UserUpdateOneInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserUpdateOneInput;
  static deserializeBinaryFromReader(message: UserUpdateOneInput, reader: jspb.BinaryReader): UserUpdateOneInput;
}

export namespace UserUpdateOneInput {
  export type AsObject = {
    id: string,
    name: string,
    email: string,
    photo: string,
  }
}

export class UserFindOneInput extends jspb.Message {
  getId(): string;
  setId(value: string): UserFindOneInput;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserFindOneInput.AsObject;
  static toObject(includeInstance: boolean, msg: UserFindOneInput): UserFindOneInput.AsObject;
  static serializeBinaryToWriter(message: UserFindOneInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserFindOneInput;
  static deserializeBinaryFromReader(message: UserFindOneInput, reader: jspb.BinaryReader): UserFindOneInput;
}

export namespace UserFindOneInput {
  export type AsObject = {
    id: string,
  }
}

export class UserRemoveOneInput extends jspb.Message {
  getId(): string;
  setId(value: string): UserRemoveOneInput;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserRemoveOneInput.AsObject;
  static toObject(includeInstance: boolean, msg: UserRemoveOneInput): UserRemoveOneInput.AsObject;
  static serializeBinaryToWriter(message: UserRemoveOneInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserRemoveOneInput;
  static deserializeBinaryFromReader(message: UserRemoveOneInput, reader: jspb.BinaryReader): UserRemoveOneInput;
}

export namespace UserRemoveOneInput {
  export type AsObject = {
    id: string,
  }
}

export class UserSearchFilter extends jspb.Message {
  getName(): string;
  setName(value: string): UserSearchFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserSearchFilter.AsObject;
  static toObject(includeInstance: boolean, msg: UserSearchFilter): UserSearchFilter.AsObject;
  static serializeBinaryToWriter(message: UserSearchFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserSearchFilter;
  static deserializeBinaryFromReader(message: UserSearchFilter, reader: jspb.BinaryReader): UserSearchFilter;
}

export namespace UserSearchFilter {
  export type AsObject = {
    name: string,
  }
}

export class UserSearchOpts extends jspb.Message {
  getLimit(): number;
  setLimit(value: number): UserSearchOpts;

  getOffset(): number;
  setOffset(value: number): UserSearchOpts;

  getWaitforsync(): boolean;
  setWaitforsync(value: boolean): UserSearchOpts;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserSearchOpts.AsObject;
  static toObject(includeInstance: boolean, msg: UserSearchOpts): UserSearchOpts.AsObject;
  static serializeBinaryToWriter(message: UserSearchOpts, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserSearchOpts;
  static deserializeBinaryFromReader(message: UserSearchOpts, reader: jspb.BinaryReader): UserSearchOpts;
}

export namespace UserSearchOpts {
  export type AsObject = {
    limit: number,
    offset: number,
    waitforsync: boolean,
  }
}

export class UserSearchInput extends jspb.Message {
  getFilter(): UserSearchFilter | undefined;
  setFilter(value?: UserSearchFilter): UserSearchInput;
  hasFilter(): boolean;
  clearFilter(): UserSearchInput;

  getOpts(): UserSearchOpts | undefined;
  setOpts(value?: UserSearchOpts): UserSearchInput;
  hasOpts(): boolean;
  clearOpts(): UserSearchInput;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserSearchInput.AsObject;
  static toObject(includeInstance: boolean, msg: UserSearchInput): UserSearchInput.AsObject;
  static serializeBinaryToWriter(message: UserSearchInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserSearchInput;
  static deserializeBinaryFromReader(message: UserSearchInput, reader: jspb.BinaryReader): UserSearchInput;
}

export namespace UserSearchInput {
  export type AsObject = {
    filter?: UserSearchFilter.AsObject,
    opts?: UserSearchOpts.AsObject,
  }
}

export class UserSearchResultMeta extends jspb.Message {
  getOffset(): number;
  setOffset(value: number): UserSearchResultMeta;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserSearchResultMeta.AsObject;
  static toObject(includeInstance: boolean, msg: UserSearchResultMeta): UserSearchResultMeta.AsObject;
  static serializeBinaryToWriter(message: UserSearchResultMeta, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserSearchResultMeta;
  static deserializeBinaryFromReader(message: UserSearchResultMeta, reader: jspb.BinaryReader): UserSearchResultMeta;
}

export namespace UserSearchResultMeta {
  export type AsObject = {
    offset: number,
  }
}

export class UserSearchResult extends jspb.Message {
  getMeta(): UserSearchResultMeta | undefined;
  setMeta(value?: UserSearchResultMeta): UserSearchResult;
  hasMeta(): boolean;
  clearMeta(): UserSearchResult;

  getUsersList(): Array<User>;
  setUsersList(value: Array<User>): UserSearchResult;
  clearUsersList(): UserSearchResult;
  addUsers(value?: User, index?: number): User;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserSearchResult.AsObject;
  static toObject(includeInstance: boolean, msg: UserSearchResult): UserSearchResult.AsObject;
  static serializeBinaryToWriter(message: UserSearchResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserSearchResult;
  static deserializeBinaryFromReader(message: UserSearchResult, reader: jspb.BinaryReader): UserSearchResult;
}

export namespace UserSearchResult {
  export type AsObject = {
    meta?: UserSearchResultMeta.AsObject,
    usersList: Array<User.AsObject>,
  }
}

export class HealthChekcResult extends jspb.Message {
  getOk(): boolean;
  setOk(value: boolean): HealthChekcResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HealthChekcResult.AsObject;
  static toObject(includeInstance: boolean, msg: HealthChekcResult): HealthChekcResult.AsObject;
  static serializeBinaryToWriter(message: HealthChekcResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HealthChekcResult;
  static deserializeBinaryFromReader(message: HealthChekcResult, reader: jspb.BinaryReader): HealthChekcResult;
}

export namespace HealthChekcResult {
  export type AsObject = {
    ok: boolean,
  }
}

export class IntRange extends jspb.Message {
  getMin(): number;
  setMin(value: number): IntRange;

  getMax(): number;
  setMax(value: number): IntRange;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IntRange.AsObject;
  static toObject(includeInstance: boolean, msg: IntRange): IntRange.AsObject;
  static serializeBinaryToWriter(message: IntRange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IntRange;
  static deserializeBinaryFromReader(message: IntRange, reader: jspb.BinaryReader): IntRange;
}

export namespace IntRange {
  export type AsObject = {
    min: number,
    max: number,
  }
}

export class Conversation extends jspb.Message {
  getId(): string;
  setId(value: string): Conversation;

  getCreatedat(): number;
  setCreatedat(value: number): Conversation;

  getUpdatedat(): number;
  setUpdatedat(value: number): Conversation;

  getParticipantidsList(): Array<string>;
  setParticipantidsList(value: Array<string>): Conversation;
  clearParticipantidsList(): Conversation;
  addParticipantids(value: string, index?: number): Conversation;

  getLastmessageat(): number;
  setLastmessageat(value: number): Conversation;

  getIstemp(): boolean;
  setIstemp(value: boolean): Conversation;

  getPermissionintegritywarning(): boolean;
  setPermissionintegritywarning(value: boolean): Conversation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Conversation.AsObject;
  static toObject(includeInstance: boolean, msg: Conversation): Conversation.AsObject;
  static serializeBinaryToWriter(message: Conversation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Conversation;
  static deserializeBinaryFromReader(message: Conversation, reader: jspb.BinaryReader): Conversation;
}

export namespace Conversation {
  export type AsObject = {
    id: string,
    createdat: number,
    updatedat: number,
    participantidsList: Array<string>,
    lastmessageat: number,
    istemp: boolean,
    permissionintegritywarning: boolean,
  }
}

export class ConversationCreateOneInput extends jspb.Message {
  getParticipantidsList(): Array<string>;
  setParticipantidsList(value: Array<string>): ConversationCreateOneInput;
  clearParticipantidsList(): ConversationCreateOneInput;
  addParticipantids(value: string, index?: number): ConversationCreateOneInput;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConversationCreateOneInput.AsObject;
  static toObject(includeInstance: boolean, msg: ConversationCreateOneInput): ConversationCreateOneInput.AsObject;
  static serializeBinaryToWriter(message: ConversationCreateOneInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConversationCreateOneInput;
  static deserializeBinaryFromReader(message: ConversationCreateOneInput, reader: jspb.BinaryReader): ConversationCreateOneInput;
}

export namespace ConversationCreateOneInput {
  export type AsObject = {
    participantidsList: Array<string>,
  }
}

export class ConversationUpdateOneInput extends jspb.Message {
  getId(): string;
  setId(value: string): ConversationUpdateOneInput;

  getParticipantidsList(): Array<string>;
  setParticipantidsList(value: Array<string>): ConversationUpdateOneInput;
  clearParticipantidsList(): ConversationUpdateOneInput;
  addParticipantids(value: string, index?: number): ConversationUpdateOneInput;

  getLastmessageat(): number;
  setLastmessageat(value: number): ConversationUpdateOneInput;

  getPermissionintegritywarning(): boolean;
  setPermissionintegritywarning(value: boolean): ConversationUpdateOneInput;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConversationUpdateOneInput.AsObject;
  static toObject(includeInstance: boolean, msg: ConversationUpdateOneInput): ConversationUpdateOneInput.AsObject;
  static serializeBinaryToWriter(message: ConversationUpdateOneInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConversationUpdateOneInput;
  static deserializeBinaryFromReader(message: ConversationUpdateOneInput, reader: jspb.BinaryReader): ConversationUpdateOneInput;
}

export namespace ConversationUpdateOneInput {
  export type AsObject = {
    id: string,
    participantidsList: Array<string>,
    lastmessageat: number,
    permissionintegritywarning: boolean,
  }
}

export class ConversationFindOneInput extends jspb.Message {
  getId(): string;
  setId(value: string): ConversationFindOneInput;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConversationFindOneInput.AsObject;
  static toObject(includeInstance: boolean, msg: ConversationFindOneInput): ConversationFindOneInput.AsObject;
  static serializeBinaryToWriter(message: ConversationFindOneInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConversationFindOneInput;
  static deserializeBinaryFromReader(message: ConversationFindOneInput, reader: jspb.BinaryReader): ConversationFindOneInput;
}

export namespace ConversationFindOneInput {
  export type AsObject = {
    id: string,
  }
}

export class ConversationRemoveOneInput extends jspb.Message {
  getId(): string;
  setId(value: string): ConversationRemoveOneInput;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConversationRemoveOneInput.AsObject;
  static toObject(includeInstance: boolean, msg: ConversationRemoveOneInput): ConversationRemoveOneInput.AsObject;
  static serializeBinaryToWriter(message: ConversationRemoveOneInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConversationRemoveOneInput;
  static deserializeBinaryFromReader(message: ConversationRemoveOneInput, reader: jspb.BinaryReader): ConversationRemoveOneInput;
}

export namespace ConversationRemoveOneInput {
  export type AsObject = {
    id: string,
  }
}

export class ConversationFindByParticipantFilter extends jspb.Message {
  getParticipantid(): string;
  setParticipantid(value: string): ConversationFindByParticipantFilter;

  getFromlastmessageat(): number;
  setFromlastmessageat(value: number): ConversationFindByParticipantFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConversationFindByParticipantFilter.AsObject;
  static toObject(includeInstance: boolean, msg: ConversationFindByParticipantFilter): ConversationFindByParticipantFilter.AsObject;
  static serializeBinaryToWriter(message: ConversationFindByParticipantFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConversationFindByParticipantFilter;
  static deserializeBinaryFromReader(message: ConversationFindByParticipantFilter, reader: jspb.BinaryReader): ConversationFindByParticipantFilter;
}

export namespace ConversationFindByParticipantFilter {
  export type AsObject = {
    participantid: string,
    fromlastmessageat: number,
  }
}

export class ConversationFindByParticipantOpts extends jspb.Message {
  getLimit(): number;
  setLimit(value: number): ConversationFindByParticipantOpts;

  getOffset(): number;
  setOffset(value: number): ConversationFindByParticipantOpts;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConversationFindByParticipantOpts.AsObject;
  static toObject(includeInstance: boolean, msg: ConversationFindByParticipantOpts): ConversationFindByParticipantOpts.AsObject;
  static serializeBinaryToWriter(message: ConversationFindByParticipantOpts, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConversationFindByParticipantOpts;
  static deserializeBinaryFromReader(message: ConversationFindByParticipantOpts, reader: jspb.BinaryReader): ConversationFindByParticipantOpts;
}

export namespace ConversationFindByParticipantOpts {
  export type AsObject = {
    limit: number,
    offset: number,
  }
}

export class ConversationFindByParticipantInput extends jspb.Message {
  getFilter(): ConversationFindByParticipantFilter | undefined;
  setFilter(value?: ConversationFindByParticipantFilter): ConversationFindByParticipantInput;
  hasFilter(): boolean;
  clearFilter(): ConversationFindByParticipantInput;

  getOpts(): ConversationFindByParticipantOpts | undefined;
  setOpts(value?: ConversationFindByParticipantOpts): ConversationFindByParticipantInput;
  hasOpts(): boolean;
  clearOpts(): ConversationFindByParticipantInput;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConversationFindByParticipantInput.AsObject;
  static toObject(includeInstance: boolean, msg: ConversationFindByParticipantInput): ConversationFindByParticipantInput.AsObject;
  static serializeBinaryToWriter(message: ConversationFindByParticipantInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConversationFindByParticipantInput;
  static deserializeBinaryFromReader(message: ConversationFindByParticipantInput, reader: jspb.BinaryReader): ConversationFindByParticipantInput;
}

export namespace ConversationFindByParticipantInput {
  export type AsObject = {
    filter?: ConversationFindByParticipantFilter.AsObject,
    opts?: ConversationFindByParticipantOpts.AsObject,
  }
}

export class ConversationFindByParticipantResultMeta extends jspb.Message {
  getOffset(): number;
  setOffset(value: number): ConversationFindByParticipantResultMeta;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConversationFindByParticipantResultMeta.AsObject;
  static toObject(includeInstance: boolean, msg: ConversationFindByParticipantResultMeta): ConversationFindByParticipantResultMeta.AsObject;
  static serializeBinaryToWriter(message: ConversationFindByParticipantResultMeta, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConversationFindByParticipantResultMeta;
  static deserializeBinaryFromReader(message: ConversationFindByParticipantResultMeta, reader: jspb.BinaryReader): ConversationFindByParticipantResultMeta;
}

export namespace ConversationFindByParticipantResultMeta {
  export type AsObject = {
    offset: number,
  }
}

export class ConversationFindByParticipantResult extends jspb.Message {
  getMeta(): ConversationFindByParticipantResultMeta | undefined;
  setMeta(value?: ConversationFindByParticipantResultMeta): ConversationFindByParticipantResult;
  hasMeta(): boolean;
  clearMeta(): ConversationFindByParticipantResult;

  getResultsList(): Array<Conversation>;
  setResultsList(value: Array<Conversation>): ConversationFindByParticipantResult;
  clearResultsList(): ConversationFindByParticipantResult;
  addResults(value?: Conversation, index?: number): Conversation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConversationFindByParticipantResult.AsObject;
  static toObject(includeInstance: boolean, msg: ConversationFindByParticipantResult): ConversationFindByParticipantResult.AsObject;
  static serializeBinaryToWriter(message: ConversationFindByParticipantResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConversationFindByParticipantResult;
  static deserializeBinaryFromReader(message: ConversationFindByParticipantResult, reader: jspb.BinaryReader): ConversationFindByParticipantResult;
}

export namespace ConversationFindByParticipantResult {
  export type AsObject = {
    meta?: ConversationFindByParticipantResultMeta.AsObject,
    resultsList: Array<Conversation.AsObject>,
  }
}

export class ConversationFindTempsInput extends jspb.Message {
  getMillisago(): number;
  setMillisago(value: number): ConversationFindTempsInput;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConversationFindTempsInput.AsObject;
  static toObject(includeInstance: boolean, msg: ConversationFindTempsInput): ConversationFindTempsInput.AsObject;
  static serializeBinaryToWriter(message: ConversationFindTempsInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConversationFindTempsInput;
  static deserializeBinaryFromReader(message: ConversationFindTempsInput, reader: jspb.BinaryReader): ConversationFindTempsInput;
}

export namespace ConversationFindTempsInput {
  export type AsObject = {
    millisago: number,
  }
}

export class ConversationRemoveTempsInput extends jspb.Message {
  getMillisago(): number;
  setMillisago(value: number): ConversationRemoveTempsInput;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConversationRemoveTempsInput.AsObject;
  static toObject(includeInstance: boolean, msg: ConversationRemoveTempsInput): ConversationRemoveTempsInput.AsObject;
  static serializeBinaryToWriter(message: ConversationRemoveTempsInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConversationRemoveTempsInput;
  static deserializeBinaryFromReader(message: ConversationRemoveTempsInput, reader: jspb.BinaryReader): ConversationRemoveTempsInput;
}

export namespace ConversationRemoveTempsInput {
  export type AsObject = {
    millisago: number,
  }
}

export class Message extends jspb.Message {
  getId(): string;
  setId(value: string): Message;

  getCreatedat(): number;
  setCreatedat(value: number): Message;

  getUpdatedat(): number;
  setUpdatedat(value: number): Message;

  getConversationid(): string;
  setConversationid(value: string): Message;

  getMedia(): MessageMedia | undefined;
  setMedia(value?: MessageMedia): Message;
  hasMedia(): boolean;
  clearMedia(): Message;

  getSenderid(): string;
  setSenderid(value: string): Message;

  getSenttoidsList(): Array<string>;
  setSenttoidsList(value: Array<string>): Message;
  clearSenttoidsList(): Message;
  addSenttoids(value: string, index?: number): Message;

  getReceivedbyidsList(): Array<string>;
  setReceivedbyidsList(value: Array<string>): Message;
  clearReceivedbyidsList(): Message;
  addReceivedbyids(value: string, index?: number): Message;

  getSeenbyidsList(): Array<string>;
  setSeenbyidsList(value: Array<string>): Message;
  clearSeenbyidsList(): Message;
  addSeenbyids(value: string, index?: number): Message;

  getDeleted(): boolean;
  setDeleted(value: boolean): Message;

  getUniqueness(): string;
  setUniqueness(value: string): Message;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Message.AsObject;
  static toObject(includeInstance: boolean, msg: Message): Message.AsObject;
  static serializeBinaryToWriter(message: Message, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Message;
  static deserializeBinaryFromReader(message: Message, reader: jspb.BinaryReader): Message;
}

export namespace Message {
  export type AsObject = {
    id: string,
    createdat: number,
    updatedat: number,
    conversationid: string,
    media?: MessageMedia.AsObject,
    senderid: string,
    senttoidsList: Array<string>,
    receivedbyidsList: Array<string>,
    seenbyidsList: Array<string>,
    deleted: boolean,
    uniqueness: string,
  }
}

export class MessageMedia extends jspb.Message {
  getText(): string;
  setText(value: string): MessageMedia;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MessageMedia.AsObject;
  static toObject(includeInstance: boolean, msg: MessageMedia): MessageMedia.AsObject;
  static serializeBinaryToWriter(message: MessageMedia, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MessageMedia;
  static deserializeBinaryFromReader(message: MessageMedia, reader: jspb.BinaryReader): MessageMedia;
}

export namespace MessageMedia {
  export type AsObject = {
    text: string,
  }
}

export class MessageCreateOneInput extends jspb.Message {
  getConversationid(): string;
  setConversationid(value: string): MessageCreateOneInput;

  getMedia(): MessageMedia | undefined;
  setMedia(value?: MessageMedia): MessageCreateOneInput;
  hasMedia(): boolean;
  clearMedia(): MessageCreateOneInput;

  getSenderid(): string;
  setSenderid(value: string): MessageCreateOneInput;

  getUniqueness(): string;
  setUniqueness(value: string): MessageCreateOneInput;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MessageCreateOneInput.AsObject;
  static toObject(includeInstance: boolean, msg: MessageCreateOneInput): MessageCreateOneInput.AsObject;
  static serializeBinaryToWriter(message: MessageCreateOneInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MessageCreateOneInput;
  static deserializeBinaryFromReader(message: MessageCreateOneInput, reader: jspb.BinaryReader): MessageCreateOneInput;
}

export namespace MessageCreateOneInput {
  export type AsObject = {
    conversationid: string,
    media?: MessageMedia.AsObject,
    senderid: string,
    uniqueness: string,
  }
}

export class MessageUpdateOneInput extends jspb.Message {
  getId(): string;
  setId(value: string): MessageUpdateOneInput;

  getMedia(): MessageMedia | undefined;
  setMedia(value?: MessageMedia): MessageUpdateOneInput;
  hasMedia(): boolean;
  clearMedia(): MessageUpdateOneInput;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MessageUpdateOneInput.AsObject;
  static toObject(includeInstance: boolean, msg: MessageUpdateOneInput): MessageUpdateOneInput.AsObject;
  static serializeBinaryToWriter(message: MessageUpdateOneInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MessageUpdateOneInput;
  static deserializeBinaryFromReader(message: MessageUpdateOneInput, reader: jspb.BinaryReader): MessageUpdateOneInput;
}

export namespace MessageUpdateOneInput {
  export type AsObject = {
    id: string,
    media?: MessageMedia.AsObject,
  }
}

export class MessageFindOneInput extends jspb.Message {
  getId(): string;
  setId(value: string): MessageFindOneInput;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MessageFindOneInput.AsObject;
  static toObject(includeInstance: boolean, msg: MessageFindOneInput): MessageFindOneInput.AsObject;
  static serializeBinaryToWriter(message: MessageFindOneInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MessageFindOneInput;
  static deserializeBinaryFromReader(message: MessageFindOneInput, reader: jspb.BinaryReader): MessageFindOneInput;
}

export namespace MessageFindOneInput {
  export type AsObject = {
    id: string,
  }
}

export class MessageFindUniqueInput extends jspb.Message {
  getUniqueness(): string;
  setUniqueness(value: string): MessageFindUniqueInput;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MessageFindUniqueInput.AsObject;
  static toObject(includeInstance: boolean, msg: MessageFindUniqueInput): MessageFindUniqueInput.AsObject;
  static serializeBinaryToWriter(message: MessageFindUniqueInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MessageFindUniqueInput;
  static deserializeBinaryFromReader(message: MessageFindUniqueInput, reader: jspb.BinaryReader): MessageFindUniqueInput;
}

export namespace MessageFindUniqueInput {
  export type AsObject = {
    uniqueness: string,
  }
}

export class MessageRemoveOneInput extends jspb.Message {
  getId(): string;
  setId(value: string): MessageRemoveOneInput;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MessageRemoveOneInput.AsObject;
  static toObject(includeInstance: boolean, msg: MessageRemoveOneInput): MessageRemoveOneInput.AsObject;
  static serializeBinaryToWriter(message: MessageRemoveOneInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MessageRemoveOneInput;
  static deserializeBinaryFromReader(message: MessageRemoveOneInput, reader: jspb.BinaryReader): MessageRemoveOneInput;
}

export namespace MessageRemoveOneInput {
  export type AsObject = {
    id: string,
  }
}

export class MessageFindByConversationFilter extends jspb.Message {
  getConversationid(): string;
  setConversationid(value: string): MessageFindByConversationFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MessageFindByConversationFilter.AsObject;
  static toObject(includeInstance: boolean, msg: MessageFindByConversationFilter): MessageFindByConversationFilter.AsObject;
  static serializeBinaryToWriter(message: MessageFindByConversationFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MessageFindByConversationFilter;
  static deserializeBinaryFromReader(message: MessageFindByConversationFilter, reader: jspb.BinaryReader): MessageFindByConversationFilter;
}

export namespace MessageFindByConversationFilter {
  export type AsObject = {
    conversationid: string,
  }
}

export class MessageFindByConversationOpts extends jspb.Message {
  getLimit(): number;
  setLimit(value: number): MessageFindByConversationOpts;

  getOffset(): number;
  setOffset(value: number): MessageFindByConversationOpts;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MessageFindByConversationOpts.AsObject;
  static toObject(includeInstance: boolean, msg: MessageFindByConversationOpts): MessageFindByConversationOpts.AsObject;
  static serializeBinaryToWriter(message: MessageFindByConversationOpts, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MessageFindByConversationOpts;
  static deserializeBinaryFromReader(message: MessageFindByConversationOpts, reader: jspb.BinaryReader): MessageFindByConversationOpts;
}

export namespace MessageFindByConversationOpts {
  export type AsObject = {
    limit: number,
    offset: number,
  }
}

export class MessageFindByConversationInput extends jspb.Message {
  getFilter(): MessageFindByConversationFilter | undefined;
  setFilter(value?: MessageFindByConversationFilter): MessageFindByConversationInput;
  hasFilter(): boolean;
  clearFilter(): MessageFindByConversationInput;

  getOpts(): MessageFindByConversationOpts | undefined;
  setOpts(value?: MessageFindByConversationOpts): MessageFindByConversationInput;
  hasOpts(): boolean;
  clearOpts(): MessageFindByConversationInput;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MessageFindByConversationInput.AsObject;
  static toObject(includeInstance: boolean, msg: MessageFindByConversationInput): MessageFindByConversationInput.AsObject;
  static serializeBinaryToWriter(message: MessageFindByConversationInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MessageFindByConversationInput;
  static deserializeBinaryFromReader(message: MessageFindByConversationInput, reader: jspb.BinaryReader): MessageFindByConversationInput;
}

export namespace MessageFindByConversationInput {
  export type AsObject = {
    filter?: MessageFindByConversationFilter.AsObject,
    opts?: MessageFindByConversationOpts.AsObject,
  }
}

export class MessageFindByConversationResultMeta extends jspb.Message {
  getOffset(): number;
  setOffset(value: number): MessageFindByConversationResultMeta;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MessageFindByConversationResultMeta.AsObject;
  static toObject(includeInstance: boolean, msg: MessageFindByConversationResultMeta): MessageFindByConversationResultMeta.AsObject;
  static serializeBinaryToWriter(message: MessageFindByConversationResultMeta, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MessageFindByConversationResultMeta;
  static deserializeBinaryFromReader(message: MessageFindByConversationResultMeta, reader: jspb.BinaryReader): MessageFindByConversationResultMeta;
}

export namespace MessageFindByConversationResultMeta {
  export type AsObject = {
    offset: number,
  }
}

export class MessageFindByConversationResult extends jspb.Message {
  getMeta(): MessageFindByConversationResultMeta | undefined;
  setMeta(value?: MessageFindByConversationResultMeta): MessageFindByConversationResult;
  hasMeta(): boolean;
  clearMeta(): MessageFindByConversationResult;

  getResultsList(): Array<Message>;
  setResultsList(value: Array<Message>): MessageFindByConversationResult;
  clearResultsList(): MessageFindByConversationResult;
  addResults(value?: Message, index?: number): Message;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MessageFindByConversationResult.AsObject;
  static toObject(includeInstance: boolean, msg: MessageFindByConversationResult): MessageFindByConversationResult.AsObject;
  static serializeBinaryToWriter(message: MessageFindByConversationResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MessageFindByConversationResult;
  static deserializeBinaryFromReader(message: MessageFindByConversationResult, reader: jspb.BinaryReader): MessageFindByConversationResult;
}

export namespace MessageFindByConversationResult {
  export type AsObject = {
    meta?: MessageFindByConversationResultMeta.AsObject,
    resultsList: Array<Message.AsObject>,
  }
}

export class Permission extends jspb.Message {
  getId(): string;
  setId(value: string): Permission;

  getCreatedat(): number;
  setCreatedat(value: number): Permission;

  getUpdatedat(): number;
  setUpdatedat(value: number): Permission;

  getEntity(): string;
  setEntity(value: string): Permission;

  getEntityid(): string;
  setEntityid(value: string): Permission;

  getPermittedentity(): string;
  setPermittedentity(value: string): Permission;

  getPermittedentityid(): string;
  setPermittedentityid(value: string): Permission;

  getAction(): string;
  setAction(value: string): Permission;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Permission.AsObject;
  static toObject(includeInstance: boolean, msg: Permission): Permission.AsObject;
  static serializeBinaryToWriter(message: Permission, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Permission;
  static deserializeBinaryFromReader(message: Permission, reader: jspb.BinaryReader): Permission;
}

export namespace Permission {
  export type AsObject = {
    id: string,
    createdat: number,
    updatedat: number,
    entity: string,
    entityid: string,
    permittedentity: string,
    permittedentityid: string,
    action: string,
  }
}

export class Permissions extends jspb.Message {
  getPermissionsList(): Array<Permission>;
  setPermissionsList(value: Array<Permission>): Permissions;
  clearPermissionsList(): Permissions;
  addPermissions(value?: Permission, index?: number): Permission;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Permissions.AsObject;
  static toObject(includeInstance: boolean, msg: Permissions): Permissions.AsObject;
  static serializeBinaryToWriter(message: Permissions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Permissions;
  static deserializeBinaryFromReader(message: Permissions, reader: jspb.BinaryReader): Permissions;
}

export namespace Permissions {
  export type AsObject = {
    permissionsList: Array<Permission.AsObject>,
  }
}

export class PermissionCreateOneInput extends jspb.Message {
  getEntity(): string;
  setEntity(value: string): PermissionCreateOneInput;

  getEntityid(): string;
  setEntityid(value: string): PermissionCreateOneInput;

  getPermittedentity(): string;
  setPermittedentity(value: string): PermissionCreateOneInput;

  getPermittedentityid(): string;
  setPermittedentityid(value: string): PermissionCreateOneInput;

  getAction(): string;
  setAction(value: string): PermissionCreateOneInput;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PermissionCreateOneInput.AsObject;
  static toObject(includeInstance: boolean, msg: PermissionCreateOneInput): PermissionCreateOneInput.AsObject;
  static serializeBinaryToWriter(message: PermissionCreateOneInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PermissionCreateOneInput;
  static deserializeBinaryFromReader(message: PermissionCreateOneInput, reader: jspb.BinaryReader): PermissionCreateOneInput;
}

export namespace PermissionCreateOneInput {
  export type AsObject = {
    entity: string,
    entityid: string,
    permittedentity: string,
    permittedentityid: string,
    action: string,
  }
}

export class PermissionCreateManyInput extends jspb.Message {
  getEntity(): string;
  setEntity(value: string): PermissionCreateManyInput;

  getEntityid(): string;
  setEntityid(value: string): PermissionCreateManyInput;

  getPermittedentity(): string;
  setPermittedentity(value: string): PermissionCreateManyInput;

  getPermittedentityidsList(): Array<string>;
  setPermittedentityidsList(value: Array<string>): PermissionCreateManyInput;
  clearPermittedentityidsList(): PermissionCreateManyInput;
  addPermittedentityids(value: string, index?: number): PermissionCreateManyInput;

  getAction(): string;
  setAction(value: string): PermissionCreateManyInput;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PermissionCreateManyInput.AsObject;
  static toObject(includeInstance: boolean, msg: PermissionCreateManyInput): PermissionCreateManyInput.AsObject;
  static serializeBinaryToWriter(message: PermissionCreateManyInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PermissionCreateManyInput;
  static deserializeBinaryFromReader(message: PermissionCreateManyInput, reader: jspb.BinaryReader): PermissionCreateManyInput;
}

export namespace PermissionCreateManyInput {
  export type AsObject = {
    entity: string,
    entityid: string,
    permittedentity: string,
    permittedentityidsList: Array<string>,
    action: string,
  }
}

export class PermissionFindOneInput extends jspb.Message {
  getId(): string;
  setId(value: string): PermissionFindOneInput;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PermissionFindOneInput.AsObject;
  static toObject(includeInstance: boolean, msg: PermissionFindOneInput): PermissionFindOneInput.AsObject;
  static serializeBinaryToWriter(message: PermissionFindOneInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PermissionFindOneInput;
  static deserializeBinaryFromReader(message: PermissionFindOneInput, reader: jspb.BinaryReader): PermissionFindOneInput;
}

export namespace PermissionFindOneInput {
  export type AsObject = {
    id: string,
  }
}

export class PermissionFindWhereInput extends jspb.Message {
  getEntity(): string;
  setEntity(value: string): PermissionFindWhereInput;

  getEntityid(): string;
  setEntityid(value: string): PermissionFindWhereInput;

  getPermittedentity(): string;
  setPermittedentity(value: string): PermissionFindWhereInput;

  getPermittedentityid(): string;
  setPermittedentityid(value: string): PermissionFindWhereInput;

  getAction(): string;
  setAction(value: string): PermissionFindWhereInput;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PermissionFindWhereInput.AsObject;
  static toObject(includeInstance: boolean, msg: PermissionFindWhereInput): PermissionFindWhereInput.AsObject;
  static serializeBinaryToWriter(message: PermissionFindWhereInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PermissionFindWhereInput;
  static deserializeBinaryFromReader(message: PermissionFindWhereInput, reader: jspb.BinaryReader): PermissionFindWhereInput;
}

export namespace PermissionFindWhereInput {
  export type AsObject = {
    entity: string,
    entityid: string,
    permittedentity: string,
    permittedentityid: string,
    action: string,
  }
}

export class PermissionFindWhereManyInput extends jspb.Message {
  getEntity(): string;
  setEntity(value: string): PermissionFindWhereManyInput;

  getEntityid(): string;
  setEntityid(value: string): PermissionFindWhereManyInput;

  getPermittedentity(): string;
  setPermittedentity(value: string): PermissionFindWhereManyInput;

  getPermittedentityidsList(): Array<string>;
  setPermittedentityidsList(value: Array<string>): PermissionFindWhereManyInput;
  clearPermittedentityidsList(): PermissionFindWhereManyInput;
  addPermittedentityids(value: string, index?: number): PermissionFindWhereManyInput;

  getAction(): string;
  setAction(value: string): PermissionFindWhereManyInput;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PermissionFindWhereManyInput.AsObject;
  static toObject(includeInstance: boolean, msg: PermissionFindWhereManyInput): PermissionFindWhereManyInput.AsObject;
  static serializeBinaryToWriter(message: PermissionFindWhereManyInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PermissionFindWhereManyInput;
  static deserializeBinaryFromReader(message: PermissionFindWhereManyInput, reader: jspb.BinaryReader): PermissionFindWhereManyInput;
}

export namespace PermissionFindWhereManyInput {
  export type AsObject = {
    entity: string,
    entityid: string,
    permittedentity: string,
    permittedentityidsList: Array<string>,
    action: string,
  }
}

export class PermissionFindWhereOrStarInput extends jspb.Message {
  getEntity(): string;
  setEntity(value: string): PermissionFindWhereOrStarInput;

  getEntityid(): string;
  setEntityid(value: string): PermissionFindWhereOrStarInput;

  getPermittedentity(): string;
  setPermittedentity(value: string): PermissionFindWhereOrStarInput;

  getPermittedentityid(): string;
  setPermittedentityid(value: string): PermissionFindWhereOrStarInput;

  getAction(): string;
  setAction(value: string): PermissionFindWhereOrStarInput;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PermissionFindWhereOrStarInput.AsObject;
  static toObject(includeInstance: boolean, msg: PermissionFindWhereOrStarInput): PermissionFindWhereOrStarInput.AsObject;
  static serializeBinaryToWriter(message: PermissionFindWhereOrStarInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PermissionFindWhereOrStarInput;
  static deserializeBinaryFromReader(message: PermissionFindWhereOrStarInput, reader: jspb.BinaryReader): PermissionFindWhereOrStarInput;
}

export namespace PermissionFindWhereOrStarInput {
  export type AsObject = {
    entity: string,
    entityid: string,
    permittedentity: string,
    permittedentityid: string,
    action: string,
  }
}

export class Permitted extends jspb.Message {
  getPermittedentity(): string;
  setPermittedentity(value: string): Permitted;

  getPermittedentityid(): string;
  setPermittedentityid(value: string): Permitted;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Permitted.AsObject;
  static toObject(includeInstance: boolean, msg: Permitted): Permitted.AsObject;
  static serializeBinaryToWriter(message: Permitted, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Permitted;
  static deserializeBinaryFromReader(message: Permitted, reader: jspb.BinaryReader): Permitted;
}

export namespace Permitted {
  export type AsObject = {
    permittedentity: string,
    permittedentityid: string,
  }
}

export class PermissionValidateOneInput extends jspb.Message {
  getEntity(): string;
  setEntity(value: string): PermissionValidateOneInput;

  getEntityid(): string;
  setEntityid(value: string): PermissionValidateOneInput;

  getAction(): string;
  setAction(value: string): PermissionValidateOneInput;

  getPermittedList(): Array<Permitted>;
  setPermittedList(value: Array<Permitted>): PermissionValidateOneInput;
  clearPermittedList(): PermissionValidateOneInput;
  addPermitted(value?: Permitted, index?: number): Permitted;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PermissionValidateOneInput.AsObject;
  static toObject(includeInstance: boolean, msg: PermissionValidateOneInput): PermissionValidateOneInput.AsObject;
  static serializeBinaryToWriter(message: PermissionValidateOneInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PermissionValidateOneInput;
  static deserializeBinaryFromReader(message: PermissionValidateOneInput, reader: jspb.BinaryReader): PermissionValidateOneInput;
}

export namespace PermissionValidateOneInput {
  export type AsObject = {
    entity: string,
    entityid: string,
    action: string,
    permittedList: Array<Permitted.AsObject>,
  }
}

export class PermissionValidateOneResult extends jspb.Message {
  getValidated(): boolean;
  setValidated(value: boolean): PermissionValidateOneResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PermissionValidateOneResult.AsObject;
  static toObject(includeInstance: boolean, msg: PermissionValidateOneResult): PermissionValidateOneResult.AsObject;
  static serializeBinaryToWriter(message: PermissionValidateOneResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PermissionValidateOneResult;
  static deserializeBinaryFromReader(message: PermissionValidateOneResult, reader: jspb.BinaryReader): PermissionValidateOneResult;
}

export namespace PermissionValidateOneResult {
  export type AsObject = {
    validated: boolean,
  }
}

export class PermissionRemoveOneInput extends jspb.Message {
  getId(): string;
  setId(value: string): PermissionRemoveOneInput;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PermissionRemoveOneInput.AsObject;
  static toObject(includeInstance: boolean, msg: PermissionRemoveOneInput): PermissionRemoveOneInput.AsObject;
  static serializeBinaryToWriter(message: PermissionRemoveOneInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PermissionRemoveOneInput;
  static deserializeBinaryFromReader(message: PermissionRemoveOneInput, reader: jspb.BinaryReader): PermissionRemoveOneInput;
}

export namespace PermissionRemoveOneInput {
  export type AsObject = {
    id: string,
  }
}

export class PermissionRemoveWhereInput extends jspb.Message {
  getEntity(): string;
  setEntity(value: string): PermissionRemoveWhereInput;

  getEntityid(): string;
  setEntityid(value: string): PermissionRemoveWhereInput;

  getPermittedentity(): string;
  setPermittedentity(value: string): PermissionRemoveWhereInput;

  getPermittedentityid(): string;
  setPermittedentityid(value: string): PermissionRemoveWhereInput;

  getAction(): string;
  setAction(value: string): PermissionRemoveWhereInput;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PermissionRemoveWhereInput.AsObject;
  static toObject(includeInstance: boolean, msg: PermissionRemoveWhereInput): PermissionRemoveWhereInput.AsObject;
  static serializeBinaryToWriter(message: PermissionRemoveWhereInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PermissionRemoveWhereInput;
  static deserializeBinaryFromReader(message: PermissionRemoveWhereInput, reader: jspb.BinaryReader): PermissionRemoveWhereInput;
}

export namespace PermissionRemoveWhereInput {
  export type AsObject = {
    entity: string,
    entityid: string,
    permittedentity: string,
    permittedentityid: string,
    action: string,
  }
}

export class PermissionRemoveWhereManyInput extends jspb.Message {
  getEntity(): string;
  setEntity(value: string): PermissionRemoveWhereManyInput;

  getEntityid(): string;
  setEntityid(value: string): PermissionRemoveWhereManyInput;

  getPermittedentity(): string;
  setPermittedentity(value: string): PermissionRemoveWhereManyInput;

  getPermittedentityidsList(): Array<string>;
  setPermittedentityidsList(value: Array<string>): PermissionRemoveWhereManyInput;
  clearPermittedentityidsList(): PermissionRemoveWhereManyInput;
  addPermittedentityids(value: string, index?: number): PermissionRemoveWhereManyInput;

  getAction(): string;
  setAction(value: string): PermissionRemoveWhereManyInput;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PermissionRemoveWhereManyInput.AsObject;
  static toObject(includeInstance: boolean, msg: PermissionRemoveWhereManyInput): PermissionRemoveWhereManyInput.AsObject;
  static serializeBinaryToWriter(message: PermissionRemoveWhereManyInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PermissionRemoveWhereManyInput;
  static deserializeBinaryFromReader(message: PermissionRemoveWhereManyInput, reader: jspb.BinaryReader): PermissionRemoveWhereManyInput;
}

export namespace PermissionRemoveWhereManyInput {
  export type AsObject = {
    entity: string,
    entityid: string,
    permittedentity: string,
    permittedentityidsList: Array<string>,
    action: string,
  }
}

export class PermissionFindByPermittedFilter extends jspb.Message {
  getPermittedentity(): string;
  setPermittedentity(value: string): PermissionFindByPermittedFilter;

  getPermittedentityid(): string;
  setPermittedentityid(value: string): PermissionFindByPermittedFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PermissionFindByPermittedFilter.AsObject;
  static toObject(includeInstance: boolean, msg: PermissionFindByPermittedFilter): PermissionFindByPermittedFilter.AsObject;
  static serializeBinaryToWriter(message: PermissionFindByPermittedFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PermissionFindByPermittedFilter;
  static deserializeBinaryFromReader(message: PermissionFindByPermittedFilter, reader: jspb.BinaryReader): PermissionFindByPermittedFilter;
}

export namespace PermissionFindByPermittedFilter {
  export type AsObject = {
    permittedentity: string,
    permittedentityid: string,
  }
}

export class PermissionFindByPermittedOpts extends jspb.Message {
  getLimit(): number;
  setLimit(value: number): PermissionFindByPermittedOpts;

  getOffset(): number;
  setOffset(value: number): PermissionFindByPermittedOpts;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PermissionFindByPermittedOpts.AsObject;
  static toObject(includeInstance: boolean, msg: PermissionFindByPermittedOpts): PermissionFindByPermittedOpts.AsObject;
  static serializeBinaryToWriter(message: PermissionFindByPermittedOpts, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PermissionFindByPermittedOpts;
  static deserializeBinaryFromReader(message: PermissionFindByPermittedOpts, reader: jspb.BinaryReader): PermissionFindByPermittedOpts;
}

export namespace PermissionFindByPermittedOpts {
  export type AsObject = {
    limit: number,
    offset: number,
  }
}

export class PermissionFindByPermittedInput extends jspb.Message {
  getFilter(): PermissionFindByPermittedFilter | undefined;
  setFilter(value?: PermissionFindByPermittedFilter): PermissionFindByPermittedInput;
  hasFilter(): boolean;
  clearFilter(): PermissionFindByPermittedInput;

  getOpts(): PermissionFindByPermittedOpts | undefined;
  setOpts(value?: PermissionFindByPermittedOpts): PermissionFindByPermittedInput;
  hasOpts(): boolean;
  clearOpts(): PermissionFindByPermittedInput;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PermissionFindByPermittedInput.AsObject;
  static toObject(includeInstance: boolean, msg: PermissionFindByPermittedInput): PermissionFindByPermittedInput.AsObject;
  static serializeBinaryToWriter(message: PermissionFindByPermittedInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PermissionFindByPermittedInput;
  static deserializeBinaryFromReader(message: PermissionFindByPermittedInput, reader: jspb.BinaryReader): PermissionFindByPermittedInput;
}

export namespace PermissionFindByPermittedInput {
  export type AsObject = {
    filter?: PermissionFindByPermittedFilter.AsObject,
    opts?: PermissionFindByPermittedOpts.AsObject,
  }
}

export class PermissionFindByPermittedResultMeta extends jspb.Message {
  getOffset(): number;
  setOffset(value: number): PermissionFindByPermittedResultMeta;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PermissionFindByPermittedResultMeta.AsObject;
  static toObject(includeInstance: boolean, msg: PermissionFindByPermittedResultMeta): PermissionFindByPermittedResultMeta.AsObject;
  static serializeBinaryToWriter(message: PermissionFindByPermittedResultMeta, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PermissionFindByPermittedResultMeta;
  static deserializeBinaryFromReader(message: PermissionFindByPermittedResultMeta, reader: jspb.BinaryReader): PermissionFindByPermittedResultMeta;
}

export namespace PermissionFindByPermittedResultMeta {
  export type AsObject = {
    offset: number,
  }
}

export class PermissionFindByPermittedResult extends jspb.Message {
  getMeta(): PermissionFindByPermittedResultMeta | undefined;
  setMeta(value?: PermissionFindByPermittedResultMeta): PermissionFindByPermittedResult;
  hasMeta(): boolean;
  clearMeta(): PermissionFindByPermittedResult;

  getResultsList(): Array<Permission>;
  setResultsList(value: Array<Permission>): PermissionFindByPermittedResult;
  clearResultsList(): PermissionFindByPermittedResult;
  addResults(value?: Permission, index?: number): Permission;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PermissionFindByPermittedResult.AsObject;
  static toObject(includeInstance: boolean, msg: PermissionFindByPermittedResult): PermissionFindByPermittedResult.AsObject;
  static serializeBinaryToWriter(message: PermissionFindByPermittedResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PermissionFindByPermittedResult;
  static deserializeBinaryFromReader(message: PermissionFindByPermittedResult, reader: jspb.BinaryReader): PermissionFindByPermittedResult;
}

export namespace PermissionFindByPermittedResult {
  export type AsObject = {
    meta?: PermissionFindByPermittedResultMeta.AsObject,
    resultsList: Array<Permission.AsObject>,
  }
}

export class PermissionFindByEntityFilter extends jspb.Message {
  getEntity(): string;
  setEntity(value: string): PermissionFindByEntityFilter;

  getEntityid(): string;
  setEntityid(value: string): PermissionFindByEntityFilter;

  getAction(): string;
  setAction(value: string): PermissionFindByEntityFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PermissionFindByEntityFilter.AsObject;
  static toObject(includeInstance: boolean, msg: PermissionFindByEntityFilter): PermissionFindByEntityFilter.AsObject;
  static serializeBinaryToWriter(message: PermissionFindByEntityFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PermissionFindByEntityFilter;
  static deserializeBinaryFromReader(message: PermissionFindByEntityFilter, reader: jspb.BinaryReader): PermissionFindByEntityFilter;
}

export namespace PermissionFindByEntityFilter {
  export type AsObject = {
    entity: string,
    entityid: string,
    action: string,
  }
}

export class PermissionFindByEntityOpts extends jspb.Message {
  getLimit(): number;
  setLimit(value: number): PermissionFindByEntityOpts;

  getOffset(): number;
  setOffset(value: number): PermissionFindByEntityOpts;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PermissionFindByEntityOpts.AsObject;
  static toObject(includeInstance: boolean, msg: PermissionFindByEntityOpts): PermissionFindByEntityOpts.AsObject;
  static serializeBinaryToWriter(message: PermissionFindByEntityOpts, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PermissionFindByEntityOpts;
  static deserializeBinaryFromReader(message: PermissionFindByEntityOpts, reader: jspb.BinaryReader): PermissionFindByEntityOpts;
}

export namespace PermissionFindByEntityOpts {
  export type AsObject = {
    limit: number,
    offset: number,
  }
}

export class PermissionFindByEntityInput extends jspb.Message {
  getFilter(): PermissionFindByEntityFilter | undefined;
  setFilter(value?: PermissionFindByEntityFilter): PermissionFindByEntityInput;
  hasFilter(): boolean;
  clearFilter(): PermissionFindByEntityInput;

  getOpts(): PermissionFindByEntityOpts | undefined;
  setOpts(value?: PermissionFindByEntityOpts): PermissionFindByEntityInput;
  hasOpts(): boolean;
  clearOpts(): PermissionFindByEntityInput;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PermissionFindByEntityInput.AsObject;
  static toObject(includeInstance: boolean, msg: PermissionFindByEntityInput): PermissionFindByEntityInput.AsObject;
  static serializeBinaryToWriter(message: PermissionFindByEntityInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PermissionFindByEntityInput;
  static deserializeBinaryFromReader(message: PermissionFindByEntityInput, reader: jspb.BinaryReader): PermissionFindByEntityInput;
}

export namespace PermissionFindByEntityInput {
  export type AsObject = {
    filter?: PermissionFindByEntityFilter.AsObject,
    opts?: PermissionFindByEntityOpts.AsObject,
  }
}

export class PermissionFindByEntityResultMeta extends jspb.Message {
  getOffset(): number;
  setOffset(value: number): PermissionFindByEntityResultMeta;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PermissionFindByEntityResultMeta.AsObject;
  static toObject(includeInstance: boolean, msg: PermissionFindByEntityResultMeta): PermissionFindByEntityResultMeta.AsObject;
  static serializeBinaryToWriter(message: PermissionFindByEntityResultMeta, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PermissionFindByEntityResultMeta;
  static deserializeBinaryFromReader(message: PermissionFindByEntityResultMeta, reader: jspb.BinaryReader): PermissionFindByEntityResultMeta;
}

export namespace PermissionFindByEntityResultMeta {
  export type AsObject = {
    offset: number,
  }
}

export class PermissionFindByEntityResult extends jspb.Message {
  getMeta(): PermissionFindByEntityResultMeta | undefined;
  setMeta(value?: PermissionFindByEntityResultMeta): PermissionFindByEntityResult;
  hasMeta(): boolean;
  clearMeta(): PermissionFindByEntityResult;

  getResultsList(): Array<Permission>;
  setResultsList(value: Array<Permission>): PermissionFindByEntityResult;
  clearResultsList(): PermissionFindByEntityResult;
  addResults(value?: Permission, index?: number): Permission;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PermissionFindByEntityResult.AsObject;
  static toObject(includeInstance: boolean, msg: PermissionFindByEntityResult): PermissionFindByEntityResult.AsObject;
  static serializeBinaryToWriter(message: PermissionFindByEntityResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PermissionFindByEntityResult;
  static deserializeBinaryFromReader(message: PermissionFindByEntityResult, reader: jspb.BinaryReader): PermissionFindByEntityResult;
}

export namespace PermissionFindByEntityResult {
  export type AsObject = {
    meta?: PermissionFindByEntityResultMeta.AsObject,
    resultsList: Array<Permission.AsObject>,
  }
}

export class PermissionFindAllActionsFilter extends jspb.Message {
  getEntity(): string;
  setEntity(value: string): PermissionFindAllActionsFilter;

  getEntityid(): string;
  setEntityid(value: string): PermissionFindAllActionsFilter;

  getPermittedentity(): string;
  setPermittedentity(value: string): PermissionFindAllActionsFilter;

  getPermittedentityid(): string;
  setPermittedentityid(value: string): PermissionFindAllActionsFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PermissionFindAllActionsFilter.AsObject;
  static toObject(includeInstance: boolean, msg: PermissionFindAllActionsFilter): PermissionFindAllActionsFilter.AsObject;
  static serializeBinaryToWriter(message: PermissionFindAllActionsFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PermissionFindAllActionsFilter;
  static deserializeBinaryFromReader(message: PermissionFindAllActionsFilter, reader: jspb.BinaryReader): PermissionFindAllActionsFilter;
}

export namespace PermissionFindAllActionsFilter {
  export type AsObject = {
    entity: string,
    entityid: string,
    permittedentity: string,
    permittedentityid: string,
  }
}

export class PermissionFindAllActionsOpts extends jspb.Message {
  getLimit(): number;
  setLimit(value: number): PermissionFindAllActionsOpts;

  getOffset(): number;
  setOffset(value: number): PermissionFindAllActionsOpts;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PermissionFindAllActionsOpts.AsObject;
  static toObject(includeInstance: boolean, msg: PermissionFindAllActionsOpts): PermissionFindAllActionsOpts.AsObject;
  static serializeBinaryToWriter(message: PermissionFindAllActionsOpts, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PermissionFindAllActionsOpts;
  static deserializeBinaryFromReader(message: PermissionFindAllActionsOpts, reader: jspb.BinaryReader): PermissionFindAllActionsOpts;
}

export namespace PermissionFindAllActionsOpts {
  export type AsObject = {
    limit: number,
    offset: number,
  }
}

export class PermissionFindAllActionsInput extends jspb.Message {
  getFilter(): PermissionFindAllActionsFilter | undefined;
  setFilter(value?: PermissionFindAllActionsFilter): PermissionFindAllActionsInput;
  hasFilter(): boolean;
  clearFilter(): PermissionFindAllActionsInput;

  getOpts(): PermissionFindAllActionsOpts | undefined;
  setOpts(value?: PermissionFindAllActionsOpts): PermissionFindAllActionsInput;
  hasOpts(): boolean;
  clearOpts(): PermissionFindAllActionsInput;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PermissionFindAllActionsInput.AsObject;
  static toObject(includeInstance: boolean, msg: PermissionFindAllActionsInput): PermissionFindAllActionsInput.AsObject;
  static serializeBinaryToWriter(message: PermissionFindAllActionsInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PermissionFindAllActionsInput;
  static deserializeBinaryFromReader(message: PermissionFindAllActionsInput, reader: jspb.BinaryReader): PermissionFindAllActionsInput;
}

export namespace PermissionFindAllActionsInput {
  export type AsObject = {
    filter?: PermissionFindAllActionsFilter.AsObject,
    opts?: PermissionFindAllActionsOpts.AsObject,
  }
}

export class PermissionFindAllActionsResultMeta extends jspb.Message {
  getOffset(): number;
  setOffset(value: number): PermissionFindAllActionsResultMeta;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PermissionFindAllActionsResultMeta.AsObject;
  static toObject(includeInstance: boolean, msg: PermissionFindAllActionsResultMeta): PermissionFindAllActionsResultMeta.AsObject;
  static serializeBinaryToWriter(message: PermissionFindAllActionsResultMeta, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PermissionFindAllActionsResultMeta;
  static deserializeBinaryFromReader(message: PermissionFindAllActionsResultMeta, reader: jspb.BinaryReader): PermissionFindAllActionsResultMeta;
}

export namespace PermissionFindAllActionsResultMeta {
  export type AsObject = {
    offset: number,
  }
}

export class PermissionFindAllActionsResult extends jspb.Message {
  getMeta(): PermissionFindAllActionsResultMeta | undefined;
  setMeta(value?: PermissionFindAllActionsResultMeta): PermissionFindAllActionsResult;
  hasMeta(): boolean;
  clearMeta(): PermissionFindAllActionsResult;

  getResultsList(): Array<Permission>;
  setResultsList(value: Array<Permission>): PermissionFindAllActionsResult;
  clearResultsList(): PermissionFindAllActionsResult;
  addResults(value?: Permission, index?: number): Permission;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PermissionFindAllActionsResult.AsObject;
  static toObject(includeInstance: boolean, msg: PermissionFindAllActionsResult): PermissionFindAllActionsResult.AsObject;
  static serializeBinaryToWriter(message: PermissionFindAllActionsResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PermissionFindAllActionsResult;
  static deserializeBinaryFromReader(message: PermissionFindAllActionsResult, reader: jspb.BinaryReader): PermissionFindAllActionsResult;
}

export namespace PermissionFindAllActionsResult {
  export type AsObject = {
    meta?: PermissionFindAllActionsResultMeta.AsObject,
    resultsList: Array<Permission.AsObject>,
  }
}

export class PermissionRemoveAllActionsFilter extends jspb.Message {
  getEntity(): string;
  setEntity(value: string): PermissionRemoveAllActionsFilter;

  getEntityid(): string;
  setEntityid(value: string): PermissionRemoveAllActionsFilter;

  getPermittedentity(): string;
  setPermittedentity(value: string): PermissionRemoveAllActionsFilter;

  getPermittedentityid(): string;
  setPermittedentityid(value: string): PermissionRemoveAllActionsFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PermissionRemoveAllActionsFilter.AsObject;
  static toObject(includeInstance: boolean, msg: PermissionRemoveAllActionsFilter): PermissionRemoveAllActionsFilter.AsObject;
  static serializeBinaryToWriter(message: PermissionRemoveAllActionsFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PermissionRemoveAllActionsFilter;
  static deserializeBinaryFromReader(message: PermissionRemoveAllActionsFilter, reader: jspb.BinaryReader): PermissionRemoveAllActionsFilter;
}

export namespace PermissionRemoveAllActionsFilter {
  export type AsObject = {
    entity: string,
    entityid: string,
    permittedentity: string,
    permittedentityid: string,
  }
}

export class PermissionRemoveAllActionsInput extends jspb.Message {
  getFilter(): PermissionRemoveAllActionsFilter | undefined;
  setFilter(value?: PermissionRemoveAllActionsFilter): PermissionRemoveAllActionsInput;
  hasFilter(): boolean;
  clearFilter(): PermissionRemoveAllActionsInput;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PermissionRemoveAllActionsInput.AsObject;
  static toObject(includeInstance: boolean, msg: PermissionRemoveAllActionsInput): PermissionRemoveAllActionsInput.AsObject;
  static serializeBinaryToWriter(message: PermissionRemoveAllActionsInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PermissionRemoveAllActionsInput;
  static deserializeBinaryFromReader(message: PermissionRemoveAllActionsInput, reader: jspb.BinaryReader): PermissionRemoveAllActionsInput;
}

export namespace PermissionRemoveAllActionsInput {
  export type AsObject = {
    filter?: PermissionRemoveAllActionsFilter.AsObject,
  }
}

export class UserFollowCreateOneInput extends jspb.Message {
  getFollowerid(): string;
  setFollowerid(value: string): UserFollowCreateOneInput;

  getFolloweeid(): string;
  setFolloweeid(value: string): UserFollowCreateOneInput;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserFollowCreateOneInput.AsObject;
  static toObject(includeInstance: boolean, msg: UserFollowCreateOneInput): UserFollowCreateOneInput.AsObject;
  static serializeBinaryToWriter(message: UserFollowCreateOneInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserFollowCreateOneInput;
  static deserializeBinaryFromReader(message: UserFollowCreateOneInput, reader: jspb.BinaryReader): UserFollowCreateOneInput;
}

export namespace UserFollowCreateOneInput {
  export type AsObject = {
    followerid: string,
    followeeid: string,
  }
}

export class UserFollowRemoveOneInput extends jspb.Message {
  getId(): string;
  setId(value: string): UserFollowRemoveOneInput;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserFollowRemoveOneInput.AsObject;
  static toObject(includeInstance: boolean, msg: UserFollowRemoveOneInput): UserFollowRemoveOneInput.AsObject;
  static serializeBinaryToWriter(message: UserFollowRemoveOneInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserFollowRemoveOneInput;
  static deserializeBinaryFromReader(message: UserFollowRemoveOneInput, reader: jspb.BinaryReader): UserFollowRemoveOneInput;
}

export namespace UserFollowRemoveOneInput {
  export type AsObject = {
    id: string,
  }
}

export class UserFindFollowersFilter extends jspb.Message {
  getFolloweeid(): string;
  setFolloweeid(value: string): UserFindFollowersFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserFindFollowersFilter.AsObject;
  static toObject(includeInstance: boolean, msg: UserFindFollowersFilter): UserFindFollowersFilter.AsObject;
  static serializeBinaryToWriter(message: UserFindFollowersFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserFindFollowersFilter;
  static deserializeBinaryFromReader(message: UserFindFollowersFilter, reader: jspb.BinaryReader): UserFindFollowersFilter;
}

export namespace UserFindFollowersFilter {
  export type AsObject = {
    followeeid: string,
  }
}

export class UserFindFollowersOpts extends jspb.Message {
  getLimit(): number;
  setLimit(value: number): UserFindFollowersOpts;

  getOffset(): number;
  setOffset(value: number): UserFindFollowersOpts;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserFindFollowersOpts.AsObject;
  static toObject(includeInstance: boolean, msg: UserFindFollowersOpts): UserFindFollowersOpts.AsObject;
  static serializeBinaryToWriter(message: UserFindFollowersOpts, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserFindFollowersOpts;
  static deserializeBinaryFromReader(message: UserFindFollowersOpts, reader: jspb.BinaryReader): UserFindFollowersOpts;
}

export namespace UserFindFollowersOpts {
  export type AsObject = {
    limit: number,
    offset: number,
  }
}

export class UserFindFollowersInput extends jspb.Message {
  getFilter(): UserFindFollowersFilter | undefined;
  setFilter(value?: UserFindFollowersFilter): UserFindFollowersInput;
  hasFilter(): boolean;
  clearFilter(): UserFindFollowersInput;

  getOpts(): UserFindFollowersOpts | undefined;
  setOpts(value?: UserFindFollowersOpts): UserFindFollowersInput;
  hasOpts(): boolean;
  clearOpts(): UserFindFollowersInput;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserFindFollowersInput.AsObject;
  static toObject(includeInstance: boolean, msg: UserFindFollowersInput): UserFindFollowersInput.AsObject;
  static serializeBinaryToWriter(message: UserFindFollowersInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserFindFollowersInput;
  static deserializeBinaryFromReader(message: UserFindFollowersInput, reader: jspb.BinaryReader): UserFindFollowersInput;
}

export namespace UserFindFollowersInput {
  export type AsObject = {
    filter?: UserFindFollowersFilter.AsObject,
    opts?: UserFindFollowersOpts.AsObject,
  }
}

export class UserFindFollowersResultMeta extends jspb.Message {
  getOffset(): number;
  setOffset(value: number): UserFindFollowersResultMeta;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserFindFollowersResultMeta.AsObject;
  static toObject(includeInstance: boolean, msg: UserFindFollowersResultMeta): UserFindFollowersResultMeta.AsObject;
  static serializeBinaryToWriter(message: UserFindFollowersResultMeta, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserFindFollowersResultMeta;
  static deserializeBinaryFromReader(message: UserFindFollowersResultMeta, reader: jspb.BinaryReader): UserFindFollowersResultMeta;
}

export namespace UserFindFollowersResultMeta {
  export type AsObject = {
    offset: number,
  }
}

export class UserFindFollowersResult extends jspb.Message {
  getMeta(): UserFindFollowersResultMeta | undefined;
  setMeta(value?: UserFindFollowersResultMeta): UserFindFollowersResult;
  hasMeta(): boolean;
  clearMeta(): UserFindFollowersResult;

  getFollowersList(): Array<Follower>;
  setFollowersList(value: Array<Follower>): UserFindFollowersResult;
  clearFollowersList(): UserFindFollowersResult;
  addFollowers(value?: Follower, index?: number): Follower;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserFindFollowersResult.AsObject;
  static toObject(includeInstance: boolean, msg: UserFindFollowersResult): UserFindFollowersResult.AsObject;
  static serializeBinaryToWriter(message: UserFindFollowersResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserFindFollowersResult;
  static deserializeBinaryFromReader(message: UserFindFollowersResult, reader: jspb.BinaryReader): UserFindFollowersResult;
}

export namespace UserFindFollowersResult {
  export type AsObject = {
    meta?: UserFindFollowersResultMeta.AsObject,
    followersList: Array<Follower.AsObject>,
  }
}

export class Follower extends jspb.Message {
  getId(): string;
  setId(value: string): Follower;

  getCreatedat(): number;
  setCreatedat(value: number): Follower;

  getUpdatedat(): number;
  setUpdatedat(value: number): Follower;

  getFolloweeid(): string;
  setFolloweeid(value: string): Follower;

  getFollowerid(): string;
  setFollowerid(value: string): Follower;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Follower.AsObject;
  static toObject(includeInstance: boolean, msg: Follower): Follower.AsObject;
  static serializeBinaryToWriter(message: Follower, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Follower;
  static deserializeBinaryFromReader(message: Follower, reader: jspb.BinaryReader): Follower;
}

export namespace Follower {
  export type AsObject = {
    id: string,
    createdat: number,
    updatedat: number,
    followeeid: string,
    followerid: string,
  }
}

export class UserFindFolloweesFilter extends jspb.Message {
  getFollowerid(): string;
  setFollowerid(value: string): UserFindFolloweesFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserFindFolloweesFilter.AsObject;
  static toObject(includeInstance: boolean, msg: UserFindFolloweesFilter): UserFindFolloweesFilter.AsObject;
  static serializeBinaryToWriter(message: UserFindFolloweesFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserFindFolloweesFilter;
  static deserializeBinaryFromReader(message: UserFindFolloweesFilter, reader: jspb.BinaryReader): UserFindFolloweesFilter;
}

export namespace UserFindFolloweesFilter {
  export type AsObject = {
    followerid: string,
  }
}

export class UserFindFolloweesOpts extends jspb.Message {
  getLimit(): number;
  setLimit(value: number): UserFindFolloweesOpts;

  getOffset(): number;
  setOffset(value: number): UserFindFolloweesOpts;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserFindFolloweesOpts.AsObject;
  static toObject(includeInstance: boolean, msg: UserFindFolloweesOpts): UserFindFolloweesOpts.AsObject;
  static serializeBinaryToWriter(message: UserFindFolloweesOpts, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserFindFolloweesOpts;
  static deserializeBinaryFromReader(message: UserFindFolloweesOpts, reader: jspb.BinaryReader): UserFindFolloweesOpts;
}

export namespace UserFindFolloweesOpts {
  export type AsObject = {
    limit: number,
    offset: number,
  }
}

export class UserFindFolloweesInput extends jspb.Message {
  getFilter(): UserFindFolloweesFilter | undefined;
  setFilter(value?: UserFindFolloweesFilter): UserFindFolloweesInput;
  hasFilter(): boolean;
  clearFilter(): UserFindFolloweesInput;

  getOpts(): UserFindFolloweesOpts | undefined;
  setOpts(value?: UserFindFolloweesOpts): UserFindFolloweesInput;
  hasOpts(): boolean;
  clearOpts(): UserFindFolloweesInput;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserFindFolloweesInput.AsObject;
  static toObject(includeInstance: boolean, msg: UserFindFolloweesInput): UserFindFolloweesInput.AsObject;
  static serializeBinaryToWriter(message: UserFindFolloweesInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserFindFolloweesInput;
  static deserializeBinaryFromReader(message: UserFindFolloweesInput, reader: jspb.BinaryReader): UserFindFolloweesInput;
}

export namespace UserFindFolloweesInput {
  export type AsObject = {
    filter?: UserFindFolloweesFilter.AsObject,
    opts?: UserFindFolloweesOpts.AsObject,
  }
}

export class UserFindFolloweesResultMeta extends jspb.Message {
  getOffset(): number;
  setOffset(value: number): UserFindFolloweesResultMeta;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserFindFolloweesResultMeta.AsObject;
  static toObject(includeInstance: boolean, msg: UserFindFolloweesResultMeta): UserFindFolloweesResultMeta.AsObject;
  static serializeBinaryToWriter(message: UserFindFolloweesResultMeta, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserFindFolloweesResultMeta;
  static deserializeBinaryFromReader(message: UserFindFolloweesResultMeta, reader: jspb.BinaryReader): UserFindFolloweesResultMeta;
}

export namespace UserFindFolloweesResultMeta {
  export type AsObject = {
    offset: number,
  }
}

export class UserFindFolloweesResult extends jspb.Message {
  getMeta(): UserFindFolloweesResultMeta | undefined;
  setMeta(value?: UserFindFolloweesResultMeta): UserFindFolloweesResult;
  hasMeta(): boolean;
  clearMeta(): UserFindFolloweesResult;

  getFolloweesList(): Array<Followee>;
  setFolloweesList(value: Array<Followee>): UserFindFolloweesResult;
  clearFolloweesList(): UserFindFolloweesResult;
  addFollowees(value?: Followee, index?: number): Followee;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserFindFolloweesResult.AsObject;
  static toObject(includeInstance: boolean, msg: UserFindFolloweesResult): UserFindFolloweesResult.AsObject;
  static serializeBinaryToWriter(message: UserFindFolloweesResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserFindFolloweesResult;
  static deserializeBinaryFromReader(message: UserFindFolloweesResult, reader: jspb.BinaryReader): UserFindFolloweesResult;
}

export namespace UserFindFolloweesResult {
  export type AsObject = {
    meta?: UserFindFolloweesResultMeta.AsObject,
    followeesList: Array<Followee.AsObject>,
  }
}

export class Followee extends jspb.Message {
  getId(): string;
  setId(value: string): Followee;

  getCreatedat(): number;
  setCreatedat(value: number): Followee;

  getUpdatedat(): number;
  setUpdatedat(value: number): Followee;

  getFollowerid(): string;
  setFollowerid(value: string): Followee;

  getFolloweeid(): string;
  setFolloweeid(value: string): Followee;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Followee.AsObject;
  static toObject(includeInstance: boolean, msg: Followee): Followee.AsObject;
  static serializeBinaryToWriter(message: Followee, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Followee;
  static deserializeBinaryFromReader(message: Followee, reader: jspb.BinaryReader): Followee;
}

export namespace Followee {
  export type AsObject = {
    id: string,
    createdat: number,
    updatedat: number,
    followerid: string,
    followeeid: string,
  }
}

export class PublishJobResult extends jspb.Message {
  getJobid(): string;
  setJobid(value: string): PublishJobResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublishJobResult.AsObject;
  static toObject(includeInstance: boolean, msg: PublishJobResult): PublishJobResult.AsObject;
  static serializeBinaryToWriter(message: PublishJobResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublishJobResult;
  static deserializeBinaryFromReader(message: PublishJobResult, reader: jspb.BinaryReader): PublishJobResult;
}

export namespace PublishJobResult {
  export type AsObject = {
    jobid: string,
  }
}

export class WorkersHealthCheckResult extends jspb.Message {
  getOk(): boolean;
  setOk(value: boolean): WorkersHealthCheckResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorkersHealthCheckResult.AsObject;
  static toObject(includeInstance: boolean, msg: WorkersHealthCheckResult): WorkersHealthCheckResult.AsObject;
  static serializeBinaryToWriter(message: WorkersHealthCheckResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorkersHealthCheckResult;
  static deserializeBinaryFromReader(message: WorkersHealthCheckResult, reader: jspb.BinaryReader): WorkersHealthCheckResult;
}

export namespace WorkersHealthCheckResult {
  export type AsObject = {
    ok: boolean,
  }
}

export enum Maturity { 
  SKELETON = 0,
  DRAFT = 1,
  SOLID = 2,
}
