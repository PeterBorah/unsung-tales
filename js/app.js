App = Ember.Application.create();

DS.RESTAdapter.reopen({
  host: 'http://localhost:4567'
});
