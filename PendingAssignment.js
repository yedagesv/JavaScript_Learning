console.log(`-------------Check TCS Eligibility Criteria ---------------`);

function eligibilityTCS(gradScore, hscScore, sscScore, candidateName) {
    var eligibility = ((gradScore < 0 || gradScore > 100) || (hscScore < 0 || hscScore > 100) || (sscScore < 0 || sscScore > 100)) ? `Invalid Input ${candidateName} Pleade chek it` : ((gradScore >= 70 || hscScore >= 80 || sscScore >= 90) ? `Congrates ${candidateName} you are eligible for TCS Interview` : `Unfortunately ${candidateName} you are Not eligible for Interview`)
    console.log(eligibility);
}
eligibilityTCS(80, 86, 90, "Sitaram");
eligibilityTCS(70, 65, 55, "Sachin");
eligibilityTCS(60, 79, 88, "Sandip");
eligibilityTCS(110, 79, 88, "Sagar");

console.log(`----------Check Eligibility for Voting -----------`);

function eligibilityVoting(age) {
    var eligible = (age <= 0 || age >= 120) ? `${age}: is Invalid Age` : ((age >= 18) ? `${age}: Yes You are Eligible for Vote` : `${age}: Sorry You are Not Eligibile for vote`)
    console.log(eligible);
}
eligibilityVoting(45);
eligibilityVoting(17);
eligibilityVoting(8);
eligibilityVoting(20);
eligibilityVoting(-10);
eligibilityVoting(200);
eligibilityVoting(0);

console.log(`-----Assignment on if else --------`);

function gradeCalculation(marks) {
    if (typeof marks !== "number") {
        console.log(`${marks} invalid Input Data`);

    } else {
        if ((marks < 35) || (marks <= 0)) {
            console.log(`${marks} sorry you are fail`);
        }
        if ((marks >= 90)) {
            console.log(`Fantastic Marks:${marks} ,Your Grade is A+`);
        }
        if (marks >= 75 && marks < 90) {
            console.log(`Excellent Marks:${marks} ,Your Grade is A`);
        }
        if ((marks >= 50 && marks < 75)) {
            console.log(`Good Marks:${marks} ,Your Grade is B`);
        }
        if ((marks >= 35 && marks < 50)) {
            console.log(`Marks:${marks} ,Your Grade is C`);
        }
    }
}
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation("91");
gradeCalculation("Eighty");

console.log(`Assignment on Date 31/12/2022`);
// que no : 1
const personalDetail = {
    firstName: "Sitaram",
    lastName: "Yedage",
    eduction: "BE-Electrical",
    isMarried: true,
    mobile: 9665152037,
    email: "sitaramvyedage@gmail.com",
    address: "Chincholi",
    dateOfBirth: 02 / 05 / 1994,
}
console.log(personalDetail);

// question No : 2
const collegeDetails = {
    collegeName: "Fabtech Techical Campus Sangola",
    address: "Sangola",
    pincode: 413307,
    yearOfPassing: 2016,
}
console.log(collegeDetails);

//question No : 3
let merge = Object.assign(personalDetail, collegeDetails);
console.log('both merge :', Object.assign(personalDetail, collegeDetails));
// console.log(`both Merge: ${merge}`); // 


// question No: 4

let friendNames = ["sachin", "sandip", "sagar", "rohit", "pratik", "akashay"];
Object.freeze(friendNames);
// friendNames.push("mohit");
console.log(friendNames);

//question No : 5

for (const friend of friendNames) {
    console.log(friend);
}

//question No :6


/*function reversestring(str) {
    var splitstring = str.split("");
    console.log(splitstring);

    var reverseArray = splitstring.reverse();
    console.log(reverseArray);

    var joinArray = reverseArray.join("");
return joinArray;
}
var finalResult =reversestring("Technology");
console.log(finalResult);*/ // This method reverse only single word of given string


function reversestring(string) {
    var newstring = "";

    for (let index = string.length - 1; index >= 8; index--) {
        newstring += string[index];

    }
    return newstring;

}
let result = reversestring("Codmind Technology");
console.log(`Reverse the string "Codemind ${result}"`);




console.log(`Assignment on date 29/12/2022`);
// quetion No: 1
class Vehicle {
    constructor(typeOfVehicle, engine, power, torque, suspension, airbags) {
        this.typeOfVehicle = typeOfVehicle;
        this.engine = engine;
        this.power = power;
        this.torque = torque;
        this.suspension = suspension;
        this.airbags = airbags;
    }

}
let hondaCity = new Vehicle("4 wheeler", "Petrol Engine", "93 kw", "6600 RPM", "TRV struts", "Yes");
let jaguarFPace = new Vehicle("4 wheeler", "Petrol Engine", "102 kw", "8600 RPM", "TRV struts", "Yes");
let mercedesBenzeA = new Vehicle("4 wheeler", "Disel Engine", "105 kw", "5300 RPM", "Sandwich", "Yes");
let toyotaVellfire = new Vehicle("4 wheeler", "Disel Engine", "80 kw", "8100 RPM", "Alphard", "Yes");
let toyotafortuner = new Vehicle("4 wheeler", "Disel Engine", "99 kw", "5600 RPM", "Iroman Nitro", "Yes");
console.log("Vehicles Name and specifications", hondaCity);
console.log("Vehicles Name and specifications", jaguarFPace);
console.log("Vehicles Name and specifications", mercedesBenzeA);
console.log("Vehicles Name and specifications", toyotaVellfire);
console.log("Vehicles Name and specifications", toyotafortuner);

// question No: 2

class college {
    constructor(name, location, pincode, collegecategory, totalStaffs) {
        this.name = name;
        this.location = location;
        this.pincode = pincode;
        this.collegecategory = collegecategory;
        this.totalStaffs = totalStaffs;
    }
    showDetails() {
        console.log(this.name, this.location, this.pincode, this.collegecategory, this.totalStaffs);
    }
}
let fabtech = new college("Fabtech", "Sangola", 413307, "Engineering", 150);
let shinhgad = new college("Sinhgad", "Korti", 413304, "", 180);
let newEnglishSchool = new college("NESS", "Sangola", 413307, "Highschool", 50);
let coep = new college("College of Engineering Pune", "Shivajinagar", 411005, "Engineering", 200);
fabtech.showDetails();
shinhgad.showDetails();
newEnglishSchool.showDetails();
coep.showDetails();

//question No 3

function traverseObject(fabtech) {
    for (const key in fabtech) {
        if (fabtech.hasOwnProperty.call(fabtech, key)) {
            const element = fabtech[key];
            console.log(key, element);

        }
    }
}
traverseObject(fabtech);
traverseObject(shinhgad);
traverseObject(newEnglishSchool);
traverseObject(coep);

// question No: 4

function fib(number) {
    const num = [0, 1];
    for (let index = 2; index <= number; index++) {
        const n1 = (index - 1);
        const n2 = (index - 2);
        num.push(n1 + n2);

    }
    return num[number]
}
console.log(fib(7));

// quetion No: 5

function isPrime(number) {
    if (number <= 1) return false;
    if (number % 2 == 0 && number > 2) return false;
    const s = Math.sqrt(number);
    for (let index = 3; index <= s; index += 2) {
        if (number % index === 0) return false;
    }
    return true;
}
console.log(isPrime(5));


console.log(`--------- Assignment on date 30/12/2022 ---------`);
console.log(`--------- Que No 1 : create a Constructor function with name Bank ---------`);

function bank(bankName, location, ifscCode, branchCode) {
    this.bankName = bankName;
    this.location = location;
    this.ifscCode = ifscCode;
    this.branchCode = branchCode;
}
let yesBank = new bank("YES Bank", "Pune", "YESB0000241", 211);
let sbiBank = new bank("SBI Bank", "Sangola", "SBIN0000271", 101);
let mahaBank = new bank("MAHA Bank", "Pune", "MAHA0000241", 207);
let axisBank = new bank("AXIS Bank", "Shivajinagar", "AXIS0000254", 245);
console.log("Bank Details : ", yesBank);
console.log("Bank Details : ", mahaBank);
console.log("Bank Details : ", sbiBank);
console.log("Bank Details : ", axisBank);

