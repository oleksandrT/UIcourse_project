import oAuth2 from 'ember-simple-auth/authenticators/oauth2-password-grant';
import Ember from 'ember';
import Env from 'uicourse-project/config/environment';

export default oAuth2.extend({
    serverTokenEndpoint: Env.APP.API_URL + '/api/login',

    makeRequest(url, data) {
        const options = {
            url,
            data: JSON.stringify(data),
            type:        'POST',
            dataType:    'json',
            contentType: 'application/json'
        };

        const clientIdHeader = this.get('_clientIdHeader');
        if (!Ember.isEmpty(clientIdHeader)) {
            options.headers = clientIdHeader;
        }

        return Ember.$.ajax(options);
    }
});
