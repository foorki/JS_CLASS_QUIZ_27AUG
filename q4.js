const num01 = 10;
const num02 = 20;
const num03 = 30;
if (num01 > num02 && num01 > num03){
    console.log("num01 is big");
}
else if (num02 > num03 ){
    console.log("num02 is big");
}
else if (num03 > num01 && num03 > num02 ){
    console.log("num03 is big");
}
else{
    console.log("All are same");
}
