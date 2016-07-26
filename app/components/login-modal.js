import Ember from 'ember';
import ModalDialog from './modal-dialog';

export default ModalDialog.extend({
    session: Ember.inject.service('session'),

    //didInsertElement: function () {
        //this.$().addClass('show');
    //},
    actions: {
        doLogin() {
            let login = this.get("login");
            let password = this.get("password");

            this.get('session').authenticate('authenticator:password', login, password)
                                .catch((reason) => {
                                    this.set('errorMessage', reason.error || reason);
                                });
        }
    }
});