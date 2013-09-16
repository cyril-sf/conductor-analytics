var EventView = Ember.View.extend({
  templateName: 'event',
  tagName: 'tr',
  classNames: ['event'],

  isVisible: function() {
    return this.get('content.eventType.isVisible') && this.get('content.eventType.service.isVisible');
  }.property('content.eventType.isVisible', 'content.eventType.service.isVisible'),

  direction: function() {
    console.log('direction ', this.get('content.direction'));
    return (this.get('content.direction') === "sent" ? "→" : "←");
  }.property('content.direction')
});

export default EventView;
