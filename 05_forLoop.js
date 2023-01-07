// write no 1 to 10 by using for loop 
console.log(`Print 1 TO 10 Natural Number`)

//  intialization       condtion       update expression 

for (let index = 1; index <= 10; index++) {
    console.log(index);

}

console.log(`Print series of 5 `);
for (let index = 5; index <= 50; index = index + 5) {
    console.log(index);

}

while (condition) {

}

// Print numbers from 0 to 10
// initialization 0   condition <=10   update expre = ++
var i = 0; // Initialization 
while (i <= 10) { // Condition 
    console.log(i); // Print
    i++; // Update Expersstion 
}
// print 50 to 5 Number 
var i = 50;
while (i >= 5) {
    console.log(i);;
    i = i - 5;
}

// i want table of 7 

var i = 7;
while (i <= 70) {
    console.log(i);;
    i = i + 7;
}


// Print numbers from 0 to 10
// initialization 0   condition <=10   update expre = ++
var index = 0;
do {
    console.log(index);
    index++;
} while (index <= 10);

// Print 70 to 7 by decrementing each time 7
// 70  63  56  
var index = 70;
do {
    console.log(index);
    index = index - 7;
} while (index >= 7);

// Infinete Loop 
/*while (true) {
    console.log(`Hello`);
}

for (; ; ) {
      console.log(`Hello`);
} */