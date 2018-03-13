import { ICommand } from './command';
import * as crypto from 'crypto';

export class Sha1Command implements ICommand {
  run(text: string): string {
    return crypto
      .createHash('sha1')
      .update(text)
      .digest('hex');
  }
}
