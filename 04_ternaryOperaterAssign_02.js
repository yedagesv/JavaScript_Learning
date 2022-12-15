console.log(`--------------------Assignment No 2 ------------------------`);

console.log(`-------Que No-1-----------Check Male Marriage Eligibility-----`);

function maleMarriageEligibility(gender,age,boyname) {
     var gende = (gender=="Male" && age>=21) ?"You are Eligible for Married" : "Sorry Guys Wait For some Time";
     console.log(`Hey "${boyname}" ${gende}`);
     
}
maleMarriageEligibility("Male",25,"Billgates");
maleMarriageEligibility("Male",17,"Stew Jobs");

console.log(`-------Que No-2-----------Check female Marriage Eligibility-----`);

function femaleMarriageEligibility(gender,age,girlname) {
    var gende = (gender=="Female" && age>=18) ?"You are Eligible for Married" : "Sorry Guys Wait For some Time";
    return gende;
}
var final = femaleMarriageEligibility("Female",16,"Jenifer");
console.log(`Hey "Jenifer" ${final}`);
var final = femaleMarriageEligibility("Female",27,"Malinda Gates");
console.log(`Hey "Malinda Gates" ${final}`);


