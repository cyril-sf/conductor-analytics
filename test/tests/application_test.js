/*global visit, find */
import App from 'conductor/analytics/card/application';

var qunitFixture = document.getElementById('qunit-fixture');

App.setupForTesting();
App.injectTestHelpers();

module("Ember application tests", {
  setup: function() {
    var rootElement = document.createElement( 'div' );
    rootElement.setAttribute( "id", "analytics" );
    qunitFixture.appendChild( rootElement );

    App.reset();
  }
});

test("display the events", function() {
  var store = App.__container__.lookup('store:main');

  Ember.run( function() {
    store.createRecord('event', {
      service: 'myService',
      direction: 'sent',
      type: 'print',
      data: 'toto'
    });
    store.createRecord('event', {
      service: 'myService',
      direction: 'sent',
      type: 'print',
      data: 'toto'
    });
  });

  visit("/").then(function() {
    equal(find(".event").length, 2, "The first page should have 2 events");
  });
});
