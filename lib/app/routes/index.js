var IndexRoute = Ember.Route.extend({
  setupController: function(controller, model) {
    controller.set('model', model);

    this.controllerFor('services').set('model', this.store.all('service') );
    this.controllerFor('cards').set('model', this.store.all('card') );
  },

  model: function() {
    return this.store.all('event');
  },

  renderTemplate: function() {
    this.render();

    this.render('services', {
      into: 'index',
      outlet: 'services',
      controller: 'services'
    });

    this.render('cards', {
      into: 'index',
      outlet: 'cards',
      controller: 'cards'
    });
  }
});

export default IndexRoute;
