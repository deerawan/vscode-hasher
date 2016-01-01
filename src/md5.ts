import md5 = require('md5');

export class Md5Command {
    run(text: string): string {
        return md5('message');
    }
}


