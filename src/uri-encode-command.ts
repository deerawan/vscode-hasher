import {ICommand} from './command';

export class UriEncodeCommand implements ICommand {
    run(text: string): string {
        return encodeURIComponent(text);
    }
}