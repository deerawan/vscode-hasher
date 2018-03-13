import { ICommand } from './command';
import * as crypto from 'crypto';

export class Md5Command implements ICommand {
  run(text: string): string {
    return crypto
      .createHash('md5')
      .update(text)
      .digest('hex');
  }
}
