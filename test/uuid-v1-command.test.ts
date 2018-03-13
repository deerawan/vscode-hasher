import * as assert from 'assert';
import { UuidV1Command } from '../src/uuid-v1-command';
const validate = require('uuid-validate');

suite('UUID V1 Tests', () => {
  test('UUID V1', () => {
    let command = new UuidV1Command();
    assert.equal(validate(command.run(), 1), true);
  });
});
