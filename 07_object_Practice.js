const bill = {
    height: 6,
    weight: 70,
    age: 23,
    name: "Billgates",
    valuation:"130B $",
}
console.log(`---------In Operator--------`);
let isavailable = "age" in bill;
console.log(isavailable);
if (isavailable) {
    delete bill.age;
    console.log(`"age" key deleted Successfully`);
}else{
    console.log(`"age" Property in NOT avilable in Bill Object`);
}
// delete bill.age;        //  delet the key and value in the object
console.log(bill);
console.log(`-------for in loop ----------`)
for (const key in bill) {
    if (Object.hasOwnProperty.call(bill, key)) {
        const element = bill[key];
        console.log(key,element);
        
    }
}