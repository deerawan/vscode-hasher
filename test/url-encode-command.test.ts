import * as assert from 'assert';
import {UrlEncodeCommand} from '../src/url-encode-command';

suite('URL Encode Tests', () => {
    test('URL Encode', () => {
        let command = new UrlEncodeCommand();
        assert.equal(command.run('foo @+%/'), 'foo%20%40%2B%25%2F');
    });
});
