var myName = "Mohit";
console.log(myName);

// Function Expression with out arguments 
var showResult = function() {
    console.log("show.....");
};
showResult();

// We can store a function as value in JS
// Function Expression with two arguments 
var substraction = function(num1, num2){
    var result = num1 - num2;
    console.log("substraction.......", result);
    return result;
}
var result = substraction(25,31);
console.log(result);