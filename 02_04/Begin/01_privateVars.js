// Learning Functional Programming with Javascript
// Chapter 02, Video 04, Exercise 01

// const counter = {
//   count: 0,
//   increment: function() {
//     this.count += 1
//   },
//   currentValue: function() {
//     return this.count
//   }
// }

function createCounter(startAt) {
  var count = startAt || 0;

  return {
    increment: function() {
      count += 1
    },
    currentValue: function() {
      return count
    }
  };
}

var counter = createCounter(5);

console.log(counter.currentValue())

counter.increment();
counter.increment();

console.log(counter.currentValue());
