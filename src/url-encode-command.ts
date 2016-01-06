import {ICommand} from './command';
import urlencode = require('urlencode');

export class UrlEncodeCommand implements ICommand {
    run(text: string): string {
        return urlencode(text);
    }
}