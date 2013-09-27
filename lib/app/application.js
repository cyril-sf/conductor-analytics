import IndexRoute from 'conductor/analytics/card/routes/index';
import IndexController from 'conductor/analytics/card/controllers/index';
import FiltersRoute from 'conductor/analytics/card/routes/filters';
import EventsRoute from 'conductor/analytics/card/routes/events';
import EventsController from 'conductor/analytics/card/controllers/events';
import EventsView from 'conductor/analytics/card/views/events';
import EventView from 'conductor/analytics/card/views/event';
import ServicesController from 'conductor/analytics/card/controllers/services';
import CardsController from 'conductor/analytics/card/controllers/cards';
import Service from 'conductor/analytics/card/models/service';
import EventType from 'conductor/analytics/card/models/event_type';
import Event from 'conductor/analytics/card/models/event';
import Card from 'conductor/analytics/card/models/card';

var App = Ember.Application.create({
  rootElement: '#analytics'
});

App.IndexRoute = IndexRoute;
App.IndexController = IndexController;

App.EventsRoute = EventsRoute;
App.EventsController = EventsController;
App.EventsIndexView = EventsView; //TODO: this is a hack
App.EventView = EventView;

App.FiltersRoute = FiltersRoute;

App.ServicesController = ServicesController;
App.CardsController = CardsController;

App.Router.map( function() {
  this.route("events");
  this.route("filters");
});

App.createEvent= function(time, service, event, cardId) {
  var store = this.__container__.lookup('store:main'),
      card;

  if( store.hasRecordForId(App.Service, service) ) {
    service = store.recordForId(App.Service, service);
  } else {
    service = store.createRecord('service', {
      id: service,
      isVisible: true
    });
  }

  var eventTypes = service.get('eventTypes'),
      eventType = eventTypes.findBy('id', event.type);
  if( !eventType ) {
    eventType = eventTypes.createRecord({
      id: event.type,
      isVisible: true
    });
  }

  event = eventType.get('events').createRecord({
    direction: event.direction,
    data: (JSON.stringify(event.data) || ""),
    time: time
  });

  if( store.hasRecordForId(App.Card, cardId) ) {
    card = store.recordForId(App.Card, cardId);
  } else {
    card = store.createRecord('card', {
      id: cardId,
      isVisible: true
    });
  }
  event.set('card', card);
};



App.ApplicationAdapter = DS.RESTAdapter;
App.Service = Service;
App.EventType = EventType;
App.Card = Card;
App.Event = Event;

App.deferReadiness();
requireModule('conductor/analytics/card/templates');

//TODO: This is bad.
//I'm doing something wrong when inserting the `App.EventsView` in the `index` template
window.App = App;

export default App;
