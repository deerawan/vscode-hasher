import {ICommand} from './command';
import md5 = require('md5');

export class Md5Command implements ICommand {
    run(text: string): string {
        return md5(text);
    }
}