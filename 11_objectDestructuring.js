const person = {
    name: "Virat Koli",
    age: 24,
    city: "Pune",
    pincode: 431223,
    totalRun: 55000,
    isMarried :true,
}
/*  let pincodeVirat = person.pincode;
let cityVirat = person.city;
let totalRunVirat = person.totalRun;
console.log(pincodeVirat, cityVirat, totalRunVirat);
*/
let {pincode,totalRun,city,isMarried, wifeName ="Anushka"} = person;     // Object Destructuring 

console.log(pincode, totalRun, city,isMarried,wifeName);        // we can use differnt varible name to assign value
console.log(person);    // No change in Object 

console.log(`----Array Destructuring ............`);

const arrayCompany = ["TCs", "Infy", "Google", "Twitter"];
let [company1,company2,company3,company4,company5 = "Microsoft"] = arrayCompany;
console.log(company1,company2,company3,company4,company5);

console.log(`----Self Invoking Function or IIFE --> Immediately Invoked Function Expression`);

/*  function show() {       // This in Normal function 
        console.log(`You are Inside show`);
}
show();
*/
(function show() {          // This is self Invoking Function or with out show (name) is called ananomus Function 
   console.log(`Bhar Bhar ke Likho`); 
})();

let muFun = function () { //  this is called ananomous function 

}