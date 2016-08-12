import Ember from 'ember';

import App from '../app';

App.Serializable = Ember.Mixin.create({
  serialize: function ()
  {
    var result = {};
    for (var key in Ember.$.extend(true, {}, this))
    {
      // Skip these
      if (key === 'isInstance' ||
        key === 'isDestroyed' ||
        key === 'isDestroying' ||
        key === 'concatenatedProperties' ||
        key === 'mergedProperties' ||
        typeof this[key] === 'function')
      {
        continue;
      }
      result[key] = this[key];
    }
    return result;
  }
});

export default Ember.Object.extend(App.Serializable, {
  title: '',
  date: '',
  location: '',
  description: '',
  classes: [],
  teachers: []
});

// export default Ember.Object.extend({
//   title: '',
//   date: '',
//   location: '',
//   description: '',
//   classes: [],
//   teachers: []
// });
