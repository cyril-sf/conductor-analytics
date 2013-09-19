// Pad a single-digit number with a zero, if necessary.
// zeroPad(3)  => "03"
// zeroPad(10) => "10"
function zeroPad(number) {
  number = number+'';
  if (number.length === 1) {
    return "0"+number;
  }
  return number;
}

var Event = DS.Model.extend({
  eventType: DS.belongsTo('eventType'),
  card: DS.belongsTo('card'),
  direction: DS.attr(),
  data: DS.attr(),
  time: DS.attr('date'),

  formattedTime: function() {
    var date = this.get('time'),
        year = date.getFullYear(),
        month = zeroPad(date.getMonth()+1),
        day = zeroPad(date.getDate()),
        hour = zeroPad(date.getHours()),
        minute = zeroPad(date.getMinutes());

    return "%@-%@-%@ %@:%@ ".fmt(year, month, day, hour, minute);
  }.property('time')
});

export default Event;
