import { ICommand } from './command';
let he = require('he');

export class HtmlEntityDecodeCommand implements ICommand {
  run(text: string): string {
    return he.decode(text);
  }
}
