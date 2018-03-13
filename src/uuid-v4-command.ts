import { ICommand } from './command';
const uuid = require('uuid');

export class UuidV4Command implements ICommand {
  run(): string {
    return uuid.v4();
  }
}
