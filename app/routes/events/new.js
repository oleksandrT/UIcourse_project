import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import Event from '../../models/event';

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
        url: "http://localhost:3000/signup",
        data: {
          name: this.get("name"),
          email: this.get("email"),
          phone: this.get("phone"),
          login: this.get("login"),
          password: this.get("password")
        }
      }).done(function () {
        Ember.$('.form-login').hide();
        Ember.$('.success-message').show();
      });
    }
  }
});
