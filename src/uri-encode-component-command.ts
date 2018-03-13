import { ICommand } from './command';

export class UriEncodeComponentCommand implements ICommand {
  run(text: string): string {
    return encodeURIComponent(text);
  }
}
