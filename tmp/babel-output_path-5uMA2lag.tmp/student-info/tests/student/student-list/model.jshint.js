define('student-info/tests/student/student-list/model.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | student/student-list/model.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'student/student-list/model.js should pass jshint.\nstudent/student-list/model.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nstudent/student-list/model.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});