console.log(`--------------------Assignment No 2 ------------------------`);

console.log(`-------Que No-1-----------Check Male Marriage Eligibility-----`);

function maleMarriageEligibility(gender,age,boyname) {
    console.log(`Personal Details : Name : ${boyname}, Gender : ${gender}, Age : ${age}`);

     var gende = (gender=="Male" && age>=21) ? `Hey ${boyname} are Eligible for Marriage` : `Sorry ${boyname} Wait For some Time` ;
     console.log(gende);                  // we can write in way also console.log(`Hey "${boyname}" ${gende}`);
     
}
maleMarriageEligibility("Male",25,"Billgates");
maleMarriageEligibility("Male",17,"Stew Jobs");

console.log(`-------Que No-2-----------Check female Marriage Eligibility-----`);

function femaleMarriageEligibility(gender,age,girlname) {
    console.log(`Personal Details : Name : ${girlname}, Gender : ${gender}, Age : ${age}`);
    
    var gende = (gender=="Female" && age>=18) ?`Hey ${girlname} You are Eligible for Married` : `Sorry ${girlname} Wait For some Time`;
    return gende;
}
var final = femaleMarriageEligibility("Female",16,"Jenifer");
console.log(final);
var final = femaleMarriageEligibility("Female",27,"Malinda Gates");
console.log(final);


