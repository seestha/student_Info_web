define('student-info/app', ['exports', 'ember', 'student-info/resolver', 'ember-load-initializers', 'student-info/config/environment'], function (exports, _ember, _studentInfoResolver, _emberLoadInitializers, _studentInfoConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _studentInfoConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _studentInfoConfigEnvironment['default'].podModulePrefix,
    Resolver: _studentInfoResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _studentInfoConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});