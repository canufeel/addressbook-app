import Ember from 'ember';

export default Ember.Route.extend({
	model(params) {
		//console.log("address_id= "+params.address_id+"\n");
		return this.store.findRecord('address',params.address_id);
	}
});
