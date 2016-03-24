import Model from 'ember-pouch/model';
import DS from 'ember-data';

const {
  attr,
  hasMany,
  belongsTo
} = DS;

export default DS.Model.extend({
  addressee: DS.attr('string'),
  sortname: DS.attr('string'),
  type: DS.attr('string'),
  line1: DS.attr('string'),
  line2: DS.attr('string'),
  city: DS.attr('string'),
  state: DS.attr('string'), // state, province, or region
  zip: DS.attr('string'),  // Zip code, postcode, or postal code
  country: DS.attr('string'),
  isActive: DS.attr('boolean'),
  dateCreated: DS.attr('date'),
  dateEdited: DS.attr('date'),
  rev: DS.attr('string')
});


