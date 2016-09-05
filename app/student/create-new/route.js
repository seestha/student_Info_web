import Ember from 'ember';

export default Ember.Route.extend({
  actions:{
    newstudent:function(){
      var _this = this.controller;
      let data =
        { first_name : _this.get('first_name'),
          middle_name : _this.get('middle_name'),
          last_name:_this.get('last_name'),
          address:_this.get('address'),
          email:_this.get('email'),
          contact_num:_this.get('contact_num')
        };

        $.ajax({
        type: "POST",
        url: "http://localhost:4000/api/students",
        data: data
      });
      this.transitionTo('student.student-list');
    }
  }
});
