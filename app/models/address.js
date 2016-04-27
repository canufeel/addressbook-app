import { Model } from 'ember-pouch';
import attr from 'ember-data/attr';

export default Model.extend({
	addressee: attr('string'),
  sortname: attr('string'),
	type: attr('string'),
	line1: attr('string'),
	line2: attr('string'),
	city: attr('string'),
	state: attr('string'), // state, province, or region
	zip: attr('string'),  // Zip code, postcode, or postal code
	country: attr('string'), 
	isActive: attr('boolean', { 
		defaultValue: true 
	}),
	dateCreated: attr('date', {
		defaultValue() { return new Date(); }
	}),
	dateEdited: attr('date', {
		defaultValue() { return new Date(); }
	}),
	dateDeactivated: attr('date')
});


