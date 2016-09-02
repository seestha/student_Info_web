define('student-info/tests/student/edit-student/model.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | student/edit-student/model.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'student/edit-student/model.js should pass jshint.\nstudent/edit-student/model.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nstudent/edit-student/model.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});