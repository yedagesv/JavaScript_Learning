console.log(`-----------------------Assignment No 2-----------`);
const array_numbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];
console.log(array_numbers);
console.log(`Que No 1-------------------------------`);
array_numbers.forEach((currentValue, index) => {
    console.log(`The index: ${index} and There Values: ${currentValue}`);
});

console.log(`Que No 2-------------------------------`);
array_numbers.forEach((currentValue) => {
    if (currentValue > 0) {
        console.log(`The Positive value in the given array is: ${currentValue}`);
    }
});

console.log(`Que No 3-------------------------------`);
let new_array = [];
array_numbers.forEach((currentValue) => {
    if (currentValue < 0) {
        new_array.push(currentValue);
    }

});
console.log(`Find the negetive values using forEach method with arrow function and add the into new_array: [${new_array}]`);

console.log(`Que No 4-------------------------------`);

array_numbers.forEach((currentValue) => {
    if (currentValue % 2 == 0) {
        console.log(`Find the Even number in the given array:${currentValue}`);
    }
});

console.log(`Que No 5-------------------------------`);
let sum = 0;
array_numbers.forEach((currentValue) => {
    sum += currentValue; //sum=sum+currentValue
})
console.log(`The addition of all values in the array [${array_numbers}] is:== ${sum}`);

console.log(`Que No 6-------------------------------`);
array_numbers.forEach((currentValue, index) => {
    if (index % 2 == 0) {
        console.log(`The Even position ${index } and there values in the array is: ${currentValue}`);
    }
})
