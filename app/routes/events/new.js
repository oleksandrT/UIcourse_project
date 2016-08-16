import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import Event from '../../models/event';
import Env from 'uicourse-project/config/environment';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  session: Ember.inject.service(),
  ajax: Ember.inject.service(),

  modalVisible: false,

  model() {
    return Event.create();
  },

  validateModel() {
    let model = this.get('currentModel');
    let errors = {};
    if (model.get('title').length < 1) {
      errors.title = 'Field is required';
    }
    if (model.get('date').length < 1) {
      errors.date = 'Field is required';
    }
    if (model.get('location').length < 1) {
      errors.location = 'Field is required';
    }
    if (model.get('description').length < 1) {
      errors.description = 'Field is required';
    }
     return errors;
  },

  onResponse(response) {
    this.get('currentModel').set('modalVisible', true);
    console.log('data from server: ', response);
    // let linkToEvent = '/events/' + response.eventId;
    this.get('currentModel').set('eventId', response.eventId);
    //let message = 'Event was saved successfully \nShare the link so people can register to your event \n' + linkToEvent;
    //alert(message);
    //this.get('currentModel').clearModel();
    //this.transitionTo('dashboard');
  },

  actions: {
    closeModal() {
      this.get('currentModel').set('modalVisible', true);
      this.get('currentModel').clearModel();
      this.transitionTo('dashboard');
    },

    addClass(newClass) {
      this.get('currentModel.classes').pushObject(newClass);
    },

    addTeacher(newTeacher) {
      this.get('currentModel.teachers').pushObject(newTeacher);
    },

    saveEvent() {
      //let self = this;

      let errors = this.validateModel();

      if (Object.keys(errors).length) {
        this.get('currentModel').set('errors', errors);
        //alert('error');
        return;
      }

      // get user id
      let authStorage = localStorage.getItem('ember_simple_auth:session');
      let dbId = JSON.parse(authStorage).authenticated.user._id;

      // serialize form data
      let formData = JSON.stringify(this.get('currentModel').serialize());

      // send data to server
      this.get('ajax').request(Env.APP.API_URL + "/api/events", {
        type: "POST",
        data: {
          event: formData,
          userId: dbId
        }
      }).then((data) => this.onResponse(data));
    }
  }
});
