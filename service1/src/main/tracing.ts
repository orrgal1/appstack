import { GrpcInstrumentation } from '@opentelemetry/instrumentation-grpc';
import { HttpInstrumentation } from '@opentelemetry/instrumentation-http';
import { ExpressInstrumentation } from '@opentelemetry/instrumentation-express';
import { BatchSpanProcessor } from '@opentelemetry/sdk-trace-base';
import { NodeSDK } from '@opentelemetry/sdk-node';
import * as process from 'process';
import { RedisInstrumentation } from '@opentelemetry/instrumentation-redis';
import { NestInstrumentation } from '@opentelemetry/instrumentation-nestjs-core';
import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions';
import { Resource } from '@opentelemetry/resources';
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-grpc';
import { diag, DiagConsoleLogger, DiagLogLevel } from '@opentelemetry/api';
import { PrometheusExporter } from '@opentelemetry/exporter-prometheus';
import { AsyncLocalStorageContextManager } from '@opentelemetry/context-async-hooks';
import {
  CompositePropagator,
  W3CBaggagePropagator,
  W3CTraceContextPropagator,
} from '@opentelemetry/core';
import { B3InjectEncoding, B3Propagator } from '@opentelemetry/propagator-b3';
import '../libs/config';
import { BullMQInstrumentation } from '@jenniferplusplus/opentelemetry-instrumentation-bullmq';
import { SocketIoInstrumentation } from 'opentelemetry-instrumentation-socket.io';

const instrumentations = [
  new HttpInstrumentation(),
  new ExpressInstrumentation(),
  new GrpcInstrumentation(),
  new RedisInstrumentation(),
  new NestInstrumentation(),
  new BullMQInstrumentation(),
  new SocketIoInstrumentation(),
];
const textMapPropagator = new CompositePropagator({
  propagators: [
    new W3CBaggagePropagator(),
    new B3Propagator(),
    new B3Propagator({
      injectEncoding: B3InjectEncoding.MULTI_HEADER,
    }),
    new W3CTraceContextPropagator(),
  ],
});
diag.setLogger(new DiagConsoleLogger(), DiagLogLevel['INFO']);

const exporter = new OTLPTraceExporter({
  url: `http://${process.env.OTEL_HOST}:4317`,
});
const spanProcessor = new BatchSpanProcessor(exporter);

export const otelSDK = () =>
  new NodeSDK({
    autoDetectResources: true,
    resource: new Resource({
      [SemanticResourceAttributes.SERVICE_NAME]: `${process.env.SERVICE_NAME}`, // update this to a more relevant name for you!
    }),
    metricReader: new PrometheusExporter({
      host: '0.0.0.0',
      port: Number(process.env.METRICS_PORT),
      endpoint: '/metrics',
    }),
    spanProcessor,
    contextManager: new AsyncLocalStorageContextManager(),
    textMapPropagator,
    instrumentations,
  });

// gracefully shut down the SDK on process exit
process.on('SIGTERM', () => {
  otelSDK()
    .shutdown()
    .then(
      () => console.log('SDK shut down successfully'),
      (err) => console.log('Error shutting down SDK', err),
    )
    .finally(() => process.exit(0));
});
