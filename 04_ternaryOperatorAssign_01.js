console.log(`--------------------Assignment No 1 ------------------------`);
console.log(`------------Que No-1----------------------Find Greater Number-----`);
var checkNumber = function (num1,num2) {
    var greaterResult = (num1>num2) ? "YES" : "NO";
    console.log(`The ${num1} is greater than ${num2} : ${greaterResult} `);
}
checkNumber(10,-10);
checkNumber(800,899);

console.log(`------------Que No-2----------------------Check given No Even or ODD-----`);
var checkEvenOdd = function (value) {
    var result = (value%2==0) ? `The value ${value} is even : True` : `The value ${value} is even : False`;
    return result;

}
var finalresult = checkEvenOdd(29);
console.log(finalresult)
var finalresult = checkEvenOdd(44);
console.log(finalresult)
var finalresult = checkEvenOdd(0);
console.log(finalresult)
var finalresult = checkEvenOdd(101);
console.log(finalresult)


console.log(`------------Que No-3----------------------Check string length EVEN or ODD-----`);

var lengthEvenOdd = function (name) {
    var nameLength = name.length;
    var check = (nameLength%2==0) ? `The string ${name} length is: ${nameLength} Which is : EVEN` : `The string ${name} length is: ${nameLength} Which is : ODD` ;
        return check;
}
var checkResult = lengthEvenOdd("JavaScript"); 
console.log(checkResult);
var checkResult = lengthEvenOdd("Developer");
console.log(checkResult);
var checkResult = lengthEvenOdd("Google");
console.log(checkResult);
