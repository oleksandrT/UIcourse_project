import Ember from 'ember';
import ModalDialog from './modal-dialog';

export default ModalDialog.extend({
    session: Ember.inject.service(),

    actions: {
        doSignup() {
            this.get('session').authenticate('authenticator:password', 'login', 'password');
        }
    }
});