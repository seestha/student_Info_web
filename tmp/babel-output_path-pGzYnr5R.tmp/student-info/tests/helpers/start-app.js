define('student-info/tests/helpers/start-app', ['exports', 'ember', 'student-info/app', 'student-info/config/environment'], function (exports, _ember, _studentInfoApp, _studentInfoConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _studentInfoConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _studentInfoApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});