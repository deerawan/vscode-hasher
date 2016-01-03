import {ICommand} from './command';
import sha1 = require('sha1');

export class Sha1Command implements ICommand {
    run(text: string): string {
        return sha1(text);
    }
}