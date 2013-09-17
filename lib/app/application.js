import IndexRoute from 'app/routes/index';
import IndexController from 'app/controllers/index';
import ServicesController from 'app/controllers/services';
import CardsController from 'app/controllers/cards';
import EventsView from 'app/views/events';
import Service from 'app/models/service';
import EventType from 'app/models/event_type';
import Event from 'app/models/event';
import Card from 'app/models/card';

var App = Ember.Application.create({
  readyPromise: Ember.RSVP.defer(),
  rootElement: '#card',
  ready: function() {
    this.readyPromise.resolve();
  }
});

App.IndexRoute = IndexRoute;
App.IndexController = IndexController;
App.ServicesController = ServicesController;
App.CardsController = CardsController;
App.EventsView = EventsView;

App.Router.map( function() {

});

App.ApplicationAdapter = DS.RESTAdapter;
App.Service = Service;
App.EventType = EventType;
App.Card = Card;
App.Event = Event;

App.deferReadiness();
requireModule('templates');

//TODO: This is bad.
//I'm doing something wrong when inserting the `App.EventsView` in the `index` template
window.App = App;

export default App;
