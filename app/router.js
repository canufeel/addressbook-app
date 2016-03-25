import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    this.route('addresses', {path: '/'});
    this.route('new', {path: '/new'});
    this.route('edit', {path: '/edit/:address_id'});
    this.route('address', {path: '/addresses/:address_id'});
});

export default Router;
