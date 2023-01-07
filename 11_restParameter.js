// Function with default argument value
console.log("Function with default argument value");
function sum(n1, n2=0){
    console.log(n1, n2);
    console.log(n1+n2); // 30
}
sum(10, 20);
sum(10);
