import * as assert from 'assert';
import {Base64DecodeCommand} from '../src/base64-decode-command';

suite('Base64 Decode Tests', () => {
    test('Decode Base64', () => {
        let command = new Base64DecodeCommand();
        assert.equal(command.run('SGVsbG8gV29ybGQ='), 'Hello World');
    });
});
