import Ember from 'ember';
import ModalDialog from './modal-dialog';

export default ModalDialog.extend({
    session: Ember.inject.service('session'),

    routing: Ember.inject.service('-routing'),

    actions: {
        doSignup() {
          let _this = this;
          Ember.$.ajax({
              type: "POST",
              url: "http://localhost:3000/signup",
              data: {
                name: this.get("name"),
                email: this.get("email"),
                phone: this.get("phone"),
                login: this.get("login"),
                password: this.get("password")
              }
            }).done(function () {
              console.log(_this);
              Ember.$('.form-login').hide();
              Ember.$('.success-message').show();
            });
        }
    }
});
