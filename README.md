# Conductor.js Analytics card

# Requirements & Browser Support

- `jquery.js`
- `handlebars.js`
- `ember.js`
- `ember-data.js`

# Installation

* Copy the content of the `dist` folder in your project
* Make sure that the dependencies are available in the same folder
* Insert the boostrap file `conductor-analytics-bootstrap.js` in your page.
* Add the analytics card in your app before adding card to your conductor instance.

```js
    var analyticsCard = window.initializeConductorAnalytics(
        this.conductor,
        "../cards/conductor-analytics/card.js",
        '.analytics .panel .output'
      );
```

* When adding a card to conductor, wiretap it to the analytics card

```js
    analyticsCard.track( card );
```

The bootstrap comes with a default UI that adds a tab at the bottom of the page.

* Insert this html at the end of your page

```
    <div class="analytics">
      <div class="tab">Analytics</div>
      <div class="panel">
        <pre class="output"></pre>
      </div>
    </div>
```

* Insert the stylesheet `conductor-analytics-bootstrap.css` in your page.
* Initialize the UI:

```js
    window.initializeAnalyticsTab();
```

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
