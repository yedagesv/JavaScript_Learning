const array =[1,2,3,5,6,8,2,1,6,];
// const myArray = new array();   // this another way to create array

// Set: Allow unique elements
const setNumbers = new Set(); // Creating Set
console.log("------------Adding elements in set-------------");
setNumbers.add(0); // Add element
setNumbers.add(1);
setNumbers.add(3);
setNumbers.add(4);
setNumbers.add(1); // Adding duplicate element - 1
setNumbers.add(3);// Adding duplicate element - 3
setNumbers.add(5);
setNumbers.add(6);

console.log(setNumbers);


console.log(`-------------Total available elements in Set----------`);
const totalElements =  setNumbers.size;
console.log(`Total elements in set : ${totalElements}`);

console.log(`---------After deletion-------------`);
const isDeleted3 =  setNumbers.delete(3);
const isDeleted99 = setNumbers.delete(99);
console.log(setNumbers);
console.log(`Is 3 Deleted ? ${isDeleted3}, Is 99 Deleted: ${isDeleted99}`);

const isAvailable4 = setNumbers.has(4);
const isAvailable99 = setNumbers.has(99);
console.log(`Is '4' available:${isAvailable4}), Is 99 available - ${isAvailable99}`)

console.log(`------------Clearing set using clear() ----------`);
// setNumbers.clear();
console.log(setNumbers);

console.log(`Type of set is : ${typeof setNumbers}`);

for (const element of setNumbers) {
    console.log(element);
}

console.log(`---------Removing duplicate elements-----------`);
let arrayOfNumbers = [5, 6, 4, 6, 5, 5, 6];
// const mySet = new Set(arrayOfNumbers);
// console.log(mySet);
// const myArray = [...mySet];
// console.log(myArray);

const myArray = [...new Set(arrayOfNumbers)];
console.log(myArray);


class Employee {
    constructor(empName,empAge,empId,empCity){
        this.empName = empName,
        this.empAge = empAge,
        this.empId = empId,
        this.empCity = empCity
    }
}
const empSita = new Employee("Sitaram",28,02,"Sangola");
const empSachin = new Employee ("Sachin", 50,03,"Bombay");
console.log(empSita);
console.log(empSachin);