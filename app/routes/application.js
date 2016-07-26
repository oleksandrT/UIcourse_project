import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
    // actions: {
    //     openModal: function(modalName) {
    //         return this.render(modalName, {
    //             into: 'application',
    //             outlet: 'modal'
    //         });
    //     }
    // },
    //
    // closeModal: function() {
    //     return this.disconnectOutlet({
    //         outlet: 'modal',
    //         parentView: 'application'
    //     });
    // }

    session: Ember.inject.service('session')

});
