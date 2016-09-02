define('student-info/tests/helpers/resolver', ['exports', 'student-info/resolver', 'student-info/config/environment'], function (exports, _studentInfoResolver, _studentInfoConfigEnvironment) {

  var resolver = _studentInfoResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _studentInfoConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _studentInfoConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});