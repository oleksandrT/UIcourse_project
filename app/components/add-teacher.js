import Ember from 'ember';

var emptyTeacher = {
  name: '',
  description: ''
};

export default Ember.Component.extend({

  newTeacher: function() {
    return Ember.copy(emptyTeacher);
  }.property(),

  actions: {
    addNewTeacher() {
      let newTeacher = this.get('newTeacher');

      //todo: add validation

      this.onSubmit(newTeacher);
      this.set('newTeacher', Ember.copy(emptyTeacher));
    }
  }
});
