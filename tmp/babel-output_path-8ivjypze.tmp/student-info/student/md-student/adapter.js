define('student-info/student/md-student/adapter', ['exports', 'ember-data', 'ember'], function (exports, _emberData, _ember) {
  exports['default'] = _emberData['default'].RESTAdapter.extend({
    // host: '//localhost:8080',
    host: "//localhost:4000/api",
    pathForType: function pathForType(type) {
      var arr = type.split('-');
      return _ember['default'].String.pluralize(arr.get('lastObject'));
    },
    defaultSerializer: "-default"
  });
});