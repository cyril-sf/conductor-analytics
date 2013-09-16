import DomService from 'card_test_helpers';

var conductor, card;

module("Card loading", {
  setup: function() {
    conductor = new Conductor({
      testing: true,
      conductorURL: 'conductor-0.3.0.js.html'
    });
  }
});

test("The Ember application starts and renders the application template", function() {
  stop();

  var url = 'card.js';

  card = conductor.load( url, 1, {
    capabilities: ['dom'],
    services: {
      dom: DomService
    }
  });

  card.appendTo('#qunit-fixture');
  card.render();

  card.waitForLoad().then( function(card) {
    card.sandbox.capabilities.dom.request('length', 'table#events')
      .then( function(length) {
        equal( length, 1, "The application displays the table of events");
        start();
    });
  }, Conductor.Oasis.RSVP.rethrow);
});
