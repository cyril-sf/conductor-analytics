import IndexRoute from 'app/routes/index';
import IndexController from 'app/controllers/index';
import EventsView from 'app/views/events';
import EventView from 'app/views/event';
import Service from 'app/models/service';
import EventType from 'app/models/event_type';
import Event from 'app/models/event';

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

export default App;
