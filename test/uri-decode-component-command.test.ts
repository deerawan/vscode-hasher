import * as assert from 'assert';
import {UriDecodeComponentCommand} from '../src/uri-decode-component-command';

suite('URI Decode Component Tests', () => {
    test('URI Decode Component', () => {
        let command = new UriDecodeComponentCommand();
        assert.equal(command.run('foo%20%40%2B%25%2F'), 'foo @+%/');
        assert.equal(command.run('http%3A%2F%2Fwww.google.com%2Fresults%20spaces%23some-anchor'),
            'http://www.google.com/results spaces#some-anchor');
    });
});
