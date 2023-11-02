import { otelSDK } from './tracing';
import '../libs/config';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { RpcExceptionsFilter } from '../libs/exceptions/rpc.exception.filter';
import { JsonLoggerService } from '../libs/logging/json.logger';
import { LoggingInterceptorGrpc } from '../libs/logging/logging.interceptor.grpc';
import * as passport from 'passport';
import * as session from 'express-session';
import { LoggingInterceptorHttp } from '../libs/logging/logging.interceptor.http';
import {
  RpcAuthExternalInterceptor,
  RpcAuthInternalInterceptor,
} from '../libs/auth/rpc/rpcAuth.module';
import * as process from 'process';
import { PubsubServerModule } from '../libs/pubsub/pubsub.server.module';
import { HttpAuthExternalInterceptor } from '../libs/auth/http/httpAuthExternal.interceptor';
import { HttpAuthInternalInterceptor } from '../libs/auth/http/httpAuthInternal.interceptor';
import { AllExceptionsFilter } from '../libs/exceptions/global.exception.filter';
import { MainHttpModule } from './http/main.http.module';
import { MainGrpcModule } from './grpc/main.grpc.module';
import { MainWorkersModule } from './workers/main.workers.module';

type Component = {
  key: string;
  init: () => Promise<() => Promise<void>>;
  shutdown?: () => Promise<void>;
};

const components: Component[] = [];
const addComponent = (component: Component) => {
  if (
    !process.env.COMPONENT_TOPOLOGY ||
    process.env[`COMPONENT_${component.key}`]
  ) {
    components.push({
      shutdown: async () => {
        return;
      },
      ...component,
    });
  }
};

const initComponents = async () => {
  await Promise.all(
    components.map(async (component) => {
      const shutdown = await component.init();
      component.shutdown = shutdown;
    }),
  );
};

const shutdownComponents = async (exit?: boolean) => {
  console.log('starting graceful shutdown');
  setTimeout(() => {
    console.error('failed graceful shutdown in 30s');
    process.exit(1);
  }, 30000);
  await Promise.all(components.map((component) => component.shutdown()));
  setTimeout(() => {
    if (exit) process.exit();
  }, 100);
};

const main = async (opts: {
  ports: {
    proto: number;
    protoInternal: number;
    http: number;
    httpInternal: number;
    workers: number;
  };
  otel?: boolean;
}) => {
  if (opts.otel) otelSDK().start();
  addComponent({
    key: 'PROTO',
    init: async () => {
      const proto = await NestFactory.createMicroservice<MicroserviceOptions>(
        MainGrpcModule,
        {
          transport: Transport.GRPC,
          options: {
            package: ['main'],
            protoPath: join(__dirname, '..', 'proto', `combined.proto`),
            url: `localhost:${opts.ports.proto}`,
          },
          logger: new JsonLoggerService(),
        },
      );
      proto.useGlobalFilters(new RpcExceptionsFilter());
      proto.useGlobalInterceptors(
        new LoggingInterceptorGrpc(),
        new RpcAuthExternalInterceptor(),
      );
      await proto.listen();
      return () => proto.close();
    },
  });

  addComponent({
    key: 'PROTOINTERNAL',
    init: async () => {
      const protoInternal =
        await NestFactory.createMicroservice<MicroserviceOptions>(
          MainGrpcModule,
          {
            transport: Transport.GRPC,
            options: {
              package: ['main'],
              protoPath: join(__dirname, '..', 'proto', `combined.proto`),
              url: `localhost:${opts.ports.protoInternal}`,
            },
            logger: new JsonLoggerService(),
          },
        );
      protoInternal.useGlobalFilters(new RpcExceptionsFilter());
      protoInternal.useGlobalInterceptors(
        new LoggingInterceptorGrpc(),
        new RpcAuthInternalInterceptor(),
      );
      await protoInternal.listen();
      return () => protoInternal.close();
    },
  });

  addComponent({
    key: 'HTTP',
    init: async () => {
      const http = await NestFactory.create(MainHttpModule, {
        logger: new JsonLoggerService(),
      });
      http.use(
        session({
          secret: process.env.SESSION_SECRET,
          resave: false,
          saveUninitialized: false,
        }),
      );
      http.use(passport.session());
      http.useGlobalFilters(new AllExceptionsFilter());
      http.useGlobalInterceptors(
        new LoggingInterceptorHttp(),
        new HttpAuthExternalInterceptor(),
      );
      await http.listen(opts.ports.http);
      return () => http.close();
    },
  });

  addComponent({
    key: 'HTTP_INTERNAL',
    init: async () => {
      const http = await NestFactory.create(MainHttpModule, {
        logger: new JsonLoggerService(),
      });
      http.use(
        session({
          secret: process.env.SESSION_SECRET,
          resave: false,
          saveUninitialized: false,
        }),
      );
      http.use(passport.session());
      http.useGlobalFilters(new AllExceptionsFilter());
      http.useGlobalInterceptors(
        new LoggingInterceptorHttp(),
        new HttpAuthInternalInterceptor(),
      );
      await http.listen(opts.ports.httpInternal);
      return () => http.close();
    },
  });

  addComponent({
    key: 'WORKERS',
    init: async () => {
      const workers = await NestFactory.createMicroservice<MicroserviceOptions>(
        MainWorkersModule,
        {
          transport: Transport.GRPC,
          options: {
            package: ['main'],
            protoPath: join(__dirname, '..', 'proto', `combined.proto`),
            url: `localhost:${opts.ports.workers}`,
          },
          logger: new JsonLoggerService(),
        },
      );
      workers.useGlobalFilters(new RpcExceptionsFilter());
      workers.useGlobalInterceptors(new LoggingInterceptorGrpc());
      await workers.listen();
      return () => workers.close();
    },
  });

  addComponent({
    key: 'PUBSUB',
    init: async () => {
      const pubsub = await NestFactory.createApplicationContext(
        PubsubServerModule,
        {
          logger: new JsonLoggerService(),
        },
      );
      await pubsub.init();
      return () => pubsub.close();
    },
  });

  await initComponents();
  return components;
};

export { main, shutdownComponents };

process.on('SIGTERM', shutdownComponents);
process.on('SIGINT', shutdownComponents);

process.on('uncaughtException', function (err) {
  console.error(err.stack);
  process.exit(1);
});

process.on('unhandledRejection', function (err) {
  console.error(err);
  process.exit(1);
});
