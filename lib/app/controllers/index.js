var IndexController = Ember.ArrayController.extend({
  services: function() {
    return this.store.all('service');
  }.property('store'),

  cards: function() {
    return this.store.all('card');
  }.property('store')
});

export default IndexController;
