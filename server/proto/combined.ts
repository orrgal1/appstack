/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Empty } from "./google/protobuf/empty";
import Long = require("long");

export const protobufPackage = "main";

export enum Maturity {
  Skeleton = 0,
  Draft = 1,
  Solid = 2,
  UNRECOGNIZED = -1,
}

export function maturityFromJSON(object: any): Maturity {
  switch (object) {
    case 0:
    case "Skeleton":
      return Maturity.Skeleton;
    case 1:
    case "Draft":
      return Maturity.Draft;
    case 2:
    case "Solid":
      return Maturity.Solid;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Maturity.UNRECOGNIZED;
  }
}

export function maturityToJSON(object: Maturity): string {
  switch (object) {
    case Maturity.Skeleton:
      return "Skeleton";
    case Maturity.Draft:
      return "Draft";
    case Maturity.Solid:
      return "Solid";
    case Maturity.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Dummy {
  id: string;
  createdAt: number;
  updatedAt: number;
  text: string;
}

export interface DummyCreateOneInput {
  text: string;
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

export interface DummySearchFilter {
  text: string;
}

export interface DummySearchOpts {
  limit: number;
  offset: number;
  waitForSync: boolean;
}

export interface DummySearchInput {
  filter: DummySearchFilter | undefined;
  opts: DummySearchOpts | undefined;
}

export interface DummySearchResultMeta {
  offset: number;
}

export interface DummySearchResult {
  meta: DummySearchResultMeta | undefined;
  results: Dummy[];
}

export interface Login {
  id: string;
  createdAt: number;
  updatedAt: number;
  platform: string;
  platformLoginId: string;
  platformLoginSecret: string;
  userId: string;
  isNew: boolean;
  credentials: Credentials | undefined;
}

export interface Credentials {
  local?: LocalCredentials | undefined;
  google?: GoogleCredentials | undefined;
}

export interface LocalCredentials {
  username: string;
  password: string;
}

export interface GoogleCredentials {
  id: string;
}

export interface LoginCreateOneInput {
  platform: string;
  platformLoginId: string;
  platformLoginSecret: string;
  userId: string;
  credentials: Credentials | undefined;
}

export interface LoginUpdateOneInput {
  id: string;
  platform: string;
  platformLoginId: string;
  platformLoginSecret: string;
  userId: string;
  credentials: Credentials | undefined;
}

export interface LoginFindOneInput {
  id: string;
}

export interface LoginFindWhereInput {
  platform: string;
  platformLoginId: string;
  platformLoginSecret: string;
}

export interface LoginFindByPlatformIdInput {
  platform: string;
  platformLoginId: string;
}

export interface LoginRemoveOneInput {
  id: string;
}

export interface Permission {
  id: string;
  createdAt: number;
  updatedAt: number;
  entity: string;
  entityId: string;
  permittedEntity: string;
  permittedEntityId: string;
  action: string;
}

export interface PermissionCreateOneInput {
  entity: string;
  entityId: string;
  permittedEntity: string;
  permittedEntityId: string;
  action: string;
}

export interface PermissionFindOneInput {
  id: string;
}

export interface PermissionFindWhereInput {
  entity: string;
  entityId: string;
  permittedEntity: string;
  permittedEntityId: string;
  action: string;
}

export interface PermissionFindWhereOrStarInput {
  entity: string;
  entityId: string;
  permittedEntity: string;
  permittedEntityId: string;
  action: string;
}

export interface Permitted {
  permittedEntity: string;
  permittedEntityId: string;
}

export interface PermissionValidateOneInput {
  entity: string;
  entityId: string;
  action: string;
  permitted: Permitted[];
}

export interface PermissionValidateOneResult {
  validated: boolean;
}

export interface PermissionRemoveOneInput {
  id: string;
}

export interface PermissionRemoveWhereInput {
  entity: string;
  entityId: string;
  permittedEntity: string;
  permittedEntityId: string;
  action: string;
}

export interface PermissionFindByPermittedFilter {
  permittedEntity: string;
  permittedEntityId: string;
}

export interface PermissionFindByPermittedOpts {
  limit: number;
  offset: number;
}

export interface PermissionFindByPermittedInput {
  filter: PermissionFindByPermittedFilter | undefined;
  opts: PermissionFindByPermittedOpts | undefined;
}

export interface PermissionFindByPermittedResultMeta {
  offset: number;
}

export interface PermissionFindByPermittedResult {
  meta: PermissionFindByPermittedResultMeta | undefined;
  results: Permission[];
}

export interface PermissionFindAllActionsFilter {
  entity: string;
  entityId: string;
  permittedEntity: string;
  permittedEntityId: string;
}

export interface PermissionFindAllActionsOpts {
  limit: number;
  offset: number;
}

export interface PermissionFindAllActionsInput {
  filter: PermissionFindAllActionsFilter | undefined;
  opts: PermissionFindAllActionsOpts | undefined;
}

export interface PermissionFindAllActionsResultMeta {
  offset: number;
}

export interface PermissionFindAllActionsResult {
  meta: PermissionFindAllActionsResultMeta | undefined;
  results: Permission[];
}

export interface PermissionRemoveAllActionsFilter {
  entity: string;
  entityId: string;
  permittedEntity: string;
  permittedEntityId: string;
}

export interface PermissionRemoveAllActionsInput {
  filter: PermissionRemoveAllActionsFilter | undefined;
}

export interface UserFollowCreateOneInput {
  followerId: string;
  followeeId: string;
}

export interface UserFollowRemoveOneInput {
  id: string;
}

export interface UserFindFollowersFilter {
  followeeId: string;
}

export interface UserFindFollowersOpts {
  limit: number;
  offset: number;
}

export interface UserFindFollowersInput {
  filter: UserFindFollowersFilter | undefined;
  opts: UserFindFollowersOpts | undefined;
}

export interface UserFindFollowersResultMeta {
  offset: number;
}

export interface UserFindFollowersResult {
  meta: UserFindFollowersResultMeta | undefined;
  followers: Follower[];
}

export interface Follower {
  id: string;
  createdAt: number;
  updatedAt: number;
  followeeId: string;
  followerId: string;
}

export interface UserFindFolloweesFilter {
  followerId: string;
}

export interface UserFindFolloweesOpts {
  limit: number;
  offset: number;
}

export interface UserFindFolloweesInput {
  filter: UserFindFolloweesFilter | undefined;
  opts: UserFindFolloweesOpts | undefined;
}

export interface UserFindFolloweesResultMeta {
  offset: number;
}

export interface UserFindFolloweesResult {
  meta: UserFindFolloweesResultMeta | undefined;
  followees: Followee[];
}

export interface Followee {
  id: string;
  createdAt: number;
  updatedAt: number;
  followerId: string;
  followeeId: string;
}

export interface User {
  id: string;
  createdAt: number;
  updatedAt: number;
  name: string;
  email: string;
  photo: string;
}

export interface UserCreateOneInput {
  name: string;
  email: string;
  photo: string;
}

export interface UserUpdateOneInput {
  id: string;
  name: string;
  email: string;
  photo: string;
}

export interface UserFindOneInput {
  id: string;
}

export interface UserRemoveOneInput {
  id: string;
}

export interface UserSearchFilter {
  name: string;
}

export interface UserSearchOpts {
  limit: number;
  offset: number;
  waitForSync: boolean;
}

export interface UserSearchInput {
  filter: UserSearchFilter | undefined;
  opts: UserSearchOpts | undefined;
}

export interface UserSearchResultMeta {
  offset: number;
}

export interface UserSearchResult {
  meta: UserSearchResultMeta | undefined;
  users: User[];
}

export interface Conversation {
  id: string;
  createdAt: number;
  updatedAt: number;
  participantIds: string[];
  lastMessageAt: number;
}

export interface ConversationCreateOneInput {
  participantIds: string[];
}

export interface ConversationUpdateOneInput {
  id: string;
  participantIds: string[];
  lastMessageAt: number;
}

export interface ConversationFindOneInput {
  id: string;
}

export interface ConversationRemoveOneInput {
  id: string;
}

export interface ConversationFindByParticipantFilter {
  participantId: string;
  fromLastMessageAt: number;
}

export interface ConversationFindByParticipantOpts {
  limit: number;
  offset: number;
}

export interface ConversationFindByParticipantInput {
  filter: ConversationFindByParticipantFilter | undefined;
  opts: ConversationFindByParticipantOpts | undefined;
}

export interface ConversationFindByParticipantResultMeta {
  offset: number;
}

export interface ConversationFindByParticipantResult {
  meta: ConversationFindByParticipantResultMeta | undefined;
  results: Conversation[];
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

export interface MessageMedia {
  text: string;
}

export interface MessageCreateOneInput {
  conversationId: string;
  media: MessageMedia | undefined;
  senderId: string;
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

export interface MessageFindByConversationFilter {
  conversationId: string;
}

export interface MessageFindByConversationOpts {
  limit: number;
  offset: number;
}

export interface MessageFindByConversationInput {
  filter: MessageFindByConversationFilter | undefined;
  opts: MessageFindByConversationOpts | undefined;
}

export interface MessageFindByConversationResultMeta {
  offset: number;
}

export interface MessageFindByConversationResult {
  meta: MessageFindByConversationResultMeta | undefined;
  results: Message[];
}

export interface IntRange {
  min: number;
  max: number;
}

export interface DummyJobPayload {
  id: string;
}

export interface PublishJobInput {
  dummyJobPayload: DummyJobPayload | undefined;
}

export interface PublishJobResult {
  jobId: string;
}

function createBaseDummy(): Dummy {
  return { id: "", createdAt: 0, updatedAt: 0, text: "" };
}

export const Dummy = {
  encode(message: Dummy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.createdAt !== 0) {
      writer.uint32(16).uint64(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      writer.uint32(24).uint64(message.updatedAt);
    }
    if (message.text !== "") {
      writer.uint32(34).string(message.text);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Dummy {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDummy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.createdAt = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.updatedAt = longToNumber(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.text = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Dummy {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      createdAt: isSet(object.createdAt) ? Number(object.createdAt) : 0,
      updatedAt: isSet(object.updatedAt) ? Number(object.updatedAt) : 0,
      text: isSet(object.text) ? String(object.text) : "",
    };
  },

  toJSON(message: Dummy): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.createdAt !== 0) {
      obj.createdAt = Math.round(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      obj.updatedAt = Math.round(message.updatedAt);
    }
    if (message.text !== "") {
      obj.text = message.text;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Dummy>, I>>(base?: I): Dummy {
    return Dummy.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Dummy>, I>>(object: I): Dummy {
    const message = createBaseDummy();
    message.id = object.id ?? "";
    message.createdAt = object.createdAt ?? 0;
    message.updatedAt = object.updatedAt ?? 0;
    message.text = object.text ?? "";
    return message;
  },
};

function createBaseDummyCreateOneInput(): DummyCreateOneInput {
  return { text: "" };
}

export const DummyCreateOneInput = {
  encode(message: DummyCreateOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.text !== "") {
      writer.uint32(18).string(message.text);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DummyCreateOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDummyCreateOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.text = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DummyCreateOneInput {
    return { text: isSet(object.text) ? String(object.text) : "" };
  },

  toJSON(message: DummyCreateOneInput): unknown {
    const obj: any = {};
    if (message.text !== "") {
      obj.text = message.text;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DummyCreateOneInput>, I>>(base?: I): DummyCreateOneInput {
    return DummyCreateOneInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DummyCreateOneInput>, I>>(object: I): DummyCreateOneInput {
    const message = createBaseDummyCreateOneInput();
    message.text = object.text ?? "";
    return message;
  },
};

function createBaseDummyUpdateOneInput(): DummyUpdateOneInput {
  return { id: "", text: "" };
}

export const DummyUpdateOneInput = {
  encode(message: DummyUpdateOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.text !== "") {
      writer.uint32(18).string(message.text);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DummyUpdateOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDummyUpdateOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.text = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DummyUpdateOneInput {
    return { id: isSet(object.id) ? String(object.id) : "", text: isSet(object.text) ? String(object.text) : "" };
  },

  toJSON(message: DummyUpdateOneInput): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.text !== "") {
      obj.text = message.text;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DummyUpdateOneInput>, I>>(base?: I): DummyUpdateOneInput {
    return DummyUpdateOneInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DummyUpdateOneInput>, I>>(object: I): DummyUpdateOneInput {
    const message = createBaseDummyUpdateOneInput();
    message.id = object.id ?? "";
    message.text = object.text ?? "";
    return message;
  },
};

function createBaseDummyFindOneInput(): DummyFindOneInput {
  return { id: "" };
}

export const DummyFindOneInput = {
  encode(message: DummyFindOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DummyFindOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDummyFindOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DummyFindOneInput {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: DummyFindOneInput): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DummyFindOneInput>, I>>(base?: I): DummyFindOneInput {
    return DummyFindOneInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DummyFindOneInput>, I>>(object: I): DummyFindOneInput {
    const message = createBaseDummyFindOneInput();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseDummyRemoveOneInput(): DummyRemoveOneInput {
  return { id: "" };
}

export const DummyRemoveOneInput = {
  encode(message: DummyRemoveOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DummyRemoveOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDummyRemoveOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DummyRemoveOneInput {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: DummyRemoveOneInput): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DummyRemoveOneInput>, I>>(base?: I): DummyRemoveOneInput {
    return DummyRemoveOneInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DummyRemoveOneInput>, I>>(object: I): DummyRemoveOneInput {
    const message = createBaseDummyRemoveOneInput();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseDummySearchFilter(): DummySearchFilter {
  return { text: "" };
}

export const DummySearchFilter = {
  encode(message: DummySearchFilter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.text !== "") {
      writer.uint32(10).string(message.text);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DummySearchFilter {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDummySearchFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.text = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DummySearchFilter {
    return { text: isSet(object.text) ? String(object.text) : "" };
  },

  toJSON(message: DummySearchFilter): unknown {
    const obj: any = {};
    if (message.text !== "") {
      obj.text = message.text;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DummySearchFilter>, I>>(base?: I): DummySearchFilter {
    return DummySearchFilter.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DummySearchFilter>, I>>(object: I): DummySearchFilter {
    const message = createBaseDummySearchFilter();
    message.text = object.text ?? "";
    return message;
  },
};

function createBaseDummySearchOpts(): DummySearchOpts {
  return { limit: 0, offset: 0, waitForSync: false };
}

export const DummySearchOpts = {
  encode(message: DummySearchOpts, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.limit !== 0) {
      writer.uint32(8).uint64(message.limit);
    }
    if (message.offset !== 0) {
      writer.uint32(16).uint64(message.offset);
    }
    if (message.waitForSync === true) {
      writer.uint32(24).bool(message.waitForSync);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DummySearchOpts {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDummySearchOpts();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.limit = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.offset = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.waitForSync = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DummySearchOpts {
    return {
      limit: isSet(object.limit) ? Number(object.limit) : 0,
      offset: isSet(object.offset) ? Number(object.offset) : 0,
      waitForSync: isSet(object.waitForSync) ? Boolean(object.waitForSync) : false,
    };
  },

  toJSON(message: DummySearchOpts): unknown {
    const obj: any = {};
    if (message.limit !== 0) {
      obj.limit = Math.round(message.limit);
    }
    if (message.offset !== 0) {
      obj.offset = Math.round(message.offset);
    }
    if (message.waitForSync === true) {
      obj.waitForSync = message.waitForSync;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DummySearchOpts>, I>>(base?: I): DummySearchOpts {
    return DummySearchOpts.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DummySearchOpts>, I>>(object: I): DummySearchOpts {
    const message = createBaseDummySearchOpts();
    message.limit = object.limit ?? 0;
    message.offset = object.offset ?? 0;
    message.waitForSync = object.waitForSync ?? false;
    return message;
  },
};

function createBaseDummySearchInput(): DummySearchInput {
  return { filter: undefined, opts: undefined };
}

export const DummySearchInput = {
  encode(message: DummySearchInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.filter !== undefined) {
      DummySearchFilter.encode(message.filter, writer.uint32(10).fork()).ldelim();
    }
    if (message.opts !== undefined) {
      DummySearchOpts.encode(message.opts, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DummySearchInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDummySearchInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.filter = DummySearchFilter.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.opts = DummySearchOpts.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DummySearchInput {
    return {
      filter: isSet(object.filter) ? DummySearchFilter.fromJSON(object.filter) : undefined,
      opts: isSet(object.opts) ? DummySearchOpts.fromJSON(object.opts) : undefined,
    };
  },

  toJSON(message: DummySearchInput): unknown {
    const obj: any = {};
    if (message.filter !== undefined) {
      obj.filter = DummySearchFilter.toJSON(message.filter);
    }
    if (message.opts !== undefined) {
      obj.opts = DummySearchOpts.toJSON(message.opts);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DummySearchInput>, I>>(base?: I): DummySearchInput {
    return DummySearchInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DummySearchInput>, I>>(object: I): DummySearchInput {
    const message = createBaseDummySearchInput();
    message.filter = (object.filter !== undefined && object.filter !== null)
      ? DummySearchFilter.fromPartial(object.filter)
      : undefined;
    message.opts = (object.opts !== undefined && object.opts !== null)
      ? DummySearchOpts.fromPartial(object.opts)
      : undefined;
    return message;
  },
};

function createBaseDummySearchResultMeta(): DummySearchResultMeta {
  return { offset: 0 };
}

export const DummySearchResultMeta = {
  encode(message: DummySearchResultMeta, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.offset !== 0) {
      writer.uint32(8).uint64(message.offset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DummySearchResultMeta {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDummySearchResultMeta();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.offset = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DummySearchResultMeta {
    return { offset: isSet(object.offset) ? Number(object.offset) : 0 };
  },

  toJSON(message: DummySearchResultMeta): unknown {
    const obj: any = {};
    if (message.offset !== 0) {
      obj.offset = Math.round(message.offset);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DummySearchResultMeta>, I>>(base?: I): DummySearchResultMeta {
    return DummySearchResultMeta.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DummySearchResultMeta>, I>>(object: I): DummySearchResultMeta {
    const message = createBaseDummySearchResultMeta();
    message.offset = object.offset ?? 0;
    return message;
  },
};

function createBaseDummySearchResult(): DummySearchResult {
  return { meta: undefined, results: [] };
}

export const DummySearchResult = {
  encode(message: DummySearchResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.meta !== undefined) {
      DummySearchResultMeta.encode(message.meta, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.results) {
      Dummy.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DummySearchResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDummySearchResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.meta = DummySearchResultMeta.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.results.push(Dummy.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DummySearchResult {
    return {
      meta: isSet(object.meta) ? DummySearchResultMeta.fromJSON(object.meta) : undefined,
      results: Array.isArray(object?.results) ? object.results.map((e: any) => Dummy.fromJSON(e)) : [],
    };
  },

  toJSON(message: DummySearchResult): unknown {
    const obj: any = {};
    if (message.meta !== undefined) {
      obj.meta = DummySearchResultMeta.toJSON(message.meta);
    }
    if (message.results?.length) {
      obj.results = message.results.map((e) => Dummy.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DummySearchResult>, I>>(base?: I): DummySearchResult {
    return DummySearchResult.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DummySearchResult>, I>>(object: I): DummySearchResult {
    const message = createBaseDummySearchResult();
    message.meta = (object.meta !== undefined && object.meta !== null)
      ? DummySearchResultMeta.fromPartial(object.meta)
      : undefined;
    message.results = object.results?.map((e) => Dummy.fromPartial(e)) || [];
    return message;
  },
};

function createBaseLogin(): Login {
  return {
    id: "",
    createdAt: 0,
    updatedAt: 0,
    platform: "",
    platformLoginId: "",
    platformLoginSecret: "",
    userId: "",
    isNew: false,
    credentials: undefined,
  };
}

export const Login = {
  encode(message: Login, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.createdAt !== 0) {
      writer.uint32(16).uint64(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      writer.uint32(24).uint64(message.updatedAt);
    }
    if (message.platform !== "") {
      writer.uint32(34).string(message.platform);
    }
    if (message.platformLoginId !== "") {
      writer.uint32(42).string(message.platformLoginId);
    }
    if (message.platformLoginSecret !== "") {
      writer.uint32(50).string(message.platformLoginSecret);
    }
    if (message.userId !== "") {
      writer.uint32(58).string(message.userId);
    }
    if (message.isNew === true) {
      writer.uint32(64).bool(message.isNew);
    }
    if (message.credentials !== undefined) {
      Credentials.encode(message.credentials, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Login {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLogin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.createdAt = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.updatedAt = longToNumber(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.platform = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.platformLoginId = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.platformLoginSecret = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.userId = reader.string();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.isNew = reader.bool();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.credentials = Credentials.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Login {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      createdAt: isSet(object.createdAt) ? Number(object.createdAt) : 0,
      updatedAt: isSet(object.updatedAt) ? Number(object.updatedAt) : 0,
      platform: isSet(object.platform) ? String(object.platform) : "",
      platformLoginId: isSet(object.platformLoginId) ? String(object.platformLoginId) : "",
      platformLoginSecret: isSet(object.platformLoginSecret) ? String(object.platformLoginSecret) : "",
      userId: isSet(object.userId) ? String(object.userId) : "",
      isNew: isSet(object.isNew) ? Boolean(object.isNew) : false,
      credentials: isSet(object.credentials) ? Credentials.fromJSON(object.credentials) : undefined,
    };
  },

  toJSON(message: Login): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.createdAt !== 0) {
      obj.createdAt = Math.round(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      obj.updatedAt = Math.round(message.updatedAt);
    }
    if (message.platform !== "") {
      obj.platform = message.platform;
    }
    if (message.platformLoginId !== "") {
      obj.platformLoginId = message.platformLoginId;
    }
    if (message.platformLoginSecret !== "") {
      obj.platformLoginSecret = message.platformLoginSecret;
    }
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.isNew === true) {
      obj.isNew = message.isNew;
    }
    if (message.credentials !== undefined) {
      obj.credentials = Credentials.toJSON(message.credentials);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Login>, I>>(base?: I): Login {
    return Login.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Login>, I>>(object: I): Login {
    const message = createBaseLogin();
    message.id = object.id ?? "";
    message.createdAt = object.createdAt ?? 0;
    message.updatedAt = object.updatedAt ?? 0;
    message.platform = object.platform ?? "";
    message.platformLoginId = object.platformLoginId ?? "";
    message.platformLoginSecret = object.platformLoginSecret ?? "";
    message.userId = object.userId ?? "";
    message.isNew = object.isNew ?? false;
    message.credentials = (object.credentials !== undefined && object.credentials !== null)
      ? Credentials.fromPartial(object.credentials)
      : undefined;
    return message;
  },
};

function createBaseCredentials(): Credentials {
  return { local: undefined, google: undefined };
}

export const Credentials = {
  encode(message: Credentials, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.local !== undefined) {
      LocalCredentials.encode(message.local, writer.uint32(10).fork()).ldelim();
    }
    if (message.google !== undefined) {
      GoogleCredentials.encode(message.google, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Credentials {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCredentials();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.local = LocalCredentials.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.google = GoogleCredentials.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Credentials {
    return {
      local: isSet(object.local) ? LocalCredentials.fromJSON(object.local) : undefined,
      google: isSet(object.google) ? GoogleCredentials.fromJSON(object.google) : undefined,
    };
  },

  toJSON(message: Credentials): unknown {
    const obj: any = {};
    if (message.local !== undefined) {
      obj.local = LocalCredentials.toJSON(message.local);
    }
    if (message.google !== undefined) {
      obj.google = GoogleCredentials.toJSON(message.google);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Credentials>, I>>(base?: I): Credentials {
    return Credentials.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Credentials>, I>>(object: I): Credentials {
    const message = createBaseCredentials();
    message.local = (object.local !== undefined && object.local !== null)
      ? LocalCredentials.fromPartial(object.local)
      : undefined;
    message.google = (object.google !== undefined && object.google !== null)
      ? GoogleCredentials.fromPartial(object.google)
      : undefined;
    return message;
  },
};

function createBaseLocalCredentials(): LocalCredentials {
  return { username: "", password: "" };
}

export const LocalCredentials = {
  encode(message: LocalCredentials, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.username !== "") {
      writer.uint32(10).string(message.username);
    }
    if (message.password !== "") {
      writer.uint32(18).string(message.password);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LocalCredentials {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLocalCredentials();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.username = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.password = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LocalCredentials {
    return {
      username: isSet(object.username) ? String(object.username) : "",
      password: isSet(object.password) ? String(object.password) : "",
    };
  },

  toJSON(message: LocalCredentials): unknown {
    const obj: any = {};
    if (message.username !== "") {
      obj.username = message.username;
    }
    if (message.password !== "") {
      obj.password = message.password;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LocalCredentials>, I>>(base?: I): LocalCredentials {
    return LocalCredentials.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<LocalCredentials>, I>>(object: I): LocalCredentials {
    const message = createBaseLocalCredentials();
    message.username = object.username ?? "";
    message.password = object.password ?? "";
    return message;
  },
};

function createBaseGoogleCredentials(): GoogleCredentials {
  return { id: "" };
}

export const GoogleCredentials = {
  encode(message: GoogleCredentials, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GoogleCredentials {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGoogleCredentials();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GoogleCredentials {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: GoogleCredentials): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GoogleCredentials>, I>>(base?: I): GoogleCredentials {
    return GoogleCredentials.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GoogleCredentials>, I>>(object: I): GoogleCredentials {
    const message = createBaseGoogleCredentials();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseLoginCreateOneInput(): LoginCreateOneInput {
  return { platform: "", platformLoginId: "", platformLoginSecret: "", userId: "", credentials: undefined };
}

export const LoginCreateOneInput = {
  encode(message: LoginCreateOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.platform !== "") {
      writer.uint32(34).string(message.platform);
    }
    if (message.platformLoginId !== "") {
      writer.uint32(42).string(message.platformLoginId);
    }
    if (message.platformLoginSecret !== "") {
      writer.uint32(50).string(message.platformLoginSecret);
    }
    if (message.userId !== "") {
      writer.uint32(58).string(message.userId);
    }
    if (message.credentials !== undefined) {
      Credentials.encode(message.credentials, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LoginCreateOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoginCreateOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 4:
          if (tag !== 34) {
            break;
          }

          message.platform = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.platformLoginId = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.platformLoginSecret = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.userId = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.credentials = Credentials.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LoginCreateOneInput {
    return {
      platform: isSet(object.platform) ? String(object.platform) : "",
      platformLoginId: isSet(object.platformLoginId) ? String(object.platformLoginId) : "",
      platformLoginSecret: isSet(object.platformLoginSecret) ? String(object.platformLoginSecret) : "",
      userId: isSet(object.userId) ? String(object.userId) : "",
      credentials: isSet(object.credentials) ? Credentials.fromJSON(object.credentials) : undefined,
    };
  },

  toJSON(message: LoginCreateOneInput): unknown {
    const obj: any = {};
    if (message.platform !== "") {
      obj.platform = message.platform;
    }
    if (message.platformLoginId !== "") {
      obj.platformLoginId = message.platformLoginId;
    }
    if (message.platformLoginSecret !== "") {
      obj.platformLoginSecret = message.platformLoginSecret;
    }
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.credentials !== undefined) {
      obj.credentials = Credentials.toJSON(message.credentials);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LoginCreateOneInput>, I>>(base?: I): LoginCreateOneInput {
    return LoginCreateOneInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<LoginCreateOneInput>, I>>(object: I): LoginCreateOneInput {
    const message = createBaseLoginCreateOneInput();
    message.platform = object.platform ?? "";
    message.platformLoginId = object.platformLoginId ?? "";
    message.platformLoginSecret = object.platformLoginSecret ?? "";
    message.userId = object.userId ?? "";
    message.credentials = (object.credentials !== undefined && object.credentials !== null)
      ? Credentials.fromPartial(object.credentials)
      : undefined;
    return message;
  },
};

function createBaseLoginUpdateOneInput(): LoginUpdateOneInput {
  return { id: "", platform: "", platformLoginId: "", platformLoginSecret: "", userId: "", credentials: undefined };
}

export const LoginUpdateOneInput = {
  encode(message: LoginUpdateOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.platform !== "") {
      writer.uint32(34).string(message.platform);
    }
    if (message.platformLoginId !== "") {
      writer.uint32(42).string(message.platformLoginId);
    }
    if (message.platformLoginSecret !== "") {
      writer.uint32(50).string(message.platformLoginSecret);
    }
    if (message.userId !== "") {
      writer.uint32(58).string(message.userId);
    }
    if (message.credentials !== undefined) {
      Credentials.encode(message.credentials, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LoginUpdateOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoginUpdateOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.platform = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.platformLoginId = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.platformLoginSecret = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.userId = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.credentials = Credentials.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LoginUpdateOneInput {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      platform: isSet(object.platform) ? String(object.platform) : "",
      platformLoginId: isSet(object.platformLoginId) ? String(object.platformLoginId) : "",
      platformLoginSecret: isSet(object.platformLoginSecret) ? String(object.platformLoginSecret) : "",
      userId: isSet(object.userId) ? String(object.userId) : "",
      credentials: isSet(object.credentials) ? Credentials.fromJSON(object.credentials) : undefined,
    };
  },

  toJSON(message: LoginUpdateOneInput): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.platform !== "") {
      obj.platform = message.platform;
    }
    if (message.platformLoginId !== "") {
      obj.platformLoginId = message.platformLoginId;
    }
    if (message.platformLoginSecret !== "") {
      obj.platformLoginSecret = message.platformLoginSecret;
    }
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.credentials !== undefined) {
      obj.credentials = Credentials.toJSON(message.credentials);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LoginUpdateOneInput>, I>>(base?: I): LoginUpdateOneInput {
    return LoginUpdateOneInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<LoginUpdateOneInput>, I>>(object: I): LoginUpdateOneInput {
    const message = createBaseLoginUpdateOneInput();
    message.id = object.id ?? "";
    message.platform = object.platform ?? "";
    message.platformLoginId = object.platformLoginId ?? "";
    message.platformLoginSecret = object.platformLoginSecret ?? "";
    message.userId = object.userId ?? "";
    message.credentials = (object.credentials !== undefined && object.credentials !== null)
      ? Credentials.fromPartial(object.credentials)
      : undefined;
    return message;
  },
};

function createBaseLoginFindOneInput(): LoginFindOneInput {
  return { id: "" };
}

export const LoginFindOneInput = {
  encode(message: LoginFindOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LoginFindOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoginFindOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LoginFindOneInput {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: LoginFindOneInput): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LoginFindOneInput>, I>>(base?: I): LoginFindOneInput {
    return LoginFindOneInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<LoginFindOneInput>, I>>(object: I): LoginFindOneInput {
    const message = createBaseLoginFindOneInput();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseLoginFindWhereInput(): LoginFindWhereInput {
  return { platform: "", platformLoginId: "", platformLoginSecret: "" };
}

export const LoginFindWhereInput = {
  encode(message: LoginFindWhereInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.platform !== "") {
      writer.uint32(10).string(message.platform);
    }
    if (message.platformLoginId !== "") {
      writer.uint32(18).string(message.platformLoginId);
    }
    if (message.platformLoginSecret !== "") {
      writer.uint32(26).string(message.platformLoginSecret);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LoginFindWhereInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoginFindWhereInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.platform = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.platformLoginId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.platformLoginSecret = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LoginFindWhereInput {
    return {
      platform: isSet(object.platform) ? String(object.platform) : "",
      platformLoginId: isSet(object.platformLoginId) ? String(object.platformLoginId) : "",
      platformLoginSecret: isSet(object.platformLoginSecret) ? String(object.platformLoginSecret) : "",
    };
  },

  toJSON(message: LoginFindWhereInput): unknown {
    const obj: any = {};
    if (message.platform !== "") {
      obj.platform = message.platform;
    }
    if (message.platformLoginId !== "") {
      obj.platformLoginId = message.platformLoginId;
    }
    if (message.platformLoginSecret !== "") {
      obj.platformLoginSecret = message.platformLoginSecret;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LoginFindWhereInput>, I>>(base?: I): LoginFindWhereInput {
    return LoginFindWhereInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<LoginFindWhereInput>, I>>(object: I): LoginFindWhereInput {
    const message = createBaseLoginFindWhereInput();
    message.platform = object.platform ?? "";
    message.platformLoginId = object.platformLoginId ?? "";
    message.platformLoginSecret = object.platformLoginSecret ?? "";
    return message;
  },
};

function createBaseLoginFindByPlatformIdInput(): LoginFindByPlatformIdInput {
  return { platform: "", platformLoginId: "" };
}

export const LoginFindByPlatformIdInput = {
  encode(message: LoginFindByPlatformIdInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.platform !== "") {
      writer.uint32(10).string(message.platform);
    }
    if (message.platformLoginId !== "") {
      writer.uint32(18).string(message.platformLoginId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LoginFindByPlatformIdInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoginFindByPlatformIdInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.platform = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.platformLoginId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LoginFindByPlatformIdInput {
    return {
      platform: isSet(object.platform) ? String(object.platform) : "",
      platformLoginId: isSet(object.platformLoginId) ? String(object.platformLoginId) : "",
    };
  },

  toJSON(message: LoginFindByPlatformIdInput): unknown {
    const obj: any = {};
    if (message.platform !== "") {
      obj.platform = message.platform;
    }
    if (message.platformLoginId !== "") {
      obj.platformLoginId = message.platformLoginId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LoginFindByPlatformIdInput>, I>>(base?: I): LoginFindByPlatformIdInput {
    return LoginFindByPlatformIdInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<LoginFindByPlatformIdInput>, I>>(object: I): LoginFindByPlatformIdInput {
    const message = createBaseLoginFindByPlatformIdInput();
    message.platform = object.platform ?? "";
    message.platformLoginId = object.platformLoginId ?? "";
    return message;
  },
};

function createBaseLoginRemoveOneInput(): LoginRemoveOneInput {
  return { id: "" };
}

export const LoginRemoveOneInput = {
  encode(message: LoginRemoveOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LoginRemoveOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoginRemoveOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LoginRemoveOneInput {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: LoginRemoveOneInput): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LoginRemoveOneInput>, I>>(base?: I): LoginRemoveOneInput {
    return LoginRemoveOneInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<LoginRemoveOneInput>, I>>(object: I): LoginRemoveOneInput {
    const message = createBaseLoginRemoveOneInput();
    message.id = object.id ?? "";
    return message;
  },
};

function createBasePermission(): Permission {
  return {
    id: "",
    createdAt: 0,
    updatedAt: 0,
    entity: "",
    entityId: "",
    permittedEntity: "",
    permittedEntityId: "",
    action: "",
  };
}

export const Permission = {
  encode(message: Permission, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.createdAt !== 0) {
      writer.uint32(16).uint64(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      writer.uint32(24).uint64(message.updatedAt);
    }
    if (message.entity !== "") {
      writer.uint32(34).string(message.entity);
    }
    if (message.entityId !== "") {
      writer.uint32(42).string(message.entityId);
    }
    if (message.permittedEntity !== "") {
      writer.uint32(50).string(message.permittedEntity);
    }
    if (message.permittedEntityId !== "") {
      writer.uint32(58).string(message.permittedEntityId);
    }
    if (message.action !== "") {
      writer.uint32(66).string(message.action);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Permission {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermission();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.createdAt = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.updatedAt = longToNumber(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.entity = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.entityId = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.permittedEntity = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.permittedEntityId = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.action = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Permission {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      createdAt: isSet(object.createdAt) ? Number(object.createdAt) : 0,
      updatedAt: isSet(object.updatedAt) ? Number(object.updatedAt) : 0,
      entity: isSet(object.entity) ? String(object.entity) : "",
      entityId: isSet(object.entityId) ? String(object.entityId) : "",
      permittedEntity: isSet(object.permittedEntity) ? String(object.permittedEntity) : "",
      permittedEntityId: isSet(object.permittedEntityId) ? String(object.permittedEntityId) : "",
      action: isSet(object.action) ? String(object.action) : "",
    };
  },

  toJSON(message: Permission): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.createdAt !== 0) {
      obj.createdAt = Math.round(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      obj.updatedAt = Math.round(message.updatedAt);
    }
    if (message.entity !== "") {
      obj.entity = message.entity;
    }
    if (message.entityId !== "") {
      obj.entityId = message.entityId;
    }
    if (message.permittedEntity !== "") {
      obj.permittedEntity = message.permittedEntity;
    }
    if (message.permittedEntityId !== "") {
      obj.permittedEntityId = message.permittedEntityId;
    }
    if (message.action !== "") {
      obj.action = message.action;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Permission>, I>>(base?: I): Permission {
    return Permission.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Permission>, I>>(object: I): Permission {
    const message = createBasePermission();
    message.id = object.id ?? "";
    message.createdAt = object.createdAt ?? 0;
    message.updatedAt = object.updatedAt ?? 0;
    message.entity = object.entity ?? "";
    message.entityId = object.entityId ?? "";
    message.permittedEntity = object.permittedEntity ?? "";
    message.permittedEntityId = object.permittedEntityId ?? "";
    message.action = object.action ?? "";
    return message;
  },
};

function createBasePermissionCreateOneInput(): PermissionCreateOneInput {
  return { entity: "", entityId: "", permittedEntity: "", permittedEntityId: "", action: "" };
}

export const PermissionCreateOneInput = {
  encode(message: PermissionCreateOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entity !== "") {
      writer.uint32(34).string(message.entity);
    }
    if (message.entityId !== "") {
      writer.uint32(42).string(message.entityId);
    }
    if (message.permittedEntity !== "") {
      writer.uint32(50).string(message.permittedEntity);
    }
    if (message.permittedEntityId !== "") {
      writer.uint32(58).string(message.permittedEntityId);
    }
    if (message.action !== "") {
      writer.uint32(66).string(message.action);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionCreateOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionCreateOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 4:
          if (tag !== 34) {
            break;
          }

          message.entity = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.entityId = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.permittedEntity = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.permittedEntityId = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.action = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionCreateOneInput {
    return {
      entity: isSet(object.entity) ? String(object.entity) : "",
      entityId: isSet(object.entityId) ? String(object.entityId) : "",
      permittedEntity: isSet(object.permittedEntity) ? String(object.permittedEntity) : "",
      permittedEntityId: isSet(object.permittedEntityId) ? String(object.permittedEntityId) : "",
      action: isSet(object.action) ? String(object.action) : "",
    };
  },

  toJSON(message: PermissionCreateOneInput): unknown {
    const obj: any = {};
    if (message.entity !== "") {
      obj.entity = message.entity;
    }
    if (message.entityId !== "") {
      obj.entityId = message.entityId;
    }
    if (message.permittedEntity !== "") {
      obj.permittedEntity = message.permittedEntity;
    }
    if (message.permittedEntityId !== "") {
      obj.permittedEntityId = message.permittedEntityId;
    }
    if (message.action !== "") {
      obj.action = message.action;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PermissionCreateOneInput>, I>>(base?: I): PermissionCreateOneInput {
    return PermissionCreateOneInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PermissionCreateOneInput>, I>>(object: I): PermissionCreateOneInput {
    const message = createBasePermissionCreateOneInput();
    message.entity = object.entity ?? "";
    message.entityId = object.entityId ?? "";
    message.permittedEntity = object.permittedEntity ?? "";
    message.permittedEntityId = object.permittedEntityId ?? "";
    message.action = object.action ?? "";
    return message;
  },
};

function createBasePermissionFindOneInput(): PermissionFindOneInput {
  return { id: "" };
}

export const PermissionFindOneInput = {
  encode(message: PermissionFindOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionFindOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionFindOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionFindOneInput {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: PermissionFindOneInput): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PermissionFindOneInput>, I>>(base?: I): PermissionFindOneInput {
    return PermissionFindOneInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PermissionFindOneInput>, I>>(object: I): PermissionFindOneInput {
    const message = createBasePermissionFindOneInput();
    message.id = object.id ?? "";
    return message;
  },
};

function createBasePermissionFindWhereInput(): PermissionFindWhereInput {
  return { entity: "", entityId: "", permittedEntity: "", permittedEntityId: "", action: "" };
}

export const PermissionFindWhereInput = {
  encode(message: PermissionFindWhereInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entity !== "") {
      writer.uint32(10).string(message.entity);
    }
    if (message.entityId !== "") {
      writer.uint32(18).string(message.entityId);
    }
    if (message.permittedEntity !== "") {
      writer.uint32(26).string(message.permittedEntity);
    }
    if (message.permittedEntityId !== "") {
      writer.uint32(34).string(message.permittedEntityId);
    }
    if (message.action !== "") {
      writer.uint32(42).string(message.action);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionFindWhereInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionFindWhereInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.entity = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.entityId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.permittedEntity = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.permittedEntityId = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.action = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionFindWhereInput {
    return {
      entity: isSet(object.entity) ? String(object.entity) : "",
      entityId: isSet(object.entityId) ? String(object.entityId) : "",
      permittedEntity: isSet(object.permittedEntity) ? String(object.permittedEntity) : "",
      permittedEntityId: isSet(object.permittedEntityId) ? String(object.permittedEntityId) : "",
      action: isSet(object.action) ? String(object.action) : "",
    };
  },

  toJSON(message: PermissionFindWhereInput): unknown {
    const obj: any = {};
    if (message.entity !== "") {
      obj.entity = message.entity;
    }
    if (message.entityId !== "") {
      obj.entityId = message.entityId;
    }
    if (message.permittedEntity !== "") {
      obj.permittedEntity = message.permittedEntity;
    }
    if (message.permittedEntityId !== "") {
      obj.permittedEntityId = message.permittedEntityId;
    }
    if (message.action !== "") {
      obj.action = message.action;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PermissionFindWhereInput>, I>>(base?: I): PermissionFindWhereInput {
    return PermissionFindWhereInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PermissionFindWhereInput>, I>>(object: I): PermissionFindWhereInput {
    const message = createBasePermissionFindWhereInput();
    message.entity = object.entity ?? "";
    message.entityId = object.entityId ?? "";
    message.permittedEntity = object.permittedEntity ?? "";
    message.permittedEntityId = object.permittedEntityId ?? "";
    message.action = object.action ?? "";
    return message;
  },
};

function createBasePermissionFindWhereOrStarInput(): PermissionFindWhereOrStarInput {
  return { entity: "", entityId: "", permittedEntity: "", permittedEntityId: "", action: "" };
}

export const PermissionFindWhereOrStarInput = {
  encode(message: PermissionFindWhereOrStarInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entity !== "") {
      writer.uint32(10).string(message.entity);
    }
    if (message.entityId !== "") {
      writer.uint32(18).string(message.entityId);
    }
    if (message.permittedEntity !== "") {
      writer.uint32(26).string(message.permittedEntity);
    }
    if (message.permittedEntityId !== "") {
      writer.uint32(34).string(message.permittedEntityId);
    }
    if (message.action !== "") {
      writer.uint32(42).string(message.action);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionFindWhereOrStarInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionFindWhereOrStarInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.entity = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.entityId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.permittedEntity = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.permittedEntityId = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.action = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionFindWhereOrStarInput {
    return {
      entity: isSet(object.entity) ? String(object.entity) : "",
      entityId: isSet(object.entityId) ? String(object.entityId) : "",
      permittedEntity: isSet(object.permittedEntity) ? String(object.permittedEntity) : "",
      permittedEntityId: isSet(object.permittedEntityId) ? String(object.permittedEntityId) : "",
      action: isSet(object.action) ? String(object.action) : "",
    };
  },

  toJSON(message: PermissionFindWhereOrStarInput): unknown {
    const obj: any = {};
    if (message.entity !== "") {
      obj.entity = message.entity;
    }
    if (message.entityId !== "") {
      obj.entityId = message.entityId;
    }
    if (message.permittedEntity !== "") {
      obj.permittedEntity = message.permittedEntity;
    }
    if (message.permittedEntityId !== "") {
      obj.permittedEntityId = message.permittedEntityId;
    }
    if (message.action !== "") {
      obj.action = message.action;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PermissionFindWhereOrStarInput>, I>>(base?: I): PermissionFindWhereOrStarInput {
    return PermissionFindWhereOrStarInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PermissionFindWhereOrStarInput>, I>>(
    object: I,
  ): PermissionFindWhereOrStarInput {
    const message = createBasePermissionFindWhereOrStarInput();
    message.entity = object.entity ?? "";
    message.entityId = object.entityId ?? "";
    message.permittedEntity = object.permittedEntity ?? "";
    message.permittedEntityId = object.permittedEntityId ?? "";
    message.action = object.action ?? "";
    return message;
  },
};

function createBasePermitted(): Permitted {
  return { permittedEntity: "", permittedEntityId: "" };
}

export const Permitted = {
  encode(message: Permitted, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.permittedEntity !== "") {
      writer.uint32(10).string(message.permittedEntity);
    }
    if (message.permittedEntityId !== "") {
      writer.uint32(18).string(message.permittedEntityId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Permitted {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermitted();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.permittedEntity = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.permittedEntityId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Permitted {
    return {
      permittedEntity: isSet(object.permittedEntity) ? String(object.permittedEntity) : "",
      permittedEntityId: isSet(object.permittedEntityId) ? String(object.permittedEntityId) : "",
    };
  },

  toJSON(message: Permitted): unknown {
    const obj: any = {};
    if (message.permittedEntity !== "") {
      obj.permittedEntity = message.permittedEntity;
    }
    if (message.permittedEntityId !== "") {
      obj.permittedEntityId = message.permittedEntityId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Permitted>, I>>(base?: I): Permitted {
    return Permitted.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Permitted>, I>>(object: I): Permitted {
    const message = createBasePermitted();
    message.permittedEntity = object.permittedEntity ?? "";
    message.permittedEntityId = object.permittedEntityId ?? "";
    return message;
  },
};

function createBasePermissionValidateOneInput(): PermissionValidateOneInput {
  return { entity: "", entityId: "", action: "", permitted: [] };
}

export const PermissionValidateOneInput = {
  encode(message: PermissionValidateOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entity !== "") {
      writer.uint32(10).string(message.entity);
    }
    if (message.entityId !== "") {
      writer.uint32(18).string(message.entityId);
    }
    if (message.action !== "") {
      writer.uint32(26).string(message.action);
    }
    for (const v of message.permitted) {
      Permitted.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionValidateOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionValidateOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.entity = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.entityId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.action = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.permitted.push(Permitted.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionValidateOneInput {
    return {
      entity: isSet(object.entity) ? String(object.entity) : "",
      entityId: isSet(object.entityId) ? String(object.entityId) : "",
      action: isSet(object.action) ? String(object.action) : "",
      permitted: Array.isArray(object?.permitted) ? object.permitted.map((e: any) => Permitted.fromJSON(e)) : [],
    };
  },

  toJSON(message: PermissionValidateOneInput): unknown {
    const obj: any = {};
    if (message.entity !== "") {
      obj.entity = message.entity;
    }
    if (message.entityId !== "") {
      obj.entityId = message.entityId;
    }
    if (message.action !== "") {
      obj.action = message.action;
    }
    if (message.permitted?.length) {
      obj.permitted = message.permitted.map((e) => Permitted.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PermissionValidateOneInput>, I>>(base?: I): PermissionValidateOneInput {
    return PermissionValidateOneInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PermissionValidateOneInput>, I>>(object: I): PermissionValidateOneInput {
    const message = createBasePermissionValidateOneInput();
    message.entity = object.entity ?? "";
    message.entityId = object.entityId ?? "";
    message.action = object.action ?? "";
    message.permitted = object.permitted?.map((e) => Permitted.fromPartial(e)) || [];
    return message;
  },
};

function createBasePermissionValidateOneResult(): PermissionValidateOneResult {
  return { validated: false };
}

export const PermissionValidateOneResult = {
  encode(message: PermissionValidateOneResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validated === true) {
      writer.uint32(8).bool(message.validated);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionValidateOneResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionValidateOneResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.validated = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionValidateOneResult {
    return { validated: isSet(object.validated) ? Boolean(object.validated) : false };
  },

  toJSON(message: PermissionValidateOneResult): unknown {
    const obj: any = {};
    if (message.validated === true) {
      obj.validated = message.validated;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PermissionValidateOneResult>, I>>(base?: I): PermissionValidateOneResult {
    return PermissionValidateOneResult.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PermissionValidateOneResult>, I>>(object: I): PermissionValidateOneResult {
    const message = createBasePermissionValidateOneResult();
    message.validated = object.validated ?? false;
    return message;
  },
};

function createBasePermissionRemoveOneInput(): PermissionRemoveOneInput {
  return { id: "" };
}

export const PermissionRemoveOneInput = {
  encode(message: PermissionRemoveOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionRemoveOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionRemoveOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionRemoveOneInput {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: PermissionRemoveOneInput): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PermissionRemoveOneInput>, I>>(base?: I): PermissionRemoveOneInput {
    return PermissionRemoveOneInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PermissionRemoveOneInput>, I>>(object: I): PermissionRemoveOneInput {
    const message = createBasePermissionRemoveOneInput();
    message.id = object.id ?? "";
    return message;
  },
};

function createBasePermissionRemoveWhereInput(): PermissionRemoveWhereInput {
  return { entity: "", entityId: "", permittedEntity: "", permittedEntityId: "", action: "" };
}

export const PermissionRemoveWhereInput = {
  encode(message: PermissionRemoveWhereInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entity !== "") {
      writer.uint32(10).string(message.entity);
    }
    if (message.entityId !== "") {
      writer.uint32(18).string(message.entityId);
    }
    if (message.permittedEntity !== "") {
      writer.uint32(26).string(message.permittedEntity);
    }
    if (message.permittedEntityId !== "") {
      writer.uint32(34).string(message.permittedEntityId);
    }
    if (message.action !== "") {
      writer.uint32(42).string(message.action);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionRemoveWhereInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionRemoveWhereInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.entity = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.entityId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.permittedEntity = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.permittedEntityId = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.action = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionRemoveWhereInput {
    return {
      entity: isSet(object.entity) ? String(object.entity) : "",
      entityId: isSet(object.entityId) ? String(object.entityId) : "",
      permittedEntity: isSet(object.permittedEntity) ? String(object.permittedEntity) : "",
      permittedEntityId: isSet(object.permittedEntityId) ? String(object.permittedEntityId) : "",
      action: isSet(object.action) ? String(object.action) : "",
    };
  },

  toJSON(message: PermissionRemoveWhereInput): unknown {
    const obj: any = {};
    if (message.entity !== "") {
      obj.entity = message.entity;
    }
    if (message.entityId !== "") {
      obj.entityId = message.entityId;
    }
    if (message.permittedEntity !== "") {
      obj.permittedEntity = message.permittedEntity;
    }
    if (message.permittedEntityId !== "") {
      obj.permittedEntityId = message.permittedEntityId;
    }
    if (message.action !== "") {
      obj.action = message.action;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PermissionRemoveWhereInput>, I>>(base?: I): PermissionRemoveWhereInput {
    return PermissionRemoveWhereInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PermissionRemoveWhereInput>, I>>(object: I): PermissionRemoveWhereInput {
    const message = createBasePermissionRemoveWhereInput();
    message.entity = object.entity ?? "";
    message.entityId = object.entityId ?? "";
    message.permittedEntity = object.permittedEntity ?? "";
    message.permittedEntityId = object.permittedEntityId ?? "";
    message.action = object.action ?? "";
    return message;
  },
};

function createBasePermissionFindByPermittedFilter(): PermissionFindByPermittedFilter {
  return { permittedEntity: "", permittedEntityId: "" };
}

export const PermissionFindByPermittedFilter = {
  encode(message: PermissionFindByPermittedFilter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.permittedEntity !== "") {
      writer.uint32(50).string(message.permittedEntity);
    }
    if (message.permittedEntityId !== "") {
      writer.uint32(58).string(message.permittedEntityId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionFindByPermittedFilter {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionFindByPermittedFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 6:
          if (tag !== 50) {
            break;
          }

          message.permittedEntity = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.permittedEntityId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionFindByPermittedFilter {
    return {
      permittedEntity: isSet(object.permittedEntity) ? String(object.permittedEntity) : "",
      permittedEntityId: isSet(object.permittedEntityId) ? String(object.permittedEntityId) : "",
    };
  },

  toJSON(message: PermissionFindByPermittedFilter): unknown {
    const obj: any = {};
    if (message.permittedEntity !== "") {
      obj.permittedEntity = message.permittedEntity;
    }
    if (message.permittedEntityId !== "") {
      obj.permittedEntityId = message.permittedEntityId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PermissionFindByPermittedFilter>, I>>(base?: I): PermissionFindByPermittedFilter {
    return PermissionFindByPermittedFilter.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PermissionFindByPermittedFilter>, I>>(
    object: I,
  ): PermissionFindByPermittedFilter {
    const message = createBasePermissionFindByPermittedFilter();
    message.permittedEntity = object.permittedEntity ?? "";
    message.permittedEntityId = object.permittedEntityId ?? "";
    return message;
  },
};

function createBasePermissionFindByPermittedOpts(): PermissionFindByPermittedOpts {
  return { limit: 0, offset: 0 };
}

export const PermissionFindByPermittedOpts = {
  encode(message: PermissionFindByPermittedOpts, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.limit !== 0) {
      writer.uint32(8).uint64(message.limit);
    }
    if (message.offset !== 0) {
      writer.uint32(16).uint64(message.offset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionFindByPermittedOpts {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionFindByPermittedOpts();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.limit = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.offset = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionFindByPermittedOpts {
    return {
      limit: isSet(object.limit) ? Number(object.limit) : 0,
      offset: isSet(object.offset) ? Number(object.offset) : 0,
    };
  },

  toJSON(message: PermissionFindByPermittedOpts): unknown {
    const obj: any = {};
    if (message.limit !== 0) {
      obj.limit = Math.round(message.limit);
    }
    if (message.offset !== 0) {
      obj.offset = Math.round(message.offset);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PermissionFindByPermittedOpts>, I>>(base?: I): PermissionFindByPermittedOpts {
    return PermissionFindByPermittedOpts.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PermissionFindByPermittedOpts>, I>>(
    object: I,
  ): PermissionFindByPermittedOpts {
    const message = createBasePermissionFindByPermittedOpts();
    message.limit = object.limit ?? 0;
    message.offset = object.offset ?? 0;
    return message;
  },
};

function createBasePermissionFindByPermittedInput(): PermissionFindByPermittedInput {
  return { filter: undefined, opts: undefined };
}

export const PermissionFindByPermittedInput = {
  encode(message: PermissionFindByPermittedInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.filter !== undefined) {
      PermissionFindByPermittedFilter.encode(message.filter, writer.uint32(10).fork()).ldelim();
    }
    if (message.opts !== undefined) {
      PermissionFindByPermittedOpts.encode(message.opts, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionFindByPermittedInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionFindByPermittedInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.filter = PermissionFindByPermittedFilter.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.opts = PermissionFindByPermittedOpts.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionFindByPermittedInput {
    return {
      filter: isSet(object.filter) ? PermissionFindByPermittedFilter.fromJSON(object.filter) : undefined,
      opts: isSet(object.opts) ? PermissionFindByPermittedOpts.fromJSON(object.opts) : undefined,
    };
  },

  toJSON(message: PermissionFindByPermittedInput): unknown {
    const obj: any = {};
    if (message.filter !== undefined) {
      obj.filter = PermissionFindByPermittedFilter.toJSON(message.filter);
    }
    if (message.opts !== undefined) {
      obj.opts = PermissionFindByPermittedOpts.toJSON(message.opts);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PermissionFindByPermittedInput>, I>>(base?: I): PermissionFindByPermittedInput {
    return PermissionFindByPermittedInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PermissionFindByPermittedInput>, I>>(
    object: I,
  ): PermissionFindByPermittedInput {
    const message = createBasePermissionFindByPermittedInput();
    message.filter = (object.filter !== undefined && object.filter !== null)
      ? PermissionFindByPermittedFilter.fromPartial(object.filter)
      : undefined;
    message.opts = (object.opts !== undefined && object.opts !== null)
      ? PermissionFindByPermittedOpts.fromPartial(object.opts)
      : undefined;
    return message;
  },
};

function createBasePermissionFindByPermittedResultMeta(): PermissionFindByPermittedResultMeta {
  return { offset: 0 };
}

export const PermissionFindByPermittedResultMeta = {
  encode(message: PermissionFindByPermittedResultMeta, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.offset !== 0) {
      writer.uint32(8).uint64(message.offset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionFindByPermittedResultMeta {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionFindByPermittedResultMeta();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.offset = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionFindByPermittedResultMeta {
    return { offset: isSet(object.offset) ? Number(object.offset) : 0 };
  },

  toJSON(message: PermissionFindByPermittedResultMeta): unknown {
    const obj: any = {};
    if (message.offset !== 0) {
      obj.offset = Math.round(message.offset);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PermissionFindByPermittedResultMeta>, I>>(
    base?: I,
  ): PermissionFindByPermittedResultMeta {
    return PermissionFindByPermittedResultMeta.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PermissionFindByPermittedResultMeta>, I>>(
    object: I,
  ): PermissionFindByPermittedResultMeta {
    const message = createBasePermissionFindByPermittedResultMeta();
    message.offset = object.offset ?? 0;
    return message;
  },
};

function createBasePermissionFindByPermittedResult(): PermissionFindByPermittedResult {
  return { meta: undefined, results: [] };
}

export const PermissionFindByPermittedResult = {
  encode(message: PermissionFindByPermittedResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.meta !== undefined) {
      PermissionFindByPermittedResultMeta.encode(message.meta, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.results) {
      Permission.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionFindByPermittedResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionFindByPermittedResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.meta = PermissionFindByPermittedResultMeta.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.results.push(Permission.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionFindByPermittedResult {
    return {
      meta: isSet(object.meta) ? PermissionFindByPermittedResultMeta.fromJSON(object.meta) : undefined,
      results: Array.isArray(object?.results) ? object.results.map((e: any) => Permission.fromJSON(e)) : [],
    };
  },

  toJSON(message: PermissionFindByPermittedResult): unknown {
    const obj: any = {};
    if (message.meta !== undefined) {
      obj.meta = PermissionFindByPermittedResultMeta.toJSON(message.meta);
    }
    if (message.results?.length) {
      obj.results = message.results.map((e) => Permission.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PermissionFindByPermittedResult>, I>>(base?: I): PermissionFindByPermittedResult {
    return PermissionFindByPermittedResult.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PermissionFindByPermittedResult>, I>>(
    object: I,
  ): PermissionFindByPermittedResult {
    const message = createBasePermissionFindByPermittedResult();
    message.meta = (object.meta !== undefined && object.meta !== null)
      ? PermissionFindByPermittedResultMeta.fromPartial(object.meta)
      : undefined;
    message.results = object.results?.map((e) => Permission.fromPartial(e)) || [];
    return message;
  },
};

function createBasePermissionFindAllActionsFilter(): PermissionFindAllActionsFilter {
  return { entity: "", entityId: "", permittedEntity: "", permittedEntityId: "" };
}

export const PermissionFindAllActionsFilter = {
  encode(message: PermissionFindAllActionsFilter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entity !== "") {
      writer.uint32(10).string(message.entity);
    }
    if (message.entityId !== "") {
      writer.uint32(18).string(message.entityId);
    }
    if (message.permittedEntity !== "") {
      writer.uint32(26).string(message.permittedEntity);
    }
    if (message.permittedEntityId !== "") {
      writer.uint32(34).string(message.permittedEntityId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionFindAllActionsFilter {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionFindAllActionsFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.entity = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.entityId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.permittedEntity = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.permittedEntityId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionFindAllActionsFilter {
    return {
      entity: isSet(object.entity) ? String(object.entity) : "",
      entityId: isSet(object.entityId) ? String(object.entityId) : "",
      permittedEntity: isSet(object.permittedEntity) ? String(object.permittedEntity) : "",
      permittedEntityId: isSet(object.permittedEntityId) ? String(object.permittedEntityId) : "",
    };
  },

  toJSON(message: PermissionFindAllActionsFilter): unknown {
    const obj: any = {};
    if (message.entity !== "") {
      obj.entity = message.entity;
    }
    if (message.entityId !== "") {
      obj.entityId = message.entityId;
    }
    if (message.permittedEntity !== "") {
      obj.permittedEntity = message.permittedEntity;
    }
    if (message.permittedEntityId !== "") {
      obj.permittedEntityId = message.permittedEntityId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PermissionFindAllActionsFilter>, I>>(base?: I): PermissionFindAllActionsFilter {
    return PermissionFindAllActionsFilter.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PermissionFindAllActionsFilter>, I>>(
    object: I,
  ): PermissionFindAllActionsFilter {
    const message = createBasePermissionFindAllActionsFilter();
    message.entity = object.entity ?? "";
    message.entityId = object.entityId ?? "";
    message.permittedEntity = object.permittedEntity ?? "";
    message.permittedEntityId = object.permittedEntityId ?? "";
    return message;
  },
};

function createBasePermissionFindAllActionsOpts(): PermissionFindAllActionsOpts {
  return { limit: 0, offset: 0 };
}

export const PermissionFindAllActionsOpts = {
  encode(message: PermissionFindAllActionsOpts, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.limit !== 0) {
      writer.uint32(8).uint64(message.limit);
    }
    if (message.offset !== 0) {
      writer.uint32(16).uint64(message.offset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionFindAllActionsOpts {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionFindAllActionsOpts();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.limit = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.offset = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionFindAllActionsOpts {
    return {
      limit: isSet(object.limit) ? Number(object.limit) : 0,
      offset: isSet(object.offset) ? Number(object.offset) : 0,
    };
  },

  toJSON(message: PermissionFindAllActionsOpts): unknown {
    const obj: any = {};
    if (message.limit !== 0) {
      obj.limit = Math.round(message.limit);
    }
    if (message.offset !== 0) {
      obj.offset = Math.round(message.offset);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PermissionFindAllActionsOpts>, I>>(base?: I): PermissionFindAllActionsOpts {
    return PermissionFindAllActionsOpts.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PermissionFindAllActionsOpts>, I>>(object: I): PermissionFindAllActionsOpts {
    const message = createBasePermissionFindAllActionsOpts();
    message.limit = object.limit ?? 0;
    message.offset = object.offset ?? 0;
    return message;
  },
};

function createBasePermissionFindAllActionsInput(): PermissionFindAllActionsInput {
  return { filter: undefined, opts: undefined };
}

export const PermissionFindAllActionsInput = {
  encode(message: PermissionFindAllActionsInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.filter !== undefined) {
      PermissionFindAllActionsFilter.encode(message.filter, writer.uint32(10).fork()).ldelim();
    }
    if (message.opts !== undefined) {
      PermissionFindAllActionsOpts.encode(message.opts, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionFindAllActionsInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionFindAllActionsInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.filter = PermissionFindAllActionsFilter.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.opts = PermissionFindAllActionsOpts.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionFindAllActionsInput {
    return {
      filter: isSet(object.filter) ? PermissionFindAllActionsFilter.fromJSON(object.filter) : undefined,
      opts: isSet(object.opts) ? PermissionFindAllActionsOpts.fromJSON(object.opts) : undefined,
    };
  },

  toJSON(message: PermissionFindAllActionsInput): unknown {
    const obj: any = {};
    if (message.filter !== undefined) {
      obj.filter = PermissionFindAllActionsFilter.toJSON(message.filter);
    }
    if (message.opts !== undefined) {
      obj.opts = PermissionFindAllActionsOpts.toJSON(message.opts);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PermissionFindAllActionsInput>, I>>(base?: I): PermissionFindAllActionsInput {
    return PermissionFindAllActionsInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PermissionFindAllActionsInput>, I>>(
    object: I,
  ): PermissionFindAllActionsInput {
    const message = createBasePermissionFindAllActionsInput();
    message.filter = (object.filter !== undefined && object.filter !== null)
      ? PermissionFindAllActionsFilter.fromPartial(object.filter)
      : undefined;
    message.opts = (object.opts !== undefined && object.opts !== null)
      ? PermissionFindAllActionsOpts.fromPartial(object.opts)
      : undefined;
    return message;
  },
};

function createBasePermissionFindAllActionsResultMeta(): PermissionFindAllActionsResultMeta {
  return { offset: 0 };
}

export const PermissionFindAllActionsResultMeta = {
  encode(message: PermissionFindAllActionsResultMeta, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.offset !== 0) {
      writer.uint32(8).uint64(message.offset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionFindAllActionsResultMeta {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionFindAllActionsResultMeta();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.offset = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionFindAllActionsResultMeta {
    return { offset: isSet(object.offset) ? Number(object.offset) : 0 };
  },

  toJSON(message: PermissionFindAllActionsResultMeta): unknown {
    const obj: any = {};
    if (message.offset !== 0) {
      obj.offset = Math.round(message.offset);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PermissionFindAllActionsResultMeta>, I>>(
    base?: I,
  ): PermissionFindAllActionsResultMeta {
    return PermissionFindAllActionsResultMeta.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PermissionFindAllActionsResultMeta>, I>>(
    object: I,
  ): PermissionFindAllActionsResultMeta {
    const message = createBasePermissionFindAllActionsResultMeta();
    message.offset = object.offset ?? 0;
    return message;
  },
};

function createBasePermissionFindAllActionsResult(): PermissionFindAllActionsResult {
  return { meta: undefined, results: [] };
}

export const PermissionFindAllActionsResult = {
  encode(message: PermissionFindAllActionsResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.meta !== undefined) {
      PermissionFindAllActionsResultMeta.encode(message.meta, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.results) {
      Permission.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionFindAllActionsResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionFindAllActionsResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.meta = PermissionFindAllActionsResultMeta.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.results.push(Permission.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionFindAllActionsResult {
    return {
      meta: isSet(object.meta) ? PermissionFindAllActionsResultMeta.fromJSON(object.meta) : undefined,
      results: Array.isArray(object?.results) ? object.results.map((e: any) => Permission.fromJSON(e)) : [],
    };
  },

  toJSON(message: PermissionFindAllActionsResult): unknown {
    const obj: any = {};
    if (message.meta !== undefined) {
      obj.meta = PermissionFindAllActionsResultMeta.toJSON(message.meta);
    }
    if (message.results?.length) {
      obj.results = message.results.map((e) => Permission.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PermissionFindAllActionsResult>, I>>(base?: I): PermissionFindAllActionsResult {
    return PermissionFindAllActionsResult.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PermissionFindAllActionsResult>, I>>(
    object: I,
  ): PermissionFindAllActionsResult {
    const message = createBasePermissionFindAllActionsResult();
    message.meta = (object.meta !== undefined && object.meta !== null)
      ? PermissionFindAllActionsResultMeta.fromPartial(object.meta)
      : undefined;
    message.results = object.results?.map((e) => Permission.fromPartial(e)) || [];
    return message;
  },
};

function createBasePermissionRemoveAllActionsFilter(): PermissionRemoveAllActionsFilter {
  return { entity: "", entityId: "", permittedEntity: "", permittedEntityId: "" };
}

export const PermissionRemoveAllActionsFilter = {
  encode(message: PermissionRemoveAllActionsFilter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entity !== "") {
      writer.uint32(10).string(message.entity);
    }
    if (message.entityId !== "") {
      writer.uint32(18).string(message.entityId);
    }
    if (message.permittedEntity !== "") {
      writer.uint32(26).string(message.permittedEntity);
    }
    if (message.permittedEntityId !== "") {
      writer.uint32(34).string(message.permittedEntityId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionRemoveAllActionsFilter {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionRemoveAllActionsFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.entity = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.entityId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.permittedEntity = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.permittedEntityId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionRemoveAllActionsFilter {
    return {
      entity: isSet(object.entity) ? String(object.entity) : "",
      entityId: isSet(object.entityId) ? String(object.entityId) : "",
      permittedEntity: isSet(object.permittedEntity) ? String(object.permittedEntity) : "",
      permittedEntityId: isSet(object.permittedEntityId) ? String(object.permittedEntityId) : "",
    };
  },

  toJSON(message: PermissionRemoveAllActionsFilter): unknown {
    const obj: any = {};
    if (message.entity !== "") {
      obj.entity = message.entity;
    }
    if (message.entityId !== "") {
      obj.entityId = message.entityId;
    }
    if (message.permittedEntity !== "") {
      obj.permittedEntity = message.permittedEntity;
    }
    if (message.permittedEntityId !== "") {
      obj.permittedEntityId = message.permittedEntityId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PermissionRemoveAllActionsFilter>, I>>(
    base?: I,
  ): PermissionRemoveAllActionsFilter {
    return PermissionRemoveAllActionsFilter.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PermissionRemoveAllActionsFilter>, I>>(
    object: I,
  ): PermissionRemoveAllActionsFilter {
    const message = createBasePermissionRemoveAllActionsFilter();
    message.entity = object.entity ?? "";
    message.entityId = object.entityId ?? "";
    message.permittedEntity = object.permittedEntity ?? "";
    message.permittedEntityId = object.permittedEntityId ?? "";
    return message;
  },
};

function createBasePermissionRemoveAllActionsInput(): PermissionRemoveAllActionsInput {
  return { filter: undefined };
}

export const PermissionRemoveAllActionsInput = {
  encode(message: PermissionRemoveAllActionsInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.filter !== undefined) {
      PermissionRemoveAllActionsFilter.encode(message.filter, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionRemoveAllActionsInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionRemoveAllActionsInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.filter = PermissionRemoveAllActionsFilter.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionRemoveAllActionsInput {
    return { filter: isSet(object.filter) ? PermissionRemoveAllActionsFilter.fromJSON(object.filter) : undefined };
  },

  toJSON(message: PermissionRemoveAllActionsInput): unknown {
    const obj: any = {};
    if (message.filter !== undefined) {
      obj.filter = PermissionRemoveAllActionsFilter.toJSON(message.filter);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PermissionRemoveAllActionsInput>, I>>(base?: I): PermissionRemoveAllActionsInput {
    return PermissionRemoveAllActionsInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PermissionRemoveAllActionsInput>, I>>(
    object: I,
  ): PermissionRemoveAllActionsInput {
    const message = createBasePermissionRemoveAllActionsInput();
    message.filter = (object.filter !== undefined && object.filter !== null)
      ? PermissionRemoveAllActionsFilter.fromPartial(object.filter)
      : undefined;
    return message;
  },
};

function createBaseUserFollowCreateOneInput(): UserFollowCreateOneInput {
  return { followerId: "", followeeId: "" };
}

export const UserFollowCreateOneInput = {
  encode(message: UserFollowCreateOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.followerId !== "") {
      writer.uint32(10).string(message.followerId);
    }
    if (message.followeeId !== "") {
      writer.uint32(18).string(message.followeeId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserFollowCreateOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserFollowCreateOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.followerId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.followeeId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserFollowCreateOneInput {
    return {
      followerId: isSet(object.followerId) ? String(object.followerId) : "",
      followeeId: isSet(object.followeeId) ? String(object.followeeId) : "",
    };
  },

  toJSON(message: UserFollowCreateOneInput): unknown {
    const obj: any = {};
    if (message.followerId !== "") {
      obj.followerId = message.followerId;
    }
    if (message.followeeId !== "") {
      obj.followeeId = message.followeeId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserFollowCreateOneInput>, I>>(base?: I): UserFollowCreateOneInput {
    return UserFollowCreateOneInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UserFollowCreateOneInput>, I>>(object: I): UserFollowCreateOneInput {
    const message = createBaseUserFollowCreateOneInput();
    message.followerId = object.followerId ?? "";
    message.followeeId = object.followeeId ?? "";
    return message;
  },
};

function createBaseUserFollowRemoveOneInput(): UserFollowRemoveOneInput {
  return { id: "" };
}

export const UserFollowRemoveOneInput = {
  encode(message: UserFollowRemoveOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserFollowRemoveOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserFollowRemoveOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserFollowRemoveOneInput {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: UserFollowRemoveOneInput): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserFollowRemoveOneInput>, I>>(base?: I): UserFollowRemoveOneInput {
    return UserFollowRemoveOneInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UserFollowRemoveOneInput>, I>>(object: I): UserFollowRemoveOneInput {
    const message = createBaseUserFollowRemoveOneInput();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseUserFindFollowersFilter(): UserFindFollowersFilter {
  return { followeeId: "" };
}

export const UserFindFollowersFilter = {
  encode(message: UserFindFollowersFilter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.followeeId !== "") {
      writer.uint32(10).string(message.followeeId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserFindFollowersFilter {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserFindFollowersFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.followeeId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserFindFollowersFilter {
    return { followeeId: isSet(object.followeeId) ? String(object.followeeId) : "" };
  },

  toJSON(message: UserFindFollowersFilter): unknown {
    const obj: any = {};
    if (message.followeeId !== "") {
      obj.followeeId = message.followeeId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserFindFollowersFilter>, I>>(base?: I): UserFindFollowersFilter {
    return UserFindFollowersFilter.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UserFindFollowersFilter>, I>>(object: I): UserFindFollowersFilter {
    const message = createBaseUserFindFollowersFilter();
    message.followeeId = object.followeeId ?? "";
    return message;
  },
};

function createBaseUserFindFollowersOpts(): UserFindFollowersOpts {
  return { limit: 0, offset: 0 };
}

export const UserFindFollowersOpts = {
  encode(message: UserFindFollowersOpts, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.limit !== 0) {
      writer.uint32(8).uint64(message.limit);
    }
    if (message.offset !== 0) {
      writer.uint32(16).uint64(message.offset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserFindFollowersOpts {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserFindFollowersOpts();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.limit = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.offset = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserFindFollowersOpts {
    return {
      limit: isSet(object.limit) ? Number(object.limit) : 0,
      offset: isSet(object.offset) ? Number(object.offset) : 0,
    };
  },

  toJSON(message: UserFindFollowersOpts): unknown {
    const obj: any = {};
    if (message.limit !== 0) {
      obj.limit = Math.round(message.limit);
    }
    if (message.offset !== 0) {
      obj.offset = Math.round(message.offset);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserFindFollowersOpts>, I>>(base?: I): UserFindFollowersOpts {
    return UserFindFollowersOpts.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UserFindFollowersOpts>, I>>(object: I): UserFindFollowersOpts {
    const message = createBaseUserFindFollowersOpts();
    message.limit = object.limit ?? 0;
    message.offset = object.offset ?? 0;
    return message;
  },
};

function createBaseUserFindFollowersInput(): UserFindFollowersInput {
  return { filter: undefined, opts: undefined };
}

export const UserFindFollowersInput = {
  encode(message: UserFindFollowersInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.filter !== undefined) {
      UserFindFollowersFilter.encode(message.filter, writer.uint32(10).fork()).ldelim();
    }
    if (message.opts !== undefined) {
      UserFindFollowersOpts.encode(message.opts, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserFindFollowersInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserFindFollowersInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.filter = UserFindFollowersFilter.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.opts = UserFindFollowersOpts.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserFindFollowersInput {
    return {
      filter: isSet(object.filter) ? UserFindFollowersFilter.fromJSON(object.filter) : undefined,
      opts: isSet(object.opts) ? UserFindFollowersOpts.fromJSON(object.opts) : undefined,
    };
  },

  toJSON(message: UserFindFollowersInput): unknown {
    const obj: any = {};
    if (message.filter !== undefined) {
      obj.filter = UserFindFollowersFilter.toJSON(message.filter);
    }
    if (message.opts !== undefined) {
      obj.opts = UserFindFollowersOpts.toJSON(message.opts);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserFindFollowersInput>, I>>(base?: I): UserFindFollowersInput {
    return UserFindFollowersInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UserFindFollowersInput>, I>>(object: I): UserFindFollowersInput {
    const message = createBaseUserFindFollowersInput();
    message.filter = (object.filter !== undefined && object.filter !== null)
      ? UserFindFollowersFilter.fromPartial(object.filter)
      : undefined;
    message.opts = (object.opts !== undefined && object.opts !== null)
      ? UserFindFollowersOpts.fromPartial(object.opts)
      : undefined;
    return message;
  },
};

function createBaseUserFindFollowersResultMeta(): UserFindFollowersResultMeta {
  return { offset: 0 };
}

export const UserFindFollowersResultMeta = {
  encode(message: UserFindFollowersResultMeta, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.offset !== 0) {
      writer.uint32(8).uint64(message.offset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserFindFollowersResultMeta {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserFindFollowersResultMeta();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.offset = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserFindFollowersResultMeta {
    return { offset: isSet(object.offset) ? Number(object.offset) : 0 };
  },

  toJSON(message: UserFindFollowersResultMeta): unknown {
    const obj: any = {};
    if (message.offset !== 0) {
      obj.offset = Math.round(message.offset);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserFindFollowersResultMeta>, I>>(base?: I): UserFindFollowersResultMeta {
    return UserFindFollowersResultMeta.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UserFindFollowersResultMeta>, I>>(object: I): UserFindFollowersResultMeta {
    const message = createBaseUserFindFollowersResultMeta();
    message.offset = object.offset ?? 0;
    return message;
  },
};

function createBaseUserFindFollowersResult(): UserFindFollowersResult {
  return { meta: undefined, followers: [] };
}

export const UserFindFollowersResult = {
  encode(message: UserFindFollowersResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.meta !== undefined) {
      UserFindFollowersResultMeta.encode(message.meta, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.followers) {
      Follower.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserFindFollowersResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserFindFollowersResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.meta = UserFindFollowersResultMeta.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.followers.push(Follower.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserFindFollowersResult {
    return {
      meta: isSet(object.meta) ? UserFindFollowersResultMeta.fromJSON(object.meta) : undefined,
      followers: Array.isArray(object?.followers) ? object.followers.map((e: any) => Follower.fromJSON(e)) : [],
    };
  },

  toJSON(message: UserFindFollowersResult): unknown {
    const obj: any = {};
    if (message.meta !== undefined) {
      obj.meta = UserFindFollowersResultMeta.toJSON(message.meta);
    }
    if (message.followers?.length) {
      obj.followers = message.followers.map((e) => Follower.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserFindFollowersResult>, I>>(base?: I): UserFindFollowersResult {
    return UserFindFollowersResult.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UserFindFollowersResult>, I>>(object: I): UserFindFollowersResult {
    const message = createBaseUserFindFollowersResult();
    message.meta = (object.meta !== undefined && object.meta !== null)
      ? UserFindFollowersResultMeta.fromPartial(object.meta)
      : undefined;
    message.followers = object.followers?.map((e) => Follower.fromPartial(e)) || [];
    return message;
  },
};

function createBaseFollower(): Follower {
  return { id: "", createdAt: 0, updatedAt: 0, followeeId: "", followerId: "" };
}

export const Follower = {
  encode(message: Follower, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.createdAt !== 0) {
      writer.uint32(16).uint64(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      writer.uint32(24).uint64(message.updatedAt);
    }
    if (message.followeeId !== "") {
      writer.uint32(34).string(message.followeeId);
    }
    if (message.followerId !== "") {
      writer.uint32(42).string(message.followerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Follower {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFollower();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.createdAt = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.updatedAt = longToNumber(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.followeeId = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.followerId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Follower {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      createdAt: isSet(object.createdAt) ? Number(object.createdAt) : 0,
      updatedAt: isSet(object.updatedAt) ? Number(object.updatedAt) : 0,
      followeeId: isSet(object.followeeId) ? String(object.followeeId) : "",
      followerId: isSet(object.followerId) ? String(object.followerId) : "",
    };
  },

  toJSON(message: Follower): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.createdAt !== 0) {
      obj.createdAt = Math.round(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      obj.updatedAt = Math.round(message.updatedAt);
    }
    if (message.followeeId !== "") {
      obj.followeeId = message.followeeId;
    }
    if (message.followerId !== "") {
      obj.followerId = message.followerId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Follower>, I>>(base?: I): Follower {
    return Follower.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Follower>, I>>(object: I): Follower {
    const message = createBaseFollower();
    message.id = object.id ?? "";
    message.createdAt = object.createdAt ?? 0;
    message.updatedAt = object.updatedAt ?? 0;
    message.followeeId = object.followeeId ?? "";
    message.followerId = object.followerId ?? "";
    return message;
  },
};

function createBaseUserFindFolloweesFilter(): UserFindFolloweesFilter {
  return { followerId: "" };
}

export const UserFindFolloweesFilter = {
  encode(message: UserFindFolloweesFilter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.followerId !== "") {
      writer.uint32(10).string(message.followerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserFindFolloweesFilter {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserFindFolloweesFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.followerId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserFindFolloweesFilter {
    return { followerId: isSet(object.followerId) ? String(object.followerId) : "" };
  },

  toJSON(message: UserFindFolloweesFilter): unknown {
    const obj: any = {};
    if (message.followerId !== "") {
      obj.followerId = message.followerId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserFindFolloweesFilter>, I>>(base?: I): UserFindFolloweesFilter {
    return UserFindFolloweesFilter.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UserFindFolloweesFilter>, I>>(object: I): UserFindFolloweesFilter {
    const message = createBaseUserFindFolloweesFilter();
    message.followerId = object.followerId ?? "";
    return message;
  },
};

function createBaseUserFindFolloweesOpts(): UserFindFolloweesOpts {
  return { limit: 0, offset: 0 };
}

export const UserFindFolloweesOpts = {
  encode(message: UserFindFolloweesOpts, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.limit !== 0) {
      writer.uint32(8).uint64(message.limit);
    }
    if (message.offset !== 0) {
      writer.uint32(16).uint64(message.offset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserFindFolloweesOpts {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserFindFolloweesOpts();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.limit = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.offset = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserFindFolloweesOpts {
    return {
      limit: isSet(object.limit) ? Number(object.limit) : 0,
      offset: isSet(object.offset) ? Number(object.offset) : 0,
    };
  },

  toJSON(message: UserFindFolloweesOpts): unknown {
    const obj: any = {};
    if (message.limit !== 0) {
      obj.limit = Math.round(message.limit);
    }
    if (message.offset !== 0) {
      obj.offset = Math.round(message.offset);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserFindFolloweesOpts>, I>>(base?: I): UserFindFolloweesOpts {
    return UserFindFolloweesOpts.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UserFindFolloweesOpts>, I>>(object: I): UserFindFolloweesOpts {
    const message = createBaseUserFindFolloweesOpts();
    message.limit = object.limit ?? 0;
    message.offset = object.offset ?? 0;
    return message;
  },
};

function createBaseUserFindFolloweesInput(): UserFindFolloweesInput {
  return { filter: undefined, opts: undefined };
}

export const UserFindFolloweesInput = {
  encode(message: UserFindFolloweesInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.filter !== undefined) {
      UserFindFolloweesFilter.encode(message.filter, writer.uint32(10).fork()).ldelim();
    }
    if (message.opts !== undefined) {
      UserFindFolloweesOpts.encode(message.opts, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserFindFolloweesInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserFindFolloweesInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.filter = UserFindFolloweesFilter.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.opts = UserFindFolloweesOpts.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserFindFolloweesInput {
    return {
      filter: isSet(object.filter) ? UserFindFolloweesFilter.fromJSON(object.filter) : undefined,
      opts: isSet(object.opts) ? UserFindFolloweesOpts.fromJSON(object.opts) : undefined,
    };
  },

  toJSON(message: UserFindFolloweesInput): unknown {
    const obj: any = {};
    if (message.filter !== undefined) {
      obj.filter = UserFindFolloweesFilter.toJSON(message.filter);
    }
    if (message.opts !== undefined) {
      obj.opts = UserFindFolloweesOpts.toJSON(message.opts);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserFindFolloweesInput>, I>>(base?: I): UserFindFolloweesInput {
    return UserFindFolloweesInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UserFindFolloweesInput>, I>>(object: I): UserFindFolloweesInput {
    const message = createBaseUserFindFolloweesInput();
    message.filter = (object.filter !== undefined && object.filter !== null)
      ? UserFindFolloweesFilter.fromPartial(object.filter)
      : undefined;
    message.opts = (object.opts !== undefined && object.opts !== null)
      ? UserFindFolloweesOpts.fromPartial(object.opts)
      : undefined;
    return message;
  },
};

function createBaseUserFindFolloweesResultMeta(): UserFindFolloweesResultMeta {
  return { offset: 0 };
}

export const UserFindFolloweesResultMeta = {
  encode(message: UserFindFolloweesResultMeta, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.offset !== 0) {
      writer.uint32(8).uint64(message.offset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserFindFolloweesResultMeta {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserFindFolloweesResultMeta();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.offset = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserFindFolloweesResultMeta {
    return { offset: isSet(object.offset) ? Number(object.offset) : 0 };
  },

  toJSON(message: UserFindFolloweesResultMeta): unknown {
    const obj: any = {};
    if (message.offset !== 0) {
      obj.offset = Math.round(message.offset);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserFindFolloweesResultMeta>, I>>(base?: I): UserFindFolloweesResultMeta {
    return UserFindFolloweesResultMeta.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UserFindFolloweesResultMeta>, I>>(object: I): UserFindFolloweesResultMeta {
    const message = createBaseUserFindFolloweesResultMeta();
    message.offset = object.offset ?? 0;
    return message;
  },
};

function createBaseUserFindFolloweesResult(): UserFindFolloweesResult {
  return { meta: undefined, followees: [] };
}

export const UserFindFolloweesResult = {
  encode(message: UserFindFolloweesResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.meta !== undefined) {
      UserFindFolloweesResultMeta.encode(message.meta, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.followees) {
      Followee.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserFindFolloweesResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserFindFolloweesResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.meta = UserFindFolloweesResultMeta.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.followees.push(Followee.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserFindFolloweesResult {
    return {
      meta: isSet(object.meta) ? UserFindFolloweesResultMeta.fromJSON(object.meta) : undefined,
      followees: Array.isArray(object?.followees) ? object.followees.map((e: any) => Followee.fromJSON(e)) : [],
    };
  },

  toJSON(message: UserFindFolloweesResult): unknown {
    const obj: any = {};
    if (message.meta !== undefined) {
      obj.meta = UserFindFolloweesResultMeta.toJSON(message.meta);
    }
    if (message.followees?.length) {
      obj.followees = message.followees.map((e) => Followee.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserFindFolloweesResult>, I>>(base?: I): UserFindFolloweesResult {
    return UserFindFolloweesResult.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UserFindFolloweesResult>, I>>(object: I): UserFindFolloweesResult {
    const message = createBaseUserFindFolloweesResult();
    message.meta = (object.meta !== undefined && object.meta !== null)
      ? UserFindFolloweesResultMeta.fromPartial(object.meta)
      : undefined;
    message.followees = object.followees?.map((e) => Followee.fromPartial(e)) || [];
    return message;
  },
};

function createBaseFollowee(): Followee {
  return { id: "", createdAt: 0, updatedAt: 0, followerId: "", followeeId: "" };
}

export const Followee = {
  encode(message: Followee, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.createdAt !== 0) {
      writer.uint32(16).uint64(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      writer.uint32(24).uint64(message.updatedAt);
    }
    if (message.followerId !== "") {
      writer.uint32(34).string(message.followerId);
    }
    if (message.followeeId !== "") {
      writer.uint32(42).string(message.followeeId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Followee {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFollowee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.createdAt = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.updatedAt = longToNumber(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.followerId = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.followeeId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Followee {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      createdAt: isSet(object.createdAt) ? Number(object.createdAt) : 0,
      updatedAt: isSet(object.updatedAt) ? Number(object.updatedAt) : 0,
      followerId: isSet(object.followerId) ? String(object.followerId) : "",
      followeeId: isSet(object.followeeId) ? String(object.followeeId) : "",
    };
  },

  toJSON(message: Followee): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.createdAt !== 0) {
      obj.createdAt = Math.round(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      obj.updatedAt = Math.round(message.updatedAt);
    }
    if (message.followerId !== "") {
      obj.followerId = message.followerId;
    }
    if (message.followeeId !== "") {
      obj.followeeId = message.followeeId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Followee>, I>>(base?: I): Followee {
    return Followee.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Followee>, I>>(object: I): Followee {
    const message = createBaseFollowee();
    message.id = object.id ?? "";
    message.createdAt = object.createdAt ?? 0;
    message.updatedAt = object.updatedAt ?? 0;
    message.followerId = object.followerId ?? "";
    message.followeeId = object.followeeId ?? "";
    return message;
  },
};

function createBaseUser(): User {
  return { id: "", createdAt: 0, updatedAt: 0, name: "", email: "", photo: "" };
}

export const User = {
  encode(message: User, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.createdAt !== 0) {
      writer.uint32(16).uint64(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      writer.uint32(24).uint64(message.updatedAt);
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    if (message.email !== "") {
      writer.uint32(42).string(message.email);
    }
    if (message.photo !== "") {
      writer.uint32(50).string(message.photo);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): User {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUser();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.createdAt = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.updatedAt = longToNumber(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.name = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.email = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.photo = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): User {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      createdAt: isSet(object.createdAt) ? Number(object.createdAt) : 0,
      updatedAt: isSet(object.updatedAt) ? Number(object.updatedAt) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      email: isSet(object.email) ? String(object.email) : "",
      photo: isSet(object.photo) ? String(object.photo) : "",
    };
  },

  toJSON(message: User): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.createdAt !== 0) {
      obj.createdAt = Math.round(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      obj.updatedAt = Math.round(message.updatedAt);
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.email !== "") {
      obj.email = message.email;
    }
    if (message.photo !== "") {
      obj.photo = message.photo;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<User>, I>>(base?: I): User {
    return User.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<User>, I>>(object: I): User {
    const message = createBaseUser();
    message.id = object.id ?? "";
    message.createdAt = object.createdAt ?? 0;
    message.updatedAt = object.updatedAt ?? 0;
    message.name = object.name ?? "";
    message.email = object.email ?? "";
    message.photo = object.photo ?? "";
    return message;
  },
};

function createBaseUserCreateOneInput(): UserCreateOneInput {
  return { name: "", email: "", photo: "" };
}

export const UserCreateOneInput = {
  encode(message: UserCreateOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    if (message.email !== "") {
      writer.uint32(42).string(message.email);
    }
    if (message.photo !== "") {
      writer.uint32(50).string(message.photo);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserCreateOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserCreateOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 4:
          if (tag !== 34) {
            break;
          }

          message.name = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.email = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.photo = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserCreateOneInput {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      email: isSet(object.email) ? String(object.email) : "",
      photo: isSet(object.photo) ? String(object.photo) : "",
    };
  },

  toJSON(message: UserCreateOneInput): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.email !== "") {
      obj.email = message.email;
    }
    if (message.photo !== "") {
      obj.photo = message.photo;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserCreateOneInput>, I>>(base?: I): UserCreateOneInput {
    return UserCreateOneInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UserCreateOneInput>, I>>(object: I): UserCreateOneInput {
    const message = createBaseUserCreateOneInput();
    message.name = object.name ?? "";
    message.email = object.email ?? "";
    message.photo = object.photo ?? "";
    return message;
  },
};

function createBaseUserUpdateOneInput(): UserUpdateOneInput {
  return { id: "", name: "", email: "", photo: "" };
}

export const UserUpdateOneInput = {
  encode(message: UserUpdateOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    if (message.email !== "") {
      writer.uint32(42).string(message.email);
    }
    if (message.photo !== "") {
      writer.uint32(50).string(message.photo);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserUpdateOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserUpdateOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.name = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.email = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.photo = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserUpdateOneInput {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      name: isSet(object.name) ? String(object.name) : "",
      email: isSet(object.email) ? String(object.email) : "",
      photo: isSet(object.photo) ? String(object.photo) : "",
    };
  },

  toJSON(message: UserUpdateOneInput): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.email !== "") {
      obj.email = message.email;
    }
    if (message.photo !== "") {
      obj.photo = message.photo;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserUpdateOneInput>, I>>(base?: I): UserUpdateOneInput {
    return UserUpdateOneInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UserUpdateOneInput>, I>>(object: I): UserUpdateOneInput {
    const message = createBaseUserUpdateOneInput();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.email = object.email ?? "";
    message.photo = object.photo ?? "";
    return message;
  },
};

function createBaseUserFindOneInput(): UserFindOneInput {
  return { id: "" };
}

export const UserFindOneInput = {
  encode(message: UserFindOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserFindOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserFindOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserFindOneInput {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: UserFindOneInput): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserFindOneInput>, I>>(base?: I): UserFindOneInput {
    return UserFindOneInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UserFindOneInput>, I>>(object: I): UserFindOneInput {
    const message = createBaseUserFindOneInput();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseUserRemoveOneInput(): UserRemoveOneInput {
  return { id: "" };
}

export const UserRemoveOneInput = {
  encode(message: UserRemoveOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserRemoveOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserRemoveOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserRemoveOneInput {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: UserRemoveOneInput): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserRemoveOneInput>, I>>(base?: I): UserRemoveOneInput {
    return UserRemoveOneInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UserRemoveOneInput>, I>>(object: I): UserRemoveOneInput {
    const message = createBaseUserRemoveOneInput();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseUserSearchFilter(): UserSearchFilter {
  return { name: "" };
}

export const UserSearchFilter = {
  encode(message: UserSearchFilter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserSearchFilter {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserSearchFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserSearchFilter {
    return { name: isSet(object.name) ? String(object.name) : "" };
  },

  toJSON(message: UserSearchFilter): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserSearchFilter>, I>>(base?: I): UserSearchFilter {
    return UserSearchFilter.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UserSearchFilter>, I>>(object: I): UserSearchFilter {
    const message = createBaseUserSearchFilter();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseUserSearchOpts(): UserSearchOpts {
  return { limit: 0, offset: 0, waitForSync: false };
}

export const UserSearchOpts = {
  encode(message: UserSearchOpts, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.limit !== 0) {
      writer.uint32(8).uint64(message.limit);
    }
    if (message.offset !== 0) {
      writer.uint32(16).uint64(message.offset);
    }
    if (message.waitForSync === true) {
      writer.uint32(24).bool(message.waitForSync);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserSearchOpts {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserSearchOpts();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.limit = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.offset = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.waitForSync = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserSearchOpts {
    return {
      limit: isSet(object.limit) ? Number(object.limit) : 0,
      offset: isSet(object.offset) ? Number(object.offset) : 0,
      waitForSync: isSet(object.waitForSync) ? Boolean(object.waitForSync) : false,
    };
  },

  toJSON(message: UserSearchOpts): unknown {
    const obj: any = {};
    if (message.limit !== 0) {
      obj.limit = Math.round(message.limit);
    }
    if (message.offset !== 0) {
      obj.offset = Math.round(message.offset);
    }
    if (message.waitForSync === true) {
      obj.waitForSync = message.waitForSync;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserSearchOpts>, I>>(base?: I): UserSearchOpts {
    return UserSearchOpts.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UserSearchOpts>, I>>(object: I): UserSearchOpts {
    const message = createBaseUserSearchOpts();
    message.limit = object.limit ?? 0;
    message.offset = object.offset ?? 0;
    message.waitForSync = object.waitForSync ?? false;
    return message;
  },
};

function createBaseUserSearchInput(): UserSearchInput {
  return { filter: undefined, opts: undefined };
}

export const UserSearchInput = {
  encode(message: UserSearchInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.filter !== undefined) {
      UserSearchFilter.encode(message.filter, writer.uint32(10).fork()).ldelim();
    }
    if (message.opts !== undefined) {
      UserSearchOpts.encode(message.opts, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserSearchInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserSearchInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.filter = UserSearchFilter.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.opts = UserSearchOpts.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserSearchInput {
    return {
      filter: isSet(object.filter) ? UserSearchFilter.fromJSON(object.filter) : undefined,
      opts: isSet(object.opts) ? UserSearchOpts.fromJSON(object.opts) : undefined,
    };
  },

  toJSON(message: UserSearchInput): unknown {
    const obj: any = {};
    if (message.filter !== undefined) {
      obj.filter = UserSearchFilter.toJSON(message.filter);
    }
    if (message.opts !== undefined) {
      obj.opts = UserSearchOpts.toJSON(message.opts);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserSearchInput>, I>>(base?: I): UserSearchInput {
    return UserSearchInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UserSearchInput>, I>>(object: I): UserSearchInput {
    const message = createBaseUserSearchInput();
    message.filter = (object.filter !== undefined && object.filter !== null)
      ? UserSearchFilter.fromPartial(object.filter)
      : undefined;
    message.opts = (object.opts !== undefined && object.opts !== null)
      ? UserSearchOpts.fromPartial(object.opts)
      : undefined;
    return message;
  },
};

function createBaseUserSearchResultMeta(): UserSearchResultMeta {
  return { offset: 0 };
}

export const UserSearchResultMeta = {
  encode(message: UserSearchResultMeta, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.offset !== 0) {
      writer.uint32(8).uint64(message.offset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserSearchResultMeta {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserSearchResultMeta();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.offset = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserSearchResultMeta {
    return { offset: isSet(object.offset) ? Number(object.offset) : 0 };
  },

  toJSON(message: UserSearchResultMeta): unknown {
    const obj: any = {};
    if (message.offset !== 0) {
      obj.offset = Math.round(message.offset);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserSearchResultMeta>, I>>(base?: I): UserSearchResultMeta {
    return UserSearchResultMeta.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UserSearchResultMeta>, I>>(object: I): UserSearchResultMeta {
    const message = createBaseUserSearchResultMeta();
    message.offset = object.offset ?? 0;
    return message;
  },
};

function createBaseUserSearchResult(): UserSearchResult {
  return { meta: undefined, users: [] };
}

export const UserSearchResult = {
  encode(message: UserSearchResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.meta !== undefined) {
      UserSearchResultMeta.encode(message.meta, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.users) {
      User.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserSearchResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserSearchResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.meta = UserSearchResultMeta.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.users.push(User.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserSearchResult {
    return {
      meta: isSet(object.meta) ? UserSearchResultMeta.fromJSON(object.meta) : undefined,
      users: Array.isArray(object?.users) ? object.users.map((e: any) => User.fromJSON(e)) : [],
    };
  },

  toJSON(message: UserSearchResult): unknown {
    const obj: any = {};
    if (message.meta !== undefined) {
      obj.meta = UserSearchResultMeta.toJSON(message.meta);
    }
    if (message.users?.length) {
      obj.users = message.users.map((e) => User.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserSearchResult>, I>>(base?: I): UserSearchResult {
    return UserSearchResult.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UserSearchResult>, I>>(object: I): UserSearchResult {
    const message = createBaseUserSearchResult();
    message.meta = (object.meta !== undefined && object.meta !== null)
      ? UserSearchResultMeta.fromPartial(object.meta)
      : undefined;
    message.users = object.users?.map((e) => User.fromPartial(e)) || [];
    return message;
  },
};

function createBaseConversation(): Conversation {
  return { id: "", createdAt: 0, updatedAt: 0, participantIds: [], lastMessageAt: 0 };
}

export const Conversation = {
  encode(message: Conversation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.createdAt !== 0) {
      writer.uint32(16).uint64(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      writer.uint32(24).uint64(message.updatedAt);
    }
    for (const v of message.participantIds) {
      writer.uint32(34).string(v!);
    }
    if (message.lastMessageAt !== 0) {
      writer.uint32(40).uint64(message.lastMessageAt);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Conversation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConversation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.createdAt = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.updatedAt = longToNumber(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.participantIds.push(reader.string());
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.lastMessageAt = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Conversation {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      createdAt: isSet(object.createdAt) ? Number(object.createdAt) : 0,
      updatedAt: isSet(object.updatedAt) ? Number(object.updatedAt) : 0,
      participantIds: Array.isArray(object?.participantIds) ? object.participantIds.map((e: any) => String(e)) : [],
      lastMessageAt: isSet(object.lastMessageAt) ? Number(object.lastMessageAt) : 0,
    };
  },

  toJSON(message: Conversation): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.createdAt !== 0) {
      obj.createdAt = Math.round(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      obj.updatedAt = Math.round(message.updatedAt);
    }
    if (message.participantIds?.length) {
      obj.participantIds = message.participantIds;
    }
    if (message.lastMessageAt !== 0) {
      obj.lastMessageAt = Math.round(message.lastMessageAt);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Conversation>, I>>(base?: I): Conversation {
    return Conversation.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Conversation>, I>>(object: I): Conversation {
    const message = createBaseConversation();
    message.id = object.id ?? "";
    message.createdAt = object.createdAt ?? 0;
    message.updatedAt = object.updatedAt ?? 0;
    message.participantIds = object.participantIds?.map((e) => e) || [];
    message.lastMessageAt = object.lastMessageAt ?? 0;
    return message;
  },
};

function createBaseConversationCreateOneInput(): ConversationCreateOneInput {
  return { participantIds: [] };
}

export const ConversationCreateOneInput = {
  encode(message: ConversationCreateOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.participantIds) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConversationCreateOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConversationCreateOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 4:
          if (tag !== 34) {
            break;
          }

          message.participantIds.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConversationCreateOneInput {
    return {
      participantIds: Array.isArray(object?.participantIds) ? object.participantIds.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: ConversationCreateOneInput): unknown {
    const obj: any = {};
    if (message.participantIds?.length) {
      obj.participantIds = message.participantIds;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ConversationCreateOneInput>, I>>(base?: I): ConversationCreateOneInput {
    return ConversationCreateOneInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ConversationCreateOneInput>, I>>(object: I): ConversationCreateOneInput {
    const message = createBaseConversationCreateOneInput();
    message.participantIds = object.participantIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseConversationUpdateOneInput(): ConversationUpdateOneInput {
  return { id: "", participantIds: [], lastMessageAt: 0 };
}

export const ConversationUpdateOneInput = {
  encode(message: ConversationUpdateOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    for (const v of message.participantIds) {
      writer.uint32(34).string(v!);
    }
    if (message.lastMessageAt !== 0) {
      writer.uint32(40).uint64(message.lastMessageAt);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConversationUpdateOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConversationUpdateOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.participantIds.push(reader.string());
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.lastMessageAt = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConversationUpdateOneInput {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      participantIds: Array.isArray(object?.participantIds) ? object.participantIds.map((e: any) => String(e)) : [],
      lastMessageAt: isSet(object.lastMessageAt) ? Number(object.lastMessageAt) : 0,
    };
  },

  toJSON(message: ConversationUpdateOneInput): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.participantIds?.length) {
      obj.participantIds = message.participantIds;
    }
    if (message.lastMessageAt !== 0) {
      obj.lastMessageAt = Math.round(message.lastMessageAt);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ConversationUpdateOneInput>, I>>(base?: I): ConversationUpdateOneInput {
    return ConversationUpdateOneInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ConversationUpdateOneInput>, I>>(object: I): ConversationUpdateOneInput {
    const message = createBaseConversationUpdateOneInput();
    message.id = object.id ?? "";
    message.participantIds = object.participantIds?.map((e) => e) || [];
    message.lastMessageAt = object.lastMessageAt ?? 0;
    return message;
  },
};

function createBaseConversationFindOneInput(): ConversationFindOneInput {
  return { id: "" };
}

export const ConversationFindOneInput = {
  encode(message: ConversationFindOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConversationFindOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConversationFindOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConversationFindOneInput {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: ConversationFindOneInput): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ConversationFindOneInput>, I>>(base?: I): ConversationFindOneInput {
    return ConversationFindOneInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ConversationFindOneInput>, I>>(object: I): ConversationFindOneInput {
    const message = createBaseConversationFindOneInput();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseConversationRemoveOneInput(): ConversationRemoveOneInput {
  return { id: "" };
}

export const ConversationRemoveOneInput = {
  encode(message: ConversationRemoveOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConversationRemoveOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConversationRemoveOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConversationRemoveOneInput {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: ConversationRemoveOneInput): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ConversationRemoveOneInput>, I>>(base?: I): ConversationRemoveOneInput {
    return ConversationRemoveOneInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ConversationRemoveOneInput>, I>>(object: I): ConversationRemoveOneInput {
    const message = createBaseConversationRemoveOneInput();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseConversationFindByParticipantFilter(): ConversationFindByParticipantFilter {
  return { participantId: "", fromLastMessageAt: 0 };
}

export const ConversationFindByParticipantFilter = {
  encode(message: ConversationFindByParticipantFilter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.participantId !== "") {
      writer.uint32(10).string(message.participantId);
    }
    if (message.fromLastMessageAt !== 0) {
      writer.uint32(16).uint64(message.fromLastMessageAt);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConversationFindByParticipantFilter {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConversationFindByParticipantFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.participantId = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.fromLastMessageAt = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConversationFindByParticipantFilter {
    return {
      participantId: isSet(object.participantId) ? String(object.participantId) : "",
      fromLastMessageAt: isSet(object.fromLastMessageAt) ? Number(object.fromLastMessageAt) : 0,
    };
  },

  toJSON(message: ConversationFindByParticipantFilter): unknown {
    const obj: any = {};
    if (message.participantId !== "") {
      obj.participantId = message.participantId;
    }
    if (message.fromLastMessageAt !== 0) {
      obj.fromLastMessageAt = Math.round(message.fromLastMessageAt);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ConversationFindByParticipantFilter>, I>>(
    base?: I,
  ): ConversationFindByParticipantFilter {
    return ConversationFindByParticipantFilter.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ConversationFindByParticipantFilter>, I>>(
    object: I,
  ): ConversationFindByParticipantFilter {
    const message = createBaseConversationFindByParticipantFilter();
    message.participantId = object.participantId ?? "";
    message.fromLastMessageAt = object.fromLastMessageAt ?? 0;
    return message;
  },
};

function createBaseConversationFindByParticipantOpts(): ConversationFindByParticipantOpts {
  return { limit: 0, offset: 0 };
}

export const ConversationFindByParticipantOpts = {
  encode(message: ConversationFindByParticipantOpts, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.limit !== 0) {
      writer.uint32(8).uint64(message.limit);
    }
    if (message.offset !== 0) {
      writer.uint32(16).uint64(message.offset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConversationFindByParticipantOpts {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConversationFindByParticipantOpts();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.limit = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.offset = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConversationFindByParticipantOpts {
    return {
      limit: isSet(object.limit) ? Number(object.limit) : 0,
      offset: isSet(object.offset) ? Number(object.offset) : 0,
    };
  },

  toJSON(message: ConversationFindByParticipantOpts): unknown {
    const obj: any = {};
    if (message.limit !== 0) {
      obj.limit = Math.round(message.limit);
    }
    if (message.offset !== 0) {
      obj.offset = Math.round(message.offset);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ConversationFindByParticipantOpts>, I>>(
    base?: I,
  ): ConversationFindByParticipantOpts {
    return ConversationFindByParticipantOpts.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ConversationFindByParticipantOpts>, I>>(
    object: I,
  ): ConversationFindByParticipantOpts {
    const message = createBaseConversationFindByParticipantOpts();
    message.limit = object.limit ?? 0;
    message.offset = object.offset ?? 0;
    return message;
  },
};

function createBaseConversationFindByParticipantInput(): ConversationFindByParticipantInput {
  return { filter: undefined, opts: undefined };
}

export const ConversationFindByParticipantInput = {
  encode(message: ConversationFindByParticipantInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.filter !== undefined) {
      ConversationFindByParticipantFilter.encode(message.filter, writer.uint32(10).fork()).ldelim();
    }
    if (message.opts !== undefined) {
      ConversationFindByParticipantOpts.encode(message.opts, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConversationFindByParticipantInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConversationFindByParticipantInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.filter = ConversationFindByParticipantFilter.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.opts = ConversationFindByParticipantOpts.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConversationFindByParticipantInput {
    return {
      filter: isSet(object.filter) ? ConversationFindByParticipantFilter.fromJSON(object.filter) : undefined,
      opts: isSet(object.opts) ? ConversationFindByParticipantOpts.fromJSON(object.opts) : undefined,
    };
  },

  toJSON(message: ConversationFindByParticipantInput): unknown {
    const obj: any = {};
    if (message.filter !== undefined) {
      obj.filter = ConversationFindByParticipantFilter.toJSON(message.filter);
    }
    if (message.opts !== undefined) {
      obj.opts = ConversationFindByParticipantOpts.toJSON(message.opts);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ConversationFindByParticipantInput>, I>>(
    base?: I,
  ): ConversationFindByParticipantInput {
    return ConversationFindByParticipantInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ConversationFindByParticipantInput>, I>>(
    object: I,
  ): ConversationFindByParticipantInput {
    const message = createBaseConversationFindByParticipantInput();
    message.filter = (object.filter !== undefined && object.filter !== null)
      ? ConversationFindByParticipantFilter.fromPartial(object.filter)
      : undefined;
    message.opts = (object.opts !== undefined && object.opts !== null)
      ? ConversationFindByParticipantOpts.fromPartial(object.opts)
      : undefined;
    return message;
  },
};

function createBaseConversationFindByParticipantResultMeta(): ConversationFindByParticipantResultMeta {
  return { offset: 0 };
}

export const ConversationFindByParticipantResultMeta = {
  encode(message: ConversationFindByParticipantResultMeta, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.offset !== 0) {
      writer.uint32(8).uint64(message.offset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConversationFindByParticipantResultMeta {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConversationFindByParticipantResultMeta();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.offset = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConversationFindByParticipantResultMeta {
    return { offset: isSet(object.offset) ? Number(object.offset) : 0 };
  },

  toJSON(message: ConversationFindByParticipantResultMeta): unknown {
    const obj: any = {};
    if (message.offset !== 0) {
      obj.offset = Math.round(message.offset);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ConversationFindByParticipantResultMeta>, I>>(
    base?: I,
  ): ConversationFindByParticipantResultMeta {
    return ConversationFindByParticipantResultMeta.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ConversationFindByParticipantResultMeta>, I>>(
    object: I,
  ): ConversationFindByParticipantResultMeta {
    const message = createBaseConversationFindByParticipantResultMeta();
    message.offset = object.offset ?? 0;
    return message;
  },
};

function createBaseConversationFindByParticipantResult(): ConversationFindByParticipantResult {
  return { meta: undefined, results: [] };
}

export const ConversationFindByParticipantResult = {
  encode(message: ConversationFindByParticipantResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.meta !== undefined) {
      ConversationFindByParticipantResultMeta.encode(message.meta, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.results) {
      Conversation.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConversationFindByParticipantResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConversationFindByParticipantResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.meta = ConversationFindByParticipantResultMeta.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.results.push(Conversation.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConversationFindByParticipantResult {
    return {
      meta: isSet(object.meta) ? ConversationFindByParticipantResultMeta.fromJSON(object.meta) : undefined,
      results: Array.isArray(object?.results) ? object.results.map((e: any) => Conversation.fromJSON(e)) : [],
    };
  },

  toJSON(message: ConversationFindByParticipantResult): unknown {
    const obj: any = {};
    if (message.meta !== undefined) {
      obj.meta = ConversationFindByParticipantResultMeta.toJSON(message.meta);
    }
    if (message.results?.length) {
      obj.results = message.results.map((e) => Conversation.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ConversationFindByParticipantResult>, I>>(
    base?: I,
  ): ConversationFindByParticipantResult {
    return ConversationFindByParticipantResult.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ConversationFindByParticipantResult>, I>>(
    object: I,
  ): ConversationFindByParticipantResult {
    const message = createBaseConversationFindByParticipantResult();
    message.meta = (object.meta !== undefined && object.meta !== null)
      ? ConversationFindByParticipantResultMeta.fromPartial(object.meta)
      : undefined;
    message.results = object.results?.map((e) => Conversation.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMessage(): Message {
  return {
    id: "",
    createdAt: 0,
    updatedAt: 0,
    conversationId: "",
    media: undefined,
    senderId: "",
    sentToIds: [],
    receivedByIds: [],
    seenByIds: [],
    deleted: false,
    uniqueness: "",
  };
}

export const Message = {
  encode(message: Message, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.createdAt !== 0) {
      writer.uint32(16).uint64(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      writer.uint32(24).uint64(message.updatedAt);
    }
    if (message.conversationId !== "") {
      writer.uint32(34).string(message.conversationId);
    }
    if (message.media !== undefined) {
      MessageMedia.encode(message.media, writer.uint32(42).fork()).ldelim();
    }
    if (message.senderId !== "") {
      writer.uint32(50).string(message.senderId);
    }
    for (const v of message.sentToIds) {
      writer.uint32(58).string(v!);
    }
    for (const v of message.receivedByIds) {
      writer.uint32(66).string(v!);
    }
    for (const v of message.seenByIds) {
      writer.uint32(74).string(v!);
    }
    if (message.deleted === true) {
      writer.uint32(80).bool(message.deleted);
    }
    if (message.uniqueness !== "") {
      writer.uint32(90).string(message.uniqueness);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Message {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.createdAt = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.updatedAt = longToNumber(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.conversationId = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.media = MessageMedia.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.senderId = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.sentToIds.push(reader.string());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.receivedByIds.push(reader.string());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.seenByIds.push(reader.string());
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.deleted = reader.bool();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.uniqueness = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Message {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      createdAt: isSet(object.createdAt) ? Number(object.createdAt) : 0,
      updatedAt: isSet(object.updatedAt) ? Number(object.updatedAt) : 0,
      conversationId: isSet(object.conversationId) ? String(object.conversationId) : "",
      media: isSet(object.media) ? MessageMedia.fromJSON(object.media) : undefined,
      senderId: isSet(object.senderId) ? String(object.senderId) : "",
      sentToIds: Array.isArray(object?.sentToIds) ? object.sentToIds.map((e: any) => String(e)) : [],
      receivedByIds: Array.isArray(object?.receivedByIds) ? object.receivedByIds.map((e: any) => String(e)) : [],
      seenByIds: Array.isArray(object?.seenByIds) ? object.seenByIds.map((e: any) => String(e)) : [],
      deleted: isSet(object.deleted) ? Boolean(object.deleted) : false,
      uniqueness: isSet(object.uniqueness) ? String(object.uniqueness) : "",
    };
  },

  toJSON(message: Message): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.createdAt !== 0) {
      obj.createdAt = Math.round(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      obj.updatedAt = Math.round(message.updatedAt);
    }
    if (message.conversationId !== "") {
      obj.conversationId = message.conversationId;
    }
    if (message.media !== undefined) {
      obj.media = MessageMedia.toJSON(message.media);
    }
    if (message.senderId !== "") {
      obj.senderId = message.senderId;
    }
    if (message.sentToIds?.length) {
      obj.sentToIds = message.sentToIds;
    }
    if (message.receivedByIds?.length) {
      obj.receivedByIds = message.receivedByIds;
    }
    if (message.seenByIds?.length) {
      obj.seenByIds = message.seenByIds;
    }
    if (message.deleted === true) {
      obj.deleted = message.deleted;
    }
    if (message.uniqueness !== "") {
      obj.uniqueness = message.uniqueness;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Message>, I>>(base?: I): Message {
    return Message.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Message>, I>>(object: I): Message {
    const message = createBaseMessage();
    message.id = object.id ?? "";
    message.createdAt = object.createdAt ?? 0;
    message.updatedAt = object.updatedAt ?? 0;
    message.conversationId = object.conversationId ?? "";
    message.media = (object.media !== undefined && object.media !== null)
      ? MessageMedia.fromPartial(object.media)
      : undefined;
    message.senderId = object.senderId ?? "";
    message.sentToIds = object.sentToIds?.map((e) => e) || [];
    message.receivedByIds = object.receivedByIds?.map((e) => e) || [];
    message.seenByIds = object.seenByIds?.map((e) => e) || [];
    message.deleted = object.deleted ?? false;
    message.uniqueness = object.uniqueness ?? "";
    return message;
  },
};

function createBaseMessageMedia(): MessageMedia {
  return { text: "" };
}

export const MessageMedia = {
  encode(message: MessageMedia, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.text !== "") {
      writer.uint32(10).string(message.text);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MessageMedia {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessageMedia();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.text = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MessageMedia {
    return { text: isSet(object.text) ? String(object.text) : "" };
  },

  toJSON(message: MessageMedia): unknown {
    const obj: any = {};
    if (message.text !== "") {
      obj.text = message.text;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MessageMedia>, I>>(base?: I): MessageMedia {
    return MessageMedia.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MessageMedia>, I>>(object: I): MessageMedia {
    const message = createBaseMessageMedia();
    message.text = object.text ?? "";
    return message;
  },
};

function createBaseMessageCreateOneInput(): MessageCreateOneInput {
  return { conversationId: "", media: undefined, senderId: "", uniqueness: "" };
}

export const MessageCreateOneInput = {
  encode(message: MessageCreateOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.conversationId !== "") {
      writer.uint32(34).string(message.conversationId);
    }
    if (message.media !== undefined) {
      MessageMedia.encode(message.media, writer.uint32(42).fork()).ldelim();
    }
    if (message.senderId !== "") {
      writer.uint32(50).string(message.senderId);
    }
    if (message.uniqueness !== "") {
      writer.uint32(90).string(message.uniqueness);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MessageCreateOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessageCreateOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 4:
          if (tag !== 34) {
            break;
          }

          message.conversationId = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.media = MessageMedia.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.senderId = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.uniqueness = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MessageCreateOneInput {
    return {
      conversationId: isSet(object.conversationId) ? String(object.conversationId) : "",
      media: isSet(object.media) ? MessageMedia.fromJSON(object.media) : undefined,
      senderId: isSet(object.senderId) ? String(object.senderId) : "",
      uniqueness: isSet(object.uniqueness) ? String(object.uniqueness) : "",
    };
  },

  toJSON(message: MessageCreateOneInput): unknown {
    const obj: any = {};
    if (message.conversationId !== "") {
      obj.conversationId = message.conversationId;
    }
    if (message.media !== undefined) {
      obj.media = MessageMedia.toJSON(message.media);
    }
    if (message.senderId !== "") {
      obj.senderId = message.senderId;
    }
    if (message.uniqueness !== "") {
      obj.uniqueness = message.uniqueness;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MessageCreateOneInput>, I>>(base?: I): MessageCreateOneInput {
    return MessageCreateOneInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MessageCreateOneInput>, I>>(object: I): MessageCreateOneInput {
    const message = createBaseMessageCreateOneInput();
    message.conversationId = object.conversationId ?? "";
    message.media = (object.media !== undefined && object.media !== null)
      ? MessageMedia.fromPartial(object.media)
      : undefined;
    message.senderId = object.senderId ?? "";
    message.uniqueness = object.uniqueness ?? "";
    return message;
  },
};

function createBaseMessageUpdateOneInput(): MessageUpdateOneInput {
  return { id: "", media: undefined };
}

export const MessageUpdateOneInput = {
  encode(message: MessageUpdateOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.media !== undefined) {
      MessageMedia.encode(message.media, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MessageUpdateOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessageUpdateOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.media = MessageMedia.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MessageUpdateOneInput {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      media: isSet(object.media) ? MessageMedia.fromJSON(object.media) : undefined,
    };
  },

  toJSON(message: MessageUpdateOneInput): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.media !== undefined) {
      obj.media = MessageMedia.toJSON(message.media);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MessageUpdateOneInput>, I>>(base?: I): MessageUpdateOneInput {
    return MessageUpdateOneInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MessageUpdateOneInput>, I>>(object: I): MessageUpdateOneInput {
    const message = createBaseMessageUpdateOneInput();
    message.id = object.id ?? "";
    message.media = (object.media !== undefined && object.media !== null)
      ? MessageMedia.fromPartial(object.media)
      : undefined;
    return message;
  },
};

function createBaseMessageFindOneInput(): MessageFindOneInput {
  return { id: "" };
}

export const MessageFindOneInput = {
  encode(message: MessageFindOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MessageFindOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessageFindOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MessageFindOneInput {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: MessageFindOneInput): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MessageFindOneInput>, I>>(base?: I): MessageFindOneInput {
    return MessageFindOneInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MessageFindOneInput>, I>>(object: I): MessageFindOneInput {
    const message = createBaseMessageFindOneInput();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseMessageFindUniqueInput(): MessageFindUniqueInput {
  return { uniqueness: "" };
}

export const MessageFindUniqueInput = {
  encode(message: MessageFindUniqueInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uniqueness !== "") {
      writer.uint32(10).string(message.uniqueness);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MessageFindUniqueInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessageFindUniqueInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.uniqueness = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MessageFindUniqueInput {
    return { uniqueness: isSet(object.uniqueness) ? String(object.uniqueness) : "" };
  },

  toJSON(message: MessageFindUniqueInput): unknown {
    const obj: any = {};
    if (message.uniqueness !== "") {
      obj.uniqueness = message.uniqueness;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MessageFindUniqueInput>, I>>(base?: I): MessageFindUniqueInput {
    return MessageFindUniqueInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MessageFindUniqueInput>, I>>(object: I): MessageFindUniqueInput {
    const message = createBaseMessageFindUniqueInput();
    message.uniqueness = object.uniqueness ?? "";
    return message;
  },
};

function createBaseMessageRemoveOneInput(): MessageRemoveOneInput {
  return { id: "" };
}

export const MessageRemoveOneInput = {
  encode(message: MessageRemoveOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MessageRemoveOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessageRemoveOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MessageRemoveOneInput {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: MessageRemoveOneInput): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MessageRemoveOneInput>, I>>(base?: I): MessageRemoveOneInput {
    return MessageRemoveOneInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MessageRemoveOneInput>, I>>(object: I): MessageRemoveOneInput {
    const message = createBaseMessageRemoveOneInput();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseMessageFindByConversationFilter(): MessageFindByConversationFilter {
  return { conversationId: "" };
}

export const MessageFindByConversationFilter = {
  encode(message: MessageFindByConversationFilter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.conversationId !== "") {
      writer.uint32(10).string(message.conversationId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MessageFindByConversationFilter {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessageFindByConversationFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.conversationId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MessageFindByConversationFilter {
    return { conversationId: isSet(object.conversationId) ? String(object.conversationId) : "" };
  },

  toJSON(message: MessageFindByConversationFilter): unknown {
    const obj: any = {};
    if (message.conversationId !== "") {
      obj.conversationId = message.conversationId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MessageFindByConversationFilter>, I>>(base?: I): MessageFindByConversationFilter {
    return MessageFindByConversationFilter.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MessageFindByConversationFilter>, I>>(
    object: I,
  ): MessageFindByConversationFilter {
    const message = createBaseMessageFindByConversationFilter();
    message.conversationId = object.conversationId ?? "";
    return message;
  },
};

function createBaseMessageFindByConversationOpts(): MessageFindByConversationOpts {
  return { limit: 0, offset: 0 };
}

export const MessageFindByConversationOpts = {
  encode(message: MessageFindByConversationOpts, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.limit !== 0) {
      writer.uint32(8).uint64(message.limit);
    }
    if (message.offset !== 0) {
      writer.uint32(16).uint64(message.offset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MessageFindByConversationOpts {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessageFindByConversationOpts();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.limit = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.offset = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MessageFindByConversationOpts {
    return {
      limit: isSet(object.limit) ? Number(object.limit) : 0,
      offset: isSet(object.offset) ? Number(object.offset) : 0,
    };
  },

  toJSON(message: MessageFindByConversationOpts): unknown {
    const obj: any = {};
    if (message.limit !== 0) {
      obj.limit = Math.round(message.limit);
    }
    if (message.offset !== 0) {
      obj.offset = Math.round(message.offset);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MessageFindByConversationOpts>, I>>(base?: I): MessageFindByConversationOpts {
    return MessageFindByConversationOpts.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MessageFindByConversationOpts>, I>>(
    object: I,
  ): MessageFindByConversationOpts {
    const message = createBaseMessageFindByConversationOpts();
    message.limit = object.limit ?? 0;
    message.offset = object.offset ?? 0;
    return message;
  },
};

function createBaseMessageFindByConversationInput(): MessageFindByConversationInput {
  return { filter: undefined, opts: undefined };
}

export const MessageFindByConversationInput = {
  encode(message: MessageFindByConversationInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.filter !== undefined) {
      MessageFindByConversationFilter.encode(message.filter, writer.uint32(10).fork()).ldelim();
    }
    if (message.opts !== undefined) {
      MessageFindByConversationOpts.encode(message.opts, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MessageFindByConversationInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessageFindByConversationInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.filter = MessageFindByConversationFilter.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.opts = MessageFindByConversationOpts.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MessageFindByConversationInput {
    return {
      filter: isSet(object.filter) ? MessageFindByConversationFilter.fromJSON(object.filter) : undefined,
      opts: isSet(object.opts) ? MessageFindByConversationOpts.fromJSON(object.opts) : undefined,
    };
  },

  toJSON(message: MessageFindByConversationInput): unknown {
    const obj: any = {};
    if (message.filter !== undefined) {
      obj.filter = MessageFindByConversationFilter.toJSON(message.filter);
    }
    if (message.opts !== undefined) {
      obj.opts = MessageFindByConversationOpts.toJSON(message.opts);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MessageFindByConversationInput>, I>>(base?: I): MessageFindByConversationInput {
    return MessageFindByConversationInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MessageFindByConversationInput>, I>>(
    object: I,
  ): MessageFindByConversationInput {
    const message = createBaseMessageFindByConversationInput();
    message.filter = (object.filter !== undefined && object.filter !== null)
      ? MessageFindByConversationFilter.fromPartial(object.filter)
      : undefined;
    message.opts = (object.opts !== undefined && object.opts !== null)
      ? MessageFindByConversationOpts.fromPartial(object.opts)
      : undefined;
    return message;
  },
};

function createBaseMessageFindByConversationResultMeta(): MessageFindByConversationResultMeta {
  return { offset: 0 };
}

export const MessageFindByConversationResultMeta = {
  encode(message: MessageFindByConversationResultMeta, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.offset !== 0) {
      writer.uint32(8).uint64(message.offset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MessageFindByConversationResultMeta {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessageFindByConversationResultMeta();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.offset = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MessageFindByConversationResultMeta {
    return { offset: isSet(object.offset) ? Number(object.offset) : 0 };
  },

  toJSON(message: MessageFindByConversationResultMeta): unknown {
    const obj: any = {};
    if (message.offset !== 0) {
      obj.offset = Math.round(message.offset);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MessageFindByConversationResultMeta>, I>>(
    base?: I,
  ): MessageFindByConversationResultMeta {
    return MessageFindByConversationResultMeta.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MessageFindByConversationResultMeta>, I>>(
    object: I,
  ): MessageFindByConversationResultMeta {
    const message = createBaseMessageFindByConversationResultMeta();
    message.offset = object.offset ?? 0;
    return message;
  },
};

function createBaseMessageFindByConversationResult(): MessageFindByConversationResult {
  return { meta: undefined, results: [] };
}

export const MessageFindByConversationResult = {
  encode(message: MessageFindByConversationResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.meta !== undefined) {
      MessageFindByConversationResultMeta.encode(message.meta, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.results) {
      Message.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MessageFindByConversationResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessageFindByConversationResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.meta = MessageFindByConversationResultMeta.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.results.push(Message.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MessageFindByConversationResult {
    return {
      meta: isSet(object.meta) ? MessageFindByConversationResultMeta.fromJSON(object.meta) : undefined,
      results: Array.isArray(object?.results) ? object.results.map((e: any) => Message.fromJSON(e)) : [],
    };
  },

  toJSON(message: MessageFindByConversationResult): unknown {
    const obj: any = {};
    if (message.meta !== undefined) {
      obj.meta = MessageFindByConversationResultMeta.toJSON(message.meta);
    }
    if (message.results?.length) {
      obj.results = message.results.map((e) => Message.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MessageFindByConversationResult>, I>>(base?: I): MessageFindByConversationResult {
    return MessageFindByConversationResult.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MessageFindByConversationResult>, I>>(
    object: I,
  ): MessageFindByConversationResult {
    const message = createBaseMessageFindByConversationResult();
    message.meta = (object.meta !== undefined && object.meta !== null)
      ? MessageFindByConversationResultMeta.fromPartial(object.meta)
      : undefined;
    message.results = object.results?.map((e) => Message.fromPartial(e)) || [];
    return message;
  },
};

function createBaseIntRange(): IntRange {
  return { min: 0, max: 0 };
}

export const IntRange = {
  encode(message: IntRange, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.min !== 0) {
      writer.uint32(8).uint32(message.min);
    }
    if (message.max !== 0) {
      writer.uint32(16).uint32(message.max);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IntRange {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIntRange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.min = reader.uint32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.max = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): IntRange {
    return { min: isSet(object.min) ? Number(object.min) : 0, max: isSet(object.max) ? Number(object.max) : 0 };
  },

  toJSON(message: IntRange): unknown {
    const obj: any = {};
    if (message.min !== 0) {
      obj.min = Math.round(message.min);
    }
    if (message.max !== 0) {
      obj.max = Math.round(message.max);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<IntRange>, I>>(base?: I): IntRange {
    return IntRange.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<IntRange>, I>>(object: I): IntRange {
    const message = createBaseIntRange();
    message.min = object.min ?? 0;
    message.max = object.max ?? 0;
    return message;
  },
};

function createBaseDummyJobPayload(): DummyJobPayload {
  return { id: "" };
}

export const DummyJobPayload = {
  encode(message: DummyJobPayload, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DummyJobPayload {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDummyJobPayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DummyJobPayload {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: DummyJobPayload): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DummyJobPayload>, I>>(base?: I): DummyJobPayload {
    return DummyJobPayload.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DummyJobPayload>, I>>(object: I): DummyJobPayload {
    const message = createBaseDummyJobPayload();
    message.id = object.id ?? "";
    return message;
  },
};

function createBasePublishJobInput(): PublishJobInput {
  return { dummyJobPayload: undefined };
}

export const PublishJobInput = {
  encode(message: PublishJobInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dummyJobPayload !== undefined) {
      DummyJobPayload.encode(message.dummyJobPayload, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PublishJobInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePublishJobInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 10:
          if (tag !== 82) {
            break;
          }

          message.dummyJobPayload = DummyJobPayload.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PublishJobInput {
    return {
      dummyJobPayload: isSet(object.dummyJobPayload) ? DummyJobPayload.fromJSON(object.dummyJobPayload) : undefined,
    };
  },

  toJSON(message: PublishJobInput): unknown {
    const obj: any = {};
    if (message.dummyJobPayload !== undefined) {
      obj.dummyJobPayload = DummyJobPayload.toJSON(message.dummyJobPayload);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PublishJobInput>, I>>(base?: I): PublishJobInput {
    return PublishJobInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PublishJobInput>, I>>(object: I): PublishJobInput {
    const message = createBasePublishJobInput();
    message.dummyJobPayload = (object.dummyJobPayload !== undefined && object.dummyJobPayload !== null)
      ? DummyJobPayload.fromPartial(object.dummyJobPayload)
      : undefined;
    return message;
  },
};

function createBasePublishJobResult(): PublishJobResult {
  return { jobId: "" };
}

export const PublishJobResult = {
  encode(message: PublishJobResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.jobId !== "") {
      writer.uint32(10).string(message.jobId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PublishJobResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePublishJobResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.jobId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PublishJobResult {
    return { jobId: isSet(object.jobId) ? String(object.jobId) : "" };
  },

  toJSON(message: PublishJobResult): unknown {
    const obj: any = {};
    if (message.jobId !== "") {
      obj.jobId = message.jobId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PublishJobResult>, I>>(base?: I): PublishJobResult {
    return PublishJobResult.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PublishJobResult>, I>>(object: I): PublishJobResult {
    const message = createBasePublishJobResult();
    message.jobId = object.jobId ?? "";
    return message;
  },
};

export interface DummyService {
  CreateOne(request: DummyCreateOneInput): Promise<Dummy>;
  UpdateOne(request: DummyUpdateOneInput): Promise<Dummy>;
  FindOne(request: DummyFindOneInput): Promise<Dummy>;
  RemoveOne(request: DummyRemoveOneInput): Promise<Empty>;
  Search(request: DummySearchInput): Promise<DummySearchResult>;
}

export interface LoginService {
  CreateOne(request: LoginCreateOneInput): Promise<Login>;
  FindOne(request: LoginFindOneInput): Promise<Login>;
  FindWhere(request: LoginFindWhereInput): Promise<Login>;
  FindByPlatformId(request: LoginFindByPlatformIdInput): Promise<Login>;
  UpdateOne(request: LoginUpdateOneInput): Promise<Login>;
  RemoveOne(request: LoginRemoveOneInput): Promise<Empty>;
}

export interface PermissionService {
  CreateOne(request: PermissionCreateOneInput): Promise<Permission>;
  FindOne(request: PermissionFindOneInput): Promise<Permission>;
  FindWhere(request: PermissionFindWhereInput): Promise<Permission>;
  FindWhereOrStar(request: PermissionFindWhereOrStarInput): Promise<Permission>;
  FindByPermitted(request: PermissionFindByPermittedInput): Promise<PermissionFindByPermittedResult>;
  FindAllActions(request: PermissionFindAllActionsInput): Promise<PermissionFindAllActionsResult>;
  ValidateOne(request: PermissionValidateOneInput): Promise<PermissionValidateOneResult>;
  RemoveOne(request: PermissionRemoveOneInput): Promise<Empty>;
  RemoveWhere(request: PermissionRemoveWhereInput): Promise<Empty>;
  RemoveAllActions(request: PermissionRemoveAllActionsInput): Promise<Empty>;
}

export interface UserFollowService {
  CreateOne(request: UserFollowCreateOneInput): Promise<Follower>;
  RemoveOne(request: UserFollowRemoveOneInput): Promise<Follower>;
  FindFollowers(request: UserFindFollowersInput): Promise<UserFindFollowersResult>;
  FindFollowees(request: UserFindFolloweesInput): Promise<UserFindFolloweesResult>;
}

export interface UserService {
  CreateOne(request: UserCreateOneInput): Promise<User>;
  UpdateOne(request: UserUpdateOneInput): Promise<User>;
  FindOne(request: UserFindOneInput): Promise<User>;
  RemoveOne(request: UserRemoveOneInput): Promise<Empty>;
  Search(request: UserSearchInput): Promise<UserSearchResult>;
}

export interface ConversationService {
  CreateOne(request: ConversationCreateOneInput): Promise<Conversation>;
  UpdateOne(request: ConversationUpdateOneInput): Promise<Conversation>;
  FindOne(request: ConversationFindOneInput): Promise<Conversation>;
  RemoveOne(request: ConversationRemoveOneInput): Promise<Conversation>;
  FindByParticipant(request: ConversationFindByParticipantInput): Promise<ConversationFindByParticipantResult>;
}

export interface MessageService {
  CreateOne(request: MessageCreateOneInput): Promise<Message>;
  UpdateOne(request: MessageUpdateOneInput): Promise<Message>;
  FindOne(request: MessageFindOneInput): Promise<Message>;
  FindUnique(request: MessageFindUniqueInput): Promise<Message>;
  RemoveOne(request: MessageRemoveOneInput): Promise<Message>;
  FindByConversation(request: MessageFindByConversationInput): Promise<MessageFindByConversationResult>;
}

export interface WorkersService {
  PublishJob(request: PublishJobInput): Promise<PublishJobResult>;
}

declare const self: any | undefined;
declare const window: any | undefined;
declare const global: any | undefined;
const tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
