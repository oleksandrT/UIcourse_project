import Ember from 'ember';
import Env from 'uicourse-project/config/environment';

export default Ember.Component.extend({
  init() {
    this._super(...arguments);
    
    let authStorage = localStorage.getItem('ember_simple_auth:session');
    let dbId = JSON.parse(authStorage).authenticated.user._id;

    Ember.$.getJSON(Env.APP.API_URL + '/api/events/list/' + dbId).then(data => {
      this.set('events', data);
      console.log('response from server: ', data);
    });
  }
});
