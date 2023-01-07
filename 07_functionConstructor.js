/*class Student { // THIS IS CLASS METHO
    constructor(name,rollNo,age,gradution){
this.name = name;
this.rollNo = rollNo;
this.age = age;
this.gradution = gradution;
    }
}*/
function Student(name, rollNo, age, graduction) {
    this.name = name;
    this.rollNo = rollNo;
    this.age = age;
    this.gradution = graduction;

}
let vinny = new Student("Vinnay", 10, 27, "M.Tech Electrical");
console.log(vinny);
console.log(vinny.age);

let isInstance = vinny instanceof Student; // Object is an instance of a clss 
console.log(isInstance);


const arrayOfNum =[3,5,7,9];
let arrayLength = arrayOfNum.length;
arrayOfNum.push(10);    //this push method also one Prototype for this arrayOfNum
console.log(arrayOfNum);

console.log(`---------- Prototype Concept---------`);

function StudentData (fullName,email,department,yearOfPassing){
    this.fullName = fullName;
    this.email = email;
    this.department = department;
    this.yearOfPassing = yearOfPassing;
}
StudentData.prototype.address = "Sangola"; // we can axcess in all objects but not show in log object
let sitaram = new StudentData("Sitaram Vitthal Yedage","sitaramvyedage@gmail.com","Electrical",2016);
let sachin = new StudentData("Sachin Dadaso Bandgar","sachinbandgar10@gmail.com","Mechanical",2016);
let sandip = new StudentData("Sandip Namedeo Kolekar","sandipnkolekar@gmail.com","Mechanical",2016);
let pratik = new StudentData("Pratik Balaso Patil","pratik.patil@gmail.com","Mechanical",2016);
console.log(sitaram);
console.log(sitaram.address); // this is known as prototype

let date = new Date();
let tdate = date.getDate(25-10-1994);
let day = date.getDay();
let year = date.getFullYear();
let month = date.getMonth();// it alway show current month-1
console.log(tdate,day,month,year);

// console.log(da());


