console.log(`---------------Assignment No 1---------------`);
console.log(`que NO 1----------------------------------`);
let hello = () => {
    console.log(`Good Morning, Today is Monday`);
}
hello();
console.log(`Que No 2(a)----------------------------------`);
let mul = (num1, num2, num3) => {
    let mulResult = (num1 * num2 * num3);
    console.log(`The Multiplication of Number ${num1},${num2},${num3} is = ${mulResult}`);
}
mul(5, 5, 2);

console.log(`Que No 2(b)----------------------------------`);
let multiply = (num1, num2, num3 = 1) => {
    let multiplyResult = (num1 * num2 * num3);
    console.log(`The multiplication of ${num1} and ${num2} No with ${num3} Default Argumet is = ${multiplyResult}`);
}
multiply(10, 4);

console.log(`Que No 3(a)----------------------------------`);
let adition = (num1, num2, num3, num4, num5) => {
    let sum = (num1 + num2 + num3 + num4 + num5);
    console.log(`The adition of ${num1} ${num2} ${num3} ${num4} ${num5} is:-> ${sum}`);

    return sum;
}
let sumOfResult = adition(100, 100, 200, 349, 756);
console.log(`Que No 3(b)-----------------------------------`);
let sumOfString = adition("I am", "learning", "ES", "features", "in depth")
