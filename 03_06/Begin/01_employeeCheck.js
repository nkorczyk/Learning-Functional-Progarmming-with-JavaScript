// Learning Functional Programming with Javascript
// Chapter 03, Video 06, Exercise 01
var _ = require("lodash");

var employees = [
  { name: "John", salary: 60000, age: 27, gender: 'M' },
  { name: "Mary", salary: 110000, age: 50, gender: 'F' },
  { name: "Susan", salary: 50000, age: 21, gender: 'F' },
  { name: "Greg", salary: 100000, age: 45, gender: 'M' },
  { name: "Jerry", salary: 90000, age: 39, gender: 'M' },
  { name: "Barb", salary: 95000, age: 36, gender: 'F' }
];

const males = _.filter(employees, function (employee) {
  return employee.gender === 'M';
});

console.log('males', males);

const maleAges = _.map(males, function (employee) {
  return employee.age;
});

console.log('mmaleAgesales', maleAges);

const maleAgeTotal = _.reduce(maleAges, function (sum, age) {
  return sum + age;
});

console.log('maleAgeTotal', maleAgeTotal);

const maleAverage = maleAgeTotal / males.length;

const femalesAgeTotal = employees
  .filter(function (employee) {
    return employee.gender === 'F';
  }).map(function (employee) {
    return employee.age;
  }).reduce(function (sum, age) {
    return sum + age;
  });

console.log('femalesAgeTotal', femalesAgeTotal);
