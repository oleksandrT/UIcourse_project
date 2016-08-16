import Ember from 'ember';
import Env from 'uicourse-project/config/environment';

const Participant = Ember.Object.extend({
  name: '',
  email: '',
  phone: '',
  classes: []
});

// const ClassItem = Ember.Object.extend({
//   timeFrom: '',
//   timeTo: '',
//   title: '',
//   description: '',
//   selected: false
// });

export default Ember.Route.extend({
  ajax: Ember.inject.service(),

  model: function(params) {
    return Ember.RSVP.hash({
      event: this.get('ajax').request(Env.APP.API_URL + '/api/events/' + params.id),
      eventId: params.id,
      participant: Participant.create(),
      // classesList: []
    });
  },
  //
  // setupController: function(controller, model) {
  //   controller.set('event', model.event);
  //   controller.set('eventId', model.eventId);
  //   controller.set('participant', model.participant);
  //   //controller.set('classesList', model.classesList);
  // },

  actions: {
    register(classesList) {
      console.log('model: ', this.get('currentModel'));
      this.get('participant').set('classes', classesList);
      this.post('ajax').request(Env.APP.API_URL + '/api/users');
    }
  }
});
