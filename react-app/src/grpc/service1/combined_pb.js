// source: combined.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
goog.object.extend(proto, google_protobuf_empty_pb);
goog.exportSymbol('proto.main.Conversation', null, global);
goog.exportSymbol('proto.main.ConversationCreateOneInput', null, global);
goog.exportSymbol('proto.main.ConversationFindByParticipantFilter', null, global);
goog.exportSymbol('proto.main.ConversationFindByParticipantInput', null, global);
goog.exportSymbol('proto.main.ConversationFindByParticipantOpts', null, global);
goog.exportSymbol('proto.main.ConversationFindByParticipantResult', null, global);
goog.exportSymbol('proto.main.ConversationFindByParticipantResultMeta', null, global);
goog.exportSymbol('proto.main.ConversationFindOneInput', null, global);
goog.exportSymbol('proto.main.ConversationFindTempsInput', null, global);
goog.exportSymbol('proto.main.ConversationRemoveOneInput', null, global);
goog.exportSymbol('proto.main.ConversationRemoveTempsInput', null, global);
goog.exportSymbol('proto.main.ConversationUpdateOneInput', null, global);
goog.exportSymbol('proto.main.Credentials', null, global);
goog.exportSymbol('proto.main.Credentials.CredentialsCase', null, global);
goog.exportSymbol('proto.main.Dummy', null, global);
goog.exportSymbol('proto.main.DummyCreateOneInput', null, global);
goog.exportSymbol('proto.main.DummyFindOneInput', null, global);
goog.exportSymbol('proto.main.DummyJobPayload', null, global);
goog.exportSymbol('proto.main.DummyRemoveOneInput', null, global);
goog.exportSymbol('proto.main.DummySearchFilter', null, global);
goog.exportSymbol('proto.main.DummySearchInput', null, global);
goog.exportSymbol('proto.main.DummySearchOpts', null, global);
goog.exportSymbol('proto.main.DummySearchResult', null, global);
goog.exportSymbol('proto.main.DummySearchResultMeta', null, global);
goog.exportSymbol('proto.main.DummyUpdateOneInput', null, global);
goog.exportSymbol('proto.main.Followee', null, global);
goog.exportSymbol('proto.main.Follower', null, global);
goog.exportSymbol('proto.main.GoogleCredentials', null, global);
goog.exportSymbol('proto.main.HealthChekcResult', null, global);
goog.exportSymbol('proto.main.IntRange', null, global);
goog.exportSymbol('proto.main.LocalCredentials', null, global);
goog.exportSymbol('proto.main.Login', null, global);
goog.exportSymbol('proto.main.LoginCreateOneInput', null, global);
goog.exportSymbol('proto.main.LoginFindByPlatformIdInput', null, global);
goog.exportSymbol('proto.main.LoginFindOneInput', null, global);
goog.exportSymbol('proto.main.LoginFindWhereInput', null, global);
goog.exportSymbol('proto.main.LoginRemoveOneInput', null, global);
goog.exportSymbol('proto.main.LoginUpdateOneInput', null, global);
goog.exportSymbol('proto.main.Maturity', null, global);
goog.exportSymbol('proto.main.Message', null, global);
goog.exportSymbol('proto.main.MessageCreateOneInput', null, global);
goog.exportSymbol('proto.main.MessageFindByConversationFilter', null, global);
goog.exportSymbol('proto.main.MessageFindByConversationInput', null, global);
goog.exportSymbol('proto.main.MessageFindByConversationOpts', null, global);
goog.exportSymbol('proto.main.MessageFindByConversationResult', null, global);
goog.exportSymbol('proto.main.MessageFindByConversationResultMeta', null, global);
goog.exportSymbol('proto.main.MessageFindOneInput', null, global);
goog.exportSymbol('proto.main.MessageFindUniqueInput', null, global);
goog.exportSymbol('proto.main.MessageMedia', null, global);
goog.exportSymbol('proto.main.MessageRemoveOneInput', null, global);
goog.exportSymbol('proto.main.MessageUpdateOneInput', null, global);
goog.exportSymbol('proto.main.Permission', null, global);
goog.exportSymbol('proto.main.PermissionCreateManyInput', null, global);
goog.exportSymbol('proto.main.PermissionCreateOneInput', null, global);
goog.exportSymbol('proto.main.PermissionFindAllActionsFilter', null, global);
goog.exportSymbol('proto.main.PermissionFindAllActionsInput', null, global);
goog.exportSymbol('proto.main.PermissionFindAllActionsOpts', null, global);
goog.exportSymbol('proto.main.PermissionFindAllActionsResult', null, global);
goog.exportSymbol('proto.main.PermissionFindAllActionsResultMeta', null, global);
goog.exportSymbol('proto.main.PermissionFindByEntityFilter', null, global);
goog.exportSymbol('proto.main.PermissionFindByEntityInput', null, global);
goog.exportSymbol('proto.main.PermissionFindByEntityOpts', null, global);
goog.exportSymbol('proto.main.PermissionFindByEntityResult', null, global);
goog.exportSymbol('proto.main.PermissionFindByEntityResultMeta', null, global);
goog.exportSymbol('proto.main.PermissionFindByPermittedFilter', null, global);
goog.exportSymbol('proto.main.PermissionFindByPermittedInput', null, global);
goog.exportSymbol('proto.main.PermissionFindByPermittedOpts', null, global);
goog.exportSymbol('proto.main.PermissionFindByPermittedResult', null, global);
goog.exportSymbol('proto.main.PermissionFindByPermittedResultMeta', null, global);
goog.exportSymbol('proto.main.PermissionFindOneInput', null, global);
goog.exportSymbol('proto.main.PermissionFindWhereInput', null, global);
goog.exportSymbol('proto.main.PermissionFindWhereManyInput', null, global);
goog.exportSymbol('proto.main.PermissionFindWhereOrStarInput', null, global);
goog.exportSymbol('proto.main.PermissionRemoveAllActionsFilter', null, global);
goog.exportSymbol('proto.main.PermissionRemoveAllActionsInput', null, global);
goog.exportSymbol('proto.main.PermissionRemoveOneInput', null, global);
goog.exportSymbol('proto.main.PermissionRemoveWhereInput', null, global);
goog.exportSymbol('proto.main.PermissionRemoveWhereManyInput', null, global);
goog.exportSymbol('proto.main.PermissionValidateOneInput', null, global);
goog.exportSymbol('proto.main.PermissionValidateOneResult', null, global);
goog.exportSymbol('proto.main.Permissions', null, global);
goog.exportSymbol('proto.main.Permitted', null, global);
goog.exportSymbol('proto.main.PublishJobInput', null, global);
goog.exportSymbol('proto.main.PublishJobResult', null, global);
goog.exportSymbol('proto.main.User', null, global);
goog.exportSymbol('proto.main.UserCreateOneInput', null, global);
goog.exportSymbol('proto.main.UserFindFolloweesFilter', null, global);
goog.exportSymbol('proto.main.UserFindFolloweesInput', null, global);
goog.exportSymbol('proto.main.UserFindFolloweesOpts', null, global);
goog.exportSymbol('proto.main.UserFindFolloweesResult', null, global);
goog.exportSymbol('proto.main.UserFindFolloweesResultMeta', null, global);
goog.exportSymbol('proto.main.UserFindFollowersFilter', null, global);
goog.exportSymbol('proto.main.UserFindFollowersInput', null, global);
goog.exportSymbol('proto.main.UserFindFollowersOpts', null, global);
goog.exportSymbol('proto.main.UserFindFollowersResult', null, global);
goog.exportSymbol('proto.main.UserFindFollowersResultMeta', null, global);
goog.exportSymbol('proto.main.UserFindOneInput', null, global);
goog.exportSymbol('proto.main.UserFollowCreateOneInput', null, global);
goog.exportSymbol('proto.main.UserFollowRemoveOneInput', null, global);
goog.exportSymbol('proto.main.UserRemoveOneInput', null, global);
goog.exportSymbol('proto.main.UserSearchFilter', null, global);
goog.exportSymbol('proto.main.UserSearchInput', null, global);
goog.exportSymbol('proto.main.UserSearchOpts', null, global);
goog.exportSymbol('proto.main.UserSearchResult', null, global);
goog.exportSymbol('proto.main.UserSearchResultMeta', null, global);
goog.exportSymbol('proto.main.UserUpdateOneInput', null, global);
goog.exportSymbol('proto.main.WorkersHealthCheckResult', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.Dummy = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.main.Dummy, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.Dummy.displayName = 'proto.main.Dummy';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.DummyCreateOneInput = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.main.DummyCreateOneInput, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.DummyCreateOneInput.displayName = 'proto.main.DummyCreateOneInput';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.DummyUpdateOneInput = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.main.DummyUpdateOneInput, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.DummyUpdateOneInput.displayName = 'proto.main.DummyUpdateOneInput';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.DummyFindOneInput = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.main.DummyFindOneInput, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.DummyFindOneInput.displayName = 'proto.main.DummyFindOneInput';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.DummyRemoveOneInput = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.main.DummyRemoveOneInput, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.DummyRemoveOneInput.displayName = 'proto.main.DummyRemoveOneInput';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.DummySearchFilter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.main.DummySearchFilter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.DummySearchFilter.displayName = 'proto.main.DummySearchFilter';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.DummySearchOpts = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.main.DummySearchOpts, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.DummySearchOpts.displayName = 'proto.main.DummySearchOpts';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.DummySearchInput = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.main.DummySearchInput, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.DummySearchInput.displayName = 'proto.main.DummySearchInput';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.DummySearchResultMeta = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.main.DummySearchResultMeta, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.DummySearchResultMeta.displayName = 'proto.main.DummySearchResultMeta';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.DummySearchResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.main.DummySearchResult.repeatedFields_, null);
};
goog.inherits(proto.main.DummySearchResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.DummySearchResult.displayName = 'proto.main.DummySearchResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.DummyJobPayload = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.main.DummyJobPayload, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.DummyJobPayload.displayName = 'proto.main.DummyJobPayload';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.PublishJobInput = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.main.PublishJobInput, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.PublishJobInput.displayName = 'proto.main.PublishJobInput';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.Login = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.main.Login, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.Login.displayName = 'proto.main.Login';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.Credentials = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.main.Credentials.oneofGroups_);
};
goog.inherits(proto.main.Credentials, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.Credentials.displayName = 'proto.main.Credentials';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.LocalCredentials = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.main.LocalCredentials, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.LocalCredentials.displayName = 'proto.main.LocalCredentials';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.GoogleCredentials = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.main.GoogleCredentials, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.GoogleCredentials.displayName = 'proto.main.GoogleCredentials';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.LoginCreateOneInput = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.main.LoginCreateOneInput, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.LoginCreateOneInput.displayName = 'proto.main.LoginCreateOneInput';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.LoginUpdateOneInput = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.main.LoginUpdateOneInput, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.LoginUpdateOneInput.displayName = 'proto.main.LoginUpdateOneInput';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.LoginFindOneInput = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.main.LoginFindOneInput, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.LoginFindOneInput.displayName = 'proto.main.LoginFindOneInput';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.LoginFindWhereInput = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.main.LoginFindWhereInput, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.LoginFindWhereInput.displayName = 'proto.main.LoginFindWhereInput';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.LoginFindByPlatformIdInput = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.main.LoginFindByPlatformIdInput, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.LoginFindByPlatformIdInput.displayName = 'proto.main.LoginFindByPlatformIdInput';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.LoginRemoveOneInput = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.main.LoginRemoveOneInput, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.LoginRemoveOneInput.displayName = 'proto.main.LoginRemoveOneInput';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.User = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.main.User, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.User.displayName = 'proto.main.User';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.UserCreateOneInput = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.main.UserCreateOneInput, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.UserCreateOneInput.displayName = 'proto.main.UserCreateOneInput';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.UserUpdateOneInput = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.main.UserUpdateOneInput, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.UserUpdateOneInput.displayName = 'proto.main.UserUpdateOneInput';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.UserFindOneInput = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.main.UserFindOneInput, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.UserFindOneInput.displayName = 'proto.main.UserFindOneInput';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.UserRemoveOneInput = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.main.UserRemoveOneInput, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.UserRemoveOneInput.displayName = 'proto.main.UserRemoveOneInput';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.UserSearchFilter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.main.UserSearchFilter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.UserSearchFilter.displayName = 'proto.main.UserSearchFilter';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.UserSearchOpts = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.main.UserSearchOpts, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.UserSearchOpts.displayName = 'proto.main.UserSearchOpts';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.UserSearchInput = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.main.UserSearchInput, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.UserSearchInput.displayName = 'proto.main.UserSearchInput';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.UserSearchResultMeta = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.main.UserSearchResultMeta, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.UserSearchResultMeta.displayName = 'proto.main.UserSearchResultMeta';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.UserSearchResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.main.UserSearchResult.repeatedFields_, null);
};
goog.inherits(proto.main.UserSearchResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.UserSearchResult.displayName = 'proto.main.UserSearchResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.HealthChekcResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.main.HealthChekcResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.HealthChekcResult.displayName = 'proto.main.HealthChekcResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.IntRange = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.main.IntRange, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.IntRange.displayName = 'proto.main.IntRange';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.Conversation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.main.Conversation.repeatedFields_, null);
};
goog.inherits(proto.main.Conversation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.Conversation.displayName = 'proto.main.Conversation';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.ConversationCreateOneInput = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.main.ConversationCreateOneInput.repeatedFields_, null);
};
goog.inherits(proto.main.ConversationCreateOneInput, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.ConversationCreateOneInput.displayName = 'proto.main.ConversationCreateOneInput';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.ConversationUpdateOneInput = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.main.ConversationUpdateOneInput.repeatedFields_, null);
};
goog.inherits(proto.main.ConversationUpdateOneInput, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.ConversationUpdateOneInput.displayName = 'proto.main.ConversationUpdateOneInput';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.ConversationFindOneInput = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.main.ConversationFindOneInput, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.ConversationFindOneInput.displayName = 'proto.main.ConversationFindOneInput';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.ConversationRemoveOneInput = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.main.ConversationRemoveOneInput, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.ConversationRemoveOneInput.displayName = 'proto.main.ConversationRemoveOneInput';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.ConversationFindByParticipantFilter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.main.ConversationFindByParticipantFilter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.ConversationFindByParticipantFilter.displayName = 'proto.main.ConversationFindByParticipantFilter';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.ConversationFindByParticipantOpts = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.main.ConversationFindByParticipantOpts, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.ConversationFindByParticipantOpts.displayName = 'proto.main.ConversationFindByParticipantOpts';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.ConversationFindByParticipantInput = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.main.ConversationFindByParticipantInput, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.ConversationFindByParticipantInput.displayName = 'proto.main.ConversationFindByParticipantInput';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.ConversationFindByParticipantResultMeta = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.main.ConversationFindByParticipantResultMeta, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.ConversationFindByParticipantResultMeta.displayName = 'proto.main.ConversationFindByParticipantResultMeta';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.ConversationFindByParticipantResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.main.ConversationFindByParticipantResult.repeatedFields_, null);
};
goog.inherits(proto.main.ConversationFindByParticipantResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.ConversationFindByParticipantResult.displayName = 'proto.main.ConversationFindByParticipantResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.ConversationFindTempsInput = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.main.ConversationFindTempsInput, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.ConversationFindTempsInput.displayName = 'proto.main.ConversationFindTempsInput';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.ConversationRemoveTempsInput = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.main.ConversationRemoveTempsInput, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.ConversationRemoveTempsInput.displayName = 'proto.main.ConversationRemoveTempsInput';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.Message = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.main.Message.repeatedFields_, null);
};
goog.inherits(proto.main.Message, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.Message.displayName = 'proto.main.Message';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.MessageMedia = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.main.MessageMedia, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.MessageMedia.displayName = 'proto.main.MessageMedia';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.MessageCreateOneInput = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.main.MessageCreateOneInput, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.MessageCreateOneInput.displayName = 'proto.main.MessageCreateOneInput';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.MessageUpdateOneInput = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.main.MessageUpdateOneInput, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.MessageUpdateOneInput.displayName = 'proto.main.MessageUpdateOneInput';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.MessageFindOneInput = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.main.MessageFindOneInput, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.MessageFindOneInput.displayName = 'proto.main.MessageFindOneInput';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.MessageFindUniqueInput = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.main.MessageFindUniqueInput, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.MessageFindUniqueInput.displayName = 'proto.main.MessageFindUniqueInput';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.MessageRemoveOneInput = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.main.MessageRemoveOneInput, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.MessageRemoveOneInput.displayName = 'proto.main.MessageRemoveOneInput';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.MessageFindByConversationFilter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.main.MessageFindByConversationFilter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.MessageFindByConversationFilter.displayName = 'proto.main.MessageFindByConversationFilter';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.MessageFindByConversationOpts = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.main.MessageFindByConversationOpts, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.MessageFindByConversationOpts.displayName = 'proto.main.MessageFindByConversationOpts';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.MessageFindByConversationInput = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.main.MessageFindByConversationInput, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.MessageFindByConversationInput.displayName = 'proto.main.MessageFindByConversationInput';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.MessageFindByConversationResultMeta = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.main.MessageFindByConversationResultMeta, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.MessageFindByConversationResultMeta.displayName = 'proto.main.MessageFindByConversationResultMeta';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.MessageFindByConversationResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.main.MessageFindByConversationResult.repeatedFields_, null);
};
goog.inherits(proto.main.MessageFindByConversationResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.MessageFindByConversationResult.displayName = 'proto.main.MessageFindByConversationResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.Permission = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.main.Permission, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.Permission.displayName = 'proto.main.Permission';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.Permissions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.main.Permissions.repeatedFields_, null);
};
goog.inherits(proto.main.Permissions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.Permissions.displayName = 'proto.main.Permissions';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.PermissionCreateOneInput = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.main.PermissionCreateOneInput, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.PermissionCreateOneInput.displayName = 'proto.main.PermissionCreateOneInput';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.PermissionCreateManyInput = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.main.PermissionCreateManyInput.repeatedFields_, null);
};
goog.inherits(proto.main.PermissionCreateManyInput, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.PermissionCreateManyInput.displayName = 'proto.main.PermissionCreateManyInput';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.PermissionFindOneInput = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.main.PermissionFindOneInput, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.PermissionFindOneInput.displayName = 'proto.main.PermissionFindOneInput';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.PermissionFindWhereInput = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.main.PermissionFindWhereInput, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.PermissionFindWhereInput.displayName = 'proto.main.PermissionFindWhereInput';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.PermissionFindWhereManyInput = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.main.PermissionFindWhereManyInput.repeatedFields_, null);
};
goog.inherits(proto.main.PermissionFindWhereManyInput, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.PermissionFindWhereManyInput.displayName = 'proto.main.PermissionFindWhereManyInput';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.PermissionFindWhereOrStarInput = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.main.PermissionFindWhereOrStarInput, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.PermissionFindWhereOrStarInput.displayName = 'proto.main.PermissionFindWhereOrStarInput';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.Permitted = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.main.Permitted, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.Permitted.displayName = 'proto.main.Permitted';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.PermissionValidateOneInput = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.main.PermissionValidateOneInput.repeatedFields_, null);
};
goog.inherits(proto.main.PermissionValidateOneInput, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.PermissionValidateOneInput.displayName = 'proto.main.PermissionValidateOneInput';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.PermissionValidateOneResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.main.PermissionValidateOneResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.PermissionValidateOneResult.displayName = 'proto.main.PermissionValidateOneResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.PermissionRemoveOneInput = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.main.PermissionRemoveOneInput, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.PermissionRemoveOneInput.displayName = 'proto.main.PermissionRemoveOneInput';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.PermissionRemoveWhereInput = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.main.PermissionRemoveWhereInput, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.PermissionRemoveWhereInput.displayName = 'proto.main.PermissionRemoveWhereInput';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.PermissionRemoveWhereManyInput = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.main.PermissionRemoveWhereManyInput.repeatedFields_, null);
};
goog.inherits(proto.main.PermissionRemoveWhereManyInput, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.PermissionRemoveWhereManyInput.displayName = 'proto.main.PermissionRemoveWhereManyInput';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.PermissionFindByPermittedFilter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.main.PermissionFindByPermittedFilter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.PermissionFindByPermittedFilter.displayName = 'proto.main.PermissionFindByPermittedFilter';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.PermissionFindByPermittedOpts = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.main.PermissionFindByPermittedOpts, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.PermissionFindByPermittedOpts.displayName = 'proto.main.PermissionFindByPermittedOpts';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.PermissionFindByPermittedInput = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.main.PermissionFindByPermittedInput, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.PermissionFindByPermittedInput.displayName = 'proto.main.PermissionFindByPermittedInput';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.PermissionFindByPermittedResultMeta = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.main.PermissionFindByPermittedResultMeta, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.PermissionFindByPermittedResultMeta.displayName = 'proto.main.PermissionFindByPermittedResultMeta';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.PermissionFindByPermittedResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.main.PermissionFindByPermittedResult.repeatedFields_, null);
};
goog.inherits(proto.main.PermissionFindByPermittedResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.PermissionFindByPermittedResult.displayName = 'proto.main.PermissionFindByPermittedResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.PermissionFindByEntityFilter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.main.PermissionFindByEntityFilter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.PermissionFindByEntityFilter.displayName = 'proto.main.PermissionFindByEntityFilter';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.PermissionFindByEntityOpts = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.main.PermissionFindByEntityOpts, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.PermissionFindByEntityOpts.displayName = 'proto.main.PermissionFindByEntityOpts';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.PermissionFindByEntityInput = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.main.PermissionFindByEntityInput, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.PermissionFindByEntityInput.displayName = 'proto.main.PermissionFindByEntityInput';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.PermissionFindByEntityResultMeta = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.main.PermissionFindByEntityResultMeta, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.PermissionFindByEntityResultMeta.displayName = 'proto.main.PermissionFindByEntityResultMeta';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.PermissionFindByEntityResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.main.PermissionFindByEntityResult.repeatedFields_, null);
};
goog.inherits(proto.main.PermissionFindByEntityResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.PermissionFindByEntityResult.displayName = 'proto.main.PermissionFindByEntityResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.PermissionFindAllActionsFilter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.main.PermissionFindAllActionsFilter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.PermissionFindAllActionsFilter.displayName = 'proto.main.PermissionFindAllActionsFilter';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.PermissionFindAllActionsOpts = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.main.PermissionFindAllActionsOpts, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.PermissionFindAllActionsOpts.displayName = 'proto.main.PermissionFindAllActionsOpts';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.PermissionFindAllActionsInput = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.main.PermissionFindAllActionsInput, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.PermissionFindAllActionsInput.displayName = 'proto.main.PermissionFindAllActionsInput';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.PermissionFindAllActionsResultMeta = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.main.PermissionFindAllActionsResultMeta, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.PermissionFindAllActionsResultMeta.displayName = 'proto.main.PermissionFindAllActionsResultMeta';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.PermissionFindAllActionsResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.main.PermissionFindAllActionsResult.repeatedFields_, null);
};
goog.inherits(proto.main.PermissionFindAllActionsResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.PermissionFindAllActionsResult.displayName = 'proto.main.PermissionFindAllActionsResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.PermissionRemoveAllActionsFilter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.main.PermissionRemoveAllActionsFilter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.PermissionRemoveAllActionsFilter.displayName = 'proto.main.PermissionRemoveAllActionsFilter';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.PermissionRemoveAllActionsInput = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.main.PermissionRemoveAllActionsInput, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.PermissionRemoveAllActionsInput.displayName = 'proto.main.PermissionRemoveAllActionsInput';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.UserFollowCreateOneInput = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.main.UserFollowCreateOneInput, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.UserFollowCreateOneInput.displayName = 'proto.main.UserFollowCreateOneInput';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.UserFollowRemoveOneInput = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.main.UserFollowRemoveOneInput, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.UserFollowRemoveOneInput.displayName = 'proto.main.UserFollowRemoveOneInput';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.UserFindFollowersFilter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.main.UserFindFollowersFilter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.UserFindFollowersFilter.displayName = 'proto.main.UserFindFollowersFilter';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.UserFindFollowersOpts = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.main.UserFindFollowersOpts, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.UserFindFollowersOpts.displayName = 'proto.main.UserFindFollowersOpts';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.UserFindFollowersInput = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.main.UserFindFollowersInput, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.UserFindFollowersInput.displayName = 'proto.main.UserFindFollowersInput';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.UserFindFollowersResultMeta = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.main.UserFindFollowersResultMeta, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.UserFindFollowersResultMeta.displayName = 'proto.main.UserFindFollowersResultMeta';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.UserFindFollowersResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.main.UserFindFollowersResult.repeatedFields_, null);
};
goog.inherits(proto.main.UserFindFollowersResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.UserFindFollowersResult.displayName = 'proto.main.UserFindFollowersResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.Follower = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.main.Follower, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.Follower.displayName = 'proto.main.Follower';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.UserFindFolloweesFilter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.main.UserFindFolloweesFilter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.UserFindFolloweesFilter.displayName = 'proto.main.UserFindFolloweesFilter';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.UserFindFolloweesOpts = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.main.UserFindFolloweesOpts, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.UserFindFolloweesOpts.displayName = 'proto.main.UserFindFolloweesOpts';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.UserFindFolloweesInput = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.main.UserFindFolloweesInput, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.UserFindFolloweesInput.displayName = 'proto.main.UserFindFolloweesInput';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.UserFindFolloweesResultMeta = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.main.UserFindFolloweesResultMeta, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.UserFindFolloweesResultMeta.displayName = 'proto.main.UserFindFolloweesResultMeta';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.UserFindFolloweesResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.main.UserFindFolloweesResult.repeatedFields_, null);
};
goog.inherits(proto.main.UserFindFolloweesResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.UserFindFolloweesResult.displayName = 'proto.main.UserFindFolloweesResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.Followee = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.main.Followee, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.Followee.displayName = 'proto.main.Followee';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.PublishJobResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.main.PublishJobResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.PublishJobResult.displayName = 'proto.main.PublishJobResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.main.WorkersHealthCheckResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.main.WorkersHealthCheckResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.main.WorkersHealthCheckResult.displayName = 'proto.main.WorkersHealthCheckResult';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.Dummy.prototype.toObject = function(opt_includeInstance) {
  return proto.main.Dummy.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.Dummy} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.Dummy.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    createdat: jspb.Message.getFieldWithDefault(msg, 2, 0),
    updatedat: jspb.Message.getFieldWithDefault(msg, 3, 0),
    text: jspb.Message.getFieldWithDefault(msg, 4, ""),
    ispublic: jspb.Message.getBooleanFieldWithDefault(msg, 5, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.Dummy}
 */
proto.main.Dummy.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.Dummy;
  return proto.main.Dummy.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.Dummy} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.Dummy}
 */
proto.main.Dummy.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCreatedat(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setUpdatedat(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIspublic(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.Dummy.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.Dummy.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.Dummy} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.Dummy.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCreatedat();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getUpdatedat();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getIspublic();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.main.Dummy.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.Dummy} returns this
 */
proto.main.Dummy.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 createdAt = 2;
 * @return {number}
 */
proto.main.Dummy.prototype.getCreatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.main.Dummy} returns this
 */
proto.main.Dummy.prototype.setCreatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 updatedAt = 3;
 * @return {number}
 */
proto.main.Dummy.prototype.getUpdatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.main.Dummy} returns this
 */
proto.main.Dummy.prototype.setUpdatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string text = 4;
 * @return {string}
 */
proto.main.Dummy.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.Dummy} returns this
 */
proto.main.Dummy.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional bool isPublic = 5;
 * @return {boolean}
 */
proto.main.Dummy.prototype.getIspublic = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.main.Dummy} returns this
 */
proto.main.Dummy.prototype.setIspublic = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.DummyCreateOneInput.prototype.toObject = function(opt_includeInstance) {
  return proto.main.DummyCreateOneInput.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.DummyCreateOneInput} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.DummyCreateOneInput.toObject = function(includeInstance, msg) {
  var f, obj = {
    text: jspb.Message.getFieldWithDefault(msg, 2, ""),
    ispublic: jspb.Message.getBooleanFieldWithDefault(msg, 5, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.DummyCreateOneInput}
 */
proto.main.DummyCreateOneInput.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.DummyCreateOneInput;
  return proto.main.DummyCreateOneInput.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.DummyCreateOneInput} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.DummyCreateOneInput}
 */
proto.main.DummyCreateOneInput.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIspublic(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.DummyCreateOneInput.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.DummyCreateOneInput.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.DummyCreateOneInput} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.DummyCreateOneInput.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIspublic();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * optional string text = 2;
 * @return {string}
 */
proto.main.DummyCreateOneInput.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.DummyCreateOneInput} returns this
 */
proto.main.DummyCreateOneInput.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool isPublic = 5;
 * @return {boolean}
 */
proto.main.DummyCreateOneInput.prototype.getIspublic = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.main.DummyCreateOneInput} returns this
 */
proto.main.DummyCreateOneInput.prototype.setIspublic = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.DummyUpdateOneInput.prototype.toObject = function(opt_includeInstance) {
  return proto.main.DummyUpdateOneInput.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.DummyUpdateOneInput} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.DummyUpdateOneInput.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    text: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.DummyUpdateOneInput}
 */
proto.main.DummyUpdateOneInput.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.DummyUpdateOneInput;
  return proto.main.DummyUpdateOneInput.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.DummyUpdateOneInput} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.DummyUpdateOneInput}
 */
proto.main.DummyUpdateOneInput.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.DummyUpdateOneInput.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.DummyUpdateOneInput.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.DummyUpdateOneInput} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.DummyUpdateOneInput.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.main.DummyUpdateOneInput.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.DummyUpdateOneInput} returns this
 */
proto.main.DummyUpdateOneInput.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string text = 2;
 * @return {string}
 */
proto.main.DummyUpdateOneInput.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.DummyUpdateOneInput} returns this
 */
proto.main.DummyUpdateOneInput.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.DummyFindOneInput.prototype.toObject = function(opt_includeInstance) {
  return proto.main.DummyFindOneInput.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.DummyFindOneInput} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.DummyFindOneInput.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.DummyFindOneInput}
 */
proto.main.DummyFindOneInput.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.DummyFindOneInput;
  return proto.main.DummyFindOneInput.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.DummyFindOneInput} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.DummyFindOneInput}
 */
proto.main.DummyFindOneInput.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.DummyFindOneInput.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.DummyFindOneInput.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.DummyFindOneInput} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.DummyFindOneInput.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.main.DummyFindOneInput.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.DummyFindOneInput} returns this
 */
proto.main.DummyFindOneInput.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.DummyRemoveOneInput.prototype.toObject = function(opt_includeInstance) {
  return proto.main.DummyRemoveOneInput.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.DummyRemoveOneInput} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.DummyRemoveOneInput.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.DummyRemoveOneInput}
 */
proto.main.DummyRemoveOneInput.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.DummyRemoveOneInput;
  return proto.main.DummyRemoveOneInput.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.DummyRemoveOneInput} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.DummyRemoveOneInput}
 */
proto.main.DummyRemoveOneInput.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.DummyRemoveOneInput.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.DummyRemoveOneInput.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.DummyRemoveOneInput} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.DummyRemoveOneInput.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.main.DummyRemoveOneInput.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.DummyRemoveOneInput} returns this
 */
proto.main.DummyRemoveOneInput.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.DummySearchFilter.prototype.toObject = function(opt_includeInstance) {
  return proto.main.DummySearchFilter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.DummySearchFilter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.DummySearchFilter.toObject = function(includeInstance, msg) {
  var f, obj = {
    text: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.DummySearchFilter}
 */
proto.main.DummySearchFilter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.DummySearchFilter;
  return proto.main.DummySearchFilter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.DummySearchFilter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.DummySearchFilter}
 */
proto.main.DummySearchFilter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.DummySearchFilter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.DummySearchFilter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.DummySearchFilter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.DummySearchFilter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string text = 1;
 * @return {string}
 */
proto.main.DummySearchFilter.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.DummySearchFilter} returns this
 */
proto.main.DummySearchFilter.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.DummySearchOpts.prototype.toObject = function(opt_includeInstance) {
  return proto.main.DummySearchOpts.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.DummySearchOpts} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.DummySearchOpts.toObject = function(includeInstance, msg) {
  var f, obj = {
    limit: jspb.Message.getFieldWithDefault(msg, 1, 0),
    offset: jspb.Message.getFieldWithDefault(msg, 2, 0),
    waitforsync: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.DummySearchOpts}
 */
proto.main.DummySearchOpts.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.DummySearchOpts;
  return proto.main.DummySearchOpts.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.DummySearchOpts} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.DummySearchOpts}
 */
proto.main.DummySearchOpts.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLimit(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setOffset(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setWaitforsync(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.DummySearchOpts.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.DummySearchOpts.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.DummySearchOpts} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.DummySearchOpts.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLimit();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getOffset();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getWaitforsync();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional uint64 limit = 1;
 * @return {number}
 */
proto.main.DummySearchOpts.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.main.DummySearchOpts} returns this
 */
proto.main.DummySearchOpts.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 offset = 2;
 * @return {number}
 */
proto.main.DummySearchOpts.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.main.DummySearchOpts} returns this
 */
proto.main.DummySearchOpts.prototype.setOffset = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bool waitForSync = 3;
 * @return {boolean}
 */
proto.main.DummySearchOpts.prototype.getWaitforsync = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.main.DummySearchOpts} returns this
 */
proto.main.DummySearchOpts.prototype.setWaitforsync = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.DummySearchInput.prototype.toObject = function(opt_includeInstance) {
  return proto.main.DummySearchInput.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.DummySearchInput} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.DummySearchInput.toObject = function(includeInstance, msg) {
  var f, obj = {
    filter: (f = msg.getFilter()) && proto.main.DummySearchFilter.toObject(includeInstance, f),
    opts: (f = msg.getOpts()) && proto.main.DummySearchOpts.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.DummySearchInput}
 */
proto.main.DummySearchInput.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.DummySearchInput;
  return proto.main.DummySearchInput.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.DummySearchInput} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.DummySearchInput}
 */
proto.main.DummySearchInput.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.main.DummySearchFilter;
      reader.readMessage(value,proto.main.DummySearchFilter.deserializeBinaryFromReader);
      msg.setFilter(value);
      break;
    case 2:
      var value = new proto.main.DummySearchOpts;
      reader.readMessage(value,proto.main.DummySearchOpts.deserializeBinaryFromReader);
      msg.setOpts(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.DummySearchInput.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.DummySearchInput.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.DummySearchInput} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.DummySearchInput.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFilter();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.main.DummySearchFilter.serializeBinaryToWriter
    );
  }
  f = message.getOpts();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.main.DummySearchOpts.serializeBinaryToWriter
    );
  }
};


/**
 * optional DummySearchFilter filter = 1;
 * @return {?proto.main.DummySearchFilter}
 */
proto.main.DummySearchInput.prototype.getFilter = function() {
  return /** @type{?proto.main.DummySearchFilter} */ (
    jspb.Message.getWrapperField(this, proto.main.DummySearchFilter, 1));
};


/**
 * @param {?proto.main.DummySearchFilter|undefined} value
 * @return {!proto.main.DummySearchInput} returns this
*/
proto.main.DummySearchInput.prototype.setFilter = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.main.DummySearchInput} returns this
 */
proto.main.DummySearchInput.prototype.clearFilter = function() {
  return this.setFilter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.main.DummySearchInput.prototype.hasFilter = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional DummySearchOpts opts = 2;
 * @return {?proto.main.DummySearchOpts}
 */
proto.main.DummySearchInput.prototype.getOpts = function() {
  return /** @type{?proto.main.DummySearchOpts} */ (
    jspb.Message.getWrapperField(this, proto.main.DummySearchOpts, 2));
};


/**
 * @param {?proto.main.DummySearchOpts|undefined} value
 * @return {!proto.main.DummySearchInput} returns this
*/
proto.main.DummySearchInput.prototype.setOpts = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.main.DummySearchInput} returns this
 */
proto.main.DummySearchInput.prototype.clearOpts = function() {
  return this.setOpts(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.main.DummySearchInput.prototype.hasOpts = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.DummySearchResultMeta.prototype.toObject = function(opt_includeInstance) {
  return proto.main.DummySearchResultMeta.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.DummySearchResultMeta} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.DummySearchResultMeta.toObject = function(includeInstance, msg) {
  var f, obj = {
    offset: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.DummySearchResultMeta}
 */
proto.main.DummySearchResultMeta.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.DummySearchResultMeta;
  return proto.main.DummySearchResultMeta.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.DummySearchResultMeta} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.DummySearchResultMeta}
 */
proto.main.DummySearchResultMeta.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setOffset(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.DummySearchResultMeta.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.DummySearchResultMeta.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.DummySearchResultMeta} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.DummySearchResultMeta.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOffset();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * optional uint64 offset = 1;
 * @return {number}
 */
proto.main.DummySearchResultMeta.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.main.DummySearchResultMeta} returns this
 */
proto.main.DummySearchResultMeta.prototype.setOffset = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.main.DummySearchResult.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.DummySearchResult.prototype.toObject = function(opt_includeInstance) {
  return proto.main.DummySearchResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.DummySearchResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.DummySearchResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    meta: (f = msg.getMeta()) && proto.main.DummySearchResultMeta.toObject(includeInstance, f),
    resultsList: jspb.Message.toObjectList(msg.getResultsList(),
    proto.main.Dummy.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.DummySearchResult}
 */
proto.main.DummySearchResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.DummySearchResult;
  return proto.main.DummySearchResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.DummySearchResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.DummySearchResult}
 */
proto.main.DummySearchResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.main.DummySearchResultMeta;
      reader.readMessage(value,proto.main.DummySearchResultMeta.deserializeBinaryFromReader);
      msg.setMeta(value);
      break;
    case 2:
      var value = new proto.main.Dummy;
      reader.readMessage(value,proto.main.Dummy.deserializeBinaryFromReader);
      msg.addResults(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.DummySearchResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.DummySearchResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.DummySearchResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.DummySearchResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMeta();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.main.DummySearchResultMeta.serializeBinaryToWriter
    );
  }
  f = message.getResultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.main.Dummy.serializeBinaryToWriter
    );
  }
};


/**
 * optional DummySearchResultMeta meta = 1;
 * @return {?proto.main.DummySearchResultMeta}
 */
proto.main.DummySearchResult.prototype.getMeta = function() {
  return /** @type{?proto.main.DummySearchResultMeta} */ (
    jspb.Message.getWrapperField(this, proto.main.DummySearchResultMeta, 1));
};


/**
 * @param {?proto.main.DummySearchResultMeta|undefined} value
 * @return {!proto.main.DummySearchResult} returns this
*/
proto.main.DummySearchResult.prototype.setMeta = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.main.DummySearchResult} returns this
 */
proto.main.DummySearchResult.prototype.clearMeta = function() {
  return this.setMeta(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.main.DummySearchResult.prototype.hasMeta = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Dummy results = 2;
 * @return {!Array<!proto.main.Dummy>}
 */
proto.main.DummySearchResult.prototype.getResultsList = function() {
  return /** @type{!Array<!proto.main.Dummy>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.main.Dummy, 2));
};


/**
 * @param {!Array<!proto.main.Dummy>} value
 * @return {!proto.main.DummySearchResult} returns this
*/
proto.main.DummySearchResult.prototype.setResultsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.main.Dummy=} opt_value
 * @param {number=} opt_index
 * @return {!proto.main.Dummy}
 */
proto.main.DummySearchResult.prototype.addResults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.main.Dummy, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.main.DummySearchResult} returns this
 */
proto.main.DummySearchResult.prototype.clearResultsList = function() {
  return this.setResultsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.DummyJobPayload.prototype.toObject = function(opt_includeInstance) {
  return proto.main.DummyJobPayload.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.DummyJobPayload} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.DummyJobPayload.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.DummyJobPayload}
 */
proto.main.DummyJobPayload.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.DummyJobPayload;
  return proto.main.DummyJobPayload.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.DummyJobPayload} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.DummyJobPayload}
 */
proto.main.DummyJobPayload.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.DummyJobPayload.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.DummyJobPayload.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.DummyJobPayload} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.DummyJobPayload.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.main.DummyJobPayload.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.DummyJobPayload} returns this
 */
proto.main.DummyJobPayload.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.PublishJobInput.prototype.toObject = function(opt_includeInstance) {
  return proto.main.PublishJobInput.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.PublishJobInput} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.PublishJobInput.toObject = function(includeInstance, msg) {
  var f, obj = {
    dummyjobpayload: (f = msg.getDummyjobpayload()) && proto.main.DummyJobPayload.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.PublishJobInput}
 */
proto.main.PublishJobInput.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.PublishJobInput;
  return proto.main.PublishJobInput.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.PublishJobInput} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.PublishJobInput}
 */
proto.main.PublishJobInput.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 10:
      var value = new proto.main.DummyJobPayload;
      reader.readMessage(value,proto.main.DummyJobPayload.deserializeBinaryFromReader);
      msg.setDummyjobpayload(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.PublishJobInput.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.PublishJobInput.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.PublishJobInput} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.PublishJobInput.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDummyjobpayload();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.main.DummyJobPayload.serializeBinaryToWriter
    );
  }
};


/**
 * optional DummyJobPayload dummyJobPayload = 10;
 * @return {?proto.main.DummyJobPayload}
 */
proto.main.PublishJobInput.prototype.getDummyjobpayload = function() {
  return /** @type{?proto.main.DummyJobPayload} */ (
    jspb.Message.getWrapperField(this, proto.main.DummyJobPayload, 10));
};


/**
 * @param {?proto.main.DummyJobPayload|undefined} value
 * @return {!proto.main.PublishJobInput} returns this
*/
proto.main.PublishJobInput.prototype.setDummyjobpayload = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.main.PublishJobInput} returns this
 */
proto.main.PublishJobInput.prototype.clearDummyjobpayload = function() {
  return this.setDummyjobpayload(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.main.PublishJobInput.prototype.hasDummyjobpayload = function() {
  return jspb.Message.getField(this, 10) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.Login.prototype.toObject = function(opt_includeInstance) {
  return proto.main.Login.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.Login} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.Login.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    createdat: jspb.Message.getFieldWithDefault(msg, 2, 0),
    updatedat: jspb.Message.getFieldWithDefault(msg, 3, 0),
    platform: jspb.Message.getFieldWithDefault(msg, 4, ""),
    platformloginid: jspb.Message.getFieldWithDefault(msg, 5, ""),
    platformloginsecret: jspb.Message.getFieldWithDefault(msg, 6, ""),
    userid: jspb.Message.getFieldWithDefault(msg, 7, ""),
    isnew: jspb.Message.getBooleanFieldWithDefault(msg, 8, false),
    credentials: (f = msg.getCredentials()) && proto.main.Credentials.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.Login}
 */
proto.main.Login.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.Login;
  return proto.main.Login.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.Login} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.Login}
 */
proto.main.Login.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCreatedat(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setUpdatedat(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlatform(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlatformloginid(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlatformloginsecret(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserid(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsnew(value);
      break;
    case 9:
      var value = new proto.main.Credentials;
      reader.readMessage(value,proto.main.Credentials.deserializeBinaryFromReader);
      msg.setCredentials(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.Login.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.Login.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.Login} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.Login.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCreatedat();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getUpdatedat();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getPlatform();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getPlatformloginid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getPlatformloginsecret();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getUserid();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getIsnew();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
  f = message.getCredentials();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.main.Credentials.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.main.Login.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.Login} returns this
 */
proto.main.Login.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 createdAt = 2;
 * @return {number}
 */
proto.main.Login.prototype.getCreatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.main.Login} returns this
 */
proto.main.Login.prototype.setCreatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 updatedAt = 3;
 * @return {number}
 */
proto.main.Login.prototype.getUpdatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.main.Login} returns this
 */
proto.main.Login.prototype.setUpdatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string platform = 4;
 * @return {string}
 */
proto.main.Login.prototype.getPlatform = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.Login} returns this
 */
proto.main.Login.prototype.setPlatform = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string platformLoginId = 5;
 * @return {string}
 */
proto.main.Login.prototype.getPlatformloginid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.Login} returns this
 */
proto.main.Login.prototype.setPlatformloginid = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string platformLoginSecret = 6;
 * @return {string}
 */
proto.main.Login.prototype.getPlatformloginsecret = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.Login} returns this
 */
proto.main.Login.prototype.setPlatformloginsecret = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string userId = 7;
 * @return {string}
 */
proto.main.Login.prototype.getUserid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.Login} returns this
 */
proto.main.Login.prototype.setUserid = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional bool isNew = 8;
 * @return {boolean}
 */
proto.main.Login.prototype.getIsnew = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.main.Login} returns this
 */
proto.main.Login.prototype.setIsnew = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
};


/**
 * optional Credentials credentials = 9;
 * @return {?proto.main.Credentials}
 */
proto.main.Login.prototype.getCredentials = function() {
  return /** @type{?proto.main.Credentials} */ (
    jspb.Message.getWrapperField(this, proto.main.Credentials, 9));
};


/**
 * @param {?proto.main.Credentials|undefined} value
 * @return {!proto.main.Login} returns this
*/
proto.main.Login.prototype.setCredentials = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.main.Login} returns this
 */
proto.main.Login.prototype.clearCredentials = function() {
  return this.setCredentials(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.main.Login.prototype.hasCredentials = function() {
  return jspb.Message.getField(this, 9) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.main.Credentials.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.main.Credentials.CredentialsCase = {
  CREDENTIALS_NOT_SET: 0,
  LOCAL: 1,
  GOOGLE: 2
};

/**
 * @return {proto.main.Credentials.CredentialsCase}
 */
proto.main.Credentials.prototype.getCredentialsCase = function() {
  return /** @type {proto.main.Credentials.CredentialsCase} */(jspb.Message.computeOneofCase(this, proto.main.Credentials.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.Credentials.prototype.toObject = function(opt_includeInstance) {
  return proto.main.Credentials.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.Credentials} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.Credentials.toObject = function(includeInstance, msg) {
  var f, obj = {
    local: (f = msg.getLocal()) && proto.main.LocalCredentials.toObject(includeInstance, f),
    google: (f = msg.getGoogle()) && proto.main.GoogleCredentials.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.Credentials}
 */
proto.main.Credentials.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.Credentials;
  return proto.main.Credentials.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.Credentials} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.Credentials}
 */
proto.main.Credentials.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.main.LocalCredentials;
      reader.readMessage(value,proto.main.LocalCredentials.deserializeBinaryFromReader);
      msg.setLocal(value);
      break;
    case 2:
      var value = new proto.main.GoogleCredentials;
      reader.readMessage(value,proto.main.GoogleCredentials.deserializeBinaryFromReader);
      msg.setGoogle(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.Credentials.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.Credentials.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.Credentials} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.Credentials.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocal();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.main.LocalCredentials.serializeBinaryToWriter
    );
  }
  f = message.getGoogle();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.main.GoogleCredentials.serializeBinaryToWriter
    );
  }
};


/**
 * optional LocalCredentials local = 1;
 * @return {?proto.main.LocalCredentials}
 */
proto.main.Credentials.prototype.getLocal = function() {
  return /** @type{?proto.main.LocalCredentials} */ (
    jspb.Message.getWrapperField(this, proto.main.LocalCredentials, 1));
};


/**
 * @param {?proto.main.LocalCredentials|undefined} value
 * @return {!proto.main.Credentials} returns this
*/
proto.main.Credentials.prototype.setLocal = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.main.Credentials.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.main.Credentials} returns this
 */
proto.main.Credentials.prototype.clearLocal = function() {
  return this.setLocal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.main.Credentials.prototype.hasLocal = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional GoogleCredentials google = 2;
 * @return {?proto.main.GoogleCredentials}
 */
proto.main.Credentials.prototype.getGoogle = function() {
  return /** @type{?proto.main.GoogleCredentials} */ (
    jspb.Message.getWrapperField(this, proto.main.GoogleCredentials, 2));
};


/**
 * @param {?proto.main.GoogleCredentials|undefined} value
 * @return {!proto.main.Credentials} returns this
*/
proto.main.Credentials.prototype.setGoogle = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.main.Credentials.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.main.Credentials} returns this
 */
proto.main.Credentials.prototype.clearGoogle = function() {
  return this.setGoogle(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.main.Credentials.prototype.hasGoogle = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.LocalCredentials.prototype.toObject = function(opt_includeInstance) {
  return proto.main.LocalCredentials.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.LocalCredentials} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.LocalCredentials.toObject = function(includeInstance, msg) {
  var f, obj = {
    username: jspb.Message.getFieldWithDefault(msg, 1, ""),
    password: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.LocalCredentials}
 */
proto.main.LocalCredentials.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.LocalCredentials;
  return proto.main.LocalCredentials.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.LocalCredentials} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.LocalCredentials}
 */
proto.main.LocalCredentials.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.LocalCredentials.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.LocalCredentials.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.LocalCredentials} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.LocalCredentials.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string username = 1;
 * @return {string}
 */
proto.main.LocalCredentials.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.LocalCredentials} returns this
 */
proto.main.LocalCredentials.prototype.setUsername = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string password = 2;
 * @return {string}
 */
proto.main.LocalCredentials.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.LocalCredentials} returns this
 */
proto.main.LocalCredentials.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.GoogleCredentials.prototype.toObject = function(opt_includeInstance) {
  return proto.main.GoogleCredentials.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.GoogleCredentials} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.GoogleCredentials.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.GoogleCredentials}
 */
proto.main.GoogleCredentials.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.GoogleCredentials;
  return proto.main.GoogleCredentials.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.GoogleCredentials} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.GoogleCredentials}
 */
proto.main.GoogleCredentials.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.GoogleCredentials.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.GoogleCredentials.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.GoogleCredentials} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.GoogleCredentials.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.main.GoogleCredentials.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.GoogleCredentials} returns this
 */
proto.main.GoogleCredentials.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.LoginCreateOneInput.prototype.toObject = function(opt_includeInstance) {
  return proto.main.LoginCreateOneInput.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.LoginCreateOneInput} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.LoginCreateOneInput.toObject = function(includeInstance, msg) {
  var f, obj = {
    platform: jspb.Message.getFieldWithDefault(msg, 4, ""),
    platformloginid: jspb.Message.getFieldWithDefault(msg, 5, ""),
    platformloginsecret: jspb.Message.getFieldWithDefault(msg, 6, ""),
    userid: jspb.Message.getFieldWithDefault(msg, 7, ""),
    credentials: (f = msg.getCredentials()) && proto.main.Credentials.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.LoginCreateOneInput}
 */
proto.main.LoginCreateOneInput.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.LoginCreateOneInput;
  return proto.main.LoginCreateOneInput.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.LoginCreateOneInput} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.LoginCreateOneInput}
 */
proto.main.LoginCreateOneInput.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlatform(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlatformloginid(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlatformloginsecret(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserid(value);
      break;
    case 9:
      var value = new proto.main.Credentials;
      reader.readMessage(value,proto.main.Credentials.deserializeBinaryFromReader);
      msg.setCredentials(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.LoginCreateOneInput.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.LoginCreateOneInput.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.LoginCreateOneInput} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.LoginCreateOneInput.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlatform();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getPlatformloginid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getPlatformloginsecret();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getUserid();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getCredentials();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.main.Credentials.serializeBinaryToWriter
    );
  }
};


/**
 * optional string platform = 4;
 * @return {string}
 */
proto.main.LoginCreateOneInput.prototype.getPlatform = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.LoginCreateOneInput} returns this
 */
proto.main.LoginCreateOneInput.prototype.setPlatform = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string platformLoginId = 5;
 * @return {string}
 */
proto.main.LoginCreateOneInput.prototype.getPlatformloginid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.LoginCreateOneInput} returns this
 */
proto.main.LoginCreateOneInput.prototype.setPlatformloginid = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string platformLoginSecret = 6;
 * @return {string}
 */
proto.main.LoginCreateOneInput.prototype.getPlatformloginsecret = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.LoginCreateOneInput} returns this
 */
proto.main.LoginCreateOneInput.prototype.setPlatformloginsecret = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string userId = 7;
 * @return {string}
 */
proto.main.LoginCreateOneInput.prototype.getUserid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.LoginCreateOneInput} returns this
 */
proto.main.LoginCreateOneInput.prototype.setUserid = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional Credentials credentials = 9;
 * @return {?proto.main.Credentials}
 */
proto.main.LoginCreateOneInput.prototype.getCredentials = function() {
  return /** @type{?proto.main.Credentials} */ (
    jspb.Message.getWrapperField(this, proto.main.Credentials, 9));
};


/**
 * @param {?proto.main.Credentials|undefined} value
 * @return {!proto.main.LoginCreateOneInput} returns this
*/
proto.main.LoginCreateOneInput.prototype.setCredentials = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.main.LoginCreateOneInput} returns this
 */
proto.main.LoginCreateOneInput.prototype.clearCredentials = function() {
  return this.setCredentials(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.main.LoginCreateOneInput.prototype.hasCredentials = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.LoginUpdateOneInput.prototype.toObject = function(opt_includeInstance) {
  return proto.main.LoginUpdateOneInput.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.LoginUpdateOneInput} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.LoginUpdateOneInput.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    platform: jspb.Message.getFieldWithDefault(msg, 4, ""),
    platformloginid: jspb.Message.getFieldWithDefault(msg, 5, ""),
    platformloginsecret: jspb.Message.getFieldWithDefault(msg, 6, ""),
    userid: jspb.Message.getFieldWithDefault(msg, 7, ""),
    credentials: (f = msg.getCredentials()) && proto.main.Credentials.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.LoginUpdateOneInput}
 */
proto.main.LoginUpdateOneInput.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.LoginUpdateOneInput;
  return proto.main.LoginUpdateOneInput.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.LoginUpdateOneInput} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.LoginUpdateOneInput}
 */
proto.main.LoginUpdateOneInput.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlatform(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlatformloginid(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlatformloginsecret(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserid(value);
      break;
    case 9:
      var value = new proto.main.Credentials;
      reader.readMessage(value,proto.main.Credentials.deserializeBinaryFromReader);
      msg.setCredentials(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.LoginUpdateOneInput.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.LoginUpdateOneInput.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.LoginUpdateOneInput} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.LoginUpdateOneInput.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPlatform();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getPlatformloginid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getPlatformloginsecret();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getUserid();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getCredentials();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.main.Credentials.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.main.LoginUpdateOneInput.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.LoginUpdateOneInput} returns this
 */
proto.main.LoginUpdateOneInput.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string platform = 4;
 * @return {string}
 */
proto.main.LoginUpdateOneInput.prototype.getPlatform = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.LoginUpdateOneInput} returns this
 */
proto.main.LoginUpdateOneInput.prototype.setPlatform = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string platformLoginId = 5;
 * @return {string}
 */
proto.main.LoginUpdateOneInput.prototype.getPlatformloginid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.LoginUpdateOneInput} returns this
 */
proto.main.LoginUpdateOneInput.prototype.setPlatformloginid = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string platformLoginSecret = 6;
 * @return {string}
 */
proto.main.LoginUpdateOneInput.prototype.getPlatformloginsecret = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.LoginUpdateOneInput} returns this
 */
proto.main.LoginUpdateOneInput.prototype.setPlatformloginsecret = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string userId = 7;
 * @return {string}
 */
proto.main.LoginUpdateOneInput.prototype.getUserid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.LoginUpdateOneInput} returns this
 */
proto.main.LoginUpdateOneInput.prototype.setUserid = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional Credentials credentials = 9;
 * @return {?proto.main.Credentials}
 */
proto.main.LoginUpdateOneInput.prototype.getCredentials = function() {
  return /** @type{?proto.main.Credentials} */ (
    jspb.Message.getWrapperField(this, proto.main.Credentials, 9));
};


/**
 * @param {?proto.main.Credentials|undefined} value
 * @return {!proto.main.LoginUpdateOneInput} returns this
*/
proto.main.LoginUpdateOneInput.prototype.setCredentials = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.main.LoginUpdateOneInput} returns this
 */
proto.main.LoginUpdateOneInput.prototype.clearCredentials = function() {
  return this.setCredentials(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.main.LoginUpdateOneInput.prototype.hasCredentials = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.LoginFindOneInput.prototype.toObject = function(opt_includeInstance) {
  return proto.main.LoginFindOneInput.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.LoginFindOneInput} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.LoginFindOneInput.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.LoginFindOneInput}
 */
proto.main.LoginFindOneInput.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.LoginFindOneInput;
  return proto.main.LoginFindOneInput.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.LoginFindOneInput} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.LoginFindOneInput}
 */
proto.main.LoginFindOneInput.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.LoginFindOneInput.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.LoginFindOneInput.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.LoginFindOneInput} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.LoginFindOneInput.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.main.LoginFindOneInput.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.LoginFindOneInput} returns this
 */
proto.main.LoginFindOneInput.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.LoginFindWhereInput.prototype.toObject = function(opt_includeInstance) {
  return proto.main.LoginFindWhereInput.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.LoginFindWhereInput} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.LoginFindWhereInput.toObject = function(includeInstance, msg) {
  var f, obj = {
    platform: jspb.Message.getFieldWithDefault(msg, 1, ""),
    platformloginid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    platformloginsecret: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.LoginFindWhereInput}
 */
proto.main.LoginFindWhereInput.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.LoginFindWhereInput;
  return proto.main.LoginFindWhereInput.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.LoginFindWhereInput} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.LoginFindWhereInput}
 */
proto.main.LoginFindWhereInput.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlatform(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlatformloginid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlatformloginsecret(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.LoginFindWhereInput.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.LoginFindWhereInput.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.LoginFindWhereInput} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.LoginFindWhereInput.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlatform();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPlatformloginid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPlatformloginsecret();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string platform = 1;
 * @return {string}
 */
proto.main.LoginFindWhereInput.prototype.getPlatform = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.LoginFindWhereInput} returns this
 */
proto.main.LoginFindWhereInput.prototype.setPlatform = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string platformLoginId = 2;
 * @return {string}
 */
proto.main.LoginFindWhereInput.prototype.getPlatformloginid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.LoginFindWhereInput} returns this
 */
proto.main.LoginFindWhereInput.prototype.setPlatformloginid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string platformLoginSecret = 3;
 * @return {string}
 */
proto.main.LoginFindWhereInput.prototype.getPlatformloginsecret = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.LoginFindWhereInput} returns this
 */
proto.main.LoginFindWhereInput.prototype.setPlatformloginsecret = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.LoginFindByPlatformIdInput.prototype.toObject = function(opt_includeInstance) {
  return proto.main.LoginFindByPlatformIdInput.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.LoginFindByPlatformIdInput} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.LoginFindByPlatformIdInput.toObject = function(includeInstance, msg) {
  var f, obj = {
    platform: jspb.Message.getFieldWithDefault(msg, 1, ""),
    platformloginid: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.LoginFindByPlatformIdInput}
 */
proto.main.LoginFindByPlatformIdInput.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.LoginFindByPlatformIdInput;
  return proto.main.LoginFindByPlatformIdInput.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.LoginFindByPlatformIdInput} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.LoginFindByPlatformIdInput}
 */
proto.main.LoginFindByPlatformIdInput.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlatform(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlatformloginid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.LoginFindByPlatformIdInput.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.LoginFindByPlatformIdInput.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.LoginFindByPlatformIdInput} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.LoginFindByPlatformIdInput.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlatform();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPlatformloginid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string platform = 1;
 * @return {string}
 */
proto.main.LoginFindByPlatformIdInput.prototype.getPlatform = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.LoginFindByPlatformIdInput} returns this
 */
proto.main.LoginFindByPlatformIdInput.prototype.setPlatform = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string platformLoginId = 2;
 * @return {string}
 */
proto.main.LoginFindByPlatformIdInput.prototype.getPlatformloginid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.LoginFindByPlatformIdInput} returns this
 */
proto.main.LoginFindByPlatformIdInput.prototype.setPlatformloginid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.LoginRemoveOneInput.prototype.toObject = function(opt_includeInstance) {
  return proto.main.LoginRemoveOneInput.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.LoginRemoveOneInput} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.LoginRemoveOneInput.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.LoginRemoveOneInput}
 */
proto.main.LoginRemoveOneInput.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.LoginRemoveOneInput;
  return proto.main.LoginRemoveOneInput.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.LoginRemoveOneInput} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.LoginRemoveOneInput}
 */
proto.main.LoginRemoveOneInput.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.LoginRemoveOneInput.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.LoginRemoveOneInput.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.LoginRemoveOneInput} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.LoginRemoveOneInput.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.main.LoginRemoveOneInput.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.LoginRemoveOneInput} returns this
 */
proto.main.LoginRemoveOneInput.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.User.prototype.toObject = function(opt_includeInstance) {
  return proto.main.User.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.User} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.User.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    createdat: jspb.Message.getFieldWithDefault(msg, 2, 0),
    updatedat: jspb.Message.getFieldWithDefault(msg, 3, 0),
    name: jspb.Message.getFieldWithDefault(msg, 4, ""),
    email: jspb.Message.getFieldWithDefault(msg, 5, ""),
    photo: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.User}
 */
proto.main.User.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.User;
  return proto.main.User.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.User} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.User}
 */
proto.main.User.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCreatedat(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setUpdatedat(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhoto(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.User.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.User.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.User} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.User.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCreatedat();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getUpdatedat();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getPhoto();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.main.User.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.User} returns this
 */
proto.main.User.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 createdAt = 2;
 * @return {number}
 */
proto.main.User.prototype.getCreatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.main.User} returns this
 */
proto.main.User.prototype.setCreatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 updatedAt = 3;
 * @return {number}
 */
proto.main.User.prototype.getUpdatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.main.User} returns this
 */
proto.main.User.prototype.setUpdatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string name = 4;
 * @return {string}
 */
proto.main.User.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.User} returns this
 */
proto.main.User.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string email = 5;
 * @return {string}
 */
proto.main.User.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.User} returns this
 */
proto.main.User.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string photo = 6;
 * @return {string}
 */
proto.main.User.prototype.getPhoto = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.User} returns this
 */
proto.main.User.prototype.setPhoto = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.UserCreateOneInput.prototype.toObject = function(opt_includeInstance) {
  return proto.main.UserCreateOneInput.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.UserCreateOneInput} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.UserCreateOneInput.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 4, ""),
    email: jspb.Message.getFieldWithDefault(msg, 5, ""),
    photo: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.UserCreateOneInput}
 */
proto.main.UserCreateOneInput.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.UserCreateOneInput;
  return proto.main.UserCreateOneInput.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.UserCreateOneInput} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.UserCreateOneInput}
 */
proto.main.UserCreateOneInput.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhoto(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.UserCreateOneInput.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.UserCreateOneInput.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.UserCreateOneInput} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.UserCreateOneInput.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getPhoto();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string name = 4;
 * @return {string}
 */
proto.main.UserCreateOneInput.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.UserCreateOneInput} returns this
 */
proto.main.UserCreateOneInput.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string email = 5;
 * @return {string}
 */
proto.main.UserCreateOneInput.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.UserCreateOneInput} returns this
 */
proto.main.UserCreateOneInput.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string photo = 6;
 * @return {string}
 */
proto.main.UserCreateOneInput.prototype.getPhoto = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.UserCreateOneInput} returns this
 */
proto.main.UserCreateOneInput.prototype.setPhoto = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.UserUpdateOneInput.prototype.toObject = function(opt_includeInstance) {
  return proto.main.UserUpdateOneInput.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.UserUpdateOneInput} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.UserUpdateOneInput.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 4, ""),
    email: jspb.Message.getFieldWithDefault(msg, 5, ""),
    photo: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.UserUpdateOneInput}
 */
proto.main.UserUpdateOneInput.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.UserUpdateOneInput;
  return proto.main.UserUpdateOneInput.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.UserUpdateOneInput} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.UserUpdateOneInput}
 */
proto.main.UserUpdateOneInput.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhoto(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.UserUpdateOneInput.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.UserUpdateOneInput.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.UserUpdateOneInput} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.UserUpdateOneInput.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getPhoto();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.main.UserUpdateOneInput.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.UserUpdateOneInput} returns this
 */
proto.main.UserUpdateOneInput.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 4;
 * @return {string}
 */
proto.main.UserUpdateOneInput.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.UserUpdateOneInput} returns this
 */
proto.main.UserUpdateOneInput.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string email = 5;
 * @return {string}
 */
proto.main.UserUpdateOneInput.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.UserUpdateOneInput} returns this
 */
proto.main.UserUpdateOneInput.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string photo = 6;
 * @return {string}
 */
proto.main.UserUpdateOneInput.prototype.getPhoto = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.UserUpdateOneInput} returns this
 */
proto.main.UserUpdateOneInput.prototype.setPhoto = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.UserFindOneInput.prototype.toObject = function(opt_includeInstance) {
  return proto.main.UserFindOneInput.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.UserFindOneInput} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.UserFindOneInput.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.UserFindOneInput}
 */
proto.main.UserFindOneInput.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.UserFindOneInput;
  return proto.main.UserFindOneInput.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.UserFindOneInput} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.UserFindOneInput}
 */
proto.main.UserFindOneInput.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.UserFindOneInput.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.UserFindOneInput.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.UserFindOneInput} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.UserFindOneInput.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.main.UserFindOneInput.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.UserFindOneInput} returns this
 */
proto.main.UserFindOneInput.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.UserRemoveOneInput.prototype.toObject = function(opt_includeInstance) {
  return proto.main.UserRemoveOneInput.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.UserRemoveOneInput} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.UserRemoveOneInput.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.UserRemoveOneInput}
 */
proto.main.UserRemoveOneInput.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.UserRemoveOneInput;
  return proto.main.UserRemoveOneInput.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.UserRemoveOneInput} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.UserRemoveOneInput}
 */
proto.main.UserRemoveOneInput.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.UserRemoveOneInput.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.UserRemoveOneInput.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.UserRemoveOneInput} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.UserRemoveOneInput.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.main.UserRemoveOneInput.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.UserRemoveOneInput} returns this
 */
proto.main.UserRemoveOneInput.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.UserSearchFilter.prototype.toObject = function(opt_includeInstance) {
  return proto.main.UserSearchFilter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.UserSearchFilter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.UserSearchFilter.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.UserSearchFilter}
 */
proto.main.UserSearchFilter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.UserSearchFilter;
  return proto.main.UserSearchFilter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.UserSearchFilter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.UserSearchFilter}
 */
proto.main.UserSearchFilter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.UserSearchFilter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.UserSearchFilter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.UserSearchFilter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.UserSearchFilter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.main.UserSearchFilter.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.UserSearchFilter} returns this
 */
proto.main.UserSearchFilter.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.UserSearchOpts.prototype.toObject = function(opt_includeInstance) {
  return proto.main.UserSearchOpts.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.UserSearchOpts} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.UserSearchOpts.toObject = function(includeInstance, msg) {
  var f, obj = {
    limit: jspb.Message.getFieldWithDefault(msg, 1, 0),
    offset: jspb.Message.getFieldWithDefault(msg, 2, 0),
    waitforsync: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.UserSearchOpts}
 */
proto.main.UserSearchOpts.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.UserSearchOpts;
  return proto.main.UserSearchOpts.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.UserSearchOpts} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.UserSearchOpts}
 */
proto.main.UserSearchOpts.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLimit(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setOffset(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setWaitforsync(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.UserSearchOpts.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.UserSearchOpts.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.UserSearchOpts} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.UserSearchOpts.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLimit();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getOffset();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getWaitforsync();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional uint64 limit = 1;
 * @return {number}
 */
proto.main.UserSearchOpts.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.main.UserSearchOpts} returns this
 */
proto.main.UserSearchOpts.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 offset = 2;
 * @return {number}
 */
proto.main.UserSearchOpts.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.main.UserSearchOpts} returns this
 */
proto.main.UserSearchOpts.prototype.setOffset = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bool waitForSync = 3;
 * @return {boolean}
 */
proto.main.UserSearchOpts.prototype.getWaitforsync = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.main.UserSearchOpts} returns this
 */
proto.main.UserSearchOpts.prototype.setWaitforsync = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.UserSearchInput.prototype.toObject = function(opt_includeInstance) {
  return proto.main.UserSearchInput.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.UserSearchInput} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.UserSearchInput.toObject = function(includeInstance, msg) {
  var f, obj = {
    filter: (f = msg.getFilter()) && proto.main.UserSearchFilter.toObject(includeInstance, f),
    opts: (f = msg.getOpts()) && proto.main.UserSearchOpts.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.UserSearchInput}
 */
proto.main.UserSearchInput.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.UserSearchInput;
  return proto.main.UserSearchInput.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.UserSearchInput} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.UserSearchInput}
 */
proto.main.UserSearchInput.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.main.UserSearchFilter;
      reader.readMessage(value,proto.main.UserSearchFilter.deserializeBinaryFromReader);
      msg.setFilter(value);
      break;
    case 2:
      var value = new proto.main.UserSearchOpts;
      reader.readMessage(value,proto.main.UserSearchOpts.deserializeBinaryFromReader);
      msg.setOpts(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.UserSearchInput.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.UserSearchInput.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.UserSearchInput} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.UserSearchInput.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFilter();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.main.UserSearchFilter.serializeBinaryToWriter
    );
  }
  f = message.getOpts();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.main.UserSearchOpts.serializeBinaryToWriter
    );
  }
};


/**
 * optional UserSearchFilter filter = 1;
 * @return {?proto.main.UserSearchFilter}
 */
proto.main.UserSearchInput.prototype.getFilter = function() {
  return /** @type{?proto.main.UserSearchFilter} */ (
    jspb.Message.getWrapperField(this, proto.main.UserSearchFilter, 1));
};


/**
 * @param {?proto.main.UserSearchFilter|undefined} value
 * @return {!proto.main.UserSearchInput} returns this
*/
proto.main.UserSearchInput.prototype.setFilter = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.main.UserSearchInput} returns this
 */
proto.main.UserSearchInput.prototype.clearFilter = function() {
  return this.setFilter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.main.UserSearchInput.prototype.hasFilter = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional UserSearchOpts opts = 2;
 * @return {?proto.main.UserSearchOpts}
 */
proto.main.UserSearchInput.prototype.getOpts = function() {
  return /** @type{?proto.main.UserSearchOpts} */ (
    jspb.Message.getWrapperField(this, proto.main.UserSearchOpts, 2));
};


/**
 * @param {?proto.main.UserSearchOpts|undefined} value
 * @return {!proto.main.UserSearchInput} returns this
*/
proto.main.UserSearchInput.prototype.setOpts = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.main.UserSearchInput} returns this
 */
proto.main.UserSearchInput.prototype.clearOpts = function() {
  return this.setOpts(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.main.UserSearchInput.prototype.hasOpts = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.UserSearchResultMeta.prototype.toObject = function(opt_includeInstance) {
  return proto.main.UserSearchResultMeta.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.UserSearchResultMeta} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.UserSearchResultMeta.toObject = function(includeInstance, msg) {
  var f, obj = {
    offset: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.UserSearchResultMeta}
 */
proto.main.UserSearchResultMeta.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.UserSearchResultMeta;
  return proto.main.UserSearchResultMeta.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.UserSearchResultMeta} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.UserSearchResultMeta}
 */
proto.main.UserSearchResultMeta.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setOffset(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.UserSearchResultMeta.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.UserSearchResultMeta.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.UserSearchResultMeta} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.UserSearchResultMeta.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOffset();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * optional uint64 offset = 1;
 * @return {number}
 */
proto.main.UserSearchResultMeta.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.main.UserSearchResultMeta} returns this
 */
proto.main.UserSearchResultMeta.prototype.setOffset = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.main.UserSearchResult.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.UserSearchResult.prototype.toObject = function(opt_includeInstance) {
  return proto.main.UserSearchResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.UserSearchResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.UserSearchResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    meta: (f = msg.getMeta()) && proto.main.UserSearchResultMeta.toObject(includeInstance, f),
    usersList: jspb.Message.toObjectList(msg.getUsersList(),
    proto.main.User.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.UserSearchResult}
 */
proto.main.UserSearchResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.UserSearchResult;
  return proto.main.UserSearchResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.UserSearchResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.UserSearchResult}
 */
proto.main.UserSearchResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.main.UserSearchResultMeta;
      reader.readMessage(value,proto.main.UserSearchResultMeta.deserializeBinaryFromReader);
      msg.setMeta(value);
      break;
    case 2:
      var value = new proto.main.User;
      reader.readMessage(value,proto.main.User.deserializeBinaryFromReader);
      msg.addUsers(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.UserSearchResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.UserSearchResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.UserSearchResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.UserSearchResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMeta();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.main.UserSearchResultMeta.serializeBinaryToWriter
    );
  }
  f = message.getUsersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.main.User.serializeBinaryToWriter
    );
  }
};


/**
 * optional UserSearchResultMeta meta = 1;
 * @return {?proto.main.UserSearchResultMeta}
 */
proto.main.UserSearchResult.prototype.getMeta = function() {
  return /** @type{?proto.main.UserSearchResultMeta} */ (
    jspb.Message.getWrapperField(this, proto.main.UserSearchResultMeta, 1));
};


/**
 * @param {?proto.main.UserSearchResultMeta|undefined} value
 * @return {!proto.main.UserSearchResult} returns this
*/
proto.main.UserSearchResult.prototype.setMeta = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.main.UserSearchResult} returns this
 */
proto.main.UserSearchResult.prototype.clearMeta = function() {
  return this.setMeta(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.main.UserSearchResult.prototype.hasMeta = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated User users = 2;
 * @return {!Array<!proto.main.User>}
 */
proto.main.UserSearchResult.prototype.getUsersList = function() {
  return /** @type{!Array<!proto.main.User>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.main.User, 2));
};


/**
 * @param {!Array<!proto.main.User>} value
 * @return {!proto.main.UserSearchResult} returns this
*/
proto.main.UserSearchResult.prototype.setUsersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.main.User=} opt_value
 * @param {number=} opt_index
 * @return {!proto.main.User}
 */
proto.main.UserSearchResult.prototype.addUsers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.main.User, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.main.UserSearchResult} returns this
 */
proto.main.UserSearchResult.prototype.clearUsersList = function() {
  return this.setUsersList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.HealthChekcResult.prototype.toObject = function(opt_includeInstance) {
  return proto.main.HealthChekcResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.HealthChekcResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.HealthChekcResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    ok: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.HealthChekcResult}
 */
proto.main.HealthChekcResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.HealthChekcResult;
  return proto.main.HealthChekcResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.HealthChekcResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.HealthChekcResult}
 */
proto.main.HealthChekcResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOk(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.HealthChekcResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.HealthChekcResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.HealthChekcResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.HealthChekcResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOk();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool ok = 1;
 * @return {boolean}
 */
proto.main.HealthChekcResult.prototype.getOk = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.main.HealthChekcResult} returns this
 */
proto.main.HealthChekcResult.prototype.setOk = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.IntRange.prototype.toObject = function(opt_includeInstance) {
  return proto.main.IntRange.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.IntRange} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.IntRange.toObject = function(includeInstance, msg) {
  var f, obj = {
    min: jspb.Message.getFieldWithDefault(msg, 1, 0),
    max: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.IntRange}
 */
proto.main.IntRange.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.IntRange;
  return proto.main.IntRange.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.IntRange} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.IntRange}
 */
proto.main.IntRange.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMin(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMax(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.IntRange.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.IntRange.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.IntRange} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.IntRange.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMin();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getMax();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional uint32 min = 1;
 * @return {number}
 */
proto.main.IntRange.prototype.getMin = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.main.IntRange} returns this
 */
proto.main.IntRange.prototype.setMin = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 max = 2;
 * @return {number}
 */
proto.main.IntRange.prototype.getMax = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.main.IntRange} returns this
 */
proto.main.IntRange.prototype.setMax = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.main.Conversation.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.Conversation.prototype.toObject = function(opt_includeInstance) {
  return proto.main.Conversation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.Conversation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.Conversation.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    createdat: jspb.Message.getFieldWithDefault(msg, 2, 0),
    updatedat: jspb.Message.getFieldWithDefault(msg, 3, 0),
    participantidsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    lastmessageat: jspb.Message.getFieldWithDefault(msg, 5, 0),
    istemp: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    permissionintegritywarning: jspb.Message.getBooleanFieldWithDefault(msg, 7, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.Conversation}
 */
proto.main.Conversation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.Conversation;
  return proto.main.Conversation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.Conversation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.Conversation}
 */
proto.main.Conversation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCreatedat(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setUpdatedat(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addParticipantids(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLastmessageat(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIstemp(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPermissionintegritywarning(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.Conversation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.Conversation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.Conversation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.Conversation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCreatedat();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getUpdatedat();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getParticipantidsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getLastmessageat();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getIstemp();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getPermissionintegritywarning();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.main.Conversation.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.Conversation} returns this
 */
proto.main.Conversation.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 createdAt = 2;
 * @return {number}
 */
proto.main.Conversation.prototype.getCreatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.main.Conversation} returns this
 */
proto.main.Conversation.prototype.setCreatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 updatedAt = 3;
 * @return {number}
 */
proto.main.Conversation.prototype.getUpdatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.main.Conversation} returns this
 */
proto.main.Conversation.prototype.setUpdatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * repeated string participantIds = 4;
 * @return {!Array<string>}
 */
proto.main.Conversation.prototype.getParticipantidsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.main.Conversation} returns this
 */
proto.main.Conversation.prototype.setParticipantidsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.main.Conversation} returns this
 */
proto.main.Conversation.prototype.addParticipantids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.main.Conversation} returns this
 */
proto.main.Conversation.prototype.clearParticipantidsList = function() {
  return this.setParticipantidsList([]);
};


/**
 * optional uint64 lastMessageAt = 5;
 * @return {number}
 */
proto.main.Conversation.prototype.getLastmessageat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.main.Conversation} returns this
 */
proto.main.Conversation.prototype.setLastmessageat = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional bool isTemp = 6;
 * @return {boolean}
 */
proto.main.Conversation.prototype.getIstemp = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.main.Conversation} returns this
 */
proto.main.Conversation.prototype.setIstemp = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional bool permissionIntegrityWarning = 7;
 * @return {boolean}
 */
proto.main.Conversation.prototype.getPermissionintegritywarning = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.main.Conversation} returns this
 */
proto.main.Conversation.prototype.setPermissionintegritywarning = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.main.ConversationCreateOneInput.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.ConversationCreateOneInput.prototype.toObject = function(opt_includeInstance) {
  return proto.main.ConversationCreateOneInput.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.ConversationCreateOneInput} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.ConversationCreateOneInput.toObject = function(includeInstance, msg) {
  var f, obj = {
    participantidsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.ConversationCreateOneInput}
 */
proto.main.ConversationCreateOneInput.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.ConversationCreateOneInput;
  return proto.main.ConversationCreateOneInput.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.ConversationCreateOneInput} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.ConversationCreateOneInput}
 */
proto.main.ConversationCreateOneInput.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addParticipantids(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.ConversationCreateOneInput.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.ConversationCreateOneInput.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.ConversationCreateOneInput} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.ConversationCreateOneInput.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParticipantidsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
};


/**
 * repeated string participantIds = 4;
 * @return {!Array<string>}
 */
proto.main.ConversationCreateOneInput.prototype.getParticipantidsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.main.ConversationCreateOneInput} returns this
 */
proto.main.ConversationCreateOneInput.prototype.setParticipantidsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.main.ConversationCreateOneInput} returns this
 */
proto.main.ConversationCreateOneInput.prototype.addParticipantids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.main.ConversationCreateOneInput} returns this
 */
proto.main.ConversationCreateOneInput.prototype.clearParticipantidsList = function() {
  return this.setParticipantidsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.main.ConversationUpdateOneInput.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.ConversationUpdateOneInput.prototype.toObject = function(opt_includeInstance) {
  return proto.main.ConversationUpdateOneInput.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.ConversationUpdateOneInput} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.ConversationUpdateOneInput.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    participantidsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    lastmessageat: jspb.Message.getFieldWithDefault(msg, 5, 0),
    permissionintegritywarning: jspb.Message.getBooleanFieldWithDefault(msg, 7, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.ConversationUpdateOneInput}
 */
proto.main.ConversationUpdateOneInput.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.ConversationUpdateOneInput;
  return proto.main.ConversationUpdateOneInput.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.ConversationUpdateOneInput} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.ConversationUpdateOneInput}
 */
proto.main.ConversationUpdateOneInput.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addParticipantids(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLastmessageat(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPermissionintegritywarning(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.ConversationUpdateOneInput.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.ConversationUpdateOneInput.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.ConversationUpdateOneInput} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.ConversationUpdateOneInput.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getParticipantidsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getLastmessageat();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getPermissionintegritywarning();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.main.ConversationUpdateOneInput.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.ConversationUpdateOneInput} returns this
 */
proto.main.ConversationUpdateOneInput.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string participantIds = 4;
 * @return {!Array<string>}
 */
proto.main.ConversationUpdateOneInput.prototype.getParticipantidsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.main.ConversationUpdateOneInput} returns this
 */
proto.main.ConversationUpdateOneInput.prototype.setParticipantidsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.main.ConversationUpdateOneInput} returns this
 */
proto.main.ConversationUpdateOneInput.prototype.addParticipantids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.main.ConversationUpdateOneInput} returns this
 */
proto.main.ConversationUpdateOneInput.prototype.clearParticipantidsList = function() {
  return this.setParticipantidsList([]);
};


/**
 * optional uint64 lastMessageAt = 5;
 * @return {number}
 */
proto.main.ConversationUpdateOneInput.prototype.getLastmessageat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.main.ConversationUpdateOneInput} returns this
 */
proto.main.ConversationUpdateOneInput.prototype.setLastmessageat = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional bool permissionIntegrityWarning = 7;
 * @return {boolean}
 */
proto.main.ConversationUpdateOneInput.prototype.getPermissionintegritywarning = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.main.ConversationUpdateOneInput} returns this
 */
proto.main.ConversationUpdateOneInput.prototype.setPermissionintegritywarning = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.ConversationFindOneInput.prototype.toObject = function(opt_includeInstance) {
  return proto.main.ConversationFindOneInput.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.ConversationFindOneInput} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.ConversationFindOneInput.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.ConversationFindOneInput}
 */
proto.main.ConversationFindOneInput.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.ConversationFindOneInput;
  return proto.main.ConversationFindOneInput.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.ConversationFindOneInput} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.ConversationFindOneInput}
 */
proto.main.ConversationFindOneInput.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.ConversationFindOneInput.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.ConversationFindOneInput.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.ConversationFindOneInput} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.ConversationFindOneInput.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.main.ConversationFindOneInput.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.ConversationFindOneInput} returns this
 */
proto.main.ConversationFindOneInput.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.ConversationRemoveOneInput.prototype.toObject = function(opt_includeInstance) {
  return proto.main.ConversationRemoveOneInput.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.ConversationRemoveOneInput} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.ConversationRemoveOneInput.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.ConversationRemoveOneInput}
 */
proto.main.ConversationRemoveOneInput.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.ConversationRemoveOneInput;
  return proto.main.ConversationRemoveOneInput.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.ConversationRemoveOneInput} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.ConversationRemoveOneInput}
 */
proto.main.ConversationRemoveOneInput.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.ConversationRemoveOneInput.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.ConversationRemoveOneInput.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.ConversationRemoveOneInput} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.ConversationRemoveOneInput.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.main.ConversationRemoveOneInput.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.ConversationRemoveOneInput} returns this
 */
proto.main.ConversationRemoveOneInput.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.ConversationFindByParticipantFilter.prototype.toObject = function(opt_includeInstance) {
  return proto.main.ConversationFindByParticipantFilter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.ConversationFindByParticipantFilter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.ConversationFindByParticipantFilter.toObject = function(includeInstance, msg) {
  var f, obj = {
    participantid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    fromlastmessageat: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.ConversationFindByParticipantFilter}
 */
proto.main.ConversationFindByParticipantFilter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.ConversationFindByParticipantFilter;
  return proto.main.ConversationFindByParticipantFilter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.ConversationFindByParticipantFilter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.ConversationFindByParticipantFilter}
 */
proto.main.ConversationFindByParticipantFilter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setParticipantid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setFromlastmessageat(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.ConversationFindByParticipantFilter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.ConversationFindByParticipantFilter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.ConversationFindByParticipantFilter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.ConversationFindByParticipantFilter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParticipantid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFromlastmessageat();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional string participantId = 1;
 * @return {string}
 */
proto.main.ConversationFindByParticipantFilter.prototype.getParticipantid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.ConversationFindByParticipantFilter} returns this
 */
proto.main.ConversationFindByParticipantFilter.prototype.setParticipantid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 fromLastMessageAt = 2;
 * @return {number}
 */
proto.main.ConversationFindByParticipantFilter.prototype.getFromlastmessageat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.main.ConversationFindByParticipantFilter} returns this
 */
proto.main.ConversationFindByParticipantFilter.prototype.setFromlastmessageat = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.ConversationFindByParticipantOpts.prototype.toObject = function(opt_includeInstance) {
  return proto.main.ConversationFindByParticipantOpts.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.ConversationFindByParticipantOpts} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.ConversationFindByParticipantOpts.toObject = function(includeInstance, msg) {
  var f, obj = {
    limit: jspb.Message.getFieldWithDefault(msg, 1, 0),
    offset: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.ConversationFindByParticipantOpts}
 */
proto.main.ConversationFindByParticipantOpts.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.ConversationFindByParticipantOpts;
  return proto.main.ConversationFindByParticipantOpts.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.ConversationFindByParticipantOpts} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.ConversationFindByParticipantOpts}
 */
proto.main.ConversationFindByParticipantOpts.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLimit(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setOffset(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.ConversationFindByParticipantOpts.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.ConversationFindByParticipantOpts.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.ConversationFindByParticipantOpts} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.ConversationFindByParticipantOpts.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLimit();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getOffset();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional uint64 limit = 1;
 * @return {number}
 */
proto.main.ConversationFindByParticipantOpts.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.main.ConversationFindByParticipantOpts} returns this
 */
proto.main.ConversationFindByParticipantOpts.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 offset = 2;
 * @return {number}
 */
proto.main.ConversationFindByParticipantOpts.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.main.ConversationFindByParticipantOpts} returns this
 */
proto.main.ConversationFindByParticipantOpts.prototype.setOffset = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.ConversationFindByParticipantInput.prototype.toObject = function(opt_includeInstance) {
  return proto.main.ConversationFindByParticipantInput.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.ConversationFindByParticipantInput} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.ConversationFindByParticipantInput.toObject = function(includeInstance, msg) {
  var f, obj = {
    filter: (f = msg.getFilter()) && proto.main.ConversationFindByParticipantFilter.toObject(includeInstance, f),
    opts: (f = msg.getOpts()) && proto.main.ConversationFindByParticipantOpts.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.ConversationFindByParticipantInput}
 */
proto.main.ConversationFindByParticipantInput.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.ConversationFindByParticipantInput;
  return proto.main.ConversationFindByParticipantInput.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.ConversationFindByParticipantInput} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.ConversationFindByParticipantInput}
 */
proto.main.ConversationFindByParticipantInput.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.main.ConversationFindByParticipantFilter;
      reader.readMessage(value,proto.main.ConversationFindByParticipantFilter.deserializeBinaryFromReader);
      msg.setFilter(value);
      break;
    case 2:
      var value = new proto.main.ConversationFindByParticipantOpts;
      reader.readMessage(value,proto.main.ConversationFindByParticipantOpts.deserializeBinaryFromReader);
      msg.setOpts(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.ConversationFindByParticipantInput.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.ConversationFindByParticipantInput.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.ConversationFindByParticipantInput} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.ConversationFindByParticipantInput.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFilter();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.main.ConversationFindByParticipantFilter.serializeBinaryToWriter
    );
  }
  f = message.getOpts();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.main.ConversationFindByParticipantOpts.serializeBinaryToWriter
    );
  }
};


/**
 * optional ConversationFindByParticipantFilter filter = 1;
 * @return {?proto.main.ConversationFindByParticipantFilter}
 */
proto.main.ConversationFindByParticipantInput.prototype.getFilter = function() {
  return /** @type{?proto.main.ConversationFindByParticipantFilter} */ (
    jspb.Message.getWrapperField(this, proto.main.ConversationFindByParticipantFilter, 1));
};


/**
 * @param {?proto.main.ConversationFindByParticipantFilter|undefined} value
 * @return {!proto.main.ConversationFindByParticipantInput} returns this
*/
proto.main.ConversationFindByParticipantInput.prototype.setFilter = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.main.ConversationFindByParticipantInput} returns this
 */
proto.main.ConversationFindByParticipantInput.prototype.clearFilter = function() {
  return this.setFilter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.main.ConversationFindByParticipantInput.prototype.hasFilter = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ConversationFindByParticipantOpts opts = 2;
 * @return {?proto.main.ConversationFindByParticipantOpts}
 */
proto.main.ConversationFindByParticipantInput.prototype.getOpts = function() {
  return /** @type{?proto.main.ConversationFindByParticipantOpts} */ (
    jspb.Message.getWrapperField(this, proto.main.ConversationFindByParticipantOpts, 2));
};


/**
 * @param {?proto.main.ConversationFindByParticipantOpts|undefined} value
 * @return {!proto.main.ConversationFindByParticipantInput} returns this
*/
proto.main.ConversationFindByParticipantInput.prototype.setOpts = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.main.ConversationFindByParticipantInput} returns this
 */
proto.main.ConversationFindByParticipantInput.prototype.clearOpts = function() {
  return this.setOpts(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.main.ConversationFindByParticipantInput.prototype.hasOpts = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.ConversationFindByParticipantResultMeta.prototype.toObject = function(opt_includeInstance) {
  return proto.main.ConversationFindByParticipantResultMeta.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.ConversationFindByParticipantResultMeta} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.ConversationFindByParticipantResultMeta.toObject = function(includeInstance, msg) {
  var f, obj = {
    offset: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.ConversationFindByParticipantResultMeta}
 */
proto.main.ConversationFindByParticipantResultMeta.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.ConversationFindByParticipantResultMeta;
  return proto.main.ConversationFindByParticipantResultMeta.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.ConversationFindByParticipantResultMeta} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.ConversationFindByParticipantResultMeta}
 */
proto.main.ConversationFindByParticipantResultMeta.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setOffset(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.ConversationFindByParticipantResultMeta.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.ConversationFindByParticipantResultMeta.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.ConversationFindByParticipantResultMeta} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.ConversationFindByParticipantResultMeta.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOffset();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * optional uint64 offset = 1;
 * @return {number}
 */
proto.main.ConversationFindByParticipantResultMeta.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.main.ConversationFindByParticipantResultMeta} returns this
 */
proto.main.ConversationFindByParticipantResultMeta.prototype.setOffset = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.main.ConversationFindByParticipantResult.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.ConversationFindByParticipantResult.prototype.toObject = function(opt_includeInstance) {
  return proto.main.ConversationFindByParticipantResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.ConversationFindByParticipantResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.ConversationFindByParticipantResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    meta: (f = msg.getMeta()) && proto.main.ConversationFindByParticipantResultMeta.toObject(includeInstance, f),
    resultsList: jspb.Message.toObjectList(msg.getResultsList(),
    proto.main.Conversation.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.ConversationFindByParticipantResult}
 */
proto.main.ConversationFindByParticipantResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.ConversationFindByParticipantResult;
  return proto.main.ConversationFindByParticipantResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.ConversationFindByParticipantResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.ConversationFindByParticipantResult}
 */
proto.main.ConversationFindByParticipantResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.main.ConversationFindByParticipantResultMeta;
      reader.readMessage(value,proto.main.ConversationFindByParticipantResultMeta.deserializeBinaryFromReader);
      msg.setMeta(value);
      break;
    case 2:
      var value = new proto.main.Conversation;
      reader.readMessage(value,proto.main.Conversation.deserializeBinaryFromReader);
      msg.addResults(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.ConversationFindByParticipantResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.ConversationFindByParticipantResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.ConversationFindByParticipantResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.ConversationFindByParticipantResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMeta();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.main.ConversationFindByParticipantResultMeta.serializeBinaryToWriter
    );
  }
  f = message.getResultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.main.Conversation.serializeBinaryToWriter
    );
  }
};


/**
 * optional ConversationFindByParticipantResultMeta meta = 1;
 * @return {?proto.main.ConversationFindByParticipantResultMeta}
 */
proto.main.ConversationFindByParticipantResult.prototype.getMeta = function() {
  return /** @type{?proto.main.ConversationFindByParticipantResultMeta} */ (
    jspb.Message.getWrapperField(this, proto.main.ConversationFindByParticipantResultMeta, 1));
};


/**
 * @param {?proto.main.ConversationFindByParticipantResultMeta|undefined} value
 * @return {!proto.main.ConversationFindByParticipantResult} returns this
*/
proto.main.ConversationFindByParticipantResult.prototype.setMeta = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.main.ConversationFindByParticipantResult} returns this
 */
proto.main.ConversationFindByParticipantResult.prototype.clearMeta = function() {
  return this.setMeta(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.main.ConversationFindByParticipantResult.prototype.hasMeta = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Conversation results = 2;
 * @return {!Array<!proto.main.Conversation>}
 */
proto.main.ConversationFindByParticipantResult.prototype.getResultsList = function() {
  return /** @type{!Array<!proto.main.Conversation>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.main.Conversation, 2));
};


/**
 * @param {!Array<!proto.main.Conversation>} value
 * @return {!proto.main.ConversationFindByParticipantResult} returns this
*/
proto.main.ConversationFindByParticipantResult.prototype.setResultsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.main.Conversation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.main.Conversation}
 */
proto.main.ConversationFindByParticipantResult.prototype.addResults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.main.Conversation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.main.ConversationFindByParticipantResult} returns this
 */
proto.main.ConversationFindByParticipantResult.prototype.clearResultsList = function() {
  return this.setResultsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.ConversationFindTempsInput.prototype.toObject = function(opt_includeInstance) {
  return proto.main.ConversationFindTempsInput.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.ConversationFindTempsInput} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.ConversationFindTempsInput.toObject = function(includeInstance, msg) {
  var f, obj = {
    millisago: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.ConversationFindTempsInput}
 */
proto.main.ConversationFindTempsInput.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.ConversationFindTempsInput;
  return proto.main.ConversationFindTempsInput.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.ConversationFindTempsInput} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.ConversationFindTempsInput}
 */
proto.main.ConversationFindTempsInput.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMillisago(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.ConversationFindTempsInput.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.ConversationFindTempsInput.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.ConversationFindTempsInput} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.ConversationFindTempsInput.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMillisago();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * optional uint64 millisAgo = 1;
 * @return {number}
 */
proto.main.ConversationFindTempsInput.prototype.getMillisago = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.main.ConversationFindTempsInput} returns this
 */
proto.main.ConversationFindTempsInput.prototype.setMillisago = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.ConversationRemoveTempsInput.prototype.toObject = function(opt_includeInstance) {
  return proto.main.ConversationRemoveTempsInput.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.ConversationRemoveTempsInput} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.ConversationRemoveTempsInput.toObject = function(includeInstance, msg) {
  var f, obj = {
    millisago: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.ConversationRemoveTempsInput}
 */
proto.main.ConversationRemoveTempsInput.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.ConversationRemoveTempsInput;
  return proto.main.ConversationRemoveTempsInput.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.ConversationRemoveTempsInput} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.ConversationRemoveTempsInput}
 */
proto.main.ConversationRemoveTempsInput.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMillisago(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.ConversationRemoveTempsInput.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.ConversationRemoveTempsInput.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.ConversationRemoveTempsInput} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.ConversationRemoveTempsInput.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMillisago();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * optional uint64 millisAgo = 1;
 * @return {number}
 */
proto.main.ConversationRemoveTempsInput.prototype.getMillisago = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.main.ConversationRemoveTempsInput} returns this
 */
proto.main.ConversationRemoveTempsInput.prototype.setMillisago = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.main.Message.repeatedFields_ = [7,8,9];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.Message.prototype.toObject = function(opt_includeInstance) {
  return proto.main.Message.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.Message} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.Message.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    createdat: jspb.Message.getFieldWithDefault(msg, 2, 0),
    updatedat: jspb.Message.getFieldWithDefault(msg, 3, 0),
    conversationid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    media: (f = msg.getMedia()) && proto.main.MessageMedia.toObject(includeInstance, f),
    senderid: jspb.Message.getFieldWithDefault(msg, 6, ""),
    senttoidsList: (f = jspb.Message.getRepeatedField(msg, 7)) == null ? undefined : f,
    receivedbyidsList: (f = jspb.Message.getRepeatedField(msg, 8)) == null ? undefined : f,
    seenbyidsList: (f = jspb.Message.getRepeatedField(msg, 9)) == null ? undefined : f,
    deleted: jspb.Message.getBooleanFieldWithDefault(msg, 10, false),
    uniqueness: jspb.Message.getFieldWithDefault(msg, 11, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.Message}
 */
proto.main.Message.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.Message;
  return proto.main.Message.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.Message} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.Message}
 */
proto.main.Message.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCreatedat(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setUpdatedat(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setConversationid(value);
      break;
    case 5:
      var value = new proto.main.MessageMedia;
      reader.readMessage(value,proto.main.MessageMedia.deserializeBinaryFromReader);
      msg.setMedia(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setSenderid(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.addSenttoids(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.addReceivedbyids(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.addSeenbyids(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDeleted(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setUniqueness(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.Message.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.Message.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.Message} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.Message.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCreatedat();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getUpdatedat();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getConversationid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getMedia();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.main.MessageMedia.serializeBinaryToWriter
    );
  }
  f = message.getSenderid();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getSenttoidsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      7,
      f
    );
  }
  f = message.getReceivedbyidsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      8,
      f
    );
  }
  f = message.getSeenbyidsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      9,
      f
    );
  }
  f = message.getDeleted();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
  f = message.getUniqueness();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.main.Message.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.Message} returns this
 */
proto.main.Message.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 createdAt = 2;
 * @return {number}
 */
proto.main.Message.prototype.getCreatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.main.Message} returns this
 */
proto.main.Message.prototype.setCreatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 updatedAt = 3;
 * @return {number}
 */
proto.main.Message.prototype.getUpdatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.main.Message} returns this
 */
proto.main.Message.prototype.setUpdatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string conversationId = 4;
 * @return {string}
 */
proto.main.Message.prototype.getConversationid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.Message} returns this
 */
proto.main.Message.prototype.setConversationid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional MessageMedia media = 5;
 * @return {?proto.main.MessageMedia}
 */
proto.main.Message.prototype.getMedia = function() {
  return /** @type{?proto.main.MessageMedia} */ (
    jspb.Message.getWrapperField(this, proto.main.MessageMedia, 5));
};


/**
 * @param {?proto.main.MessageMedia|undefined} value
 * @return {!proto.main.Message} returns this
*/
proto.main.Message.prototype.setMedia = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.main.Message} returns this
 */
proto.main.Message.prototype.clearMedia = function() {
  return this.setMedia(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.main.Message.prototype.hasMedia = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string senderId = 6;
 * @return {string}
 */
proto.main.Message.prototype.getSenderid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.Message} returns this
 */
proto.main.Message.prototype.setSenderid = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * repeated string sentToIds = 7;
 * @return {!Array<string>}
 */
proto.main.Message.prototype.getSenttoidsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 7));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.main.Message} returns this
 */
proto.main.Message.prototype.setSenttoidsList = function(value) {
  return jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.main.Message} returns this
 */
proto.main.Message.prototype.addSenttoids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.main.Message} returns this
 */
proto.main.Message.prototype.clearSenttoidsList = function() {
  return this.setSenttoidsList([]);
};


/**
 * repeated string receivedByIds = 8;
 * @return {!Array<string>}
 */
proto.main.Message.prototype.getReceivedbyidsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 8));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.main.Message} returns this
 */
proto.main.Message.prototype.setReceivedbyidsList = function(value) {
  return jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.main.Message} returns this
 */
proto.main.Message.prototype.addReceivedbyids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.main.Message} returns this
 */
proto.main.Message.prototype.clearReceivedbyidsList = function() {
  return this.setReceivedbyidsList([]);
};


/**
 * repeated string seenByIds = 9;
 * @return {!Array<string>}
 */
proto.main.Message.prototype.getSeenbyidsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 9));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.main.Message} returns this
 */
proto.main.Message.prototype.setSeenbyidsList = function(value) {
  return jspb.Message.setField(this, 9, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.main.Message} returns this
 */
proto.main.Message.prototype.addSeenbyids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 9, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.main.Message} returns this
 */
proto.main.Message.prototype.clearSeenbyidsList = function() {
  return this.setSeenbyidsList([]);
};


/**
 * optional bool deleted = 10;
 * @return {boolean}
 */
proto.main.Message.prototype.getDeleted = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.main.Message} returns this
 */
proto.main.Message.prototype.setDeleted = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};


/**
 * optional string uniqueness = 11;
 * @return {string}
 */
proto.main.Message.prototype.getUniqueness = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.Message} returns this
 */
proto.main.Message.prototype.setUniqueness = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.MessageMedia.prototype.toObject = function(opt_includeInstance) {
  return proto.main.MessageMedia.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.MessageMedia} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.MessageMedia.toObject = function(includeInstance, msg) {
  var f, obj = {
    text: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.MessageMedia}
 */
proto.main.MessageMedia.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.MessageMedia;
  return proto.main.MessageMedia.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.MessageMedia} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.MessageMedia}
 */
proto.main.MessageMedia.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.MessageMedia.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.MessageMedia.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.MessageMedia} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.MessageMedia.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string text = 1;
 * @return {string}
 */
proto.main.MessageMedia.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.MessageMedia} returns this
 */
proto.main.MessageMedia.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.MessageCreateOneInput.prototype.toObject = function(opt_includeInstance) {
  return proto.main.MessageCreateOneInput.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.MessageCreateOneInput} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.MessageCreateOneInput.toObject = function(includeInstance, msg) {
  var f, obj = {
    conversationid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    media: (f = msg.getMedia()) && proto.main.MessageMedia.toObject(includeInstance, f),
    senderid: jspb.Message.getFieldWithDefault(msg, 6, ""),
    uniqueness: jspb.Message.getFieldWithDefault(msg, 11, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.MessageCreateOneInput}
 */
proto.main.MessageCreateOneInput.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.MessageCreateOneInput;
  return proto.main.MessageCreateOneInput.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.MessageCreateOneInput} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.MessageCreateOneInput}
 */
proto.main.MessageCreateOneInput.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setConversationid(value);
      break;
    case 5:
      var value = new proto.main.MessageMedia;
      reader.readMessage(value,proto.main.MessageMedia.deserializeBinaryFromReader);
      msg.setMedia(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setSenderid(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setUniqueness(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.MessageCreateOneInput.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.MessageCreateOneInput.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.MessageCreateOneInput} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.MessageCreateOneInput.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConversationid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getMedia();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.main.MessageMedia.serializeBinaryToWriter
    );
  }
  f = message.getSenderid();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getUniqueness();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
};


/**
 * optional string conversationId = 4;
 * @return {string}
 */
proto.main.MessageCreateOneInput.prototype.getConversationid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.MessageCreateOneInput} returns this
 */
proto.main.MessageCreateOneInput.prototype.setConversationid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional MessageMedia media = 5;
 * @return {?proto.main.MessageMedia}
 */
proto.main.MessageCreateOneInput.prototype.getMedia = function() {
  return /** @type{?proto.main.MessageMedia} */ (
    jspb.Message.getWrapperField(this, proto.main.MessageMedia, 5));
};


/**
 * @param {?proto.main.MessageMedia|undefined} value
 * @return {!proto.main.MessageCreateOneInput} returns this
*/
proto.main.MessageCreateOneInput.prototype.setMedia = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.main.MessageCreateOneInput} returns this
 */
proto.main.MessageCreateOneInput.prototype.clearMedia = function() {
  return this.setMedia(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.main.MessageCreateOneInput.prototype.hasMedia = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string senderId = 6;
 * @return {string}
 */
proto.main.MessageCreateOneInput.prototype.getSenderid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.MessageCreateOneInput} returns this
 */
proto.main.MessageCreateOneInput.prototype.setSenderid = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string uniqueness = 11;
 * @return {string}
 */
proto.main.MessageCreateOneInput.prototype.getUniqueness = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.MessageCreateOneInput} returns this
 */
proto.main.MessageCreateOneInput.prototype.setUniqueness = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.MessageUpdateOneInput.prototype.toObject = function(opt_includeInstance) {
  return proto.main.MessageUpdateOneInput.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.MessageUpdateOneInput} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.MessageUpdateOneInput.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    media: (f = msg.getMedia()) && proto.main.MessageMedia.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.MessageUpdateOneInput}
 */
proto.main.MessageUpdateOneInput.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.MessageUpdateOneInput;
  return proto.main.MessageUpdateOneInput.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.MessageUpdateOneInput} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.MessageUpdateOneInput}
 */
proto.main.MessageUpdateOneInput.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 5:
      var value = new proto.main.MessageMedia;
      reader.readMessage(value,proto.main.MessageMedia.deserializeBinaryFromReader);
      msg.setMedia(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.MessageUpdateOneInput.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.MessageUpdateOneInput.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.MessageUpdateOneInput} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.MessageUpdateOneInput.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMedia();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.main.MessageMedia.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.main.MessageUpdateOneInput.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.MessageUpdateOneInput} returns this
 */
proto.main.MessageUpdateOneInput.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional MessageMedia media = 5;
 * @return {?proto.main.MessageMedia}
 */
proto.main.MessageUpdateOneInput.prototype.getMedia = function() {
  return /** @type{?proto.main.MessageMedia} */ (
    jspb.Message.getWrapperField(this, proto.main.MessageMedia, 5));
};


/**
 * @param {?proto.main.MessageMedia|undefined} value
 * @return {!proto.main.MessageUpdateOneInput} returns this
*/
proto.main.MessageUpdateOneInput.prototype.setMedia = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.main.MessageUpdateOneInput} returns this
 */
proto.main.MessageUpdateOneInput.prototype.clearMedia = function() {
  return this.setMedia(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.main.MessageUpdateOneInput.prototype.hasMedia = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.MessageFindOneInput.prototype.toObject = function(opt_includeInstance) {
  return proto.main.MessageFindOneInput.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.MessageFindOneInput} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.MessageFindOneInput.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.MessageFindOneInput}
 */
proto.main.MessageFindOneInput.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.MessageFindOneInput;
  return proto.main.MessageFindOneInput.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.MessageFindOneInput} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.MessageFindOneInput}
 */
proto.main.MessageFindOneInput.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.MessageFindOneInput.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.MessageFindOneInput.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.MessageFindOneInput} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.MessageFindOneInput.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.main.MessageFindOneInput.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.MessageFindOneInput} returns this
 */
proto.main.MessageFindOneInput.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.MessageFindUniqueInput.prototype.toObject = function(opt_includeInstance) {
  return proto.main.MessageFindUniqueInput.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.MessageFindUniqueInput} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.MessageFindUniqueInput.toObject = function(includeInstance, msg) {
  var f, obj = {
    uniqueness: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.MessageFindUniqueInput}
 */
proto.main.MessageFindUniqueInput.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.MessageFindUniqueInput;
  return proto.main.MessageFindUniqueInput.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.MessageFindUniqueInput} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.MessageFindUniqueInput}
 */
proto.main.MessageFindUniqueInput.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUniqueness(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.MessageFindUniqueInput.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.MessageFindUniqueInput.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.MessageFindUniqueInput} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.MessageFindUniqueInput.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUniqueness();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string uniqueness = 1;
 * @return {string}
 */
proto.main.MessageFindUniqueInput.prototype.getUniqueness = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.MessageFindUniqueInput} returns this
 */
proto.main.MessageFindUniqueInput.prototype.setUniqueness = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.MessageRemoveOneInput.prototype.toObject = function(opt_includeInstance) {
  return proto.main.MessageRemoveOneInput.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.MessageRemoveOneInput} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.MessageRemoveOneInput.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.MessageRemoveOneInput}
 */
proto.main.MessageRemoveOneInput.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.MessageRemoveOneInput;
  return proto.main.MessageRemoveOneInput.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.MessageRemoveOneInput} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.MessageRemoveOneInput}
 */
proto.main.MessageRemoveOneInput.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.MessageRemoveOneInput.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.MessageRemoveOneInput.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.MessageRemoveOneInput} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.MessageRemoveOneInput.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.main.MessageRemoveOneInput.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.MessageRemoveOneInput} returns this
 */
proto.main.MessageRemoveOneInput.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.MessageFindByConversationFilter.prototype.toObject = function(opt_includeInstance) {
  return proto.main.MessageFindByConversationFilter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.MessageFindByConversationFilter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.MessageFindByConversationFilter.toObject = function(includeInstance, msg) {
  var f, obj = {
    conversationid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.MessageFindByConversationFilter}
 */
proto.main.MessageFindByConversationFilter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.MessageFindByConversationFilter;
  return proto.main.MessageFindByConversationFilter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.MessageFindByConversationFilter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.MessageFindByConversationFilter}
 */
proto.main.MessageFindByConversationFilter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setConversationid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.MessageFindByConversationFilter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.MessageFindByConversationFilter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.MessageFindByConversationFilter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.MessageFindByConversationFilter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConversationid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string conversationId = 1;
 * @return {string}
 */
proto.main.MessageFindByConversationFilter.prototype.getConversationid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.MessageFindByConversationFilter} returns this
 */
proto.main.MessageFindByConversationFilter.prototype.setConversationid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.MessageFindByConversationOpts.prototype.toObject = function(opt_includeInstance) {
  return proto.main.MessageFindByConversationOpts.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.MessageFindByConversationOpts} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.MessageFindByConversationOpts.toObject = function(includeInstance, msg) {
  var f, obj = {
    limit: jspb.Message.getFieldWithDefault(msg, 1, 0),
    offset: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.MessageFindByConversationOpts}
 */
proto.main.MessageFindByConversationOpts.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.MessageFindByConversationOpts;
  return proto.main.MessageFindByConversationOpts.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.MessageFindByConversationOpts} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.MessageFindByConversationOpts}
 */
proto.main.MessageFindByConversationOpts.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLimit(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setOffset(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.MessageFindByConversationOpts.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.MessageFindByConversationOpts.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.MessageFindByConversationOpts} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.MessageFindByConversationOpts.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLimit();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getOffset();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional uint64 limit = 1;
 * @return {number}
 */
proto.main.MessageFindByConversationOpts.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.main.MessageFindByConversationOpts} returns this
 */
proto.main.MessageFindByConversationOpts.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 offset = 2;
 * @return {number}
 */
proto.main.MessageFindByConversationOpts.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.main.MessageFindByConversationOpts} returns this
 */
proto.main.MessageFindByConversationOpts.prototype.setOffset = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.MessageFindByConversationInput.prototype.toObject = function(opt_includeInstance) {
  return proto.main.MessageFindByConversationInput.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.MessageFindByConversationInput} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.MessageFindByConversationInput.toObject = function(includeInstance, msg) {
  var f, obj = {
    filter: (f = msg.getFilter()) && proto.main.MessageFindByConversationFilter.toObject(includeInstance, f),
    opts: (f = msg.getOpts()) && proto.main.MessageFindByConversationOpts.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.MessageFindByConversationInput}
 */
proto.main.MessageFindByConversationInput.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.MessageFindByConversationInput;
  return proto.main.MessageFindByConversationInput.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.MessageFindByConversationInput} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.MessageFindByConversationInput}
 */
proto.main.MessageFindByConversationInput.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.main.MessageFindByConversationFilter;
      reader.readMessage(value,proto.main.MessageFindByConversationFilter.deserializeBinaryFromReader);
      msg.setFilter(value);
      break;
    case 2:
      var value = new proto.main.MessageFindByConversationOpts;
      reader.readMessage(value,proto.main.MessageFindByConversationOpts.deserializeBinaryFromReader);
      msg.setOpts(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.MessageFindByConversationInput.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.MessageFindByConversationInput.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.MessageFindByConversationInput} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.MessageFindByConversationInput.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFilter();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.main.MessageFindByConversationFilter.serializeBinaryToWriter
    );
  }
  f = message.getOpts();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.main.MessageFindByConversationOpts.serializeBinaryToWriter
    );
  }
};


/**
 * optional MessageFindByConversationFilter filter = 1;
 * @return {?proto.main.MessageFindByConversationFilter}
 */
proto.main.MessageFindByConversationInput.prototype.getFilter = function() {
  return /** @type{?proto.main.MessageFindByConversationFilter} */ (
    jspb.Message.getWrapperField(this, proto.main.MessageFindByConversationFilter, 1));
};


/**
 * @param {?proto.main.MessageFindByConversationFilter|undefined} value
 * @return {!proto.main.MessageFindByConversationInput} returns this
*/
proto.main.MessageFindByConversationInput.prototype.setFilter = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.main.MessageFindByConversationInput} returns this
 */
proto.main.MessageFindByConversationInput.prototype.clearFilter = function() {
  return this.setFilter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.main.MessageFindByConversationInput.prototype.hasFilter = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional MessageFindByConversationOpts opts = 2;
 * @return {?proto.main.MessageFindByConversationOpts}
 */
proto.main.MessageFindByConversationInput.prototype.getOpts = function() {
  return /** @type{?proto.main.MessageFindByConversationOpts} */ (
    jspb.Message.getWrapperField(this, proto.main.MessageFindByConversationOpts, 2));
};


/**
 * @param {?proto.main.MessageFindByConversationOpts|undefined} value
 * @return {!proto.main.MessageFindByConversationInput} returns this
*/
proto.main.MessageFindByConversationInput.prototype.setOpts = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.main.MessageFindByConversationInput} returns this
 */
proto.main.MessageFindByConversationInput.prototype.clearOpts = function() {
  return this.setOpts(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.main.MessageFindByConversationInput.prototype.hasOpts = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.MessageFindByConversationResultMeta.prototype.toObject = function(opt_includeInstance) {
  return proto.main.MessageFindByConversationResultMeta.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.MessageFindByConversationResultMeta} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.MessageFindByConversationResultMeta.toObject = function(includeInstance, msg) {
  var f, obj = {
    offset: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.MessageFindByConversationResultMeta}
 */
proto.main.MessageFindByConversationResultMeta.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.MessageFindByConversationResultMeta;
  return proto.main.MessageFindByConversationResultMeta.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.MessageFindByConversationResultMeta} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.MessageFindByConversationResultMeta}
 */
proto.main.MessageFindByConversationResultMeta.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setOffset(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.MessageFindByConversationResultMeta.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.MessageFindByConversationResultMeta.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.MessageFindByConversationResultMeta} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.MessageFindByConversationResultMeta.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOffset();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * optional uint64 offset = 1;
 * @return {number}
 */
proto.main.MessageFindByConversationResultMeta.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.main.MessageFindByConversationResultMeta} returns this
 */
proto.main.MessageFindByConversationResultMeta.prototype.setOffset = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.main.MessageFindByConversationResult.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.MessageFindByConversationResult.prototype.toObject = function(opt_includeInstance) {
  return proto.main.MessageFindByConversationResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.MessageFindByConversationResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.MessageFindByConversationResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    meta: (f = msg.getMeta()) && proto.main.MessageFindByConversationResultMeta.toObject(includeInstance, f),
    resultsList: jspb.Message.toObjectList(msg.getResultsList(),
    proto.main.Message.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.MessageFindByConversationResult}
 */
proto.main.MessageFindByConversationResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.MessageFindByConversationResult;
  return proto.main.MessageFindByConversationResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.MessageFindByConversationResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.MessageFindByConversationResult}
 */
proto.main.MessageFindByConversationResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.main.MessageFindByConversationResultMeta;
      reader.readMessage(value,proto.main.MessageFindByConversationResultMeta.deserializeBinaryFromReader);
      msg.setMeta(value);
      break;
    case 2:
      var value = new proto.main.Message;
      reader.readMessage(value,proto.main.Message.deserializeBinaryFromReader);
      msg.addResults(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.MessageFindByConversationResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.MessageFindByConversationResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.MessageFindByConversationResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.MessageFindByConversationResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMeta();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.main.MessageFindByConversationResultMeta.serializeBinaryToWriter
    );
  }
  f = message.getResultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.main.Message.serializeBinaryToWriter
    );
  }
};


/**
 * optional MessageFindByConversationResultMeta meta = 1;
 * @return {?proto.main.MessageFindByConversationResultMeta}
 */
proto.main.MessageFindByConversationResult.prototype.getMeta = function() {
  return /** @type{?proto.main.MessageFindByConversationResultMeta} */ (
    jspb.Message.getWrapperField(this, proto.main.MessageFindByConversationResultMeta, 1));
};


/**
 * @param {?proto.main.MessageFindByConversationResultMeta|undefined} value
 * @return {!proto.main.MessageFindByConversationResult} returns this
*/
proto.main.MessageFindByConversationResult.prototype.setMeta = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.main.MessageFindByConversationResult} returns this
 */
proto.main.MessageFindByConversationResult.prototype.clearMeta = function() {
  return this.setMeta(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.main.MessageFindByConversationResult.prototype.hasMeta = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Message results = 2;
 * @return {!Array<!proto.main.Message>}
 */
proto.main.MessageFindByConversationResult.prototype.getResultsList = function() {
  return /** @type{!Array<!proto.main.Message>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.main.Message, 2));
};


/**
 * @param {!Array<!proto.main.Message>} value
 * @return {!proto.main.MessageFindByConversationResult} returns this
*/
proto.main.MessageFindByConversationResult.prototype.setResultsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.main.Message=} opt_value
 * @param {number=} opt_index
 * @return {!proto.main.Message}
 */
proto.main.MessageFindByConversationResult.prototype.addResults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.main.Message, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.main.MessageFindByConversationResult} returns this
 */
proto.main.MessageFindByConversationResult.prototype.clearResultsList = function() {
  return this.setResultsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.Permission.prototype.toObject = function(opt_includeInstance) {
  return proto.main.Permission.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.Permission} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.Permission.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    createdat: jspb.Message.getFieldWithDefault(msg, 2, 0),
    updatedat: jspb.Message.getFieldWithDefault(msg, 3, 0),
    entity: jspb.Message.getFieldWithDefault(msg, 4, ""),
    entityid: jspb.Message.getFieldWithDefault(msg, 5, ""),
    permittedentity: jspb.Message.getFieldWithDefault(msg, 6, ""),
    permittedentityid: jspb.Message.getFieldWithDefault(msg, 7, ""),
    action: jspb.Message.getFieldWithDefault(msg, 8, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.Permission}
 */
proto.main.Permission.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.Permission;
  return proto.main.Permission.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.Permission} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.Permission}
 */
proto.main.Permission.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCreatedat(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setUpdatedat(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setEntity(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setEntityid(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setPermittedentity(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setPermittedentityid(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setAction(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.Permission.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.Permission.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.Permission} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.Permission.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCreatedat();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getUpdatedat();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getEntity();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getEntityid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getPermittedentity();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getPermittedentityid();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getAction();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.main.Permission.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.Permission} returns this
 */
proto.main.Permission.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 createdAt = 2;
 * @return {number}
 */
proto.main.Permission.prototype.getCreatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.main.Permission} returns this
 */
proto.main.Permission.prototype.setCreatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 updatedAt = 3;
 * @return {number}
 */
proto.main.Permission.prototype.getUpdatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.main.Permission} returns this
 */
proto.main.Permission.prototype.setUpdatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string entity = 4;
 * @return {string}
 */
proto.main.Permission.prototype.getEntity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.Permission} returns this
 */
proto.main.Permission.prototype.setEntity = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string entityId = 5;
 * @return {string}
 */
proto.main.Permission.prototype.getEntityid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.Permission} returns this
 */
proto.main.Permission.prototype.setEntityid = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string permittedEntity = 6;
 * @return {string}
 */
proto.main.Permission.prototype.getPermittedentity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.Permission} returns this
 */
proto.main.Permission.prototype.setPermittedentity = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string permittedEntityId = 7;
 * @return {string}
 */
proto.main.Permission.prototype.getPermittedentityid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.Permission} returns this
 */
proto.main.Permission.prototype.setPermittedentityid = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string action = 8;
 * @return {string}
 */
proto.main.Permission.prototype.getAction = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.Permission} returns this
 */
proto.main.Permission.prototype.setAction = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.main.Permissions.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.Permissions.prototype.toObject = function(opt_includeInstance) {
  return proto.main.Permissions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.Permissions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.Permissions.toObject = function(includeInstance, msg) {
  var f, obj = {
    permissionsList: jspb.Message.toObjectList(msg.getPermissionsList(),
    proto.main.Permission.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.Permissions}
 */
proto.main.Permissions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.Permissions;
  return proto.main.Permissions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.Permissions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.Permissions}
 */
proto.main.Permissions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.main.Permission;
      reader.readMessage(value,proto.main.Permission.deserializeBinaryFromReader);
      msg.addPermissions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.Permissions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.Permissions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.Permissions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.Permissions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPermissionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.main.Permission.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Permission permissions = 1;
 * @return {!Array<!proto.main.Permission>}
 */
proto.main.Permissions.prototype.getPermissionsList = function() {
  return /** @type{!Array<!proto.main.Permission>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.main.Permission, 1));
};


/**
 * @param {!Array<!proto.main.Permission>} value
 * @return {!proto.main.Permissions} returns this
*/
proto.main.Permissions.prototype.setPermissionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.main.Permission=} opt_value
 * @param {number=} opt_index
 * @return {!proto.main.Permission}
 */
proto.main.Permissions.prototype.addPermissions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.main.Permission, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.main.Permissions} returns this
 */
proto.main.Permissions.prototype.clearPermissionsList = function() {
  return this.setPermissionsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.PermissionCreateOneInput.prototype.toObject = function(opt_includeInstance) {
  return proto.main.PermissionCreateOneInput.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.PermissionCreateOneInput} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.PermissionCreateOneInput.toObject = function(includeInstance, msg) {
  var f, obj = {
    entity: jspb.Message.getFieldWithDefault(msg, 4, ""),
    entityid: jspb.Message.getFieldWithDefault(msg, 5, ""),
    permittedentity: jspb.Message.getFieldWithDefault(msg, 6, ""),
    permittedentityid: jspb.Message.getFieldWithDefault(msg, 7, ""),
    action: jspb.Message.getFieldWithDefault(msg, 8, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.PermissionCreateOneInput}
 */
proto.main.PermissionCreateOneInput.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.PermissionCreateOneInput;
  return proto.main.PermissionCreateOneInput.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.PermissionCreateOneInput} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.PermissionCreateOneInput}
 */
proto.main.PermissionCreateOneInput.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setEntity(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setEntityid(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setPermittedentity(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setPermittedentityid(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setAction(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.PermissionCreateOneInput.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.PermissionCreateOneInput.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.PermissionCreateOneInput} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.PermissionCreateOneInput.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntity();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getEntityid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getPermittedentity();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getPermittedentityid();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getAction();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * optional string entity = 4;
 * @return {string}
 */
proto.main.PermissionCreateOneInput.prototype.getEntity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.PermissionCreateOneInput} returns this
 */
proto.main.PermissionCreateOneInput.prototype.setEntity = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string entityId = 5;
 * @return {string}
 */
proto.main.PermissionCreateOneInput.prototype.getEntityid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.PermissionCreateOneInput} returns this
 */
proto.main.PermissionCreateOneInput.prototype.setEntityid = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string permittedEntity = 6;
 * @return {string}
 */
proto.main.PermissionCreateOneInput.prototype.getPermittedentity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.PermissionCreateOneInput} returns this
 */
proto.main.PermissionCreateOneInput.prototype.setPermittedentity = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string permittedEntityId = 7;
 * @return {string}
 */
proto.main.PermissionCreateOneInput.prototype.getPermittedentityid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.PermissionCreateOneInput} returns this
 */
proto.main.PermissionCreateOneInput.prototype.setPermittedentityid = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string action = 8;
 * @return {string}
 */
proto.main.PermissionCreateOneInput.prototype.getAction = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.PermissionCreateOneInput} returns this
 */
proto.main.PermissionCreateOneInput.prototype.setAction = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.main.PermissionCreateManyInput.repeatedFields_ = [7];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.PermissionCreateManyInput.prototype.toObject = function(opt_includeInstance) {
  return proto.main.PermissionCreateManyInput.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.PermissionCreateManyInput} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.PermissionCreateManyInput.toObject = function(includeInstance, msg) {
  var f, obj = {
    entity: jspb.Message.getFieldWithDefault(msg, 4, ""),
    entityid: jspb.Message.getFieldWithDefault(msg, 5, ""),
    permittedentity: jspb.Message.getFieldWithDefault(msg, 6, ""),
    permittedentityidsList: (f = jspb.Message.getRepeatedField(msg, 7)) == null ? undefined : f,
    action: jspb.Message.getFieldWithDefault(msg, 8, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.PermissionCreateManyInput}
 */
proto.main.PermissionCreateManyInput.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.PermissionCreateManyInput;
  return proto.main.PermissionCreateManyInput.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.PermissionCreateManyInput} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.PermissionCreateManyInput}
 */
proto.main.PermissionCreateManyInput.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setEntity(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setEntityid(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setPermittedentity(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.addPermittedentityids(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setAction(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.PermissionCreateManyInput.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.PermissionCreateManyInput.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.PermissionCreateManyInput} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.PermissionCreateManyInput.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntity();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getEntityid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getPermittedentity();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getPermittedentityidsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      7,
      f
    );
  }
  f = message.getAction();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * optional string entity = 4;
 * @return {string}
 */
proto.main.PermissionCreateManyInput.prototype.getEntity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.PermissionCreateManyInput} returns this
 */
proto.main.PermissionCreateManyInput.prototype.setEntity = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string entityId = 5;
 * @return {string}
 */
proto.main.PermissionCreateManyInput.prototype.getEntityid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.PermissionCreateManyInput} returns this
 */
proto.main.PermissionCreateManyInput.prototype.setEntityid = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string permittedEntity = 6;
 * @return {string}
 */
proto.main.PermissionCreateManyInput.prototype.getPermittedentity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.PermissionCreateManyInput} returns this
 */
proto.main.PermissionCreateManyInput.prototype.setPermittedentity = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * repeated string permittedEntityIds = 7;
 * @return {!Array<string>}
 */
proto.main.PermissionCreateManyInput.prototype.getPermittedentityidsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 7));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.main.PermissionCreateManyInput} returns this
 */
proto.main.PermissionCreateManyInput.prototype.setPermittedentityidsList = function(value) {
  return jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.main.PermissionCreateManyInput} returns this
 */
proto.main.PermissionCreateManyInput.prototype.addPermittedentityids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.main.PermissionCreateManyInput} returns this
 */
proto.main.PermissionCreateManyInput.prototype.clearPermittedentityidsList = function() {
  return this.setPermittedentityidsList([]);
};


/**
 * optional string action = 8;
 * @return {string}
 */
proto.main.PermissionCreateManyInput.prototype.getAction = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.PermissionCreateManyInput} returns this
 */
proto.main.PermissionCreateManyInput.prototype.setAction = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.PermissionFindOneInput.prototype.toObject = function(opt_includeInstance) {
  return proto.main.PermissionFindOneInput.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.PermissionFindOneInput} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.PermissionFindOneInput.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.PermissionFindOneInput}
 */
proto.main.PermissionFindOneInput.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.PermissionFindOneInput;
  return proto.main.PermissionFindOneInput.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.PermissionFindOneInput} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.PermissionFindOneInput}
 */
proto.main.PermissionFindOneInput.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.PermissionFindOneInput.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.PermissionFindOneInput.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.PermissionFindOneInput} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.PermissionFindOneInput.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.main.PermissionFindOneInput.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.PermissionFindOneInput} returns this
 */
proto.main.PermissionFindOneInput.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.PermissionFindWhereInput.prototype.toObject = function(opt_includeInstance) {
  return proto.main.PermissionFindWhereInput.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.PermissionFindWhereInput} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.PermissionFindWhereInput.toObject = function(includeInstance, msg) {
  var f, obj = {
    entity: jspb.Message.getFieldWithDefault(msg, 1, ""),
    entityid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    permittedentity: jspb.Message.getFieldWithDefault(msg, 3, ""),
    permittedentityid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    action: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.PermissionFindWhereInput}
 */
proto.main.PermissionFindWhereInput.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.PermissionFindWhereInput;
  return proto.main.PermissionFindWhereInput.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.PermissionFindWhereInput} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.PermissionFindWhereInput}
 */
proto.main.PermissionFindWhereInput.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEntity(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEntityid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPermittedentity(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPermittedentityid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setAction(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.PermissionFindWhereInput.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.PermissionFindWhereInput.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.PermissionFindWhereInput} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.PermissionFindWhereInput.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntity();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEntityid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPermittedentity();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPermittedentityid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getAction();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string entity = 1;
 * @return {string}
 */
proto.main.PermissionFindWhereInput.prototype.getEntity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.PermissionFindWhereInput} returns this
 */
proto.main.PermissionFindWhereInput.prototype.setEntity = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string entityId = 2;
 * @return {string}
 */
proto.main.PermissionFindWhereInput.prototype.getEntityid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.PermissionFindWhereInput} returns this
 */
proto.main.PermissionFindWhereInput.prototype.setEntityid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string permittedEntity = 3;
 * @return {string}
 */
proto.main.PermissionFindWhereInput.prototype.getPermittedentity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.PermissionFindWhereInput} returns this
 */
proto.main.PermissionFindWhereInput.prototype.setPermittedentity = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string permittedEntityId = 4;
 * @return {string}
 */
proto.main.PermissionFindWhereInput.prototype.getPermittedentityid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.PermissionFindWhereInput} returns this
 */
proto.main.PermissionFindWhereInput.prototype.setPermittedentityid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string action = 5;
 * @return {string}
 */
proto.main.PermissionFindWhereInput.prototype.getAction = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.PermissionFindWhereInput} returns this
 */
proto.main.PermissionFindWhereInput.prototype.setAction = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.main.PermissionFindWhereManyInput.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.PermissionFindWhereManyInput.prototype.toObject = function(opt_includeInstance) {
  return proto.main.PermissionFindWhereManyInput.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.PermissionFindWhereManyInput} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.PermissionFindWhereManyInput.toObject = function(includeInstance, msg) {
  var f, obj = {
    entity: jspb.Message.getFieldWithDefault(msg, 1, ""),
    entityid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    permittedentity: jspb.Message.getFieldWithDefault(msg, 3, ""),
    permittedentityidsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    action: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.PermissionFindWhereManyInput}
 */
proto.main.PermissionFindWhereManyInput.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.PermissionFindWhereManyInput;
  return proto.main.PermissionFindWhereManyInput.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.PermissionFindWhereManyInput} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.PermissionFindWhereManyInput}
 */
proto.main.PermissionFindWhereManyInput.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEntity(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEntityid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPermittedentity(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addPermittedentityids(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setAction(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.PermissionFindWhereManyInput.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.PermissionFindWhereManyInput.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.PermissionFindWhereManyInput} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.PermissionFindWhereManyInput.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntity();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEntityid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPermittedentity();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPermittedentityidsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getAction();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string entity = 1;
 * @return {string}
 */
proto.main.PermissionFindWhereManyInput.prototype.getEntity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.PermissionFindWhereManyInput} returns this
 */
proto.main.PermissionFindWhereManyInput.prototype.setEntity = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string entityId = 2;
 * @return {string}
 */
proto.main.PermissionFindWhereManyInput.prototype.getEntityid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.PermissionFindWhereManyInput} returns this
 */
proto.main.PermissionFindWhereManyInput.prototype.setEntityid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string permittedEntity = 3;
 * @return {string}
 */
proto.main.PermissionFindWhereManyInput.prototype.getPermittedentity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.PermissionFindWhereManyInput} returns this
 */
proto.main.PermissionFindWhereManyInput.prototype.setPermittedentity = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated string permittedEntityIds = 4;
 * @return {!Array<string>}
 */
proto.main.PermissionFindWhereManyInput.prototype.getPermittedentityidsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.main.PermissionFindWhereManyInput} returns this
 */
proto.main.PermissionFindWhereManyInput.prototype.setPermittedentityidsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.main.PermissionFindWhereManyInput} returns this
 */
proto.main.PermissionFindWhereManyInput.prototype.addPermittedentityids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.main.PermissionFindWhereManyInput} returns this
 */
proto.main.PermissionFindWhereManyInput.prototype.clearPermittedentityidsList = function() {
  return this.setPermittedentityidsList([]);
};


/**
 * optional string action = 5;
 * @return {string}
 */
proto.main.PermissionFindWhereManyInput.prototype.getAction = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.PermissionFindWhereManyInput} returns this
 */
proto.main.PermissionFindWhereManyInput.prototype.setAction = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.PermissionFindWhereOrStarInput.prototype.toObject = function(opt_includeInstance) {
  return proto.main.PermissionFindWhereOrStarInput.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.PermissionFindWhereOrStarInput} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.PermissionFindWhereOrStarInput.toObject = function(includeInstance, msg) {
  var f, obj = {
    entity: jspb.Message.getFieldWithDefault(msg, 1, ""),
    entityid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    permittedentity: jspb.Message.getFieldWithDefault(msg, 3, ""),
    permittedentityid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    action: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.PermissionFindWhereOrStarInput}
 */
proto.main.PermissionFindWhereOrStarInput.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.PermissionFindWhereOrStarInput;
  return proto.main.PermissionFindWhereOrStarInput.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.PermissionFindWhereOrStarInput} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.PermissionFindWhereOrStarInput}
 */
proto.main.PermissionFindWhereOrStarInput.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEntity(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEntityid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPermittedentity(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPermittedentityid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setAction(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.PermissionFindWhereOrStarInput.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.PermissionFindWhereOrStarInput.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.PermissionFindWhereOrStarInput} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.PermissionFindWhereOrStarInput.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntity();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEntityid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPermittedentity();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPermittedentityid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getAction();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string entity = 1;
 * @return {string}
 */
proto.main.PermissionFindWhereOrStarInput.prototype.getEntity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.PermissionFindWhereOrStarInput} returns this
 */
proto.main.PermissionFindWhereOrStarInput.prototype.setEntity = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string entityId = 2;
 * @return {string}
 */
proto.main.PermissionFindWhereOrStarInput.prototype.getEntityid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.PermissionFindWhereOrStarInput} returns this
 */
proto.main.PermissionFindWhereOrStarInput.prototype.setEntityid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string permittedEntity = 3;
 * @return {string}
 */
proto.main.PermissionFindWhereOrStarInput.prototype.getPermittedentity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.PermissionFindWhereOrStarInput} returns this
 */
proto.main.PermissionFindWhereOrStarInput.prototype.setPermittedentity = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string permittedEntityId = 4;
 * @return {string}
 */
proto.main.PermissionFindWhereOrStarInput.prototype.getPermittedentityid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.PermissionFindWhereOrStarInput} returns this
 */
proto.main.PermissionFindWhereOrStarInput.prototype.setPermittedentityid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string action = 5;
 * @return {string}
 */
proto.main.PermissionFindWhereOrStarInput.prototype.getAction = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.PermissionFindWhereOrStarInput} returns this
 */
proto.main.PermissionFindWhereOrStarInput.prototype.setAction = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.Permitted.prototype.toObject = function(opt_includeInstance) {
  return proto.main.Permitted.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.Permitted} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.Permitted.toObject = function(includeInstance, msg) {
  var f, obj = {
    permittedentity: jspb.Message.getFieldWithDefault(msg, 1, ""),
    permittedentityid: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.Permitted}
 */
proto.main.Permitted.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.Permitted;
  return proto.main.Permitted.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.Permitted} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.Permitted}
 */
proto.main.Permitted.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPermittedentity(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPermittedentityid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.Permitted.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.Permitted.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.Permitted} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.Permitted.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPermittedentity();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPermittedentityid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string permittedEntity = 1;
 * @return {string}
 */
proto.main.Permitted.prototype.getPermittedentity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.Permitted} returns this
 */
proto.main.Permitted.prototype.setPermittedentity = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string permittedEntityId = 2;
 * @return {string}
 */
proto.main.Permitted.prototype.getPermittedentityid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.Permitted} returns this
 */
proto.main.Permitted.prototype.setPermittedentityid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.main.PermissionValidateOneInput.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.PermissionValidateOneInput.prototype.toObject = function(opt_includeInstance) {
  return proto.main.PermissionValidateOneInput.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.PermissionValidateOneInput} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.PermissionValidateOneInput.toObject = function(includeInstance, msg) {
  var f, obj = {
    entity: jspb.Message.getFieldWithDefault(msg, 1, ""),
    entityid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    action: jspb.Message.getFieldWithDefault(msg, 3, ""),
    permittedList: jspb.Message.toObjectList(msg.getPermittedList(),
    proto.main.Permitted.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.PermissionValidateOneInput}
 */
proto.main.PermissionValidateOneInput.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.PermissionValidateOneInput;
  return proto.main.PermissionValidateOneInput.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.PermissionValidateOneInput} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.PermissionValidateOneInput}
 */
proto.main.PermissionValidateOneInput.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEntity(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEntityid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAction(value);
      break;
    case 4:
      var value = new proto.main.Permitted;
      reader.readMessage(value,proto.main.Permitted.deserializeBinaryFromReader);
      msg.addPermitted(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.PermissionValidateOneInput.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.PermissionValidateOneInput.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.PermissionValidateOneInput} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.PermissionValidateOneInput.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntity();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEntityid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAction();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPermittedList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.main.Permitted.serializeBinaryToWriter
    );
  }
};


/**
 * optional string entity = 1;
 * @return {string}
 */
proto.main.PermissionValidateOneInput.prototype.getEntity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.PermissionValidateOneInput} returns this
 */
proto.main.PermissionValidateOneInput.prototype.setEntity = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string entityId = 2;
 * @return {string}
 */
proto.main.PermissionValidateOneInput.prototype.getEntityid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.PermissionValidateOneInput} returns this
 */
proto.main.PermissionValidateOneInput.prototype.setEntityid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string action = 3;
 * @return {string}
 */
proto.main.PermissionValidateOneInput.prototype.getAction = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.PermissionValidateOneInput} returns this
 */
proto.main.PermissionValidateOneInput.prototype.setAction = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated Permitted permitted = 4;
 * @return {!Array<!proto.main.Permitted>}
 */
proto.main.PermissionValidateOneInput.prototype.getPermittedList = function() {
  return /** @type{!Array<!proto.main.Permitted>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.main.Permitted, 4));
};


/**
 * @param {!Array<!proto.main.Permitted>} value
 * @return {!proto.main.PermissionValidateOneInput} returns this
*/
proto.main.PermissionValidateOneInput.prototype.setPermittedList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.main.Permitted=} opt_value
 * @param {number=} opt_index
 * @return {!proto.main.Permitted}
 */
proto.main.PermissionValidateOneInput.prototype.addPermitted = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.main.Permitted, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.main.PermissionValidateOneInput} returns this
 */
proto.main.PermissionValidateOneInput.prototype.clearPermittedList = function() {
  return this.setPermittedList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.PermissionValidateOneResult.prototype.toObject = function(opt_includeInstance) {
  return proto.main.PermissionValidateOneResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.PermissionValidateOneResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.PermissionValidateOneResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    validated: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.PermissionValidateOneResult}
 */
proto.main.PermissionValidateOneResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.PermissionValidateOneResult;
  return proto.main.PermissionValidateOneResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.PermissionValidateOneResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.PermissionValidateOneResult}
 */
proto.main.PermissionValidateOneResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setValidated(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.PermissionValidateOneResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.PermissionValidateOneResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.PermissionValidateOneResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.PermissionValidateOneResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValidated();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool validated = 1;
 * @return {boolean}
 */
proto.main.PermissionValidateOneResult.prototype.getValidated = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.main.PermissionValidateOneResult} returns this
 */
proto.main.PermissionValidateOneResult.prototype.setValidated = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.PermissionRemoveOneInput.prototype.toObject = function(opt_includeInstance) {
  return proto.main.PermissionRemoveOneInput.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.PermissionRemoveOneInput} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.PermissionRemoveOneInput.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.PermissionRemoveOneInput}
 */
proto.main.PermissionRemoveOneInput.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.PermissionRemoveOneInput;
  return proto.main.PermissionRemoveOneInput.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.PermissionRemoveOneInput} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.PermissionRemoveOneInput}
 */
proto.main.PermissionRemoveOneInput.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.PermissionRemoveOneInput.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.PermissionRemoveOneInput.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.PermissionRemoveOneInput} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.PermissionRemoveOneInput.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.main.PermissionRemoveOneInput.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.PermissionRemoveOneInput} returns this
 */
proto.main.PermissionRemoveOneInput.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.PermissionRemoveWhereInput.prototype.toObject = function(opt_includeInstance) {
  return proto.main.PermissionRemoveWhereInput.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.PermissionRemoveWhereInput} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.PermissionRemoveWhereInput.toObject = function(includeInstance, msg) {
  var f, obj = {
    entity: jspb.Message.getFieldWithDefault(msg, 1, ""),
    entityid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    permittedentity: jspb.Message.getFieldWithDefault(msg, 3, ""),
    permittedentityid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    action: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.PermissionRemoveWhereInput}
 */
proto.main.PermissionRemoveWhereInput.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.PermissionRemoveWhereInput;
  return proto.main.PermissionRemoveWhereInput.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.PermissionRemoveWhereInput} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.PermissionRemoveWhereInput}
 */
proto.main.PermissionRemoveWhereInput.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEntity(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEntityid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPermittedentity(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPermittedentityid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setAction(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.PermissionRemoveWhereInput.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.PermissionRemoveWhereInput.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.PermissionRemoveWhereInput} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.PermissionRemoveWhereInput.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntity();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEntityid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPermittedentity();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPermittedentityid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getAction();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string entity = 1;
 * @return {string}
 */
proto.main.PermissionRemoveWhereInput.prototype.getEntity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.PermissionRemoveWhereInput} returns this
 */
proto.main.PermissionRemoveWhereInput.prototype.setEntity = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string entityId = 2;
 * @return {string}
 */
proto.main.PermissionRemoveWhereInput.prototype.getEntityid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.PermissionRemoveWhereInput} returns this
 */
proto.main.PermissionRemoveWhereInput.prototype.setEntityid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string permittedEntity = 3;
 * @return {string}
 */
proto.main.PermissionRemoveWhereInput.prototype.getPermittedentity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.PermissionRemoveWhereInput} returns this
 */
proto.main.PermissionRemoveWhereInput.prototype.setPermittedentity = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string permittedEntityId = 4;
 * @return {string}
 */
proto.main.PermissionRemoveWhereInput.prototype.getPermittedentityid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.PermissionRemoveWhereInput} returns this
 */
proto.main.PermissionRemoveWhereInput.prototype.setPermittedentityid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string action = 5;
 * @return {string}
 */
proto.main.PermissionRemoveWhereInput.prototype.getAction = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.PermissionRemoveWhereInput} returns this
 */
proto.main.PermissionRemoveWhereInput.prototype.setAction = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.main.PermissionRemoveWhereManyInput.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.PermissionRemoveWhereManyInput.prototype.toObject = function(opt_includeInstance) {
  return proto.main.PermissionRemoveWhereManyInput.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.PermissionRemoveWhereManyInput} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.PermissionRemoveWhereManyInput.toObject = function(includeInstance, msg) {
  var f, obj = {
    entity: jspb.Message.getFieldWithDefault(msg, 1, ""),
    entityid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    permittedentity: jspb.Message.getFieldWithDefault(msg, 3, ""),
    permittedentityidsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    action: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.PermissionRemoveWhereManyInput}
 */
proto.main.PermissionRemoveWhereManyInput.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.PermissionRemoveWhereManyInput;
  return proto.main.PermissionRemoveWhereManyInput.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.PermissionRemoveWhereManyInput} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.PermissionRemoveWhereManyInput}
 */
proto.main.PermissionRemoveWhereManyInput.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEntity(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEntityid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPermittedentity(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addPermittedentityids(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setAction(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.PermissionRemoveWhereManyInput.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.PermissionRemoveWhereManyInput.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.PermissionRemoveWhereManyInput} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.PermissionRemoveWhereManyInput.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntity();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEntityid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPermittedentity();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPermittedentityidsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getAction();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string entity = 1;
 * @return {string}
 */
proto.main.PermissionRemoveWhereManyInput.prototype.getEntity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.PermissionRemoveWhereManyInput} returns this
 */
proto.main.PermissionRemoveWhereManyInput.prototype.setEntity = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string entityId = 2;
 * @return {string}
 */
proto.main.PermissionRemoveWhereManyInput.prototype.getEntityid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.PermissionRemoveWhereManyInput} returns this
 */
proto.main.PermissionRemoveWhereManyInput.prototype.setEntityid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string permittedEntity = 3;
 * @return {string}
 */
proto.main.PermissionRemoveWhereManyInput.prototype.getPermittedentity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.PermissionRemoveWhereManyInput} returns this
 */
proto.main.PermissionRemoveWhereManyInput.prototype.setPermittedentity = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated string permittedEntityIds = 4;
 * @return {!Array<string>}
 */
proto.main.PermissionRemoveWhereManyInput.prototype.getPermittedentityidsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.main.PermissionRemoveWhereManyInput} returns this
 */
proto.main.PermissionRemoveWhereManyInput.prototype.setPermittedentityidsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.main.PermissionRemoveWhereManyInput} returns this
 */
proto.main.PermissionRemoveWhereManyInput.prototype.addPermittedentityids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.main.PermissionRemoveWhereManyInput} returns this
 */
proto.main.PermissionRemoveWhereManyInput.prototype.clearPermittedentityidsList = function() {
  return this.setPermittedentityidsList([]);
};


/**
 * optional string action = 5;
 * @return {string}
 */
proto.main.PermissionRemoveWhereManyInput.prototype.getAction = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.PermissionRemoveWhereManyInput} returns this
 */
proto.main.PermissionRemoveWhereManyInput.prototype.setAction = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.PermissionFindByPermittedFilter.prototype.toObject = function(opt_includeInstance) {
  return proto.main.PermissionFindByPermittedFilter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.PermissionFindByPermittedFilter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.PermissionFindByPermittedFilter.toObject = function(includeInstance, msg) {
  var f, obj = {
    permittedentity: jspb.Message.getFieldWithDefault(msg, 6, ""),
    permittedentityid: jspb.Message.getFieldWithDefault(msg, 7, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.PermissionFindByPermittedFilter}
 */
proto.main.PermissionFindByPermittedFilter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.PermissionFindByPermittedFilter;
  return proto.main.PermissionFindByPermittedFilter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.PermissionFindByPermittedFilter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.PermissionFindByPermittedFilter}
 */
proto.main.PermissionFindByPermittedFilter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setPermittedentity(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setPermittedentityid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.PermissionFindByPermittedFilter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.PermissionFindByPermittedFilter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.PermissionFindByPermittedFilter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.PermissionFindByPermittedFilter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPermittedentity();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getPermittedentityid();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional string permittedEntity = 6;
 * @return {string}
 */
proto.main.PermissionFindByPermittedFilter.prototype.getPermittedentity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.PermissionFindByPermittedFilter} returns this
 */
proto.main.PermissionFindByPermittedFilter.prototype.setPermittedentity = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string permittedEntityId = 7;
 * @return {string}
 */
proto.main.PermissionFindByPermittedFilter.prototype.getPermittedentityid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.PermissionFindByPermittedFilter} returns this
 */
proto.main.PermissionFindByPermittedFilter.prototype.setPermittedentityid = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.PermissionFindByPermittedOpts.prototype.toObject = function(opt_includeInstance) {
  return proto.main.PermissionFindByPermittedOpts.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.PermissionFindByPermittedOpts} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.PermissionFindByPermittedOpts.toObject = function(includeInstance, msg) {
  var f, obj = {
    limit: jspb.Message.getFieldWithDefault(msg, 1, 0),
    offset: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.PermissionFindByPermittedOpts}
 */
proto.main.PermissionFindByPermittedOpts.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.PermissionFindByPermittedOpts;
  return proto.main.PermissionFindByPermittedOpts.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.PermissionFindByPermittedOpts} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.PermissionFindByPermittedOpts}
 */
proto.main.PermissionFindByPermittedOpts.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLimit(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setOffset(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.PermissionFindByPermittedOpts.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.PermissionFindByPermittedOpts.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.PermissionFindByPermittedOpts} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.PermissionFindByPermittedOpts.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLimit();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getOffset();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional uint64 limit = 1;
 * @return {number}
 */
proto.main.PermissionFindByPermittedOpts.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.main.PermissionFindByPermittedOpts} returns this
 */
proto.main.PermissionFindByPermittedOpts.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 offset = 2;
 * @return {number}
 */
proto.main.PermissionFindByPermittedOpts.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.main.PermissionFindByPermittedOpts} returns this
 */
proto.main.PermissionFindByPermittedOpts.prototype.setOffset = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.PermissionFindByPermittedInput.prototype.toObject = function(opt_includeInstance) {
  return proto.main.PermissionFindByPermittedInput.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.PermissionFindByPermittedInput} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.PermissionFindByPermittedInput.toObject = function(includeInstance, msg) {
  var f, obj = {
    filter: (f = msg.getFilter()) && proto.main.PermissionFindByPermittedFilter.toObject(includeInstance, f),
    opts: (f = msg.getOpts()) && proto.main.PermissionFindByPermittedOpts.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.PermissionFindByPermittedInput}
 */
proto.main.PermissionFindByPermittedInput.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.PermissionFindByPermittedInput;
  return proto.main.PermissionFindByPermittedInput.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.PermissionFindByPermittedInput} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.PermissionFindByPermittedInput}
 */
proto.main.PermissionFindByPermittedInput.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.main.PermissionFindByPermittedFilter;
      reader.readMessage(value,proto.main.PermissionFindByPermittedFilter.deserializeBinaryFromReader);
      msg.setFilter(value);
      break;
    case 2:
      var value = new proto.main.PermissionFindByPermittedOpts;
      reader.readMessage(value,proto.main.PermissionFindByPermittedOpts.deserializeBinaryFromReader);
      msg.setOpts(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.PermissionFindByPermittedInput.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.PermissionFindByPermittedInput.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.PermissionFindByPermittedInput} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.PermissionFindByPermittedInput.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFilter();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.main.PermissionFindByPermittedFilter.serializeBinaryToWriter
    );
  }
  f = message.getOpts();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.main.PermissionFindByPermittedOpts.serializeBinaryToWriter
    );
  }
};


/**
 * optional PermissionFindByPermittedFilter filter = 1;
 * @return {?proto.main.PermissionFindByPermittedFilter}
 */
proto.main.PermissionFindByPermittedInput.prototype.getFilter = function() {
  return /** @type{?proto.main.PermissionFindByPermittedFilter} */ (
    jspb.Message.getWrapperField(this, proto.main.PermissionFindByPermittedFilter, 1));
};


/**
 * @param {?proto.main.PermissionFindByPermittedFilter|undefined} value
 * @return {!proto.main.PermissionFindByPermittedInput} returns this
*/
proto.main.PermissionFindByPermittedInput.prototype.setFilter = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.main.PermissionFindByPermittedInput} returns this
 */
proto.main.PermissionFindByPermittedInput.prototype.clearFilter = function() {
  return this.setFilter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.main.PermissionFindByPermittedInput.prototype.hasFilter = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional PermissionFindByPermittedOpts opts = 2;
 * @return {?proto.main.PermissionFindByPermittedOpts}
 */
proto.main.PermissionFindByPermittedInput.prototype.getOpts = function() {
  return /** @type{?proto.main.PermissionFindByPermittedOpts} */ (
    jspb.Message.getWrapperField(this, proto.main.PermissionFindByPermittedOpts, 2));
};


/**
 * @param {?proto.main.PermissionFindByPermittedOpts|undefined} value
 * @return {!proto.main.PermissionFindByPermittedInput} returns this
*/
proto.main.PermissionFindByPermittedInput.prototype.setOpts = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.main.PermissionFindByPermittedInput} returns this
 */
proto.main.PermissionFindByPermittedInput.prototype.clearOpts = function() {
  return this.setOpts(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.main.PermissionFindByPermittedInput.prototype.hasOpts = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.PermissionFindByPermittedResultMeta.prototype.toObject = function(opt_includeInstance) {
  return proto.main.PermissionFindByPermittedResultMeta.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.PermissionFindByPermittedResultMeta} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.PermissionFindByPermittedResultMeta.toObject = function(includeInstance, msg) {
  var f, obj = {
    offset: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.PermissionFindByPermittedResultMeta}
 */
proto.main.PermissionFindByPermittedResultMeta.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.PermissionFindByPermittedResultMeta;
  return proto.main.PermissionFindByPermittedResultMeta.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.PermissionFindByPermittedResultMeta} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.PermissionFindByPermittedResultMeta}
 */
proto.main.PermissionFindByPermittedResultMeta.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setOffset(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.PermissionFindByPermittedResultMeta.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.PermissionFindByPermittedResultMeta.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.PermissionFindByPermittedResultMeta} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.PermissionFindByPermittedResultMeta.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOffset();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * optional uint64 offset = 1;
 * @return {number}
 */
proto.main.PermissionFindByPermittedResultMeta.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.main.PermissionFindByPermittedResultMeta} returns this
 */
proto.main.PermissionFindByPermittedResultMeta.prototype.setOffset = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.main.PermissionFindByPermittedResult.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.PermissionFindByPermittedResult.prototype.toObject = function(opt_includeInstance) {
  return proto.main.PermissionFindByPermittedResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.PermissionFindByPermittedResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.PermissionFindByPermittedResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    meta: (f = msg.getMeta()) && proto.main.PermissionFindByPermittedResultMeta.toObject(includeInstance, f),
    resultsList: jspb.Message.toObjectList(msg.getResultsList(),
    proto.main.Permission.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.PermissionFindByPermittedResult}
 */
proto.main.PermissionFindByPermittedResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.PermissionFindByPermittedResult;
  return proto.main.PermissionFindByPermittedResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.PermissionFindByPermittedResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.PermissionFindByPermittedResult}
 */
proto.main.PermissionFindByPermittedResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.main.PermissionFindByPermittedResultMeta;
      reader.readMessage(value,proto.main.PermissionFindByPermittedResultMeta.deserializeBinaryFromReader);
      msg.setMeta(value);
      break;
    case 2:
      var value = new proto.main.Permission;
      reader.readMessage(value,proto.main.Permission.deserializeBinaryFromReader);
      msg.addResults(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.PermissionFindByPermittedResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.PermissionFindByPermittedResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.PermissionFindByPermittedResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.PermissionFindByPermittedResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMeta();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.main.PermissionFindByPermittedResultMeta.serializeBinaryToWriter
    );
  }
  f = message.getResultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.main.Permission.serializeBinaryToWriter
    );
  }
};


/**
 * optional PermissionFindByPermittedResultMeta meta = 1;
 * @return {?proto.main.PermissionFindByPermittedResultMeta}
 */
proto.main.PermissionFindByPermittedResult.prototype.getMeta = function() {
  return /** @type{?proto.main.PermissionFindByPermittedResultMeta} */ (
    jspb.Message.getWrapperField(this, proto.main.PermissionFindByPermittedResultMeta, 1));
};


/**
 * @param {?proto.main.PermissionFindByPermittedResultMeta|undefined} value
 * @return {!proto.main.PermissionFindByPermittedResult} returns this
*/
proto.main.PermissionFindByPermittedResult.prototype.setMeta = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.main.PermissionFindByPermittedResult} returns this
 */
proto.main.PermissionFindByPermittedResult.prototype.clearMeta = function() {
  return this.setMeta(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.main.PermissionFindByPermittedResult.prototype.hasMeta = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Permission results = 2;
 * @return {!Array<!proto.main.Permission>}
 */
proto.main.PermissionFindByPermittedResult.prototype.getResultsList = function() {
  return /** @type{!Array<!proto.main.Permission>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.main.Permission, 2));
};


/**
 * @param {!Array<!proto.main.Permission>} value
 * @return {!proto.main.PermissionFindByPermittedResult} returns this
*/
proto.main.PermissionFindByPermittedResult.prototype.setResultsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.main.Permission=} opt_value
 * @param {number=} opt_index
 * @return {!proto.main.Permission}
 */
proto.main.PermissionFindByPermittedResult.prototype.addResults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.main.Permission, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.main.PermissionFindByPermittedResult} returns this
 */
proto.main.PermissionFindByPermittedResult.prototype.clearResultsList = function() {
  return this.setResultsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.PermissionFindByEntityFilter.prototype.toObject = function(opt_includeInstance) {
  return proto.main.PermissionFindByEntityFilter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.PermissionFindByEntityFilter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.PermissionFindByEntityFilter.toObject = function(includeInstance, msg) {
  var f, obj = {
    entity: jspb.Message.getFieldWithDefault(msg, 6, ""),
    entityid: jspb.Message.getFieldWithDefault(msg, 7, ""),
    action: jspb.Message.getFieldWithDefault(msg, 8, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.PermissionFindByEntityFilter}
 */
proto.main.PermissionFindByEntityFilter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.PermissionFindByEntityFilter;
  return proto.main.PermissionFindByEntityFilter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.PermissionFindByEntityFilter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.PermissionFindByEntityFilter}
 */
proto.main.PermissionFindByEntityFilter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setEntity(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setEntityid(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setAction(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.PermissionFindByEntityFilter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.PermissionFindByEntityFilter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.PermissionFindByEntityFilter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.PermissionFindByEntityFilter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntity();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getEntityid();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getAction();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * optional string entity = 6;
 * @return {string}
 */
proto.main.PermissionFindByEntityFilter.prototype.getEntity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.PermissionFindByEntityFilter} returns this
 */
proto.main.PermissionFindByEntityFilter.prototype.setEntity = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string entityId = 7;
 * @return {string}
 */
proto.main.PermissionFindByEntityFilter.prototype.getEntityid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.PermissionFindByEntityFilter} returns this
 */
proto.main.PermissionFindByEntityFilter.prototype.setEntityid = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string action = 8;
 * @return {string}
 */
proto.main.PermissionFindByEntityFilter.prototype.getAction = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.PermissionFindByEntityFilter} returns this
 */
proto.main.PermissionFindByEntityFilter.prototype.setAction = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.PermissionFindByEntityOpts.prototype.toObject = function(opt_includeInstance) {
  return proto.main.PermissionFindByEntityOpts.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.PermissionFindByEntityOpts} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.PermissionFindByEntityOpts.toObject = function(includeInstance, msg) {
  var f, obj = {
    limit: jspb.Message.getFieldWithDefault(msg, 1, 0),
    offset: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.PermissionFindByEntityOpts}
 */
proto.main.PermissionFindByEntityOpts.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.PermissionFindByEntityOpts;
  return proto.main.PermissionFindByEntityOpts.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.PermissionFindByEntityOpts} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.PermissionFindByEntityOpts}
 */
proto.main.PermissionFindByEntityOpts.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLimit(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setOffset(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.PermissionFindByEntityOpts.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.PermissionFindByEntityOpts.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.PermissionFindByEntityOpts} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.PermissionFindByEntityOpts.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLimit();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getOffset();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional uint64 limit = 1;
 * @return {number}
 */
proto.main.PermissionFindByEntityOpts.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.main.PermissionFindByEntityOpts} returns this
 */
proto.main.PermissionFindByEntityOpts.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 offset = 2;
 * @return {number}
 */
proto.main.PermissionFindByEntityOpts.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.main.PermissionFindByEntityOpts} returns this
 */
proto.main.PermissionFindByEntityOpts.prototype.setOffset = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.PermissionFindByEntityInput.prototype.toObject = function(opt_includeInstance) {
  return proto.main.PermissionFindByEntityInput.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.PermissionFindByEntityInput} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.PermissionFindByEntityInput.toObject = function(includeInstance, msg) {
  var f, obj = {
    filter: (f = msg.getFilter()) && proto.main.PermissionFindByEntityFilter.toObject(includeInstance, f),
    opts: (f = msg.getOpts()) && proto.main.PermissionFindByEntityOpts.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.PermissionFindByEntityInput}
 */
proto.main.PermissionFindByEntityInput.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.PermissionFindByEntityInput;
  return proto.main.PermissionFindByEntityInput.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.PermissionFindByEntityInput} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.PermissionFindByEntityInput}
 */
proto.main.PermissionFindByEntityInput.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.main.PermissionFindByEntityFilter;
      reader.readMessage(value,proto.main.PermissionFindByEntityFilter.deserializeBinaryFromReader);
      msg.setFilter(value);
      break;
    case 2:
      var value = new proto.main.PermissionFindByEntityOpts;
      reader.readMessage(value,proto.main.PermissionFindByEntityOpts.deserializeBinaryFromReader);
      msg.setOpts(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.PermissionFindByEntityInput.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.PermissionFindByEntityInput.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.PermissionFindByEntityInput} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.PermissionFindByEntityInput.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFilter();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.main.PermissionFindByEntityFilter.serializeBinaryToWriter
    );
  }
  f = message.getOpts();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.main.PermissionFindByEntityOpts.serializeBinaryToWriter
    );
  }
};


/**
 * optional PermissionFindByEntityFilter filter = 1;
 * @return {?proto.main.PermissionFindByEntityFilter}
 */
proto.main.PermissionFindByEntityInput.prototype.getFilter = function() {
  return /** @type{?proto.main.PermissionFindByEntityFilter} */ (
    jspb.Message.getWrapperField(this, proto.main.PermissionFindByEntityFilter, 1));
};


/**
 * @param {?proto.main.PermissionFindByEntityFilter|undefined} value
 * @return {!proto.main.PermissionFindByEntityInput} returns this
*/
proto.main.PermissionFindByEntityInput.prototype.setFilter = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.main.PermissionFindByEntityInput} returns this
 */
proto.main.PermissionFindByEntityInput.prototype.clearFilter = function() {
  return this.setFilter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.main.PermissionFindByEntityInput.prototype.hasFilter = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional PermissionFindByEntityOpts opts = 2;
 * @return {?proto.main.PermissionFindByEntityOpts}
 */
proto.main.PermissionFindByEntityInput.prototype.getOpts = function() {
  return /** @type{?proto.main.PermissionFindByEntityOpts} */ (
    jspb.Message.getWrapperField(this, proto.main.PermissionFindByEntityOpts, 2));
};


/**
 * @param {?proto.main.PermissionFindByEntityOpts|undefined} value
 * @return {!proto.main.PermissionFindByEntityInput} returns this
*/
proto.main.PermissionFindByEntityInput.prototype.setOpts = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.main.PermissionFindByEntityInput} returns this
 */
proto.main.PermissionFindByEntityInput.prototype.clearOpts = function() {
  return this.setOpts(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.main.PermissionFindByEntityInput.prototype.hasOpts = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.PermissionFindByEntityResultMeta.prototype.toObject = function(opt_includeInstance) {
  return proto.main.PermissionFindByEntityResultMeta.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.PermissionFindByEntityResultMeta} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.PermissionFindByEntityResultMeta.toObject = function(includeInstance, msg) {
  var f, obj = {
    offset: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.PermissionFindByEntityResultMeta}
 */
proto.main.PermissionFindByEntityResultMeta.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.PermissionFindByEntityResultMeta;
  return proto.main.PermissionFindByEntityResultMeta.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.PermissionFindByEntityResultMeta} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.PermissionFindByEntityResultMeta}
 */
proto.main.PermissionFindByEntityResultMeta.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setOffset(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.PermissionFindByEntityResultMeta.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.PermissionFindByEntityResultMeta.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.PermissionFindByEntityResultMeta} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.PermissionFindByEntityResultMeta.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOffset();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * optional uint64 offset = 1;
 * @return {number}
 */
proto.main.PermissionFindByEntityResultMeta.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.main.PermissionFindByEntityResultMeta} returns this
 */
proto.main.PermissionFindByEntityResultMeta.prototype.setOffset = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.main.PermissionFindByEntityResult.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.PermissionFindByEntityResult.prototype.toObject = function(opt_includeInstance) {
  return proto.main.PermissionFindByEntityResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.PermissionFindByEntityResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.PermissionFindByEntityResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    meta: (f = msg.getMeta()) && proto.main.PermissionFindByEntityResultMeta.toObject(includeInstance, f),
    resultsList: jspb.Message.toObjectList(msg.getResultsList(),
    proto.main.Permission.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.PermissionFindByEntityResult}
 */
proto.main.PermissionFindByEntityResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.PermissionFindByEntityResult;
  return proto.main.PermissionFindByEntityResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.PermissionFindByEntityResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.PermissionFindByEntityResult}
 */
proto.main.PermissionFindByEntityResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.main.PermissionFindByEntityResultMeta;
      reader.readMessage(value,proto.main.PermissionFindByEntityResultMeta.deserializeBinaryFromReader);
      msg.setMeta(value);
      break;
    case 2:
      var value = new proto.main.Permission;
      reader.readMessage(value,proto.main.Permission.deserializeBinaryFromReader);
      msg.addResults(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.PermissionFindByEntityResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.PermissionFindByEntityResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.PermissionFindByEntityResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.PermissionFindByEntityResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMeta();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.main.PermissionFindByEntityResultMeta.serializeBinaryToWriter
    );
  }
  f = message.getResultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.main.Permission.serializeBinaryToWriter
    );
  }
};


/**
 * optional PermissionFindByEntityResultMeta meta = 1;
 * @return {?proto.main.PermissionFindByEntityResultMeta}
 */
proto.main.PermissionFindByEntityResult.prototype.getMeta = function() {
  return /** @type{?proto.main.PermissionFindByEntityResultMeta} */ (
    jspb.Message.getWrapperField(this, proto.main.PermissionFindByEntityResultMeta, 1));
};


/**
 * @param {?proto.main.PermissionFindByEntityResultMeta|undefined} value
 * @return {!proto.main.PermissionFindByEntityResult} returns this
*/
proto.main.PermissionFindByEntityResult.prototype.setMeta = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.main.PermissionFindByEntityResult} returns this
 */
proto.main.PermissionFindByEntityResult.prototype.clearMeta = function() {
  return this.setMeta(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.main.PermissionFindByEntityResult.prototype.hasMeta = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Permission results = 2;
 * @return {!Array<!proto.main.Permission>}
 */
proto.main.PermissionFindByEntityResult.prototype.getResultsList = function() {
  return /** @type{!Array<!proto.main.Permission>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.main.Permission, 2));
};


/**
 * @param {!Array<!proto.main.Permission>} value
 * @return {!proto.main.PermissionFindByEntityResult} returns this
*/
proto.main.PermissionFindByEntityResult.prototype.setResultsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.main.Permission=} opt_value
 * @param {number=} opt_index
 * @return {!proto.main.Permission}
 */
proto.main.PermissionFindByEntityResult.prototype.addResults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.main.Permission, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.main.PermissionFindByEntityResult} returns this
 */
proto.main.PermissionFindByEntityResult.prototype.clearResultsList = function() {
  return this.setResultsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.PermissionFindAllActionsFilter.prototype.toObject = function(opt_includeInstance) {
  return proto.main.PermissionFindAllActionsFilter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.PermissionFindAllActionsFilter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.PermissionFindAllActionsFilter.toObject = function(includeInstance, msg) {
  var f, obj = {
    entity: jspb.Message.getFieldWithDefault(msg, 1, ""),
    entityid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    permittedentity: jspb.Message.getFieldWithDefault(msg, 3, ""),
    permittedentityid: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.PermissionFindAllActionsFilter}
 */
proto.main.PermissionFindAllActionsFilter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.PermissionFindAllActionsFilter;
  return proto.main.PermissionFindAllActionsFilter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.PermissionFindAllActionsFilter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.PermissionFindAllActionsFilter}
 */
proto.main.PermissionFindAllActionsFilter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEntity(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEntityid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPermittedentity(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPermittedentityid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.PermissionFindAllActionsFilter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.PermissionFindAllActionsFilter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.PermissionFindAllActionsFilter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.PermissionFindAllActionsFilter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntity();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEntityid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPermittedentity();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPermittedentityid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string entity = 1;
 * @return {string}
 */
proto.main.PermissionFindAllActionsFilter.prototype.getEntity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.PermissionFindAllActionsFilter} returns this
 */
proto.main.PermissionFindAllActionsFilter.prototype.setEntity = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string entityId = 2;
 * @return {string}
 */
proto.main.PermissionFindAllActionsFilter.prototype.getEntityid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.PermissionFindAllActionsFilter} returns this
 */
proto.main.PermissionFindAllActionsFilter.prototype.setEntityid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string permittedEntity = 3;
 * @return {string}
 */
proto.main.PermissionFindAllActionsFilter.prototype.getPermittedentity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.PermissionFindAllActionsFilter} returns this
 */
proto.main.PermissionFindAllActionsFilter.prototype.setPermittedentity = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string permittedEntityId = 4;
 * @return {string}
 */
proto.main.PermissionFindAllActionsFilter.prototype.getPermittedentityid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.PermissionFindAllActionsFilter} returns this
 */
proto.main.PermissionFindAllActionsFilter.prototype.setPermittedentityid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.PermissionFindAllActionsOpts.prototype.toObject = function(opt_includeInstance) {
  return proto.main.PermissionFindAllActionsOpts.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.PermissionFindAllActionsOpts} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.PermissionFindAllActionsOpts.toObject = function(includeInstance, msg) {
  var f, obj = {
    limit: jspb.Message.getFieldWithDefault(msg, 1, 0),
    offset: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.PermissionFindAllActionsOpts}
 */
proto.main.PermissionFindAllActionsOpts.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.PermissionFindAllActionsOpts;
  return proto.main.PermissionFindAllActionsOpts.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.PermissionFindAllActionsOpts} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.PermissionFindAllActionsOpts}
 */
proto.main.PermissionFindAllActionsOpts.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLimit(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setOffset(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.PermissionFindAllActionsOpts.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.PermissionFindAllActionsOpts.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.PermissionFindAllActionsOpts} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.PermissionFindAllActionsOpts.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLimit();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getOffset();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional uint64 limit = 1;
 * @return {number}
 */
proto.main.PermissionFindAllActionsOpts.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.main.PermissionFindAllActionsOpts} returns this
 */
proto.main.PermissionFindAllActionsOpts.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 offset = 2;
 * @return {number}
 */
proto.main.PermissionFindAllActionsOpts.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.main.PermissionFindAllActionsOpts} returns this
 */
proto.main.PermissionFindAllActionsOpts.prototype.setOffset = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.PermissionFindAllActionsInput.prototype.toObject = function(opt_includeInstance) {
  return proto.main.PermissionFindAllActionsInput.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.PermissionFindAllActionsInput} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.PermissionFindAllActionsInput.toObject = function(includeInstance, msg) {
  var f, obj = {
    filter: (f = msg.getFilter()) && proto.main.PermissionFindAllActionsFilter.toObject(includeInstance, f),
    opts: (f = msg.getOpts()) && proto.main.PermissionFindAllActionsOpts.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.PermissionFindAllActionsInput}
 */
proto.main.PermissionFindAllActionsInput.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.PermissionFindAllActionsInput;
  return proto.main.PermissionFindAllActionsInput.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.PermissionFindAllActionsInput} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.PermissionFindAllActionsInput}
 */
proto.main.PermissionFindAllActionsInput.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.main.PermissionFindAllActionsFilter;
      reader.readMessage(value,proto.main.PermissionFindAllActionsFilter.deserializeBinaryFromReader);
      msg.setFilter(value);
      break;
    case 2:
      var value = new proto.main.PermissionFindAllActionsOpts;
      reader.readMessage(value,proto.main.PermissionFindAllActionsOpts.deserializeBinaryFromReader);
      msg.setOpts(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.PermissionFindAllActionsInput.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.PermissionFindAllActionsInput.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.PermissionFindAllActionsInput} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.PermissionFindAllActionsInput.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFilter();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.main.PermissionFindAllActionsFilter.serializeBinaryToWriter
    );
  }
  f = message.getOpts();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.main.PermissionFindAllActionsOpts.serializeBinaryToWriter
    );
  }
};


/**
 * optional PermissionFindAllActionsFilter filter = 1;
 * @return {?proto.main.PermissionFindAllActionsFilter}
 */
proto.main.PermissionFindAllActionsInput.prototype.getFilter = function() {
  return /** @type{?proto.main.PermissionFindAllActionsFilter} */ (
    jspb.Message.getWrapperField(this, proto.main.PermissionFindAllActionsFilter, 1));
};


/**
 * @param {?proto.main.PermissionFindAllActionsFilter|undefined} value
 * @return {!proto.main.PermissionFindAllActionsInput} returns this
*/
proto.main.PermissionFindAllActionsInput.prototype.setFilter = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.main.PermissionFindAllActionsInput} returns this
 */
proto.main.PermissionFindAllActionsInput.prototype.clearFilter = function() {
  return this.setFilter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.main.PermissionFindAllActionsInput.prototype.hasFilter = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional PermissionFindAllActionsOpts opts = 2;
 * @return {?proto.main.PermissionFindAllActionsOpts}
 */
proto.main.PermissionFindAllActionsInput.prototype.getOpts = function() {
  return /** @type{?proto.main.PermissionFindAllActionsOpts} */ (
    jspb.Message.getWrapperField(this, proto.main.PermissionFindAllActionsOpts, 2));
};


/**
 * @param {?proto.main.PermissionFindAllActionsOpts|undefined} value
 * @return {!proto.main.PermissionFindAllActionsInput} returns this
*/
proto.main.PermissionFindAllActionsInput.prototype.setOpts = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.main.PermissionFindAllActionsInput} returns this
 */
proto.main.PermissionFindAllActionsInput.prototype.clearOpts = function() {
  return this.setOpts(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.main.PermissionFindAllActionsInput.prototype.hasOpts = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.PermissionFindAllActionsResultMeta.prototype.toObject = function(opt_includeInstance) {
  return proto.main.PermissionFindAllActionsResultMeta.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.PermissionFindAllActionsResultMeta} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.PermissionFindAllActionsResultMeta.toObject = function(includeInstance, msg) {
  var f, obj = {
    offset: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.PermissionFindAllActionsResultMeta}
 */
proto.main.PermissionFindAllActionsResultMeta.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.PermissionFindAllActionsResultMeta;
  return proto.main.PermissionFindAllActionsResultMeta.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.PermissionFindAllActionsResultMeta} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.PermissionFindAllActionsResultMeta}
 */
proto.main.PermissionFindAllActionsResultMeta.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setOffset(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.PermissionFindAllActionsResultMeta.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.PermissionFindAllActionsResultMeta.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.PermissionFindAllActionsResultMeta} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.PermissionFindAllActionsResultMeta.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOffset();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * optional uint64 offset = 1;
 * @return {number}
 */
proto.main.PermissionFindAllActionsResultMeta.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.main.PermissionFindAllActionsResultMeta} returns this
 */
proto.main.PermissionFindAllActionsResultMeta.prototype.setOffset = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.main.PermissionFindAllActionsResult.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.PermissionFindAllActionsResult.prototype.toObject = function(opt_includeInstance) {
  return proto.main.PermissionFindAllActionsResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.PermissionFindAllActionsResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.PermissionFindAllActionsResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    meta: (f = msg.getMeta()) && proto.main.PermissionFindAllActionsResultMeta.toObject(includeInstance, f),
    resultsList: jspb.Message.toObjectList(msg.getResultsList(),
    proto.main.Permission.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.PermissionFindAllActionsResult}
 */
proto.main.PermissionFindAllActionsResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.PermissionFindAllActionsResult;
  return proto.main.PermissionFindAllActionsResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.PermissionFindAllActionsResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.PermissionFindAllActionsResult}
 */
proto.main.PermissionFindAllActionsResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.main.PermissionFindAllActionsResultMeta;
      reader.readMessage(value,proto.main.PermissionFindAllActionsResultMeta.deserializeBinaryFromReader);
      msg.setMeta(value);
      break;
    case 2:
      var value = new proto.main.Permission;
      reader.readMessage(value,proto.main.Permission.deserializeBinaryFromReader);
      msg.addResults(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.PermissionFindAllActionsResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.PermissionFindAllActionsResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.PermissionFindAllActionsResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.PermissionFindAllActionsResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMeta();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.main.PermissionFindAllActionsResultMeta.serializeBinaryToWriter
    );
  }
  f = message.getResultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.main.Permission.serializeBinaryToWriter
    );
  }
};


/**
 * optional PermissionFindAllActionsResultMeta meta = 1;
 * @return {?proto.main.PermissionFindAllActionsResultMeta}
 */
proto.main.PermissionFindAllActionsResult.prototype.getMeta = function() {
  return /** @type{?proto.main.PermissionFindAllActionsResultMeta} */ (
    jspb.Message.getWrapperField(this, proto.main.PermissionFindAllActionsResultMeta, 1));
};


/**
 * @param {?proto.main.PermissionFindAllActionsResultMeta|undefined} value
 * @return {!proto.main.PermissionFindAllActionsResult} returns this
*/
proto.main.PermissionFindAllActionsResult.prototype.setMeta = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.main.PermissionFindAllActionsResult} returns this
 */
proto.main.PermissionFindAllActionsResult.prototype.clearMeta = function() {
  return this.setMeta(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.main.PermissionFindAllActionsResult.prototype.hasMeta = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Permission results = 2;
 * @return {!Array<!proto.main.Permission>}
 */
proto.main.PermissionFindAllActionsResult.prototype.getResultsList = function() {
  return /** @type{!Array<!proto.main.Permission>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.main.Permission, 2));
};


/**
 * @param {!Array<!proto.main.Permission>} value
 * @return {!proto.main.PermissionFindAllActionsResult} returns this
*/
proto.main.PermissionFindAllActionsResult.prototype.setResultsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.main.Permission=} opt_value
 * @param {number=} opt_index
 * @return {!proto.main.Permission}
 */
proto.main.PermissionFindAllActionsResult.prototype.addResults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.main.Permission, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.main.PermissionFindAllActionsResult} returns this
 */
proto.main.PermissionFindAllActionsResult.prototype.clearResultsList = function() {
  return this.setResultsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.PermissionRemoveAllActionsFilter.prototype.toObject = function(opt_includeInstance) {
  return proto.main.PermissionRemoveAllActionsFilter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.PermissionRemoveAllActionsFilter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.PermissionRemoveAllActionsFilter.toObject = function(includeInstance, msg) {
  var f, obj = {
    entity: jspb.Message.getFieldWithDefault(msg, 1, ""),
    entityid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    permittedentity: jspb.Message.getFieldWithDefault(msg, 3, ""),
    permittedentityid: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.PermissionRemoveAllActionsFilter}
 */
proto.main.PermissionRemoveAllActionsFilter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.PermissionRemoveAllActionsFilter;
  return proto.main.PermissionRemoveAllActionsFilter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.PermissionRemoveAllActionsFilter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.PermissionRemoveAllActionsFilter}
 */
proto.main.PermissionRemoveAllActionsFilter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEntity(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEntityid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPermittedentity(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPermittedentityid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.PermissionRemoveAllActionsFilter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.PermissionRemoveAllActionsFilter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.PermissionRemoveAllActionsFilter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.PermissionRemoveAllActionsFilter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntity();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEntityid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPermittedentity();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPermittedentityid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string entity = 1;
 * @return {string}
 */
proto.main.PermissionRemoveAllActionsFilter.prototype.getEntity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.PermissionRemoveAllActionsFilter} returns this
 */
proto.main.PermissionRemoveAllActionsFilter.prototype.setEntity = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string entityId = 2;
 * @return {string}
 */
proto.main.PermissionRemoveAllActionsFilter.prototype.getEntityid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.PermissionRemoveAllActionsFilter} returns this
 */
proto.main.PermissionRemoveAllActionsFilter.prototype.setEntityid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string permittedEntity = 3;
 * @return {string}
 */
proto.main.PermissionRemoveAllActionsFilter.prototype.getPermittedentity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.PermissionRemoveAllActionsFilter} returns this
 */
proto.main.PermissionRemoveAllActionsFilter.prototype.setPermittedentity = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string permittedEntityId = 4;
 * @return {string}
 */
proto.main.PermissionRemoveAllActionsFilter.prototype.getPermittedentityid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.PermissionRemoveAllActionsFilter} returns this
 */
proto.main.PermissionRemoveAllActionsFilter.prototype.setPermittedentityid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.PermissionRemoveAllActionsInput.prototype.toObject = function(opt_includeInstance) {
  return proto.main.PermissionRemoveAllActionsInput.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.PermissionRemoveAllActionsInput} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.PermissionRemoveAllActionsInput.toObject = function(includeInstance, msg) {
  var f, obj = {
    filter: (f = msg.getFilter()) && proto.main.PermissionRemoveAllActionsFilter.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.PermissionRemoveAllActionsInput}
 */
proto.main.PermissionRemoveAllActionsInput.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.PermissionRemoveAllActionsInput;
  return proto.main.PermissionRemoveAllActionsInput.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.PermissionRemoveAllActionsInput} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.PermissionRemoveAllActionsInput}
 */
proto.main.PermissionRemoveAllActionsInput.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.main.PermissionRemoveAllActionsFilter;
      reader.readMessage(value,proto.main.PermissionRemoveAllActionsFilter.deserializeBinaryFromReader);
      msg.setFilter(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.PermissionRemoveAllActionsInput.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.PermissionRemoveAllActionsInput.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.PermissionRemoveAllActionsInput} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.PermissionRemoveAllActionsInput.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFilter();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.main.PermissionRemoveAllActionsFilter.serializeBinaryToWriter
    );
  }
};


/**
 * optional PermissionRemoveAllActionsFilter filter = 1;
 * @return {?proto.main.PermissionRemoveAllActionsFilter}
 */
proto.main.PermissionRemoveAllActionsInput.prototype.getFilter = function() {
  return /** @type{?proto.main.PermissionRemoveAllActionsFilter} */ (
    jspb.Message.getWrapperField(this, proto.main.PermissionRemoveAllActionsFilter, 1));
};


/**
 * @param {?proto.main.PermissionRemoveAllActionsFilter|undefined} value
 * @return {!proto.main.PermissionRemoveAllActionsInput} returns this
*/
proto.main.PermissionRemoveAllActionsInput.prototype.setFilter = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.main.PermissionRemoveAllActionsInput} returns this
 */
proto.main.PermissionRemoveAllActionsInput.prototype.clearFilter = function() {
  return this.setFilter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.main.PermissionRemoveAllActionsInput.prototype.hasFilter = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.UserFollowCreateOneInput.prototype.toObject = function(opt_includeInstance) {
  return proto.main.UserFollowCreateOneInput.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.UserFollowCreateOneInput} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.UserFollowCreateOneInput.toObject = function(includeInstance, msg) {
  var f, obj = {
    followerid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    followeeid: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.UserFollowCreateOneInput}
 */
proto.main.UserFollowCreateOneInput.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.UserFollowCreateOneInput;
  return proto.main.UserFollowCreateOneInput.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.UserFollowCreateOneInput} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.UserFollowCreateOneInput}
 */
proto.main.UserFollowCreateOneInput.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFollowerid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFolloweeid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.UserFollowCreateOneInput.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.UserFollowCreateOneInput.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.UserFollowCreateOneInput} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.UserFollowCreateOneInput.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFollowerid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFolloweeid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string followerId = 1;
 * @return {string}
 */
proto.main.UserFollowCreateOneInput.prototype.getFollowerid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.UserFollowCreateOneInput} returns this
 */
proto.main.UserFollowCreateOneInput.prototype.setFollowerid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string followeeId = 2;
 * @return {string}
 */
proto.main.UserFollowCreateOneInput.prototype.getFolloweeid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.UserFollowCreateOneInput} returns this
 */
proto.main.UserFollowCreateOneInput.prototype.setFolloweeid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.UserFollowRemoveOneInput.prototype.toObject = function(opt_includeInstance) {
  return proto.main.UserFollowRemoveOneInput.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.UserFollowRemoveOneInput} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.UserFollowRemoveOneInput.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.UserFollowRemoveOneInput}
 */
proto.main.UserFollowRemoveOneInput.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.UserFollowRemoveOneInput;
  return proto.main.UserFollowRemoveOneInput.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.UserFollowRemoveOneInput} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.UserFollowRemoveOneInput}
 */
proto.main.UserFollowRemoveOneInput.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.UserFollowRemoveOneInput.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.UserFollowRemoveOneInput.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.UserFollowRemoveOneInput} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.UserFollowRemoveOneInput.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.main.UserFollowRemoveOneInput.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.UserFollowRemoveOneInput} returns this
 */
proto.main.UserFollowRemoveOneInput.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.UserFindFollowersFilter.prototype.toObject = function(opt_includeInstance) {
  return proto.main.UserFindFollowersFilter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.UserFindFollowersFilter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.UserFindFollowersFilter.toObject = function(includeInstance, msg) {
  var f, obj = {
    followeeid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.UserFindFollowersFilter}
 */
proto.main.UserFindFollowersFilter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.UserFindFollowersFilter;
  return proto.main.UserFindFollowersFilter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.UserFindFollowersFilter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.UserFindFollowersFilter}
 */
proto.main.UserFindFollowersFilter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFolloweeid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.UserFindFollowersFilter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.UserFindFollowersFilter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.UserFindFollowersFilter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.UserFindFollowersFilter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFolloweeid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string followeeId = 1;
 * @return {string}
 */
proto.main.UserFindFollowersFilter.prototype.getFolloweeid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.UserFindFollowersFilter} returns this
 */
proto.main.UserFindFollowersFilter.prototype.setFolloweeid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.UserFindFollowersOpts.prototype.toObject = function(opt_includeInstance) {
  return proto.main.UserFindFollowersOpts.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.UserFindFollowersOpts} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.UserFindFollowersOpts.toObject = function(includeInstance, msg) {
  var f, obj = {
    limit: jspb.Message.getFieldWithDefault(msg, 1, 0),
    offset: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.UserFindFollowersOpts}
 */
proto.main.UserFindFollowersOpts.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.UserFindFollowersOpts;
  return proto.main.UserFindFollowersOpts.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.UserFindFollowersOpts} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.UserFindFollowersOpts}
 */
proto.main.UserFindFollowersOpts.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLimit(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setOffset(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.UserFindFollowersOpts.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.UserFindFollowersOpts.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.UserFindFollowersOpts} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.UserFindFollowersOpts.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLimit();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getOffset();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional uint64 limit = 1;
 * @return {number}
 */
proto.main.UserFindFollowersOpts.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.main.UserFindFollowersOpts} returns this
 */
proto.main.UserFindFollowersOpts.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 offset = 2;
 * @return {number}
 */
proto.main.UserFindFollowersOpts.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.main.UserFindFollowersOpts} returns this
 */
proto.main.UserFindFollowersOpts.prototype.setOffset = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.UserFindFollowersInput.prototype.toObject = function(opt_includeInstance) {
  return proto.main.UserFindFollowersInput.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.UserFindFollowersInput} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.UserFindFollowersInput.toObject = function(includeInstance, msg) {
  var f, obj = {
    filter: (f = msg.getFilter()) && proto.main.UserFindFollowersFilter.toObject(includeInstance, f),
    opts: (f = msg.getOpts()) && proto.main.UserFindFollowersOpts.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.UserFindFollowersInput}
 */
proto.main.UserFindFollowersInput.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.UserFindFollowersInput;
  return proto.main.UserFindFollowersInput.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.UserFindFollowersInput} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.UserFindFollowersInput}
 */
proto.main.UserFindFollowersInput.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.main.UserFindFollowersFilter;
      reader.readMessage(value,proto.main.UserFindFollowersFilter.deserializeBinaryFromReader);
      msg.setFilter(value);
      break;
    case 2:
      var value = new proto.main.UserFindFollowersOpts;
      reader.readMessage(value,proto.main.UserFindFollowersOpts.deserializeBinaryFromReader);
      msg.setOpts(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.UserFindFollowersInput.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.UserFindFollowersInput.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.UserFindFollowersInput} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.UserFindFollowersInput.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFilter();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.main.UserFindFollowersFilter.serializeBinaryToWriter
    );
  }
  f = message.getOpts();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.main.UserFindFollowersOpts.serializeBinaryToWriter
    );
  }
};


/**
 * optional UserFindFollowersFilter filter = 1;
 * @return {?proto.main.UserFindFollowersFilter}
 */
proto.main.UserFindFollowersInput.prototype.getFilter = function() {
  return /** @type{?proto.main.UserFindFollowersFilter} */ (
    jspb.Message.getWrapperField(this, proto.main.UserFindFollowersFilter, 1));
};


/**
 * @param {?proto.main.UserFindFollowersFilter|undefined} value
 * @return {!proto.main.UserFindFollowersInput} returns this
*/
proto.main.UserFindFollowersInput.prototype.setFilter = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.main.UserFindFollowersInput} returns this
 */
proto.main.UserFindFollowersInput.prototype.clearFilter = function() {
  return this.setFilter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.main.UserFindFollowersInput.prototype.hasFilter = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional UserFindFollowersOpts opts = 2;
 * @return {?proto.main.UserFindFollowersOpts}
 */
proto.main.UserFindFollowersInput.prototype.getOpts = function() {
  return /** @type{?proto.main.UserFindFollowersOpts} */ (
    jspb.Message.getWrapperField(this, proto.main.UserFindFollowersOpts, 2));
};


/**
 * @param {?proto.main.UserFindFollowersOpts|undefined} value
 * @return {!proto.main.UserFindFollowersInput} returns this
*/
proto.main.UserFindFollowersInput.prototype.setOpts = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.main.UserFindFollowersInput} returns this
 */
proto.main.UserFindFollowersInput.prototype.clearOpts = function() {
  return this.setOpts(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.main.UserFindFollowersInput.prototype.hasOpts = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.UserFindFollowersResultMeta.prototype.toObject = function(opt_includeInstance) {
  return proto.main.UserFindFollowersResultMeta.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.UserFindFollowersResultMeta} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.UserFindFollowersResultMeta.toObject = function(includeInstance, msg) {
  var f, obj = {
    offset: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.UserFindFollowersResultMeta}
 */
proto.main.UserFindFollowersResultMeta.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.UserFindFollowersResultMeta;
  return proto.main.UserFindFollowersResultMeta.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.UserFindFollowersResultMeta} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.UserFindFollowersResultMeta}
 */
proto.main.UserFindFollowersResultMeta.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setOffset(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.UserFindFollowersResultMeta.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.UserFindFollowersResultMeta.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.UserFindFollowersResultMeta} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.UserFindFollowersResultMeta.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOffset();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * optional uint64 offset = 1;
 * @return {number}
 */
proto.main.UserFindFollowersResultMeta.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.main.UserFindFollowersResultMeta} returns this
 */
proto.main.UserFindFollowersResultMeta.prototype.setOffset = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.main.UserFindFollowersResult.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.UserFindFollowersResult.prototype.toObject = function(opt_includeInstance) {
  return proto.main.UserFindFollowersResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.UserFindFollowersResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.UserFindFollowersResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    meta: (f = msg.getMeta()) && proto.main.UserFindFollowersResultMeta.toObject(includeInstance, f),
    followersList: jspb.Message.toObjectList(msg.getFollowersList(),
    proto.main.Follower.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.UserFindFollowersResult}
 */
proto.main.UserFindFollowersResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.UserFindFollowersResult;
  return proto.main.UserFindFollowersResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.UserFindFollowersResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.UserFindFollowersResult}
 */
proto.main.UserFindFollowersResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.main.UserFindFollowersResultMeta;
      reader.readMessage(value,proto.main.UserFindFollowersResultMeta.deserializeBinaryFromReader);
      msg.setMeta(value);
      break;
    case 2:
      var value = new proto.main.Follower;
      reader.readMessage(value,proto.main.Follower.deserializeBinaryFromReader);
      msg.addFollowers(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.UserFindFollowersResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.UserFindFollowersResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.UserFindFollowersResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.UserFindFollowersResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMeta();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.main.UserFindFollowersResultMeta.serializeBinaryToWriter
    );
  }
  f = message.getFollowersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.main.Follower.serializeBinaryToWriter
    );
  }
};


/**
 * optional UserFindFollowersResultMeta meta = 1;
 * @return {?proto.main.UserFindFollowersResultMeta}
 */
proto.main.UserFindFollowersResult.prototype.getMeta = function() {
  return /** @type{?proto.main.UserFindFollowersResultMeta} */ (
    jspb.Message.getWrapperField(this, proto.main.UserFindFollowersResultMeta, 1));
};


/**
 * @param {?proto.main.UserFindFollowersResultMeta|undefined} value
 * @return {!proto.main.UserFindFollowersResult} returns this
*/
proto.main.UserFindFollowersResult.prototype.setMeta = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.main.UserFindFollowersResult} returns this
 */
proto.main.UserFindFollowersResult.prototype.clearMeta = function() {
  return this.setMeta(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.main.UserFindFollowersResult.prototype.hasMeta = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Follower followers = 2;
 * @return {!Array<!proto.main.Follower>}
 */
proto.main.UserFindFollowersResult.prototype.getFollowersList = function() {
  return /** @type{!Array<!proto.main.Follower>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.main.Follower, 2));
};


/**
 * @param {!Array<!proto.main.Follower>} value
 * @return {!proto.main.UserFindFollowersResult} returns this
*/
proto.main.UserFindFollowersResult.prototype.setFollowersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.main.Follower=} opt_value
 * @param {number=} opt_index
 * @return {!proto.main.Follower}
 */
proto.main.UserFindFollowersResult.prototype.addFollowers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.main.Follower, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.main.UserFindFollowersResult} returns this
 */
proto.main.UserFindFollowersResult.prototype.clearFollowersList = function() {
  return this.setFollowersList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.Follower.prototype.toObject = function(opt_includeInstance) {
  return proto.main.Follower.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.Follower} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.Follower.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    createdat: jspb.Message.getFieldWithDefault(msg, 2, 0),
    updatedat: jspb.Message.getFieldWithDefault(msg, 3, 0),
    followeeid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    followerid: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.Follower}
 */
proto.main.Follower.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.Follower;
  return proto.main.Follower.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.Follower} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.Follower}
 */
proto.main.Follower.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCreatedat(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setUpdatedat(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setFolloweeid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setFollowerid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.Follower.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.Follower.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.Follower} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.Follower.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCreatedat();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getUpdatedat();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getFolloweeid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getFollowerid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.main.Follower.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.Follower} returns this
 */
proto.main.Follower.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 createdAt = 2;
 * @return {number}
 */
proto.main.Follower.prototype.getCreatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.main.Follower} returns this
 */
proto.main.Follower.prototype.setCreatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 updatedAt = 3;
 * @return {number}
 */
proto.main.Follower.prototype.getUpdatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.main.Follower} returns this
 */
proto.main.Follower.prototype.setUpdatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string followeeId = 4;
 * @return {string}
 */
proto.main.Follower.prototype.getFolloweeid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.Follower} returns this
 */
proto.main.Follower.prototype.setFolloweeid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string followerId = 5;
 * @return {string}
 */
proto.main.Follower.prototype.getFollowerid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.Follower} returns this
 */
proto.main.Follower.prototype.setFollowerid = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.UserFindFolloweesFilter.prototype.toObject = function(opt_includeInstance) {
  return proto.main.UserFindFolloweesFilter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.UserFindFolloweesFilter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.UserFindFolloweesFilter.toObject = function(includeInstance, msg) {
  var f, obj = {
    followerid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.UserFindFolloweesFilter}
 */
proto.main.UserFindFolloweesFilter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.UserFindFolloweesFilter;
  return proto.main.UserFindFolloweesFilter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.UserFindFolloweesFilter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.UserFindFolloweesFilter}
 */
proto.main.UserFindFolloweesFilter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFollowerid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.UserFindFolloweesFilter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.UserFindFolloweesFilter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.UserFindFolloweesFilter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.UserFindFolloweesFilter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFollowerid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string followerId = 1;
 * @return {string}
 */
proto.main.UserFindFolloweesFilter.prototype.getFollowerid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.UserFindFolloweesFilter} returns this
 */
proto.main.UserFindFolloweesFilter.prototype.setFollowerid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.UserFindFolloweesOpts.prototype.toObject = function(opt_includeInstance) {
  return proto.main.UserFindFolloweesOpts.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.UserFindFolloweesOpts} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.UserFindFolloweesOpts.toObject = function(includeInstance, msg) {
  var f, obj = {
    limit: jspb.Message.getFieldWithDefault(msg, 1, 0),
    offset: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.UserFindFolloweesOpts}
 */
proto.main.UserFindFolloweesOpts.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.UserFindFolloweesOpts;
  return proto.main.UserFindFolloweesOpts.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.UserFindFolloweesOpts} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.UserFindFolloweesOpts}
 */
proto.main.UserFindFolloweesOpts.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLimit(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setOffset(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.UserFindFolloweesOpts.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.UserFindFolloweesOpts.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.UserFindFolloweesOpts} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.UserFindFolloweesOpts.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLimit();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getOffset();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional uint64 limit = 1;
 * @return {number}
 */
proto.main.UserFindFolloweesOpts.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.main.UserFindFolloweesOpts} returns this
 */
proto.main.UserFindFolloweesOpts.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 offset = 2;
 * @return {number}
 */
proto.main.UserFindFolloweesOpts.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.main.UserFindFolloweesOpts} returns this
 */
proto.main.UserFindFolloweesOpts.prototype.setOffset = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.UserFindFolloweesInput.prototype.toObject = function(opt_includeInstance) {
  return proto.main.UserFindFolloweesInput.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.UserFindFolloweesInput} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.UserFindFolloweesInput.toObject = function(includeInstance, msg) {
  var f, obj = {
    filter: (f = msg.getFilter()) && proto.main.UserFindFolloweesFilter.toObject(includeInstance, f),
    opts: (f = msg.getOpts()) && proto.main.UserFindFolloweesOpts.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.UserFindFolloweesInput}
 */
proto.main.UserFindFolloweesInput.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.UserFindFolloweesInput;
  return proto.main.UserFindFolloweesInput.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.UserFindFolloweesInput} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.UserFindFolloweesInput}
 */
proto.main.UserFindFolloweesInput.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.main.UserFindFolloweesFilter;
      reader.readMessage(value,proto.main.UserFindFolloweesFilter.deserializeBinaryFromReader);
      msg.setFilter(value);
      break;
    case 2:
      var value = new proto.main.UserFindFolloweesOpts;
      reader.readMessage(value,proto.main.UserFindFolloweesOpts.deserializeBinaryFromReader);
      msg.setOpts(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.UserFindFolloweesInput.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.UserFindFolloweesInput.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.UserFindFolloweesInput} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.UserFindFolloweesInput.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFilter();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.main.UserFindFolloweesFilter.serializeBinaryToWriter
    );
  }
  f = message.getOpts();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.main.UserFindFolloweesOpts.serializeBinaryToWriter
    );
  }
};


/**
 * optional UserFindFolloweesFilter filter = 1;
 * @return {?proto.main.UserFindFolloweesFilter}
 */
proto.main.UserFindFolloweesInput.prototype.getFilter = function() {
  return /** @type{?proto.main.UserFindFolloweesFilter} */ (
    jspb.Message.getWrapperField(this, proto.main.UserFindFolloweesFilter, 1));
};


/**
 * @param {?proto.main.UserFindFolloweesFilter|undefined} value
 * @return {!proto.main.UserFindFolloweesInput} returns this
*/
proto.main.UserFindFolloweesInput.prototype.setFilter = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.main.UserFindFolloweesInput} returns this
 */
proto.main.UserFindFolloweesInput.prototype.clearFilter = function() {
  return this.setFilter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.main.UserFindFolloweesInput.prototype.hasFilter = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional UserFindFolloweesOpts opts = 2;
 * @return {?proto.main.UserFindFolloweesOpts}
 */
proto.main.UserFindFolloweesInput.prototype.getOpts = function() {
  return /** @type{?proto.main.UserFindFolloweesOpts} */ (
    jspb.Message.getWrapperField(this, proto.main.UserFindFolloweesOpts, 2));
};


/**
 * @param {?proto.main.UserFindFolloweesOpts|undefined} value
 * @return {!proto.main.UserFindFolloweesInput} returns this
*/
proto.main.UserFindFolloweesInput.prototype.setOpts = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.main.UserFindFolloweesInput} returns this
 */
proto.main.UserFindFolloweesInput.prototype.clearOpts = function() {
  return this.setOpts(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.main.UserFindFolloweesInput.prototype.hasOpts = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.UserFindFolloweesResultMeta.prototype.toObject = function(opt_includeInstance) {
  return proto.main.UserFindFolloweesResultMeta.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.UserFindFolloweesResultMeta} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.UserFindFolloweesResultMeta.toObject = function(includeInstance, msg) {
  var f, obj = {
    offset: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.UserFindFolloweesResultMeta}
 */
proto.main.UserFindFolloweesResultMeta.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.UserFindFolloweesResultMeta;
  return proto.main.UserFindFolloweesResultMeta.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.UserFindFolloweesResultMeta} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.UserFindFolloweesResultMeta}
 */
proto.main.UserFindFolloweesResultMeta.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setOffset(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.UserFindFolloweesResultMeta.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.UserFindFolloweesResultMeta.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.UserFindFolloweesResultMeta} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.UserFindFolloweesResultMeta.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOffset();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * optional uint64 offset = 1;
 * @return {number}
 */
proto.main.UserFindFolloweesResultMeta.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.main.UserFindFolloweesResultMeta} returns this
 */
proto.main.UserFindFolloweesResultMeta.prototype.setOffset = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.main.UserFindFolloweesResult.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.UserFindFolloweesResult.prototype.toObject = function(opt_includeInstance) {
  return proto.main.UserFindFolloweesResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.UserFindFolloweesResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.UserFindFolloweesResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    meta: (f = msg.getMeta()) && proto.main.UserFindFolloweesResultMeta.toObject(includeInstance, f),
    followeesList: jspb.Message.toObjectList(msg.getFolloweesList(),
    proto.main.Followee.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.UserFindFolloweesResult}
 */
proto.main.UserFindFolloweesResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.UserFindFolloweesResult;
  return proto.main.UserFindFolloweesResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.UserFindFolloweesResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.UserFindFolloweesResult}
 */
proto.main.UserFindFolloweesResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.main.UserFindFolloweesResultMeta;
      reader.readMessage(value,proto.main.UserFindFolloweesResultMeta.deserializeBinaryFromReader);
      msg.setMeta(value);
      break;
    case 2:
      var value = new proto.main.Followee;
      reader.readMessage(value,proto.main.Followee.deserializeBinaryFromReader);
      msg.addFollowees(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.UserFindFolloweesResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.UserFindFolloweesResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.UserFindFolloweesResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.UserFindFolloweesResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMeta();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.main.UserFindFolloweesResultMeta.serializeBinaryToWriter
    );
  }
  f = message.getFolloweesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.main.Followee.serializeBinaryToWriter
    );
  }
};


/**
 * optional UserFindFolloweesResultMeta meta = 1;
 * @return {?proto.main.UserFindFolloweesResultMeta}
 */
proto.main.UserFindFolloweesResult.prototype.getMeta = function() {
  return /** @type{?proto.main.UserFindFolloweesResultMeta} */ (
    jspb.Message.getWrapperField(this, proto.main.UserFindFolloweesResultMeta, 1));
};


/**
 * @param {?proto.main.UserFindFolloweesResultMeta|undefined} value
 * @return {!proto.main.UserFindFolloweesResult} returns this
*/
proto.main.UserFindFolloweesResult.prototype.setMeta = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.main.UserFindFolloweesResult} returns this
 */
proto.main.UserFindFolloweesResult.prototype.clearMeta = function() {
  return this.setMeta(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.main.UserFindFolloweesResult.prototype.hasMeta = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Followee followees = 2;
 * @return {!Array<!proto.main.Followee>}
 */
proto.main.UserFindFolloweesResult.prototype.getFolloweesList = function() {
  return /** @type{!Array<!proto.main.Followee>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.main.Followee, 2));
};


/**
 * @param {!Array<!proto.main.Followee>} value
 * @return {!proto.main.UserFindFolloweesResult} returns this
*/
proto.main.UserFindFolloweesResult.prototype.setFolloweesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.main.Followee=} opt_value
 * @param {number=} opt_index
 * @return {!proto.main.Followee}
 */
proto.main.UserFindFolloweesResult.prototype.addFollowees = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.main.Followee, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.main.UserFindFolloweesResult} returns this
 */
proto.main.UserFindFolloweesResult.prototype.clearFolloweesList = function() {
  return this.setFolloweesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.Followee.prototype.toObject = function(opt_includeInstance) {
  return proto.main.Followee.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.Followee} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.Followee.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    createdat: jspb.Message.getFieldWithDefault(msg, 2, 0),
    updatedat: jspb.Message.getFieldWithDefault(msg, 3, 0),
    followerid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    followeeid: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.Followee}
 */
proto.main.Followee.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.Followee;
  return proto.main.Followee.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.Followee} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.Followee}
 */
proto.main.Followee.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCreatedat(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setUpdatedat(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setFollowerid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setFolloweeid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.Followee.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.Followee.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.Followee} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.Followee.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCreatedat();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getUpdatedat();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getFollowerid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getFolloweeid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.main.Followee.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.Followee} returns this
 */
proto.main.Followee.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 createdAt = 2;
 * @return {number}
 */
proto.main.Followee.prototype.getCreatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.main.Followee} returns this
 */
proto.main.Followee.prototype.setCreatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 updatedAt = 3;
 * @return {number}
 */
proto.main.Followee.prototype.getUpdatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.main.Followee} returns this
 */
proto.main.Followee.prototype.setUpdatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string followerId = 4;
 * @return {string}
 */
proto.main.Followee.prototype.getFollowerid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.Followee} returns this
 */
proto.main.Followee.prototype.setFollowerid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string followeeId = 5;
 * @return {string}
 */
proto.main.Followee.prototype.getFolloweeid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.Followee} returns this
 */
proto.main.Followee.prototype.setFolloweeid = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.PublishJobResult.prototype.toObject = function(opt_includeInstance) {
  return proto.main.PublishJobResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.PublishJobResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.PublishJobResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    jobid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.PublishJobResult}
 */
proto.main.PublishJobResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.PublishJobResult;
  return proto.main.PublishJobResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.PublishJobResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.PublishJobResult}
 */
proto.main.PublishJobResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setJobid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.PublishJobResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.PublishJobResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.PublishJobResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.PublishJobResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getJobid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string jobId = 1;
 * @return {string}
 */
proto.main.PublishJobResult.prototype.getJobid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.main.PublishJobResult} returns this
 */
proto.main.PublishJobResult.prototype.setJobid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.main.WorkersHealthCheckResult.prototype.toObject = function(opt_includeInstance) {
  return proto.main.WorkersHealthCheckResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.main.WorkersHealthCheckResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.WorkersHealthCheckResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    ok: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.main.WorkersHealthCheckResult}
 */
proto.main.WorkersHealthCheckResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.main.WorkersHealthCheckResult;
  return proto.main.WorkersHealthCheckResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.main.WorkersHealthCheckResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.main.WorkersHealthCheckResult}
 */
proto.main.WorkersHealthCheckResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOk(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.main.WorkersHealthCheckResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.main.WorkersHealthCheckResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.main.WorkersHealthCheckResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.main.WorkersHealthCheckResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOk();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool ok = 1;
 * @return {boolean}
 */
proto.main.WorkersHealthCheckResult.prototype.getOk = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.main.WorkersHealthCheckResult} returns this
 */
proto.main.WorkersHealthCheckResult.prototype.setOk = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * @enum {number}
 */
proto.main.Maturity = {
  SKELETON: 0,
  DRAFT: 1,
  SOLID: 2
};

goog.object.extend(exports, proto.main);
