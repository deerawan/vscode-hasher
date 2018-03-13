import { ICommand } from './command';

export class Base64EncodeCommand implements ICommand {
  run(text: string): string {
    return new Buffer(text).toString('base64');
  }
}
