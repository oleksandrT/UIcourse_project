import Ember from 'ember';

export default Ember.Controller.extend({

   
  classesList: function () {
    let classes = this.get('model.event.classes') || [];
    return classes.map(function (cls) {
      return Ember.Object.create({
        cls: cls,
        checked: false
      });
    });
  }.property('model.event.classes'),

  actions: {
    checkboxClick(classObj) {
      classObj.set('checked', !classObj.checked);
    }
  }

});
