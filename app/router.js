import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('dashboard');
  this.route('elements');
  this.route('events', function() {
    this.route('new');
    this.route('event', {path: 'event/:id'});
    this.route('information', {path: 'information/:id'});
  });
  this.route('register', function () {
    this.route('event', {path: 'event/:id'});
  });
});

export default Router;
