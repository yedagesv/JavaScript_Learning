var index = 0;
while (index<=10) {
   console.log(index);
   if (index==5) {
     break;
   } 
   index++;
}

for (let index = 0; index < 20; index++) {
   console.log(index);
   if (index>=12) {
     break;
   }
    
}



for (let index = 0; index < 6; index++) {
    if (index==3) {
      continue;                 // it will break 3
    }
    console.log(index);
 
 }
 