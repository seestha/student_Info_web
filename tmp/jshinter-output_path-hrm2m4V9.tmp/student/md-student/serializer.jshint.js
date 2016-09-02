QUnit.module('JSHint | student/md-student/serializer.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'student/md-student/serializer.js should pass jshint.\nstudent/md-student/serializer.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nstudent/md-student/serializer.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
});
