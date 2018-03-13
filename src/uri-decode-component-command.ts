import { ICommand } from './command';

export class UriDecodeComponentCommand implements ICommand {
  run(text: string): string {
    return decodeURIComponent(text);
  }
}
