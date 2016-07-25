import Ember from 'ember';
import ModalDialog from './modal-dialog';

export default ModalDialog.extend({
    session: Ember.inject.service('session'),

    routing: Ember.inject.service('-routing'),

    actions: {
        doSignup() {
          let _this = this;
            //this.get('session').authenticate('authenticator:password', 'login', 'password');
            $.ajax({
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
              // _this.get("routing").transitionTo("dashboard"); // use this when login is successful
              console.log(_this);
              $('.form-login').hide();
              $('.success-message').show();
            });
        }
    }
});