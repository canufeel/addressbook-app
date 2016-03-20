import Ember from 'ember';

export default Ember.Route.extend({
	model(params){
		return [
			{
				id: "1",
				addressee: "Laura Dentone",
				sortname: "Dentone, Laura",
				type: "home",
				line1: "8220 E Maringo Dr",
				line2: "",
				city: "Spokane",
				state: "WA", // state, province, or region
				zip: "99212",  // Zip code, postcode, or postal code
				country: "US",
				isActive: "1"
			},
			{
				id: "2",
				addressee: "John Dentone",
				sortname: "Dentone, John",
				type: "home",
				line1: "15039 Jenell St	",
				line2: "",
				city: "Poway",
				state: "CA", // state, province, or region
				zip: "92064",  // Zip code, postcode, or postal code
				country: "US",
				isActive: "1"
			}		

		].findBy('id', params.address_id);
	}
});
