import * as process from 'process';

export async function enableWorker(workerKey, init: () => Promise<void>) {
  if (!process.env.WORKER_TOPOLOGY || process.env[`WORKER_${workerKey}`]) {
    await init();
  }
}
