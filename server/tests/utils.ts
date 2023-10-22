import { findFreePorts } from 'find-free-ports';

export function isE2E() {
  return process.env.E2E;
}

export async function usePorts() {
  if (!isE2E()) {
    const [a, b, c, d, e] = await findFreePorts(5);
    process.env.PROTO_PORT = String(a);
    process.env.PROTO_INTERNAL_PORT = String(b);
    process.env.HTTP_PORT = String(c);
    process.env.WORKERS_PORT = String(d);
    process.env.WS_PORT = String(e);
  }
  return {
    proto: Number(process.env.PROTO_PORT || 0),
    protoInternal: Number(process.env.PROTO_INTERNAL_PORT || 0),
    http: Number(process.env.HTTP_PORT || 0),
    workers: Number(process.env.WORKERS_PORT || 0),
    ws: Number(process.env.WS_PORT || 0),
  };
}

export function useHost() {
  return isE2E() ? process.env.SERVICE_HOST : 'localhost';
}

export async function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

export function retry(
  fn: () => Promise<void>,
  times: number,
  wait: number,
  cleanup?: () => Promise<void>,
) {
  return async () => {
    let error: Error;
    for (let i = 0; i < times; i++) {
      try {
        await fn();
        return;
      } catch (e) {
        error = e;
        if (cleanup) await cleanup();
        await sleep(wait);
      }
    }
    throw error;
  };
}
