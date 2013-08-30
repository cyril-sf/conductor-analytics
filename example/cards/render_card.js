Conductor.require('../../jquery.js');

Conductor.card({
  activate: function() {
    this.consumers.height.autoUpdate = false;
  },

  initializeDOM: function() {
    var element = document.createElement('div');
    element.setAttribute('id', 'root');
    document.body.appendChild( element );
  },

  render: function(intent, size) {
    $('div#root').text("something");
  }
});
