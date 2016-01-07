import * as assert from 'assert';
import {UriEncodeComponentCommand} from '../src/uri-encode-component-command';

suite('URI Encode Component Tests', () => {
    test('URI Encode Component', () => {
        let command = new UriEncodeComponentCommand();
        assert.equal(command.run('foo @+%/'), 'foo%20%40%2B%25%2F');
        assert.equal(command.run('http://www.google.com/results spaces#some-anchor'),
            'http%3A%2F%2Fwww.google.com%2Fresults%20spaces%23some-anchor');
    });
});
