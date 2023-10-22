import { createChannel, createClient, Metadata } from 'nice-grpc';
import {
  LoginServiceClient,
  LoginServiceDefinition,
  UserFollowServiceClient,
  UserFollowServiceDefinition,
  UserServiceClient,
  UserServiceDefinition,
} from '../../../../libs/client';
import { main } from '../../../../main/main';
import { v4 as uuid } from 'uuid';
import { isE2E, retry, useHost, usePorts } from '../../../../../tests/utils';
import axios from 'axios';
import { User } from '../../../../proto/interfaces';

describe('UserFollow', () => {
  let ports: {
    protoInternal: number;
    proto: number;
    http: number;
    workers: number;
  };
  let client: UserFollowServiceClient;
  let userClient: UserServiceClient;
  let loginClient: LoginServiceClient;
  const metadata = new Metadata();
  metadata.set(
    'jwt',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.pF3q46_CLIyP_1QZPpeccbs-hC4n9YW2VMBjKrSO6Wg',
  );

  const getAccessToken = async (user: User) => {
    const loginInput = {
      platform: 'local',
      platformLoginId: uuid(),
      platformLoginSecret: uuid(),
      userId: user.id,
    };
    await loginClient.createOne(loginInput, { metadata });

    const input = {
      username: loginInput.platformLoginId,
      password: loginInput.platformLoginSecret,
    };
    const response = await axios.post(
      `http://localhost:${ports.http}/auth/local/login`,
      input,
    );
    return response.data.accessToken;
  };

  beforeAll(
    retry(
      async () => {
        ports = await usePorts();
        const host = useHost();
        const channel = createChannel(`${host}:${ports.proto}`);
        client = createClient(UserFollowServiceDefinition, channel);
        userClient = createClient(UserServiceDefinition, channel);
        loginClient = createClient(LoginServiceDefinition, channel);
        if (!isE2E()) await main({ ports });
      },
      5,
      1000,
    ),
  );

  test('Follow + Unfollow', async () => {
    const followerUserInput = { name: uuid() };
    const followeeUserInput = { name: uuid() };
    const followerUser = await userClient.createOne(followerUserInput, {
      metadata,
    });
    const followeeUser = await userClient.createOne(followeeUserInput, {
      metadata,
    });

    const followerAccessToken = await getAccessToken(followerUser);
    const followerMetadata = new Metadata({ jwt: followerAccessToken });
    const followeeAccessToken = await getAccessToken(followeeUser);
    const followeeMetadata = new Metadata({ jwt: followeeAccessToken });

    const created = await client.createOne(
      {
        followerId: followerUser.id,
        followeeId: followeeUser.id,
      },
      { metadata: followerMetadata },
    );
    const followers = await client.findFollowers(
      {
        filter: { followeeId: followeeUser.id },
        opts: { limit: 10 },
      },
      { metadata: followeeMetadata },
    );
    expect(followers.followers).toEqual([
      {
        createdAt: expect.any(Number),
        followeeId: followeeUser.id,
        followerId: followerUser.id,
        id: expect.any(String),
        updatedAt: expect.any(Number),
      },
    ]);
    const followees = await client.findFollowees(
      {
        filter: { followerId: followerUser.id },
        opts: { limit: 10 },
      },
      { metadata: followerMetadata },
    );
    expect(followees.followees).toEqual([
      {
        createdAt: expect.any(Number),
        followeeId: followeeUser.id,
        followerId: followerUser.id,
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
        filter: { followeeId: followeeUser.id },
        opts: { limit: 10 },
      },
      { metadata: followeeMetadata },
    );
    expect(noFollowers.followers).toEqual([]);
    const noFollowees = await client.findFollowees(
      {
        filter: { followerId: followerUser.id },
        opts: { limit: 10 },
      },
      { metadata: followerMetadata },
    );
    expect(noFollowees.followees).toEqual([]);
  });

  test('FindFollowees: Paging', async () => {
    const followerUserInput = { name: uuid() };
    const followeeUserInput = { name: uuid() };
    const followerUser = await userClient.createOne(followerUserInput, {
      metadata,
    });
    const followerAccessToken = await getAccessToken(followerUser);
    const followerMetadata = new Metadata({ jwt: followerAccessToken });

    for (let i = 0; i < 10; i++) {
      const followeeUser = await userClient.createOne(followeeUserInput, {
        metadata,
      });
      await client.createOne(
        {
          followerId: followerUser.id,
          followeeId: followeeUser.id,
        },
        { metadata: followerMetadata },
      );
    }
    const followees0 = await client.findFollowees(
      {
        filter: { followerId: followerUser.id },
        opts: { limit: 6 },
      },
      { metadata: followerMetadata },
    );
    expect(followees0.followees.length).toEqual(6);
    const followees1 = await client.findFollowees(
      {
        filter: { followerId: followerUser.id },
        opts: { limit: 6, offset: followees0.meta.offset },
      },
      { metadata: followerMetadata },
    );
    expect(followees1.followees.length).toEqual(4);
  });

  test('FindFollowers: Paging', async () => {
    const followeeUserInput = { name: uuid() };
    const followerUserInput = { name: uuid() };
    const followeeUser = await userClient.createOne(followeeUserInput, {
      metadata,
    });
    const followeeAccessToken = await getAccessToken(followeeUser);
    const followeeMetadata = new Metadata({ jwt: followeeAccessToken });

    for (let i = 0; i < 10; i++) {
      const followerUser = await userClient.createOne(followerUserInput, {
        metadata,
      });
      await client.createOne(
        {
          followeeId: followeeUser.id,
          followerId: followerUser.id,
        },
        { metadata: followeeMetadata },
      );
    }
    const followers0 = await client.findFollowers(
      {
        filter: { followeeId: followeeUser.id },
        opts: { limit: 6 },
      },
      { metadata: followeeMetadata },
    );
    expect(followers0.followers.length).toEqual(6);
    const followers1 = await client.findFollowers(
      {
        filter: { followeeId: followeeUser.id },
        opts: { limit: 6, offset: followers0.meta.offset },
      },
      { metadata: followeeMetadata },
    );
    expect(followers1.followers.length).toEqual(4);
  });
});
