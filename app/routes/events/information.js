import Ember from 'ember';
import Env from 'uicourse-project/config/environment';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),

  model(params) {
    return Ember.RSVP.hash({
      event: this.get('ajax').request(Env.APP.API_URL + '/api/events/' + params.id),
      participants: this.get('ajax').request(Env.APP.API_URL + '/api/participants/' + params.id)
    });
  },

  actions: {

  }
});
