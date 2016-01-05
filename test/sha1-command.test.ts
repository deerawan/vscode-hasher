import * as assert from 'assert';
import {Sha1Command} from '../src/sha1-command';

suite('SHA1 Tests', () => {
    test('Encrypt SHA1', () => {
        let command = new Sha1Command();
        assert.equal(command.run('message'), '6f9b9af3cd6e8b8a73c2cdced37fe9f59226e27d');
    });
});
