var IndexController = Ember.ArrayController.extend({
  // itemController: 'event',
  services: function() {
    return this.store.all('service');
  }.property('store')
});

export default IndexController;
