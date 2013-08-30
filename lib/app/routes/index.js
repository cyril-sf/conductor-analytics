var IndexRoute = Ember.Route.extend({
  setupController: function(controller, model) {
    controller.set('model', model);
  },

  model: function() {
    return this.store.all('event');
  }
});

export default IndexRoute;
