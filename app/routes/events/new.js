import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import Event from '../../models/event';
import Env from 'uicourse-project/config/environment';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  session: Ember.inject.service('session'),

  wasSuccess: false,
  test: 'test',

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
      var self = this;
      // get user id
      let authStorage = localStorage.getItem('ember_simple_auth:session');
      let dbId = JSON.parse(authStorage).authenticated.user._id;

      // serialize form data
      let formData = JSON.stringify(this.get('currentModel').serialize());

      // send data to server
      Ember.$.ajax({
        type: "POST",
        url: Env.APP.API_URL + "/api/events",
        data: {
          event: formData,
          userId: dbId
        }
      }).done(function (data) {
        self.set('wasSuccess');
        console.log(data);
        let linkToEvent = '/events/' + data.eventId;
        let message = 'Event was saved successfully \nShare the link so people can register to your event \n' + linkToEvent;
        alert(message);
        self.get('currentModel').clearModel();
        //self.transitionTo('dashboard');
      });
    }
  }
});
