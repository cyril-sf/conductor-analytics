var IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('events');
  }
});

export default IndexRoute;
