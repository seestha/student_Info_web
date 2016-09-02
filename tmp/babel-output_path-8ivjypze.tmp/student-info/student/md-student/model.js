define('student-info/student/md-student/model', ['exports', 'ember-data'], function (exports, _emberData) {

  var student = _emberData['default'].Model.extend({
    first_name: _emberData['default'].attr('string'),
    middle_name: _emberData['default'].attr('string'),
    last_name: _emberData['default'].attr('string'),
    address: _emberData['default'].attr('string'),
    email: _emberData['default'].attr('string'),
    contact_num: _emberData['default'].attr('')

  });
  exports['default'] = student;
});