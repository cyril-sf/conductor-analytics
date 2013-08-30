/*global Conductor */

Conductor.require('loader.js');
Conductor.require('jquery.js');
Conductor.require('handlebars.js');
Conductor.require('ember.js');
Conductor.require('ember-data.js');

var DomConsumer = Conductor.Oasis.Consumer.extend({
  _wait: function(card) {
    var promise, obj = {}, helperName,
        card = card;

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
    document.body.innerHTML = "<div id=\"card\"></div>";
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
              event = data.event;

              window.card = card;

          card.waitForActivation().then( function() {
            card.App.readyPromise.promise.then( function() {
              var store = card.App.__container__.lookup('store:main');

              if( store.hasRecordForId(App.Service, service) ) {
                service = store.recordForId(App.Service, service);
              } else {
                service = store.createRecord('service', {
                  id: service,
                  isVisible: true
                });
              }

              var eventTypes = service.get('eventTypes'),
                  eventType = eventTypes.map( function(eventType) {
                    return eventType.id === event.type;
                  }).objectAt(0);
              if( !eventType ) {
                eventType = eventTypes.createRecord({
                  id: event.type,
                  isVisible: true
                });
              }

              eventType.get('events').createRecord({
                direction: event.direction,
                data: (JSON.stringify(event.data) || "").slice(0, 20)
              });
            });
          });
        }
      }
    })
  }
} );