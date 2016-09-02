QUnit.module('JSHint | application/adapter.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'application/adapter.js should pass jshint.\napplication/adapter.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\napplication/adapter.js: line 2, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\napplication/adapter.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n3 errors');
});
