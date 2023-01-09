// Given the home work

// Anil -> Homework
// Anil Homework
function anilHomeWork(callback) {
    console.log("Anil is doing homework... ");
    console.log("After some time.. Anil did homework..");
    callback();
}

// Sunil -> Homework
function sunilHomeWork() {
    console.log("I am happy Anil, you have completed homework");
    console.log("I am bit lazy and don't have time as well");
    console.log("So copying as it is your homework");
}
anilHomeWork(sunilHomeWork);
//sunilHomeWork();

/*      we can write in this way also 
function show(){
    console.log("This is show function..");
}
setTimeout(show, 3000);
*/
setTimeout(function show() {
    console.log("This is show function..");
}, 3000);
