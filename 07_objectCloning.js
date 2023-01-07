
let myName = "Anil";
let yourName = "Sunil";

myName = yourName; // Deep Clone always performed on primitive data type

console.log(myName);
console.log(yourName);

yourName = "Jenifer";
console.log(myName);
console.log(yourName);

let anil = {
    age: 23,
    name: "Anil",
    company: "Microsoft"
}
let sunil = {
    age: 26,
    name: "Sunil",
    company: "Google"
}
anil = sunil; // Shallow cloning
sunil.country = "India";    // updated object sunil but change also in sunil
console.log("Sunil: ", sunil); 
console.log("Anil: ", anil); 


console.log(`-----------  Deep Cloning -------------`);
// Spread Operator      //Notetion for spread operator(...)
console.log(`--------------Deep Cloning using Spread Operator --------------`);

let empSita = {
    empName : "sitaram",
    empSalary :"75K",
    

}
console.log({... empSita});
let empSachin = {... empSita}
console.log(empSachin);
empSachin.empName = "Sachin";
empSita.country = "India";
console.log(empSita);
console.log(empSachin); 


// Deep Cloning using  JSON.stringfy
console.log(`--------------Deep Cloning using  JSON.stringfy --------------`);
const studentStew = {
    name: "Stew Jobs",
    age: 50,
    marks: {
        science: 70,
        math: 90,
        english: 87,    
    }
 
    }
    let stewBill = JSON.parse(JSON.stringify(studentStew));
    stewBill.name = "Billgetes";
    console.log(studentStew);
    console.log(stewBill);
    stewBill.marks.science = 90;
console.log(studentStew.marks.science);
console.log(stewBill.marks.science);
