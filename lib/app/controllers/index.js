/* global $ */

var IndexController = Ember.ArrayController.extend({
  toggleFilters: function() {
    $('.filters').toggle();
    $('#events').toggle();
  }
});

export default IndexController;
