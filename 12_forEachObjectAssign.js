console.log(`----------------------- Assignment No 1 ---------------------`);

class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
        this.emp_id = emp_id,
            this.emp_name = emp_name,
            this.emp_dept = emp_dept,
            this.emp_salary = emp_salary,
            this.emp_company = emp_company
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinay", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const arrayOfEmployee = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];
console.log(`Que No 1 Find the TCS Employees Name and Company --------------------`);

arrayOfEmployee.forEach((value) => {
    if (value.emp_company == "TCS") {
        console.log(`Name: ${value.emp_name}  Company: ${value.emp_company}`);
    }
});

console.log(`Que No 2 The Employee whoes salary > = 50000 are  ------------`);
arrayOfEmployee.forEach((value) => {
    if (value.emp_salary >= 50000) {
        // console.log(`The Employees who have salary greater >= 75000 are: ${value}`)
        console.log(`Emp_Id: ${value.emp_id}     Name: ${value.emp_name}    Dept: ${value.emp_dept}     Salary: ${value.emp_salary}     Company: ${value.emp_company}`);
    }
});

console.log(`Que No 3 --------------------------------`);

let sum = 0;
arrayOfEmployee.forEach((value) => {
    sum += value.emp_salary
});
console.log(`Total of all Employee salary  is : ${sum}`);

console.log(`Que No 4 ---------------------------------`);
let count = 0;
arrayOfEmployee.forEach((value) => {
    count += 1;

});
console.log(`Total No of Employees : ${count}`);
let average = sum / count;
console.log(`Average salary of all the Employees : ${average}`);

console.log(`Que No 5 -----------------------------------`);
console.log(`The Employee which are from "HR" or "IT" Dept and There salary above 75000 are :--`);
arrayOfEmployee.forEach((value) => {
        if ((value.emp_dept == "IT") || (value.emp_dept == "HR") && (value.emp_salary >= 75000)) {
            console.log(`Emp_Id: ${value.emp_id}     Name: ${value.emp_name}    Dept: ${value.emp_dept}     Salary: ${value.emp_salary}     Company: ${value.emp_company}`);
        }
});
