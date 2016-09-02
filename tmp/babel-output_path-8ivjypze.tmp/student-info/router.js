define('student-info/router', ['exports', 'ember', 'student-info/config/environment'], function (exports, _ember, _studentInfoConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _studentInfoConfigEnvironment['default'].locationType,
    rootURL: _studentInfoConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('student', function () {
      this.route('create_new');
      this.route('edit-student');
      this.route('student-list');
    });
  });

  exports['default'] = Router;
});