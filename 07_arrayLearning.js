let arrayOfNumbers = [5, 10, 20, 5, 13, 18, 20];       // Empty array 
console.log(arrayOfNumbers);

console.log(`------ Total NO of Elements available in array  -------`);
let totalVarible = arrayOfNumbers.length;
console.log(`Total elements in Array ---> :${totalVarible}`);


console.log(`Traversing array using for loop in Reverse order`);
// initialization   condition  update 
let lastIndex = arrayOfNumbers.length-1;
for (let index = lastIndex; index > 0; index--) {
    const element = arrayOfNumbers[index];
    console.log(element); 
}



// Array of salaries
console.log(`Accessing salary of each employee`);
let arrayOfSalaries = [10000, 20000, 30000, 20000, 40000];
let sumOfSal = 0;// 30000
for (let index = 0; index < arrayOfSalaries.length; index++) {
    const element = arrayOfSalaries[index];// 10000 20000 30000
    sumOfSal = sumOfSal+element;
}
console.log(`Total Salary of all employee is : ${sumOfSal}`);



console.log(`======== push() methods=========`);
let arrayOfNumer = [4, 5, 6, 8, 9, 1];
console.log(arrayOfNumer);
arrayOfNumer.push(3);                        // adding element in the last or .push (3, 5, 6)
arrayOfNumer.unshift(8,9,"sitaram");        // adding element in the first 
arrayOfNumer.pop();                         // remove element in the last 
console.log(arrayOfNumer);


console.log(`======== pop() methods=========`);
var arrayOfNumber = [4, 5, 6, 8, 9, 33];
let popResult = arrayOfNumber.pop();
console.log(popResult);
console.log(arrayOfNumber);


console.log(`======== shift() methods=========`);
var arrayOfNum = [4, 5, 6, 8, 9, 33];
let shiftResult = arrayOfNum.shift();
console.log(shiftResult);
console.log(arrayOfNum);



console.log(`======== slice() methods=========`);
var arrayOfNum = [4, 5, 6, 8, 9, 33, 66];
let sliceResult = arrayOfNum.slice(3);
let sliceRes = arrayOfNum.slice(2, 5);
console.log(arrayOfNum);
console.log(sliceResult);
console.log(sliceRes);


console.log(`======== splice() methods=========`);
var arrayOfNum = [4, 5, 6, 8, 9, 33, 66];
console.log(arrayOfNum);
let spliceResult = arrayOfNum.splice(3);
console.log(`After using splice(3) method `);
console.log("Array after deleting elements ", arrayOfNum);
console.log("Total deleted elements: ", spliceResult);

var arrayOfNum = [4, 5, 6, 8, 9, 33, 66];
console.log(arrayOfNum);
let spliceRes = arrayOfNum.splice(2, 3);                    //splice (2, 3) first value 2 start from and last value 3 means three value deleted 
console.log(`After using splice(2, 3) method `);
console.log("Array after deleting elements ", arrayOfNum);
console.log("Total deleted elements: ", spliceRes);


console.log("====== Inserting element in the array =======");
var arrayOfNum = [4, 5, 6, 8, 9, 33, 66];
console.log(arrayOfNum);
arrayOfNum.splice(2, 0, 88);
console.log(arrayOfNum);
arrayOfNum.splice(1, 0, 55, 99, 22);
console.log(arrayOfNum);

console.log("====== Replacing element in the array =======");
var arrayOfNum = [4, 5, 6, 8, 9, 33, 66];
console.log(arrayOfNum);
arrayOfNum.splice(3, 1, 22);
console.log(arrayOfNum);
console.log("====== Replacing element in the array when splice(2, 3, 99, 77 ) =======");
var arrayOfNum = [4, 5, 6, 8, 9, 33, 66];
arrayOfNum.splice(2, 3, 99, 77 );
arrayOfNum.splice(9);
console.log(arrayOfNum);

console.log(`======== for of loop ==========`);
var arrayOfNum = [4, 5, 6, 8, 9, 33, 66];
console.log(arrayOfNum);
for (const element of arrayOfNum) {
    console.log(element);
}


console.log("==========include() ========");
var arrayOfNum = [4, 5, 6, 8, 9, 33, 66];
let isAvailable =  arrayOfNum.includes(9);
console.log(isAvailable);



console.log(`======== join() ==========`);
var arrayOfNum = [4, 5, 6, 8, 9, 33, 66];
let joinResult = arrayOfNum.join(" ");              // join the array element
console.log(joinResult);
console.log(typeof joinResult);



console.log(`======== concat() ==========`);
var arrayOfNum = [4, 5, 6, 8, 9, 33, 66];
let arrayOfNames = ["Moni", "Jenny", "Shenny", "Tomy"];
let arrayOfCities = ["Pune", "Mumbai", "Banglore"];
const concatArray = arrayOfNum.concat(arrayOfNames, arrayOfCities);     // Add no array in the Objects 
console.log(concatArray);


console.log(`======== Resize an array ==========`);
var arrayOfNum = [4, 5, 6, 8, 9, 33, 66];
console.log(arrayOfNum.length);
arrayOfNum.length = 5;                          // ew can increase length of array 
console.log(arrayOfNum);
console.log(arrayOfNum.length);
