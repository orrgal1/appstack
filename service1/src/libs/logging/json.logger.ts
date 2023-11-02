import { Injectable, LoggerService, Scope } from '@nestjs/common';
import * as cloneDeep from 'lodash.clonedeep';
import * as process from 'process';
import * as fs from 'fs';
import * as otel from '@opentelemetry/api';

@Injectable({ scope: Scope.TRANSIENT })
export class JsonLoggerService implements LoggerService {
  log(message: any, context?: string) {
    this.printMessage('info', message, context);
  }

  error(message: any, trace?: string, context?: string) {
    this.printMessage('error', message, trace, context);
  }

  warn(message: any, context?: string) {
    this.printMessage('warn', message, context);
  }

  debug(message: any, context?: string) {
    this.printMessage('debug', message, context);
  }

  verbose(message: any, context?: string) {
    this.printMessage('verbose', message, context);
  }

  filterOnTags(message: any) {
    if (message['tags']) {
      const tags = message['tags'];
      if (Array.isArray(tags)) {
        const allowedTags = (process.env.ALLOWED_LOG_TAGS || '')
          .split(',')
          .filter((tag) => tag.length > 0);
        return (
          tags.length === 0 ||
          allowedTags.length === 0 ||
          tags.filter((tag) => allowedTags.includes(tag)).length > 0
        );
      }
    }
    return true;
  }

  private writeOut(output: string) {
    if (process.env.NODE_ENV !== 'production') {
      fs.writeFileSync(process.stdout.fd, output, {
        flag: 'a',
      });
    } else {
      process.stdout.write(output);
    }
  }

  private printMessage(
    level: string,
    message: any,
    context?: string,
    stack?: string,
  ) {
    try {
      if (!this.filterOnTags(message)) return;
      const trace = this.getTrace();
      const abbreviatedMessage = this.abbreviateLargeProperties(message);
      const output = {
        level,
        context,
        message: abbreviatedMessage,
        timestamp: new Date().toISOString(),
        stack,
        trace,
      };
      this.writeOut(JSON.stringify(output) + '\n');
    } catch (e) {
      this.writeOut(
        JSON.stringify({ error: e.message, stack: e.stack }) + '\n',
      );
    }
  }

  private getTrace() {
    const currentSpan = otel.trace.getSpan(otel.context.active());
    const spanContext = currentSpan?.spanContext();
    const traceId = spanContext?.traceId;
    const spanId = spanContext?.spanId;
    const traceFlags = spanContext?.traceFlags;
    return { traceId, spanId, traceFlags };
  }

  private abbreviateLargeProperties(obj: any, visited = new Set<any>()): any {
    try {
      if (typeof obj !== 'object' || obj === null) return obj;
      if (visited.has(obj)) return '[Circular]'; // Return a circular reference marker.

      const clone = cloneDeep(obj);
      visited.add(clone); // Mark the object as visited.

      for (const key in clone) {
        if (!clone.hasOwnProperty(key)) continue;

        if (
          typeof clone[key] === 'string' &&
          key !== 'stack' &&
          clone[key].length > 100
        ) {
          clone[key] =
            clone[key].substring(0, 100) + `... [${clone[key].length}]`;
        } else if (Array.isArray(clone[key]) && clone[key].length > 10) {
          clone[key] = clone[key]
            .slice(0, 10)
            .concat(`... [${clone[key].length}]`);
        } else if (typeof clone[key] === 'object') {
          clone[key] = this.abbreviateLargeProperties(clone[key], visited);
        }
      }

      return clone;
    } catch (e) {
      this.writeOut(JSON.stringify({ error: e.message, stack: e.stack }));
      return {};
    }
  }
}
