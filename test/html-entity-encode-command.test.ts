import * as assert from 'assert';
import { HtmlEntityEncodeCommand } from '../src/html-entity-encode-command';

suite('HTML Entity Encode Tests', () => {
  test('HTML Entity Encode', () => {
    let command = new HtmlEntityEncodeCommand();
    assert.equal(
      command.run('foo © bar ≠ baz 𝌆 qux'),
      'foo &copy; bar &ne; baz &#x1D306; qux'
    );
    assert.equal(command.run('<body>'), '&lt;body&gt;');
  });
});
