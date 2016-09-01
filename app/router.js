import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('student', function() {
    this.route('create_new');
    this.route('edit-student');
    this.route('student-list');
  });
});

export default Router;
