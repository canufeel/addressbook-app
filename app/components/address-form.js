import Ember from 'ember';

export default Ember.Component.extend({
    actions: {  
        createAddress: function() {
        	console.log("createAddress called for "+this.get('addressee'));
            var addressee = this.get('addressee');
            var zip= this.get('zip');
            var dateCreated = new Date();
            if(!addressee.trim()) { 
            	return; //empty string
            }
            var address = this.store.createRecord('address', {
                addressee:addressee,
                zip:zip,
                isActive:true,
                dateCreated:dateCreated
            });
            this.set('addressee','');
            this.set('zip','');
            address.save();
            this.transitionToRoute('addresses');

        },
        updateAddress: function() {
        	console.log("updateAddress called for "+this.get('addressee')+"\n");
        	return;
        }
    }

});
