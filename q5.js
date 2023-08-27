const side1 = 2;
const side2 = 2;
const side3 = 4;
if (side1 == side2 && side2 == side3){
    console.log("It is a Equilateral Triangle");
}
else if(side1 == side2 || side2 == side3 || side1 == side3 ){
    console.log("It is a Isosceles Triangle");
}
else{
    console.log("It is a Scalene Traigle");
}

