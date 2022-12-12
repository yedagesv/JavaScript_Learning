// Assignment on function 

console.log("-----------------------------Q-1(1)------------------------------");
function bankCeo() {
    console.log("'Ashu Khullar' is Chief Executive Officer of CITY Bank");
    console.log("'Abitabh Choudhary' is Chief Executive Officer of AXIS Bank");
    console.log("'Sashidhar Jagdishan' is Chief Executive Officer of HDFC Bank");
}
bankCeo();

console.log("-----------------------------Q-1(2)------------------------------");
function bankDetails(bankName,  accountNum, location, pinCode) {
 console.log("Bank Name =",bankName ,"    Account Number =", accountNum ,"    Location =",location ,"    Pin Code =",pinCode);   
}
bankDetails("CITY Bank",3456782345,"Pune",431202);
bankDetails("AXIS Bank",7856782345,"Mumbai",441202);
bankDetails("HDFC Bank",8956782345,"Pune",631202,);
