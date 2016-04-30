import PouchDB from 'pouchdb';
import { Adapter } from 'ember-pouch';
import config from 'addressbook-app/config/environment';
import Ember from 'ember';

const { assert, isEmpty } = Ember;

var remote = new PouchDB(config.emberPouch.remoteDb);
var db = new PouchDB(config.emberPouch.localDb);

db.sync(remote, {
   live: true,   // do a live, ongoing sync
   retry: true   // retry if the connection is lost
});

export default Adapter.extend({
  db:db
});
