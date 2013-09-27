var EventsRoute = Ember.Route.extend({
  model: function() {
    return this.store.filter('event', function(event) {
      var eventType = event.get('eventType');

      return eventType.get('isVisible') && eventType.get('service.isVisible') && event.get('card.isVisible');
    });
  },

  actions: {
    switchRoutes: function() {
      this.transitionTo('filters');
    }
  }
});

export default EventsRoute;
