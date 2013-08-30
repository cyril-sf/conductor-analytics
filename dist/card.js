define("app/application",
  ["app/routes/index","app/controllers/index","app/views/events","app/views/event","app/models/service","app/models/event_type","app/models/event"],
  function(IndexRoute, IndexController, EventsView, EventView, Service, EventType, Event) {
    "use strict";

    var App = Ember.Application.create({
      readyPromise: Ember.RSVP.defer(),
      rootElement: '#card',
      ready: function() {
        this.readyPromise.resolve();
      }
    });

    App.IndexRoute = IndexRoute;
    App.IndexController = IndexController;
    App.EventsView = EventsView;
    App.EventView = EventView;

    App.Router.map( function() {

    });

    App.ApplicationAdapter = DS.RESTAdapter;
    App.Service = Service;
    App.EventType = EventType;
    App.Event = Event;


    App.Message = DS.Model.extend({});
    App.Post = App.Message.extend({
      comments: DS.hasMany('comment')
    });
    App.Comment = App.Message.extend({
      message: DS.belongsTo('message', {polymorphic: true})
    });

    App.deferReadiness();
    requireModule('templates');

    window.App = App;


    return App;
  });
define("app/controllers/index",
  [],
  function() {
    "use strict";
    var IndexController = Ember.ArrayController.extend({
      // itemController: 'event',
      services: function() {
        return this.store.all('service');
      }.property('store')
    });


    return IndexController;
  });
define("app/models/event",
  [],
  function() {
    "use strict";
    var Event = DS.Model.extend({
      eventType: DS.belongsTo('eventType'),
      direction: DS.attr(),
      data: DS.attr()
    });


    return Event;
  });
define("app/models/event_type",
  [],
  function() {
    "use strict";
    var EventType = DS.Model.extend({
      isVisible: DS.attr('boolean', true),
      service: DS.belongsTo('service'),
      events: DS.hasMany('event')
    });


    return EventType;
  });
define("app/models/service",
  [],
  function() {
    "use strict";
    var Service = DS.Model.extend({
      isVisible: DS.attr('boolean', true),
      eventTypes: DS.hasMany('eventType')
    });


    return Service;
  });
define("app/routes/index",
  [],
  function() {
    "use strict";
    var IndexRoute = Ember.Route.extend({
      setupController: function(controller, model) {
        controller.set('model', model);
      },

      model: function() {
        return this.store.all('event');
      }
    });


    return IndexRoute;
  });
define("app/views/event",
  [],
  function() {
    "use strict";
    var EventView = Ember.View.extend({
      templateName: 'event',
      tagName: 'tr',

      isVisible: function() {
        return this.get('content.eventType.isVisible') && this.get('content.eventType.service.isVisible');
      }.property('content.eventType.isVisible', 'content.eventType.service.isVisible')
    });


    return EventView;
  });
define("app/views/events",
  ["app/views/event"],
  function(EventView) {
    "use strict";

    var EventsView = Ember.CollectionView.extend({
      tagName: 'tbody',
      itemViewClass: EventView,
      contentBinding: 'controller'
    });


    return EventsView;
  });
define("templates",
  [],
  function() {
    "use strict";
    Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', hashTypes, hashContexts, escapeExpression=this.escapeExpression;


      hashTypes = {};
      hashContexts = {};
      data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
      data.buffer.push("\n");
      return buffer;
  
    });

    Ember.TEMPLATES["event"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', hashTypes, hashContexts, escapeExpression=this.escapeExpression;


      data.buffer.push("<td>");
      hashTypes = {};
      hashContexts = {};
      data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "view.content.eventType.service.id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
      data.buffer.push("</td>\n<td>");
      hashTypes = {};
      hashContexts = {};
      data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "view.content.direction", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
      data.buffer.push("</td>\n<td>");
      hashTypes = {};
      hashContexts = {};
      data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "view.content.eventType.id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
      data.buffer.push("</td>\n<td>");
      hashTypes = {};
      hashContexts = {};
      data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "view.content.data", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
      data.buffer.push("</td>\n");
      return buffer;
  
    });

    Ember.TEMPLATES["index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1, hashTypes, hashContexts, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

    function program1(depth0,data) {
  
      var buffer = '', stack1, stack2, hashContexts, hashTypes, options;
      data.buffer.push("\n    <tr>\n      <td>");
      hashContexts = {'type': depth0,'name': depth0,'checked': depth0};
      hashTypes = {'type': "STRING",'name': "ID",'checked': "ID"};
      options = {hash:{
        'type': ("checkbox"),
        'name': ("service.id"),
        'checked': ("service.isVisible")
      },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
      data.buffer.push(escapeExpression(((stack1 = helpers.input || depth0.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
      data.buffer.push("</td>\n      <td>");
      hashTypes = {};
      hashContexts = {};
      data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "service.id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
      data.buffer.push("</td>\n      <td>\n        <table>\n          ");
      hashTypes = {};
      hashContexts = {};
      stack2 = helpers.each.call(depth0, "eventType", "in", "service.eventTypes", {hash:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
      if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
      data.buffer.push("\n        </table>\n      </td>\n    </tr>\n  ");
      return buffer;
      }
    function program2(depth0,data) {
  
      var buffer = '', stack1, hashContexts, hashTypes, options;
      data.buffer.push("\n          <tr>\n            <td>");
      hashContexts = {'type': depth0,'name': depth0,'checked': depth0};
      hashTypes = {'type': "STRING",'name': "ID",'checked': "ID"};
      options = {hash:{
        'type': ("checkbox"),
        'name': ("eventType.id"),
        'checked': ("eventType.isVisible")
      },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
      data.buffer.push(escapeExpression(((stack1 = helpers.input || depth0.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
      data.buffer.push("</td>\n            <td>");
      hashTypes = {};
      hashContexts = {};
      data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "eventType.id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
      data.buffer.push("</td>\n          </tr>\n          ");
      return buffer;
      }

      data.buffer.push("<table id=\"events\">\n  <thead>\n    <tr>\n      <th>Service</th>\n      <th>Direction</th>\n      <th>Event</th>\n      <th>Data</th>\n    </tr>\n  </thead>\n  ");
      hashTypes = {};
      hashContexts = {};
      data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.EventsView", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
      data.buffer.push("\n</table>\n\n<table id=\"filter_services\">\n  <thead>\n    <tr>\n      <th colspan=2>Service</th>\n      <th> Event Type</th>\n    </tr>\n  </thead>\n  <tbody>\n  ");
      hashTypes = {};
      hashContexts = {};
      stack1 = helpers.each.call(depth0, "service", "in", "controller.services", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n  </tbody>\n</ul>\n");
      return buffer;
  
    });
  });
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
