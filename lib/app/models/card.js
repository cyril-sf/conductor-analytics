var Card = DS.Model.extend({
  isVisible: DS.attr('boolean', true),
  events: DS.hasMany('event')
});

export default Card;
