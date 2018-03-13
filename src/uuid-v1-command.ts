import { ICommand } from './command';
const uuid = require('uuid');

export class UuidV1Command implements ICommand {
  run(): string {
    return uuid.v1();
  }
}
