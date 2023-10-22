import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class HttpService {
  private logger: Logger = new Logger(HttpService.name);

  getHello(): string {
    this.logger.log({ message: 'hello world!' });
    return 'Hello World!';
  }
}
