var EventType = DS.Model.extend({
  isVisible: DS.attr('boolean', true),
  service: DS.belongsTo('service'),
  events: DS.hasMany('event')
});

export default EventType;
