console.log(`----------------Assignment -----------------`);
// Normal function with arguments and return 
function wordLengthSquare(string) {
    console.log(`Given value are : ${string}`);
    var strLength = string.length;
    console.log(`Length of string is : ${strLength}`);
    var square = strLength * strLength;
    return square;
}
var resultSquare = wordLengthSquare("JavaScript");
console.log(`Square of the string is ${resultSquare}`);
var resultSquare = wordLengthSquare("Google");
console.log(`Square of the string is ${resultSquare}`);
var resultSquare = wordLengthSquare("Developer");
console.log(`Square of the string is ${resultSquare}`);

// Function Expression with no argu and no return

var wordLengthSquare = function () {
    var string = "I am Angular Developer";
    console.log(`Given string is : ${string}`);
    var stringLength = string.length;
    console.log(`The string length is : ${stringLength}`);
    var stringsplit = string.split(" ");
    var totalWord = stringsplit.length;
    console.log(`Total Words in given string is : ${totalWord}`);
    var stringDiv = stringLength / stringsplit.length
    console.log(`Division of string length to the No of word = ${stringDiv}`);
    var stringMul = stringLength * stringsplit.length;
    console.log(`Multiplication of string length and No of word = ${stringMul}`);
}
wordLengthSquare();
