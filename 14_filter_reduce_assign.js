console.log(`--------------Assignment No 1 -------------`);

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

let arrayOfEmp = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];

console.log(`Que No 1 using filter method find the Emp of Wipro Company ------------------------`);

let empOfWipro = arrayOfEmp.filter((filter) => {
    return filter.emp_company == "Wipro"
});
empOfWipro.forEach((value) => {
    console.log(`Emp Id: ${value.emp_id}  Emp Name: ${value.emp_name}   Emp Dept: ${value.emp_dept}   Emp Salary: ${value.emp_salary}   Emp Company: ${value.emp_company}`);
});
console.log(`---------------------------------------------------------------------------------------`);
console.log(`Que No 2 using filter method find the Emp of "HR" or "IT" Dept ------------------------`);

let empOfDeptHR_IT = arrayOfEmp.filter((filter) => {
    return (filter.emp_dept == "HR" || filter.emp_dept == "IT")
});
empOfDeptHR_IT.forEach((value) => {
    console.log(`Emp Id: ${value.emp_id}  Emp Name: ${value.emp_name}   Emp Dept: ${value.emp_dept}   Emp Salary: ${value.emp_salary}   Emp Company: ${value.emp_company}`);
});
console.log(`---------------------------------------------------------------------------------------`);
console.log(`Que No 3. using filter method find the Emp of whoes Emp_id > 50 are -------------------`);
let empOfIdGreaterThan50 = arrayOfEmp.filter((filter) => {
    return filter.emp_id > 50
});
empOfIdGreaterThan50.forEach((value) => {
    console.log(`Emp Id: ${value.emp_id}  Emp Name: ${value.emp_name}   Emp Dept: ${value.emp_dept}   Emp Salary: ${value.emp_salary}   Emp Company: ${value.emp_company}`);

});
console.log(`---------------------------------------------------------------------------------------`);
console.log(`Que No 4. Employees whoes Name startWith "A", "V", "M" are ----------------------------`);
let arryOfEmpName = arrayOfEmp.filter((value) => {
    return value.emp_name
});
arryOfEmpName.forEach((value) => {
    if ((value.emp_name.startsWith("A")) || (value.emp_name.startsWith("V")) || (value.emp_name.startsWith("M"))) {
        console.log(`Emp Id: ${value.emp_id}  Emp Name: ${value.emp_name}   Emp Dept: ${value.emp_dept}   Emp Salary: ${value.emp_salary}   Emp Company: ${value.emp_company}`);
    }
});
console.log(`---------------------------------------------------------------------------------------`);
console.log(`Que No 5.Average salary of all Employees:= --------------------------------------------`);

let salaryOfEmp = arrayOfEmp.filter((value) => {
    return value.emp_salary;
});

let count = 0;
let sumOfEmp = salaryOfEmp.reduce((initial, value) => {
    count += 1;
    return initial + value.emp_salary
}, 0);
// console.log(sumOfEmp);
// console.log(count);

let average = sumOfEmp / count;
console.log(`Average salary of all department Emp = ${average}`);

console.log(`---------------------------------------------------------------------------------------`);
console.log(`Que No 6.Average salary of IT Department Employees:= ----------------------------------`);
let EmpOfITDept = arrayOfEmp.filter((value) => {
    return value.emp_dept == "IT"
});

let counter = 0;
let avgSalOfITDept = EmpOfITDept.reduce((initial, value) => {
    counter += 1;
    return initial + value.emp_salary
}, 0);

let averageOFITEmp = avgSalOfITDept / counter;
console.log(`Average Salary of IT Department Employees = ${averageOFITEmp}`);