import EventView from 'app/views/event';

var EventsView = Ember.CollectionView.extend({
  tagName: 'tbody',
  itemViewClass: EventView,
  contentBinding: 'controller'
});

export default EventsView;
