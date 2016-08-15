import Ember from 'ember';

import App from '../app';

App.Serializable = Ember.Mixin.create({
  serialize: function ()
  {
    var result = {};
    for (var key in Ember.$.extend(true, {}, this))
    {
      //console.log(key, ' : ', typeof this[key], ' / isArray: ', Ember.$.isArray(this[key]));

      if (key === 'isInstance' ||
        key === 'isDestroyed' ||
        key === 'isDestroying' ||
        key === 'concatenatedProperties' ||
        key === 'mergedProperties' ||
        typeof this[key] === 'function')
      {
        continue;
      }

      // if parameter is an array itself
      if (typeof this[key] === 'object' &&
        Ember.$.isArray(this[key]) === true)
      {
        var childObject = [];
        var currentChild = Ember.$.extend(true, {}, this[key]);
        //console.log(currentChild);
        //
        for (var param in currentChild) {
          // if property is a number in string format
          // this is because we have array-like object here and need to pull our data
          if (param >>> 0 === parseFloat(param))
          {
            var tempObject = {};
            for (var childKey in currentChild[param]) {
              if (childKey === 'isInstance' ||
                childKey === 'isDestroyed' ||
                childKey === 'isDestroying' ||
                childKey === 'concatenatedProperties' ||
                childKey === 'mergedProperties' ||
                childKey === 'time' ||
                typeof this[childKey] === 'function')
              {
                continue;
              }
              //console.log('currentChild[param][childKey]: ', currentChild[param][childKey]);
              tempObject[childKey] = currentChild[param][childKey];
            }
            childObject.push(tempObject);
            tempObject = {};
          }
        }
        //
        result[key] = childObject;
        continue;
      }
      result[key] = this[key];
    }
    //console.log('this: ', this);
    //console.log('result: ', result);
    return result;
  },

  clearModel: function () {
    Ember.set(this, 'title', '');
    Ember.set(this, 'date', '');
    Ember.set(this, 'location', '');
    Ember.set(this, 'description', '');
    Ember.set(this, 'classes', []);
    Ember.set(this, 'teachers', []);
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
