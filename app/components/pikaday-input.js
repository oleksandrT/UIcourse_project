import Ember from 'ember';

export default Ember.TextField.extend({
  _picker: null,

  didInsertElement: function(){
    console.log(this);
    let picker = new Pikaday({
      field: this.$()[0]
    });
    this.set("_picker", picker);
  },

  model: function(){
    return {"date": "09/27/2013"};
  },

  modelChangedValue: function(){
    var picker = this.get("_picker");
    if (picker){
      picker.setDate(this.get("value"));
    }
  }.observes("value"),

  willDestroyElement: function(){
    let picker = this.get("_picker");
    if (picker) {
      picker.destroy();
    }
    this.set("_picker", null);
  }
});
