import { JsonLoggerService } from './json.logger';
import * as fs from 'fs';

jest.mock('fs');

describe('Logger', () => {
  beforeEach(() => {
    (fs.writeFileSync as jest.Mock).mockClear();
  });

  test('log', () => {
    const logger = new JsonLoggerService();
    logger.log({ message: 'test' });
    expect(fs.writeFileSync).toHaveBeenCalledWith(
      1,
      expect.stringContaining('test'),
      { flag: 'a' },
    );
  });

  test('log with no env tags', () => {
    delete process.env.ALLOWED_LOG_TAGS;
    const logger = new JsonLoggerService();
    logger.log({ message: 'test', tags: ['aaa'] });
    expect(fs.writeFileSync).toHaveBeenCalledTimes(1);
  });

  test('log with included tags', () => {
    process.env.ALLOWED_LOG_TAGS = 'aaa,bbb';
    const logger = new JsonLoggerService();
    logger.log({ message: 'test', tags: ['aaa'] });
    expect(fs.writeFileSync).toHaveBeenCalledTimes(1);
  });

  test('do not log with excluded tags', () => {
    process.env.ALLOWED_LOG_TAGS = 'aaa,bbb';
    const logger = new JsonLoggerService();
    logger.log({ message: 'test', tags: ['aaad'] });
    expect(fs.writeFileSync).toHaveBeenCalledTimes(0);
  });
});
