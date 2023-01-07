const interstRate = 7.5;
// interstRate = 8.5;   // NOT updated in const

const billgetes = {         // This is Object Literals Method
    height: 6,
    weight: 70,
    age: 23,
    name: "Billgates",
    valuation:"130B $",
}
Object.freeze(billgetes);  //  NOT update or NOT iniatiolise Object will Lock
billgetes.city ="Pune"; // update the Property in Object 
billgetes.valuation = "140B $";  // Intialize in value or Assign Updated value
console.log(billgetes);


