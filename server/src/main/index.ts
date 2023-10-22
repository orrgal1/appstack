import '../libs/config';

(async () => {
  const { main } = await import('./main');
  await main({
    ports: {
      proto: Number(this.config.get('PROTO_PORT')),
      http: Number(this.config.get('HTTP_PORT')),
      workers: Number(this.config.get('WORKERS_PORT')),
    },
    otel: true,
  });
})();
