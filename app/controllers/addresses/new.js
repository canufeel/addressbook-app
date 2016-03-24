import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {  
        save: function() {
            var addressee = this.get('addressee');
            var zip= this.get('zip');
            var dateCreated = new Date();
            if(!addressee.trim()) { 
            	return; //empty string
            }
            var address = this.store.createRecord('address', {
                addressee:addressee,
                zip:zip,
                dateCreated:dateCreated
            });
            this.set('addressee','');
            this.set('zip','');
            address.save();
            this.transitionToRoute('addresses');

        }
    }



});
