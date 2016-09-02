import DS from 'ember-data';

var student = DS.Model.extend({
  first_name: DS.attr('string'),
  middle_name: DS.attr('string'),
  last_name: DS.attr('string'),
  address: DS.attr('string'),
  email: DS.attr('string'),
  contact_num: DS.attr('')

});
export default student;
