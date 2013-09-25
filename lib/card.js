/*global Conductor, $, oasis */

Conductor.require('loader.js');
Conductor.require('jquery.js');
Conductor.require('handlebars.js');
Conductor.require('ember.js');
Conductor.require('ember-data.js');
Conductor.requireCSS('conductor-analytics.css');

var DomConsumer = Conductor.Oasis.Consumer.extend({
  _wait: function(card) {
    var promise, obj = {}, helperName;

    return new Conductor.Oasis.RSVP.Promise(function(resolve) {
      var watcher = setInterval(function() {
        var routerIsLoading = card.App.__container__.lookup('router:main').router.isLoading;
        if (routerIsLoading) { return; }
        if (Ember.run.hasScheduledTimers() || Ember.run.currentRunLoop) { return; }
        clearInterval(watcher);
        Ember.run(function() {
          resolve();
        });
      }, 10);
    });
  },

  requests: {
    text:  function(selector) {
      var card = this.card,
          consumer = this;

      return Conductor.Oasis.RSVP.Promise(function(resolve, reject){
        consumer._wait( this.card ) .then( function() {
          resolve( $(selector).text() );
        });
      });
    },

    length: function(selector) {
      var card = this.card,
          consumer = this;

      return Conductor.Oasis.RSVP.Promise(function(resolve, reject){
        card.waitForActivation().then( function() {
          consumer._wait( card ).then( function() {
            resolve( $(selector).length );
          });
        });
      });
    }
  }
});

Conductor.card( {
  App: null,

  initializeDOM: function () {
    var analyticsDiv = document.createElement('div');
    analyticsDiv.setAttribute('id', 'analytics');
    document.body.appendChild( analyticsDiv );
    this.App.advanceReadiness();
  },

  activate: function() {
    this.consumers.height.autoUpdate = false;
    oasis.configure('eventCallback', Ember.run);
    this.App = requireModule('app/application');
  },

  consumers: {
    dom: DomConsumer,
    analytics: Conductor.Oasis.Consumer.extend({
      events: {
        printWiretapEvent: function(data) {
          var card = this.card,
              service = data.service,
              event = data.event,
              cardId = data.card,
              time = data.time;

          card.waitForActivation().then( function() {
            card.App.readyPromise.promise.then( function() {
              card.App.createEvent(time, service, event, cardId);
            });
          });
        }
      }
    })
  }
} );
