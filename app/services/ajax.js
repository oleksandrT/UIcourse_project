import Ember from 'ember';
import AjaxService from 'ember-ajax/services/ajax';
import Env from 'uicourse-project/config/environment';

export default AjaxService.extend({
    // session: Ember.inject.service(),
    // headers: Ember.computed('session.authToken', {
    //     get() {
    //         let headers = {};
    //         const authToken = this.get('session.authToken');
    //         if (authToken) {
    //             headers['auth-token'] = authToken;
    //         }
    //         return headers;
    //     }
    // })
    host: Env.APP.API_URL
});