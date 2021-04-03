//Coding in function pickIt, function accept 1 parameter:arr, it's a number array, we need traverse arr by using for loop, if element is odd number, push it to array odd, if it's a even number, push it to array even.
function pickIt(arr){
    var odd=[],even=[];
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] % 2 === 0) {
        even.push(arr[i])
      }else {
        odd.push(arr[i])
      }
    }
    return [odd,even];
  }

//I've written five function equal1,equal2,equal3,equal4,equal5, defines six global variables v1 v2 v3 v4 v5 v6, every function has two local variables a,b, please set the appropriate value for the two variables(select from v1--v6), making these function return value equal to 100. the function equal1 is completed, please refer to this example to complete the following functions.
var v1=50;v2=100,v3=150,v4=200,v5=2,v6=250
function equal1(){
  var a=v1   
  var b=v1   
  return a+b;
}
//Please refer to the example above to complete the following functions
function equal2(){
  var a=v4   //set number value to a
  var b=v2   //set number value to b
  return a-b;
}
function equal3(){
  var a=v1  //set number value to a
  var b=v5  //set number value to b
  return a*b;
}
function equal4(){
  var a=v4   //set number value to a
  var b=v5   //set number value to b
  return a/b;
}
function equal5(){
  var a=v6   //set number value to a
  var b=v3  //set number value to b
  return a%b;
}

//You can print your name on a billboard ad. Find out how much it will cost you. Each letter has a default price of £30, but that can be different if you are given 2 parameters instead of 1. You can not use multiplier "*" operator.
function billboard(name, price = 30){
    let total = 0
    for(let i = 0; i < name.length; i++) {
      total += price
    }
    return total
  } 