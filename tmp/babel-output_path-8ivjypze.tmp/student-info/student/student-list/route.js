define('student-info/student/student-list/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return this.store.findAll('student/md-student');
    },
    setupController: function setupController(controller, model) {
      this._super.apply(this, arguments);
      // console.log('mofff',model.student);
    }
  });
});