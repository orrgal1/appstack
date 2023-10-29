import { createChannel, createClient, Metadata } from 'nice-grpc';
import {
  UserFollowServiceClient,
  UserFollowServiceDefinition,
  UserServiceClient,
  UserServiceDefinition,
} from '../../../libs/client';
import {
  isE2E,
  login,
  runMain,
  useHost,
  usePorts,
} from '../../../../tests/utils';

describe('UserFollow', () => {
  let ports: {
    protoInternal: number;
    proto: number;
    http: number;
    httpInternal: number;
    workers: number;
    ws: number;
  };
  let client: UserFollowServiceClient;
  let userClient: UserServiceClient;
  const metadata = new Metadata();

  beforeAll(async () => {
    ports = await usePorts();
    const host = useHost();
    const channel = createChannel(`${host}:${ports.proto}`);
    const channelInternal = createChannel(`${host}:${ports.protoInternal}`);
    client = createClient(UserFollowServiceDefinition, channel);
    userClient = createClient(UserServiceDefinition, channelInternal);
    if (!isE2E()) await runMain({ ports });
    const { accessToken } = await login(ports);
    metadata.set('jwt', accessToken);
  });

  test('Follow + Unfollow', async () => {
    const { accessToken: followerAccessToken, userId: followerUserId } =
      await login(ports);
    const followerMetadata = new Metadata({ jwt: followerAccessToken });
    const { accessToken: followeeAccessToken, userId: followeeUserId } =
      await login(ports);
    const followeeMetadata = new Metadata({ jwt: followeeAccessToken });

    const created = await client.createOne(
      {
        followerId: followerUserId,
        followeeId: followeeUserId,
      },
      { metadata: followerMetadata },
    );
    const followers = await client.findFollowers(
      {
        filter: { followeeId: followeeUserId },
        opts: { limit: 10 },
      },
      { metadata: followeeMetadata },
    );
    expect(followers.followers).toEqual([
      {
        createdAt: expect.any(Number),
        followeeId: followeeUserId,
        followerId: followerUserId,
        id: expect.any(String),
        updatedAt: expect.any(Number),
      },
    ]);
    const followees = await client.findFollowees(
      {
        filter: { followerId: followerUserId },
        opts: { limit: 10 },
      },
      { metadata: followerMetadata },
    );
    expect(followees.followees).toEqual([
      {
        createdAt: expect.any(Number),
        followeeId: followeeUserId,
        followerId: followerUserId,
        id: expect.any(String),
        updatedAt: expect.any(Number),
      },
    ]);

    await client.removeOne(
      {
        id: created.id,
      },
      { metadata: followerMetadata },
    );

    const noFollowers = await client.findFollowers(
      {
        filter: { followeeId: followeeUserId },
        opts: { limit: 10 },
      },
      { metadata: followeeMetadata },
    );
    expect(noFollowers.followers).toEqual([]);
    const noFollowees = await client.findFollowees(
      {
        filter: { followerId: followerUserId },
        opts: { limit: 10 },
      },
      { metadata: followerMetadata },
    );
    expect(noFollowees.followees).toEqual([]);
  });

  test('FindFollowees: Paging', async () => {
    const { accessToken: followerAccessToken, userId: followerUserId } =
      await login(ports);
    const followerMetadata = new Metadata({ jwt: followerAccessToken });

    for (let i = 0; i < 10; i++) {
      const followeeUser = await userClient.createOne({});
      await client.createOne(
        {
          followerId: followerUserId,
          followeeId: followeeUser.id,
        },
        { metadata: followerMetadata },
      );
    }
    const followees0 = await client.findFollowees(
      {
        filter: { followerId: followerUserId },
        opts: { limit: 6 },
      },
      { metadata: followerMetadata },
    );
    expect(followees0.followees.length).toEqual(6);
    const followees1 = await client.findFollowees(
      {
        filter: { followerId: followerUserId },
        opts: { limit: 6, offset: followees0.meta.offset },
      },
      { metadata: followerMetadata },
    );
    expect(followees1.followees.length).toEqual(4);
  });

  test('FindFollowers: Paging', async () => {
    const { accessToken: followeeAccessToken, userId: followeeUserId } =
      await login(ports);
    const followeeMetadata = new Metadata({ jwt: followeeAccessToken });

    for (let i = 0; i < 10; i++) {
      const followerUser = await userClient.createOne({});
      await client.createOne(
        {
          followeeId: followeeUserId,
          followerId: followerUser.id,
        },
        { metadata: followeeMetadata },
      );
    }
    const followers0 = await client.findFollowers(
      {
        filter: { followeeId: followeeUserId },
        opts: { limit: 6 },
      },
      { metadata: followeeMetadata },
    );
    expect(followers0.followers.length).toEqual(6);
    const followers1 = await client.findFollowers(
      {
        filter: { followeeId: followeeUserId },
        opts: { limit: 6, offset: followers0.meta.offset },
      },
      { metadata: followeeMetadata },
    );
    expect(followers1.followers.length).toEqual(4);
  });
});
