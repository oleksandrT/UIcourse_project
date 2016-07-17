import Ember from 'ember';
import ModalDialog from './modal-dialog';

export default ModalDialog.extend({
    session: Ember.inject.service(),

    didInsertElement: function () {
        //this.$().addClass('show');
    },
    actions: {
        doLogin() {
            this.get('session').authenticate('authenticator:password', 'login', 'password');
        }
    }
});