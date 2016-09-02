define('student-info/application/adapter', ['exports', 'ember-data', 'ember'], function (exports, _emberData, _ember) {
  exports['default'] = _emberData['default'].RESTAdapter.extend({
    // host: '//localhost:8080',
    host: "//localhost:4000/api"

  });
});