import * as assert from 'assert';
import {Md5Command} from '../src/md5-command';

suite('MD5 Tests', () => {
    test('Encrypt MD5', () => {
        let command = new Md5Command();
        assert.equal(command.run('message'), '78e731027d8fd50ed642340b7c9a63b3');
    });
});