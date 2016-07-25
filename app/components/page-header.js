import Ember from 'ember';

export default Ember.Component.extend({
    session: Ember.inject.service(),
    classNames: ['header'],
    tagName: 'header',
    showLogin: false,
    showSignup: false,
    didInsertElement(){
        this.get('session').on('authenticationSucceeded', this, 'hideModal');
    },

    hideModal(){
        this.send('closeModal');
    },

    actions: {
        closeModal() {
            this.set('showLogin', false);
            this.set('showSignup', false);
        },

        showModal(param) {
            if(param === 'login') {
                this.set('showLogin', true);
                console.log('param: login');
            } else if (param === 'signup') {
                this.set('showSignup', true);
                console.log('param: showSignup');
            }
        },

        logout() {
            this.get('session').invalidate();
        }
    }

});
