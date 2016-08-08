import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['overlay', 'show'],
    click: function (event) {
        if( Ember.$(event.target).hasClass( "overlay" ) ) {
            this.close();
        }
    },

    close() {
        this.$().removeClass('show').addClass('hide');
        setTimeout( () => Ember.run(this, 'onclose'), 500 );
    }
});
