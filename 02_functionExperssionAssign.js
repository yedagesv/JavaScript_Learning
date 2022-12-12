var square = function (num) {
        var square =num*num;
console.log("Square of Number",num ,"is =",square);
}
square(5);
square(6);
square(25);
square(100);
console.log("Type of Square =",typeof square);



var area = function (num1,num2) {
    var areaTringle = 0.5*num1*num2;
    console.log("Area of Triangle [base =45 and height =34] is = ",areaTringle);
}
area(45,34);


var area = function (num1,num2) {
    var areaRectangle = num1*num2;
    console.log("Area of Reactangle Plot [length = 499 and width = 917] is =",areaRectangle);
}
area(499,917);

var swapValues = function (val1,val2) {
    console.log("==============Before Swap===========");
    console.log(val1,val2);
    var temp = val1;
    val1 = val2;
    val2 = temp;
    console.log("==============After Swap===========");
    console.log(val1,val2);
}
swapValues("Virat","Anushka");
swapValues(1000,2000);



var javaScript = "JS the most popular language";
console.log("Total characters  Available is =",javaScript.length); 
console.log("Index of character ","u"," is =",javaScript.indexOf('u'));
console.log("The last Character is =",javaScript.charAt(javaScript.length-1));
console.log("Character at index 6 is =",javaScript.charAt(6));
console.log("Character at index 11 is =",javaScript.charAt(11));
var square = javaScript.length*javaScript.length;
console.log("Square of length = ",square);