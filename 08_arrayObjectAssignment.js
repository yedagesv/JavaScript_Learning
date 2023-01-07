console.log(`-----Create the class bank and initialized using constructor------ `);
class bank {
    constructor(bank_name, location, account_no, ifsc, interest_rate) {
        this.bank_name = bank_name,
            this.location = location,
            this.account_no = account_no,
            this.ifsc = ifsc,
            this.interest_rate = interest_rate
    }
}
const axisBank = new bank("Axis Bank", "Sangola", 32568512359, "AIXS21021", "7.2%");
const sbiBank = new bank("SBI Bank", "Sangola", 326514529, "SBIN000271", "7%");
const iciciBank = new bank("ICICI Bank", "Sangola", 2515551545, "ICIC25155", "6.5%");
const kotakBank = new bank("Kotak Bank", "Sangola", 251242591, "KOTK215242", "7.5%");
const hdfcBank = new bank("HDFC Bnak", "Sangola", 2515548962, "HDFC2514545", "7.1%");
const panjabBank = new bank("Panjab Bank", "Sangola", 2541254952, "PAJB251452", "7.3%");
console.log(axisBank);
console.log(sbiBank);
console.log(iciciBank);
console.log(hdfcBank);
console.log(panjabBank);


const bankArray = [axisBank, sbiBank, iciciBank, kotakBank, hdfcBank, panjabBank];
console.log(`-----by using for of loop traverse the array and find bank name and location------- `);
for (const element of bankArray) {
    console.log(`Bank Name: ${element.bank_name} Location: ${element.location}`);

}
console.log(`-----find the object which has bank name --> Kotak Bank----`);
for (const kotakBank of bankArray) {
    if (kotakBank.bank_name == "Kotak Bank") {
        console.log(kotakBank)

    }

}
console.log(`----------find the object/Bank using for of loop which has bank location--> Sangola---------`);
for (const bankLocation of bankArray) {
    if (bankLocation.location == "Sangola") {
        console.log(bankLocation.bank_name);
    }
}
console.log(`-----------using for loop log the Bank Detals:--------`);
for (const bankDetails of bankArray) {
    console.log(`${bankDetails.bank_name} ${bankDetails.location} ${bankDetails.account_no} ${bankDetails.ifsc} ${bankDetails.interest_rate}`);
    // console.log(bankDetails);        //Insted of that i can use variable subtitution 
}