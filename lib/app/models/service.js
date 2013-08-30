var Service = DS.Model.extend({
  isVisible: DS.attr('boolean', true),
  eventTypes: DS.hasMany('eventType')
});

export default Service;
