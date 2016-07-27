import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
    session: Ember.inject.service('session'),

    actions: {
        createEvent() {
            $.ajax({
                type: "POST",
                url: "http://localhost:3000/events",
                data: {
                    name: 'name'
                }
            }).done(function () {
                console.log('Success');
            });
        }
    }
});
