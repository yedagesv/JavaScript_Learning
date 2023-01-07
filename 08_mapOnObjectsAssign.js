class bank {
    constructor(bank_name, location, account_no, ifsc, interest_rate) {
        this.bank_name = bank_name,
            this.location = location,
            this.account_no = account_no,
            this.ifsc = ifsc,
            this.interest_rate = interest_rate
    }
}
const axisBank = new bank("Axis Bank", "Sangola", 3261548285, "AIXS21021", "7.2%");
const sbiBank = new bank("SBI Bank", "Sangola", 4592148735, "SBIN000271", "7%");
const iciciBank = new bank("ICICI Bank", "Sangola", 2845942548, "ICIC25155", "6.5%");
const kotakBank = new bank("Kotak Bank", "Sangola", 2512254782, "KOTK215242", "7.5%");
const hdfcBank = new bank("HDFC Bnak", "Sangola", 7854692101, "HDFC2514545", "7.1%");
const panjabBank = new bank("Panjab Bank", "Sangola", 5124577545, "PAJB251452", "7.3%");

const mapOfBankEmployee = new Map();
mapOfBankEmployee.set(axisBank.account_no , axisBank);
mapOfBankEmployee.set(sbiBank.account_no, sbiBank);
mapOfBankEmployee.set(iciciBank.account_no, iciciBank);
mapOfBankEmployee.set(kotakBank.account_no, kotakBank);
mapOfBankEmployee.set(hdfcBank.account_no, hdfcBank);
mapOfBankEmployee.set(panjabBank.account_no, panjabBank);

const keyOfMapEmployee = mapOfBankEmployee.keys();
console.log(`Assign the Account No as the Key for the mapOfBankEmployee`);
console.log(keyOfMapEmployee);
console.log(`Create Map in such way that Key is Account NO and value is Bank Objects`);
console.log(mapOfBankEmployee.get(axisBank.account_no));
console.log(mapOfBankEmployee.get(sbiBank.account_no));
console.log(mapOfBankEmployee.get(iciciBank.account_no));
console.log(mapOfBankEmployee.get(kotakBank.account_no));
console.log(mapOfBankEmployee.get(hdfcBank.account_no));
console.log(mapOfBankEmployee.get(panjabBank.account_no));

console.log(`Traverse The Map on bankEmployee and log BankName, Account No, Interset Rate of the each Bank Object.`);
for (const key of keyOfMapEmployee) {
const bankEmployee = mapOfBankEmployee.get(key);
console.log(`${bankEmployee.bank_name}      ${bankEmployee.account_no}      ${bankEmployee.interest_rate}`);
}
