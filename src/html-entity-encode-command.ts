import {ICommand} from './command';
var he = require('he');

export class HtmlEntityEncodeCommand implements ICommand {
    run(text: string): string {
        return he.encode(text, {
            'useNamedReferences': true
        });
    }
}