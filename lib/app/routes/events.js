var EventsRoute = Ember.Route.extend({
  model: function() {
    return this.store.all('event');
  },

  actions: {
    switchRoutes: function() {
      this.transitionTo('filters');
    }
  }
});

export default EventsRoute;
