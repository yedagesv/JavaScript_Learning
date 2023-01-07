city = "Pune";
console.log(city);

var city; // it oprate before declaration 

// console.log(state); let never inialization
let state = "MH";
console.log(state);

show();

function show(){
    console.log("Hello I am in show");
}

// display(); Never use function Expression like that
var display = function(){
    console.log("Hello I am in display");
}
display();