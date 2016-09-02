define('student-info/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'student-info/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _studentInfoConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_studentInfoConfigEnvironment['default'].APP.name, _studentInfoConfigEnvironment['default'].APP.version)
  };
});