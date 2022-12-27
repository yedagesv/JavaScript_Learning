console.log(`Nested object`);
const student = {
    name: "Stew Jobs",
    age: 50,
    marks: {
        science: 70,
        math: 90,
        english: 87,
        add: function() {
            return this.science+this.math+this.english;
         }
 
    },
    familyMemberNames: [ 'Tony', 'Lonny', 'Jenny', 'Watigton']

}
console.log(`Accessing an Nested object property`);
const scienceMark =  student.marks.science;
console.log(scienceMark);


console.log(`Updating an Nested object property`);
student.marks.english = 97;

console.log(`Adding an Nested object property`);
student.marks.programming = 100;

console.log(`Deleting an Nested object property`);
// delete student.marks.english;
marksTotal = student.marks.add();
console.log(`Total marks :${marksTotal}`);

console.log(`Accessing an array`);
console.log(student.familyMemberNames);


console.log(`Object entries`);
const billgates = {
    height: 6,
    weight: 70,
    age: 23,
    name: "Billgates"
}
console.log(Object.entries(billgates));
console.log(Object.keys(billgates));
console.log(Object.values(billgates));
