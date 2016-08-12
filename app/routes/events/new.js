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
      // get user id
      let authStorage = localStorage.getItem('ember_simple_auth:session');
      let dbId = JSON.parse(authStorage).authenticated.user._id;
      let formData = JSON.stringify(this.get('currentModel').serialize());
      console.log('formData: ', this.get('currentModel'));
      console.log('formData (formated): ', formData);
      console.log('date: ', formData.date, typeof formData.date);
      Ember.$.ajax({
        type: "POST",
        url: Env.APP.API_URL + "/api/events",
        data: {
          event: formData,
          userId: dbId
        }
      }).done(function () {
        alert("success!");
      });
    }
  }
});
