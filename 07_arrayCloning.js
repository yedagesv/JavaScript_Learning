console.log(`----------shallow Cloning -------`);
let arrayOfEvenNum = [0, 2, 4, 6, 8];
let arrayNum = arrayOfEvenNum; // shallow Cloning 
arrayNum[1] = 10;
console.log(arrayNum);
console.log(arrayOfEvenNum);

// Deep Clonig using array 
console.log(`-------------Deep Cloning -----------`);
let arrayOfEvenNumber = [0, 2, 4, 6, 8, 10];
let arrayClone = [...arrayOfEvenNumber]; // Deep Cloning
arrayOfEvenNumber[2] = 100;
arrayClone[2] = 200;
console.log(arrayOfEvenNumber);
console.log(arrayClone);


// 
let kat = {
    name : "Katrina",
    role: "actress"
} 
let jack = kat;
// Concat or Merge array
console.log(" ====== array merge or concat====== ");
let arrayNummer = [0, 2, 4, 6, 8 ];
let arrayNumb = [1, 2, 3, 4];
let concatArray = arrayNum.concat(arrayNumb); // array merge using concat()
console.log(arrayNum);
console.log(arrayNumb);
console.log(concatArray);
console.log("Array merge or concat using spread operator ");
let mergeArray = [...arrayNum, ... arrayNumb];
console.log(mergeArray);


console.log("===== Object merge using spread operator ======");
let empAnil = {
    name : "Anil",
    role: "Software Developer"
} 
let empAddress = {
    city: "Pune",
    street: "Wakad - 411057"
}
   let mergedObject = {...empAnil, ...empAddress};
   console.log(mergedObject);
