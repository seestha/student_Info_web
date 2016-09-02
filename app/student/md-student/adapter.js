import DS from 'ember-data';
import Ember from 'ember';
export default DS.RESTAdapter.extend({
  // host: '//localhost:8080',
  host: "//localhost:4000/api",
  pathForType: function(type) {
    var arr = type.split('-');
    return Ember.String.pluralize(arr.get('lastObject'));
  },
  defaultSerializer: "-default",
});
