function initializeAnalyticsTab() {
  var $analytics = $('.analytics');

  $analytics.find('.tab').on('click', function() {
    $analytics.toggleClass('showing');
  });
}

function initializeConductorAnalytics(conductor, card_path, $analytics) {
  var analyticsCard = conductor.load(card_path, 1, {
    capabilities: ['analytics'],
    services: {
      analytics: Conductor.Oasis.Service
    }
  });

  var printWiretapEvent = function( service, messageEvent ) {
    var timestamp = new Date();
    analyticsCard.sandbox.capabilities.analytics.send(
      'printWiretapEvent',
      {
        service: service,
        event: messageEvent,
        card: this.sandbox.name(),
        time: timestamp
      }
    );
  };
  analyticsCard.appendTo( $analytics );
  analyticsCard.render('something', {width: 300, heigth: 150});

  analyticsCard.track = function(card) {
    card.wiretap( printWiretapEvent, card );
  };

  return analyticsCard;
}
