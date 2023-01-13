const arrayOfNames = ["Anuja", "Sonali", "Manoj", "Yogesh", "Bharat"];
console.log("==== reverse() === ");
arrayOfNames.reverse();
console.log(arrayOfNames);
console.log("==== sort() in ascending order === ");
arrayOfNames.sort();
console.log(arrayOfNames);
console.log("==== sort() in descending order === ");
arrayOfNames.reverse();
console.log(arrayOfNames);


const arrayOfNumbers = [23, 111, 5, 99, 32];
console.log("==== sort() array of numbers=== ");
// arrayOfNumbers.sort();
console.log(arrayOfNumbers);
arrayOfNumbers.sort((a, b)=>{
   return a>b ? 1 : -1;
});
console.log(arrayOfNumbers);
// Sort the array in descending order
arrayOfNumbers.reverse();
console.log(arrayOfNumbers);


const arrayOfNums = [45, 888, 5, 99, 67]; // a = 45  b=888  a is greater 
arrayOfNums.sort((a,b)=>{
    return a>b ? -1 : 1; // 45-888 ==> -ve  ==> 99, 67  = 99-67 ==> +ve
});
console.log(arrayOfNums);
