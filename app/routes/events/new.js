import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import Event from '../../models/event';
import Env from 'uicourse-project/config/environment';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  session: Ember.inject.service('session'),

  model() {
    return Event.create();
  },

  actions: {
    addClass(newClass) {
      this.get('currentModel.classes').pushObject(newClass);
    },

    addTeacher(newTeacher) {
      this.get('currentModel.teachers').pushObject(newTeacher);
    },

    saveEvent() {
      console.log( this.get('currentModel') );
      Ember.$.ajax({
        type: "POST",
        url: Env.APP.API_URL + "/api/events",
        data: {title: 'Deadpool', class: 'Zapateo'}
      }).done(function () {
        alert("success!");
      });
    }
  }
});
