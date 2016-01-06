import * as assert from 'assert';
import {UriEncodeCommand} from '../src/uri-encode-command';

suite('URI Encode Tests', () => {
    test('URI Encode', () => {
        let command = new UriEncodeCommand();
        assert.equal(command.run('foo @+%/'), 'foo%20%40%2B%25%2F');
    });
});
