import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    this.route('addresses', function() {
    	this.route('new');
    	this.route('edit',{
			path: ":post_id"
      	});
    });
    this.route('address', {path: '/addresses/:address_id'});
});

export default Router;
