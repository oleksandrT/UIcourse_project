import Ember from 'ember';

var emptyClass = {
  timeFrom: '',
  timeTo: '',
  time: Ember.computed('timeFrom', 'timeTo', function() {
    return this.timeFrom + ' - ' + this.timeTo;
  }),
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

        //todo: add validation

        console.log(newClass);
        this.onSubmit(newClass);
        this.set('newClass', Ember.copy(emptyClass));
      }
    }
});
