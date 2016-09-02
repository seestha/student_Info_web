define('student-info/tests/student/student-list/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | student/student-list/route.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'student/student-list/route.js should pass jshint.\nstudent/student-list/route.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nstudent/student-list/route.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nstudent/student-list/route.js: line 8, col 3, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n3 errors');
  });
});