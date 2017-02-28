var moment = require('moment');
var now = moment();

console.log(now.format());
console.log(now.local().format('LT'));

// console.log(now.format('X'));
// console.log(now.valueOf());

// var timestamp = 1444247486704;
// var timestampMoment = moment.utc(timestamp);

// console.log(timestampMoment.format());