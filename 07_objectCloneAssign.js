console.log(`------------- Assignment No 1 -----------`);
//Que No:1
console.log(`--------  que No:1 -------`);
let arrayNums = [20, 3, 4, 56, 90, 400, 49];
let array = arrayNums; // shallow Clone
console.log(`----------- Referance Array -----------`);
console.log(arrayNums);
console.log(`----------- Shallow Clone Array -----------`);
console.log(array);
array.push(55, 56);
console.log(`----------- Updated Shallow Clone Array -----------`);
console.log(array);

// Que No :2
console.log(`--------  que No:2 -----------------`);
let arryCloneDeep = [...arrayNums];
console.log(`----------- Deep Clone using Spread Operator Array -----------`);
console.log(arryCloneDeep);
console.log(`-------- Updated Reference Array After Deep Spread Operator-------`);
arrayNums.push(10, 25);
console.log(arrayNums);

//Que No: 3
console.log(`--------  que No:3 ----------------`);
console.log(arrayNums);
let arrayEven = [2, 30, 14, 8];
console.log(arrayEven);
let mergeArray = [...arrayNums, ...arrayEven];
console.log(`>--- Merge both The Array by Using Spread OPerator: ${mergeArray}`);

const emplyoee_info = {
    emp_name: "John Doe",
    emp_id: 24,
    salary: {
        jully_month: "40,000 INR",
        aug_month: "50,000 INR",
        jun_month: "65,000 INR"
    },
    address: {
        locality: {
            colony: "Om Vrindavan Society",
            street: "Kanch Pokali, 431202"
        },
        city: "Mumbai",
        satate: "Maharastra",
        country: "India"
    },
    Mobile: ["+91 860 034 5688", "1800-4567-32", "+91-9096 5678 77"],
}
console.log(`--------  que No:4 ----------------`);
console.log(emplyoee_info);
console.log(`--------  que No:5 ----------------`);
console.log("'John Doe' Address Details are :", emplyoee_info.address.locality, emplyoee_info.address.city, emplyoee_info.address.satate, emplyoee_info.address.country);
console.log(`${emplyoee_info.emp_name} Mobile Numbers are: ${emplyoee_info.Mobile[0]}, ${emplyoee_info.Mobile[1]}, ${emplyoee_info.Mobile[2]}`);

// Que No:
console.log(`--------  que No:6 Deep clone using JSON.stringfy ----------------`);
let emp_Details = JSON.parse(JSON.stringify(emplyoee_info));
emp_Details.salary.jully_month = "80,0000 INR";
emplyoee_info.address.country = "United Kinddom";
console.log(`--------  Referance Object Updated with country = United Kingdom -------`);
console.log(emplyoee_info.address);
console.log(`--------- Clone Object Updated with salary jully_momth:80,000 INR  -------`);
console.log(emp_Details.salary);


console.log(`---------------Assignment NO 2---------------`);
const car = {
    carName: "Creta SX",
    lunchYear: 2017,
}

const carEngine = {
    enginePower: "1499CC",
    maxPower: "113 HBP",
}
console.log(`Merge the both Object BY using object.assign() Method:`);
console.log(car);
console.log(carEngine);
let merge = Object.assign(car, carEngine);

console.log("Merge both The Object:", merge);
console.log(`Merge the both Object BY Spread Operator Method:`);
let mergeObject = {
    ...car,
    ...carEngine
};
console.log("Merge Both the Object", mergeObject);
