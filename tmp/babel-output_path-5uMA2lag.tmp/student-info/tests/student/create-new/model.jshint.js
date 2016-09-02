define('student-info/tests/student/create-new/model.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | student/create-new/model.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'student/create-new/model.js should pass jshint.\nstudent/create-new/model.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nstudent/create-new/model.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});