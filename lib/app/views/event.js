var EventView = Ember.View.extend({
  templateName: 'event',
  tagName: 'tr',
  classNames: ['event'],

  isVisible: function() {
    return this.get('content.eventType.isVisible') && this.get('content.eventType.service.isVisible');
  }.property('content.eventType.isVisible', 'content.eventType.service.isVisible')
});

export default EventView;
