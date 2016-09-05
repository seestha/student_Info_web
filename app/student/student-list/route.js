import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.store.findAll('student/md-student');

  },
  setupController(controller, model) {
  this._super.apply(this, arguments);
  // console.log('mofff',model.student);


},
actions:{
  createNew : function(){
    this.transitionTo('student.create-new');
  }
}
});
