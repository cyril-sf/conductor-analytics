var EventView = Ember.View.extend({
  templateName: 'event',
  tagName: 'tr',
  classNames: ['event'],

  eventData: function() {
    return this.get('content.data').slice(0, 100);
  }.property('content.data'),

  direction: function() {
    return (this.get('content.direction') === "sent" ? "→" : "←");
  }.property('content.direction')
});

export default EventView;
