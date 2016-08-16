import Ember from 'ember';
import Env from 'uicourse-project/config/environment';

export default Ember.Route.extend({
  //eventId: '',

  model(params) {
    this.set('eventId', params.id);
    return Ember.$.getJSON(Env.APP.API_URL + '/api/events/' + params.id);
  },

  actions: {
    doRegister() {
      //let id = this.get('eventId');
      //this.transitionTo('events.register', id);
      this.transitionTo('events.register');
    }
  }
});
