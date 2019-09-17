// Learning Functional Programming with Javascript
// Chapter 04, Video 02, Exercise 01

console.log('Before setTimeout');

setTimeout(function() {
  console.log('The function has been executed');
}, 3000);

console.log('After setTimeout');

var x = 1;

console.log('x is ' + x);

setTimeout(function() {
  x = 99;
  console.log('x now is ' + x);
  setTimeout(function() {
    x = 43;
    console.log('x now is ' + x);
  }, 3000);
}, 3000);

console.log('x is ' + x);
