import '../libs/config';
import * as process from 'process';

(async () => {
  const { main } = await import('./main');
  await main({
    ports: {
      proto: Number(process.env.PROTO_PORT),
      http: Number(process.env.HTTP_PORT),
      workers: Number(process.env.WORKERS_PORT),
    },
    otel: true,
  });
})();
