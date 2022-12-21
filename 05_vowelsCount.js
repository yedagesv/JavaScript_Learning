// Print the vowels only aeiou or AEIOU
console.log(`-------Print the vowels only aeiou or AEIOU-----------`);
var sentence = "Yes Just do it man, I know you can"; 
var counter = 0;
for (let index = 0; index < sentence.length; index++) {
    var char = sentence.charAt(index);
    var charCopy = char.toLowerCase();              // optimise way to reduce code or convert 
    if (charCopy=='a' || charCopy=='e' || charCopy=='i' || charCopy=='o' || charCopy=='u') {  
        console.log(char);
        counter = counter +1;               // for counting the NO of charcters 
    }   
}
console.log(`Total vowels in string is : ${counter}`);


// write reverse string
console.log(`--------------Reverse the string ---------------------`);
var sentence = "Yes Just do it man, I know you can";

var reverseString = "";
 var lastCharPosition = sentence.length-1;
 //         initialization            condition        update 
for (let index = lastCharPosition;    index >= 0;     index-- ){
     var char = sentence.charAt(index);
      reverseString = reverseString.concat(char);
    
}
console.log(reverseString);


// print 5 in 1000 times
console.log(`----------Print 1000 times 5------------`);  // Alternate Way
var counter = 1;                                         //for(i=1;i<=1000;i++){
while (counter<=1000) {                                 //console.log(`5`);
    console.log(5);                                     //}
    counter = counter+1;
}
