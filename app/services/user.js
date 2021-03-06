import Ember from 'ember';
import Env from 'uicourse-project/config/environment';


export default Ember.Service.extend({
    init() {
        this._super(...arguments);
        let _this = this;

        var ObjectPromiseProxy = Ember.ObjectProxy.extend(Ember.PromiseProxyMixin);

        var proxy = ObjectPromiseProxy.create({
            promise: Ember.$.getJSON(Env.APP.API_URL + '/events/bill')
        });

        proxy.then(function(){
            _this.set('data', proxy);
          console.log();
        }, function(reason) {
            console.log('no json, ', reason);
        });
    }
});
