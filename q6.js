function Numbers(num1, num2, op) {

    if(op == "add"){
      console.log(`Sum of ${num1} and ${num2} is ${num1+num2}`)
    }
    else if(op == "subtract"){
      console.log(`Difference of ${num1} and ${num2} is ${num1-num2}`)
    }
    else if(op == "multiply"){
      console.log(`Product of ${num1} and ${num2} is ${num1*num2}`)
    }
    else if(op == "divide"){
      console.log(`Division of ${num1} and ${num2} is ${num1/num2}`)
    }
    else if(op == "modulus"){
      console.log(`Modulus of ${num1} and ${num2} is ${num1%num2}`)
    }
    else{
       console.log(`${op} is an invalid operation`)    
    }
  }
  
  Numbers(15,10,"add") //"Sum of 15 and 10 is 25"
  Numbers(20,8,"subtract") //"Difference of 20 and 8 is 12"
  Numbers(12,4,"multiply") //"Product of 12 and 4 is 48"
  Numbers(28,7,"divide") //"Division of 28 and 7 is 4"
  Numbers(22,3,"modulus") //"Modulus of 22 and 3 is 1"
  Numbers(31,3,"square") //"square is an invalid operation"