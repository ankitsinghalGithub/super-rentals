import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.$.getJSON('http://localhost:5000/nltk?url=https://ankitsinghal.com');
  }
});
