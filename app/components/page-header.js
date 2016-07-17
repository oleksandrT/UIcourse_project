import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['header'],
    tagName: 'header',
    showLogin: false,
    showSignup: false,
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
        }
    }

});
