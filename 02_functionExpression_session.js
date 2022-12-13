var myName;
console.log(myName);

// Function Expression
var showResult = function () {
  console.log("show.....");
};
showResult();

// We can store a function as value in JS
var substraction = function (num1, num2) {
  var result = num1 - num2;
  console.log("substraction.......", result);
  return result;
};
var result = substraction(45, 20);
console.log(result);

var square = function (num) {
  console.log("Square of ", num * num);
};
console.log(typeof square);
square(5);
square(100);
square(34);
