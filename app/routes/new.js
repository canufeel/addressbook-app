import Ember from 'ember';

export default Ember.Route.extend({
    actions: {  
        createAddress(address) {
            const addressee = address.get('addressee');
            const sortname = address.get('sortname');
            const line1 = address.get('line1');
            const line2 = address.get('line2');
            const city = address.get('city');
            const state = address.get('state');
            const zip = address.get('zip');
            const country = address.get('country');
            const isActive = true;
            const dateCreated = new Date();

            if(!addressee.trim() || !line1.trim()) { 
                return; //empty string
            }

            const new_address = address.store.createRecord('address', {
                addressee:addressee,
                sortname:sortname,
                line1:line1,
                line2:line2,
                city:city,
                state:state,
                zip:zip,
                country:country,
                isActive:isActive,
                dateCreated:dateCreated
            });

            address.set('addressee','');
            address.set('sortname','');
            address.set('line1','');
            address.set('line2','');
            address.set('city','');
            address.set('state','');
            address.set('zip','');
            address.set('country','');
            address.set('line2','');
            address.set('line2','');
            address.set('zip','');

            new_address.save();

            address.transitionToRoute('addresses');

        }
    },
    model() {
        return this.store;
    }
});