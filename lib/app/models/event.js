var Event = DS.Model.extend({
  eventType: DS.belongsTo('eventType'),
  card: DS.belongsTo('card'),
  direction: DS.attr(),
  data: DS.attr()
});

export default Event;
