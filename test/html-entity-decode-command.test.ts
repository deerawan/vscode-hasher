import * as assert from 'assert';
import { HtmlEntityDecodeCommand } from '../src/html-entity-decode-command';

suite('HTML Entity Decode Tests', () => {
  test('HTML Entity Decode', () => {
    let command = new HtmlEntityDecodeCommand();
    assert.equal(
      command.run('foo &copy; bar &ne; baz &#x1D306; qux'),
      'foo © bar ≠ baz 𝌆 qux'
    );
    assert.equal(command.run('foo&ampbar'), 'foo&bar');
  });
});
