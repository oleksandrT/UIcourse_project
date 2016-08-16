import Ember from 'ember';
import ModalDialog from './modal-dialog';

export default ModalDialog.extend({
  session: Ember.inject.service('session'),

  actions: {
    onclose() {
            
    }
  }
});
