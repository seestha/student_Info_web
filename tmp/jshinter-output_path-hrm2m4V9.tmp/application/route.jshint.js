QUnit.module('JSHint | application/route.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'application/route.js should pass jshint.\napplication/route.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\napplication/route.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
});
