import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
    session: Ember.inject.service('session'),

    setupController: function(controller, model) {
      let authStorage = localStorage.getItem('ember_simple_auth:session');
      let userName = JSON.parse(authStorage).authenticated.user.name;
      controller.set("name", userName);
      console.log(userName);
    }
});
