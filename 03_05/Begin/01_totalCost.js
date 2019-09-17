// Learning Functional Programming with Javascript
// Chapter 03, Video 05, Exercise 01
var _ = require('lodash');

const shoppingList = [
  { name: "Eggs", price: 4.99 },
  { name: "Milk", price: 3.99 },
  { name: "Bananas", price: 2.79 },
  { name: "Beer", price: 6.99 }
];

const sum = _.reduce(shoppingList, function(acc, element) {
  return acc + element.price;
}, 0);

console.log('sum', sum);
