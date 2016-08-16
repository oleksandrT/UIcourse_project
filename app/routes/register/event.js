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

  //modalVisible: this.set('modalVisible', true),

  model: function(params) {
    return Ember.RSVP.hash({
      event: this.get('ajax').request(Env.APP.API_URL + '/api/events/' + params.id),
      eventId: params.id,
      participant: Participant.create()
    });
  },
  //
  // setupController: function(controller, model) {
  //   controller.set('event', model.event);
  //   controller.set('eventId', model.eventId);
  //   controller.set('participant', model.participant);
  //   //controller.set('classesList', model.classesList);
  // },

  onResponse() {
    console.log('onResponse');
    //this.get('currentModel').set('modalVisible', true);
  },

  actions: {
    register(classesList) {
      //console.log('model: ', this.get('currentModel'));
      this.get('currentModel.participant').set('classes', classesList);

      // serialize form data
      let formData = JSON.stringify(this.get('currentModel'));
      // console.log(Env.APP.API_URL + '/api/participants');
      // console.log('formData: ', formData);
      // console.log('type of formData: ', typeof formData);

      this.get('ajax').request(Env.APP.API_URL + '/api/participants', {
        method: 'POST',
        data: { data: formData }
      }).then(this.onResponse());
    }
  }
});
