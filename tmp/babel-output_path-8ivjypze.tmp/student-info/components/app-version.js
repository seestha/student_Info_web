define('student-info/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'student-info/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _studentInfoConfigEnvironment) {

  var name = _studentInfoConfigEnvironment['default'].APP.name;
  var version = _studentInfoConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});