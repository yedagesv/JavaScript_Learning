console.log(`------------------------- Assignment No 1 ------------------------------`);

const arrayOfRollNumer = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45];
console.log(`arrayOfRollNumber = [${arrayOfRollNumer}]  <---- Given`);
arrayOfRollNumer.reverse();
console.log(`Reverse the given Array : [${arrayOfRollNumer}]`);
console.log(`Que No 2. use sort method without any custom logic log the array----------`);
arrayOfRollNumer.sort();
console.log(`[${arrayOfRollNumer}]`);

console.log(`Que No 3. use sort method with custom logic and log the array----------`);
arrayOfRollNumer.sort((num1, num2) => {
    return num1 > num2 ? 1 : -1;

});
console.log(`[${arrayOfRollNumer}]`);

console.log(`Que No 4. After sort find the greatest No in the array ----------`);

let length = arrayOfRollNumer.length
const gretestNo = arrayOfRollNumer[length - 1];
console.log(`Greatest No : ${gretestNo}`);

console.log(`Que No 5. After sort find the smallest No in the array ----------`);
let smallestNo = arrayOfRollNumer[0];
console.log(`smallest No: ${smallestNo}`);

console.log(`Que No 6. find the duplicate No from the array  ----------`);
const newArray = [...new Set(arrayOfRollNumer)];
console.log(`Remove duplicate No's from array: ${newArray}`);
