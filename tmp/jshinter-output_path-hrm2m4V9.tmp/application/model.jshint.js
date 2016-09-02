QUnit.module('JSHint | application/model.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'application/model.js should pass jshint.\napplication/model.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\napplication/model.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
});
