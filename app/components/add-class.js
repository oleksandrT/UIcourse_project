import Ember from 'ember';
import Event from '../models/event';

var emptyClass = {
  timeFrom: '',
  timeTo: '',
  title: '',
  description: ''
};

export default Ember.Component.extend({

    newClass: function() {
      return Ember.copy(emptyClass);
    }.property(),

    actions: {
      addNewClass() {
        let newClass = this.get('newClass');
        //todo add validation
        this.onSubmit(newClass);
        this.set('newClass', Ember.copy(emptyClass));
      }
    }
});
