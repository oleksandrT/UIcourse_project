import Ember from 'ember';
import Env from 'uicourse-project/config/environment';

const Participant = Ember.Object.extend({
  name: '',
  email: '',
  phone: '',
  classes: []
});

export default Ember.Route.extend({
  ajax: Ember.inject.service(),

  //modalVisible: false,

  model: function(params) {
    return Ember.RSVP.hash({
      event: this.get('ajax').request(Env.APP.API_URL + '/api/events/' + params.id).then(r => Ember.Object.create(r)),
      eventId: params.id,
      participant: Participant.create(),
      modalVisible: false,
      isSuccess: false
    });
  },

  onResponse() {
    console.log('onResponse');
    this.set('currentModel.modalVisible', true);
  },

  actions: {
    register(classesList) {
      this.get('currentModel.participant').set('classes', classesList);

      // serialize form data
      let formData = JSON.stringify(this.get('currentModel'));
      console.log('property: ', this.get('modalVisible'));

      this.get('ajax').request(Env.APP.API_URL + '/api/participants', {
        method: 'POST',
        data: { data: formData }
      }).then(this.onResponse());
    },

    closeModal() {
      this.set('.currentModel.modalVisible', false);
      this.set('.currentModel.isSuccess', true);
    }
  }
});
