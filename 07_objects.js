const datta = { // try to use const as a container always 
    "height": 6,
    "weight": 70,
    "age": 23
}

const person = {
    height: 6,
    weight: 70,
    age: 23,
    name: "Billgates",
    speak: function(){  // Function stored in varible as a value
        console.log(`Hey I can speak English and Hindi`);
      }
    
}
console.log(typeof person);
console.log(person);
console.log(`Accessing object properties using dot notation`);
const personAge = person.age;
console.log(`Person age is: ${personAge}`);
console.log(`Accessing object properties using square bracket notation`);
const personName = person["name"];
console.log(personName);

console.log(`=== Adding an property into an object====`);
person.company = "Microsoft";
console.log(person);
  
console.log(`=== Updating an property into an object====`);
person.age = 65;
console.log(person);


console.log(`=== Deleting an property into an object====`);
delete person.weight;
console.log(person);

console.log(`=== Accessing an function from an object====`);
person.speak();

 
console.log(`=== Creating an empty object====`);
const mobile = {

    
}
mobile.company = "Micromax";
mobile.camera = "20Px";
console.log(mobile);


const myLaptop = { // Use camelCase 
    OS: "Bug sur",
    companyName: "Apple",
    ram: "8GB",
    color: "Silver",
    processor: "M1 Processor"
}
