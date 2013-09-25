var FiltersRoute = Ember.Route.extend({
  setupController: function() {
    this.controllerFor('services').set('model', this.store.all('service') );
    this.controllerFor('cards').set('model', this.store.all('card') );
  },

  renderTemplate: function() {
    this.render();

    this.render('services', {
      into: 'filters',
      outlet: 'services',
      controller: 'services'
    });

    this.render('cards', {
      into: 'filters',
      outlet: 'cards',
      controller: 'cards'
    });
  },

  actions: {
    switchRoutes: function() {
      this.transitionTo('events');
    }
  }
});

export default FiltersRoute;
