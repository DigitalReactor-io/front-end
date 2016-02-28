import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('registration', function() {
    this.route('credentials');
    this.route('access');
    this.route('project');
    this.route('finish');
  });
});

export default Router;
