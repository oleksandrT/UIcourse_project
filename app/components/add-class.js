import Ember from 'ember';
import Event from '../models/event';

export default Ember.Component.extend({
    actions: {
        addNewClass() {
            let classes = Event.create().classes;
            console.log('parentModel: ', parentModel);
            console.log('input - title: ', this.get('title'));
            classes.push({
                time: (this.get('class-time-from') - this.get('class-time-to')),
                title: this.get('title'),
                description: this.get('class-description')
            });
        }
    }
});
