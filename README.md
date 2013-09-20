# Conductor.js Analytics card

# Requirements & Browser Support

- `jquery.js`
- `handlebars.js`
- `ember.js`
- `ember-data.js`

# Installation

* Copy the content of the `dist` folder in your project
* Make sure that the dependencies are available in the same folder
* Add the analytics card in your app before adding card to your conductor instance.

TODO: card path, DOM element
```js
    var analyticsCard = conductor.load("../card.js", 1, {
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
    analyticsCard.appendTo(analyticsDiv);
    analyticsCard.render('something', {width: 300, heigth: 150});
```

* When adding a card, wiretap it to the analytics card

```js
card.wiretap( analyticsCard.printWiretapEvent, card )
```

In order to display correctly the analytics card, you can set the iframe width and height.

# Building Conductor.js Analytics card

Make sure you have node and grunt installed.  Then, run:
```sh
npm install
grunt build
```

# Testing Conductor.js Analytics card

To run the test, run:
```sh
grunt server
```

Then navigate to `http://localhost:8000`
