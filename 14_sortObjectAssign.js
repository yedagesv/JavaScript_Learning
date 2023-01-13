console.log(`------------------- Assignment No 2 -------------------`);
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

const array_employees = [emp_sonali, emp_monika, emp_anil, emp_radha, emp_rishi, emp_viny, emp_mahi];

console.log(`Que No 1.sort array_employees in accending order by Employees ID  ----------`);
let sortEmployeesID = array_employees.sort((empid1, empid2) => {
    return empid1.emp_id > empid2.emp_id ? 1 : -1;
});
sortEmployeesID.forEach((value) => {
    console.log(`ID : ${value.emp_id}   Name : ${value.emp_name}   Company : ${value.emp_company}`);
});

console.log(`Que No 2.sort array_employees in accending order by Employees Department ----------`);
let sortEmployeesDepartment = array_employees.sort((value1, value2) => {
    return value1.emp_dept > value2.emp_dept ? 1 : -1;
});
sortEmployeesDepartment.forEach((value) => {
    console.log(`ID : ${value.emp_id}    Department : ${value.emp_dept}   Company : ${value.emp_company}`);
});

console.log(`Que No 3.sort array_employees in Decending order by Employees Salary ----------`);
let sortEmployeesSalary = array_employees.sort((value1, value2) => {
    return value1.emp_salary > value2.emp_salary ? -1 : 1;
});
sortEmployeesSalary.forEach((value) => {
    console.log(`Name: ${value.emp_name}    Salary : ${value.emp_salary}   Company : ${value.emp_company}`);
});
