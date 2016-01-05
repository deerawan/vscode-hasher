import * as assert from 'assert';
import {Base64EncodeCommand} from '../src/base64-encode-command';

suite('Base64 Encode Tests', () => {
    test('Encode Base64', () => {
        let command = new Base64EncodeCommand();
        assert.equal(command.run('Hello World'), 'SGVsbG8gV29ybGQ=');
    });
});
