//Assignment on Function With arguments
console.log("==============Assignment===============");
console.log("-------------------Q-1-----------------");
function today() {
  console.log("Today's session on function");
  console.log("Today's Date:10-dec-2022");
}
today();

console.log("---------------------Q-2--------------------");
function personalDetail(firstName, lastName, collegeName) {
  console.log("First Name =", firstName);
  console.log("Last Name =", lastName);
  console.log("College Name =", collegeName);
}
personalDetail("Sitaram", "Yedage", "Fabtech Technical Campus, Sangola");

console.log("----------------Q-3--------------------------");
function swapValuesDude(val1, val2) {
  console.log("-------Before swap-----");
  console.log(val1, val2);
  var temp = val1;
  val1 = val2;
  val2 = temp;
  console.log("-------After swap-----");
  console.log(val1, val2);
}
swapValuesDude("Virat", "Anushka");
swapValuesDude(1000, 2000);

console.log("-------------------Q-4----------------");
function addThreeValues(num1, num2, num3) {
 // console.log(` Addition of ${num1},${num2},${num3}`);
  return num1 + num2 + num3;
}

console.log(addThreeValues(10.23, 600, 40));
console.log(addThreeValues("Hello", "Good", "Morning"));
