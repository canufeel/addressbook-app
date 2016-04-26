import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
    	updateAddress(address) {
   	        this.store.pushPayload(address);

    		// alert(address.get('addressee'));
            this.transitionTo('addresses');
        }
    },

	model(params) {
		//console.log("address_id= "+params.address_id+"\n");
		return this.store.findRecord('address',params.address_id);
	}
});
