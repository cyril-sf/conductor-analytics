var Event = DS.Model.extend({
  eventType: DS.belongsTo('eventType'),
  direction: DS.attr(),
  data: DS.attr()
});

export default Event;
