import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return this.store.findAll('address');
	},

	actions: {  
		deactivateAddress(address) {
            address.set('isActive', false);
            address.save();
		}
	}
});

