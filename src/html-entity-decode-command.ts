import {ICommand} from './command';
var he = require('he');

export class HtmlEntityDecodeCommand implements ICommand {
    run(text: string): string {
        return he.decode(text);
    }
}