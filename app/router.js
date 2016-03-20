import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	this.route('addresses')
	this.route('address', {path: '/addresses/:address_id'});
	this.route('add-address');
});

export default Router;
