// Learning Functional Programming with Javascript
// Chapter 03, Video 03, Exercise 02

var _ = require('lodash');

var employees = [
  { name: "John", salary: 50000 },
  { name: "Susan", salary: 60000 },
  { name: "Greg", salary: 100000 },
  { name: "Mary", salary: 120000 }
]

var dueForARaise = _.filter(employees, function(employee) {
  return employee.salary < 70000;
});

console.log("dueForARaise", dueForARaise);

// for (var i = 0; i < employees.length; i++) {
//   var employee = employees[i]
//   if (employee.salary < 70000) {
//     dueForARaise.push(employee)
//   }
// }
