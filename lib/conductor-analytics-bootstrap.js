function initializeConductorAnalytics(conductor, card_path) {
  var $analytics = $('.analytics');

  $analytics.find('.tab').on('click', function() {
    $analytics.toggleClass('showing');
  });

  var analyticsCard = conductor.load(card_path, 1, {
    capabilities: ['analytics'],
    services: {
      analytics: Conductor.Oasis.Service
    }
  });
  analyticsCard.printWiretapEvent = function( service, messageEvent ) {
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
  analyticsCard.appendTo('.analytics .panel .output');
  analyticsCard.render('something', {width: 300, heigth: 150});

  analyticsCard.track = function(card) {
    card.wiretap( analyticsCard.printWiretapEvent, card );
  };

  return analyticsCard;
}
