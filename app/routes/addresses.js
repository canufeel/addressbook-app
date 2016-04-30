import Ember from 'ember';

const {set} = Ember;

export default Ember.Route.extend({
	model() {
		return this.store.findAll('address');
	},

	actions: {  
		deactivateAddress(address) {
            set(address, 'isActive', false);
            address.save();
		}
	}
});

