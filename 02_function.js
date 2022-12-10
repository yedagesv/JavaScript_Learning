function show(){
    console.log("fabtech Technical campus");
}
show();
function shoeValues(value1,value2){
    console.log("before swap ", value1,value2);
    var temp = value1;
     value1 = value2;
     value2 = temp;
    console.log("after swap ",value1,value2);
}
shoeValues(100,200);
shoeValues(2,4);
shoeValues("you","me");
shoeValues("Kishor","HItesh");


