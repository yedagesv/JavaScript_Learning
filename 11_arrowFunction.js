// arrow function with No arguments and No return 
let show = () => { // let show = function (){
    console.log("Hello"); // console.log("Hello");
} // }
show();
// => Arrow function Syntax -------> advantage is clean code
// let fun = ()=>{

// };

// Arrow Function with argument 
let sum = (n1, n2) => {
    console.log(n1 + n2);
}
sum(10, 10);

// Arrow Function with argument and return value
let multiply = (n1, n2) => {
    let mul = n1 * n2;
    return mul;
}
let mulResult = multiply(5, 5);
console.log(mulResult);
