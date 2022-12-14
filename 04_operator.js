
var num1 = 10;
var num2 = 5;
console.log(`=======================Arithmatic Operator=========================`);

var addResult = num1+num2;
console.log(`Addition of variable = ${addResult}`);

var subResult = num1-num2;
console.log(`Subtraction of variable = ${subResult}`);

var mulResult = num1*num2
console.log(`Multiplication of variable = ${mulResult}`);

var divResult = num1/num2;
console.log(`Division of variable = ${divResult}`);

var modulusResult = num1 % num2;                              //modulus operator find given value is even or odd
console.log(`Modulus  of variable = ${modulusResult}`);        //or we can find reminder 
console.log(`=======================Unary Operator=========================`);

num3 = 10;
num3 = ++num3;              //prefix  num3 = num3 + 1              //++ first Increment and then Print output
console.log(`Increment Operator result = ${num3}`);

var num4 = 5;
var res = --num4;       //prefix num4 = num4-1                  //-- first Decrement and then Print output
console.log(`Decrement operator result is ${res}`);

console.log(`=======================Assignments Operator=========================`);

var num1 = 10;
var num2 = 5;

num1 += num2;                               //num1= num1 + num2
console.log(`Compound Addition = ${num1}`); //num1 = 15

num1 -= num2;                               //num1 = num1-num2      it will take updated value 
console.log(`Compound Substraction = ${num1}`);//num1 = 10

console.log(`============ Comparison Operators =================`);
var num1 = 10;
var num2 = 5;
var num3 = 10
var result = num1 > num2;
console.log(`> Operator - Greater than ${result}`)
console.log(`> Operator - Greater than ${num1>num3}`)

var result = num1 < num2;
console.log(`< Operator - Less than ${result}`)

var result = num1 >= num3;
console.log(`>= Operator - Greater than equal ==> ${result}`)

var result = num1 <= num3;
console.log(`<= Operator - Less than equal ==> ${result}`);

console.log(`Check even or ODD: ${11%2}`);
