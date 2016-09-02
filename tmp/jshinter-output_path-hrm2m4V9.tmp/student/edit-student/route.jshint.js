QUnit.module('JSHint | student/edit-student/route.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'student/edit-student/route.js should pass jshint.\nstudent/edit-student/route.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nstudent/edit-student/route.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
});
