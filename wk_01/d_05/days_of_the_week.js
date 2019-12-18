var dayOfTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

dayOfTheWeek.unshift(dayOfTheWeek.pop());

var dayOfTheWeekCombined = [['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], ['Saturday', 'Sunday']];
var weekdays = dayOfTheWeekCombined.shift();

weekdays.sort();