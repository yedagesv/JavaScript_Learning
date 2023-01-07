const employeeAnil = {
    name: "Anil",
    id:11,
    age:26,
    city: "Pune"
}
console.log(employeeAnil);

 
class Employee{
    constructor(name,id,age,city){
        this.name =name,
        this.id = id,
        this.age = age,
        this.city = city
    }
details(){
    console.log(this.name,this.id,this.age,this.city);
}
}
let empSita = new Employee("Anil",12,25,"Mumbai");
let empsandip = new Employee("Sandip",13,26,"Sangola");
console.log(empsandip);
console.log(empSita);
console.log(empSita.name,empsandip.city);   // to show the value on log
empSita.details();// ANil 12 25 Mumbai

//Student Registration Data  

class Student {
    constructor(name,rollNo,age,gradution){
this.name = name;
this.rollNo = rollNo;
this.age = age;
this.gradution = gradution;
    }
}
let rohit = new Student("Rohit",25,28,"BE Electrical");
console.log(rohit);