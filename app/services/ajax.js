//import Ember from 'ember';
import AjaxService from 'ember-ajax/services/ajax';
import Env from 'uicourse-project/config/environment';

export default AjaxService.extend({
    host: Env.APP.API_URL
});
