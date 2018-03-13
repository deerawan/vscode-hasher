import * as assert from 'assert';
import { UuidV4Command } from '../src/uuid-v4-command';
const validate = require('uuid-validate');

suite('UUID V4 Tests', () => {
  test('UUID V4', () => {
    let command = new UuidV4Command();
    assert.equal(validate(command.run(), 4), true);
  });
});
