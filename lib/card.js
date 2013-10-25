/*global Conductor, $, oasis */

Conductor.require('jquery.js');
Conductor.require('handlebars.js');
Conductor.require('ember.js');
Conductor.require('ember-data.js');
Conductor.requireCSS('conductor-analytics.css');

Conductor.card( {
  App: null,

  initializeDOM: function () {
    var analyticsDiv = document.createElement('div');
    analyticsDiv.setAttribute('id', 'analytics');
    document.body.appendChild( analyticsDiv );
    this.App.advanceReadiness();
  },

  activate: function() {
    var heightConsumer = this.consumers.height;

    if( heightConsumer ) {
      heightConsumer.autoUpdate = false;
    }

    oasis.configure('eventCallback', Ember.run);
    this.App = require('conductor/analytics/card/application');
  },

  consumers: {
    analytics: Conductor.Oasis.Consumer.extend({
      events: {
        printWiretapEvent: function(data) {
          var card = this.card,
              service = data.service,
              event = data.event,
              cardId = data.card,
              time = data.time;

          card.waitForActivation().then( function() {
            card.App.then( function() {
              card.App.createEvent(time, service, event, cardId);
            });
          });
        }
      }
    })
  }
} );
