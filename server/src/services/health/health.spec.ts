import { shutdownComponents } from '../../main/main';
import { isE2E, runMain, sleep, useHost, usePorts } from '../../../tests/utils';
import axios from 'axios';

describe('Health', () => {
  let ports: {
    protoInternal: number;
    proto: number;
    http: number;
    httpInternal: number;
    workers: number;
    ws: number;
  };
  let host: any;

  beforeAll(async () => {
    ports = await usePorts();
    host = useHost();
    if (!isE2E()) await runMain({ ports });
  });

  afterAll(async () => {
    if (!isE2E()) await shutdownComponents();
  });

  test('Health Check', async () => {
    await sleep(1000);
    const response = await axios.get(`http://${host}:${ports.http}/health`);
    expect(response.data).toEqual({
      details: {
        PROTO: {
          ok: true,
          status: 'up',
        },
        PROTO_INTERNAL: {
          ok: true,
          status: 'up',
        },
        WORKERS: {
          ok: true,
          status: 'up',
        },
      },
      error: {},
      info: {
        PROTO: {
          ok: true,
          status: 'up',
        },
        PROTO_INTERNAL: {
          ok: true,
          status: 'up',
        },
        WORKERS: {
          ok: true,
          status: 'up',
        },
      },
      status: 'ok',
    });
  });
});
