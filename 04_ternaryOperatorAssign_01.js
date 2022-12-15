console.log(`--------------------Assignment No 1 ------------------------`);
console.log(`------------Que No-1----------------------Find Greater Number-----`);
var checkNumber = function (num1,num2) {
    var greaterResult = (num1>num2) ? "YES" : "NO";
    console.log(`The First value is greater than Second value : ${greaterResult} `);
}
checkNumber(10,-10);
checkNumber(800,899);

console.log(`------------Que No-2----------------------Check given No Even or ODD-----`);
var checkEvenOdd = function (value) {
    var result = (value%2==0) ? true : false;
    return result;

}
var finalresult = checkEvenOdd(29);
console.log(`The given value 29 is even : ${finalresult}`)
var finalresult = checkEvenOdd(44);
console.log(`The given 44 value is even : ${finalresult}`)
var finalresult = checkEvenOdd(0);
console.log(`The given value 0 is even : ${finalresult}`)
var finalresult = checkEvenOdd(101);
console.log(`The given value 101 is even : ${finalresult}`)


console.log(`------------Que No-3----------------------Check string length EVEN or ODD-----`);

var lengthEvenOdd = function (name) {
    var nameLength = name.length;
    // console.log(`The length is : ${nameLength}`);
    var check = (nameLength%2==0) ? "EVEN" : "ODD";
        return check;
}
var checkResult = lengthEvenOdd("JavaScript"); 
console.log(`The string JavaScript length is : ${checkResult}`);
var checkResult = lengthEvenOdd("Developer");
console.log(`The string Developer length is : ${checkResult}`);
var checkResult = lengthEvenOdd("Google");
console.log(`The string Google length is : ${checkResult}`);
