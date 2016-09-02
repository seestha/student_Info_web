define('student-info/tests/application/serializer.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | application/serializer.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'application/serializer.js should pass jshint.\napplication/serializer.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\napplication/serializer.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});