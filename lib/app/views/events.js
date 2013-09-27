/*global $ */
import EventView from 'conductor/analytics/card/views/event';

var EventsView = Ember.CollectionView.extend({
  tagName: 'tbody',
  itemViewClass: EventView,
  autoScroll: true,

  arrayWillChange: function() {
    var $body = $('body'),    //TODO: this should not be here
        atBottom = ($body.scrollTop() === ($body[0].scrollHeight - $body.height()));

    this.set('autoScroll', atBottom);

    this._super.apply(this, arguments);
  },

  arrayDidChange: function() {
    Ember.run.scheduleOnce(
      'afterRender',
      this,
      'resetScroll'
    );

    this._super.apply(this, arguments);
  },

  resetScroll: function (scrollHeight) {
    var $body;    //TODO: this should not be here

    if( this.get('autoScroll') ) {
      $body = $('body');

      $('body').scrollTop( $body[0].scrollHeight );
    }
  }
});

export default EventsView;
