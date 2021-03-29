//Create a function close_compare that accepts 3 parameters: a, b, and an optional margin. The function should return whether a is lower than, close to, or higher than b. a is "close to" b if margin is higher than or equal to the difference between a and b.
// When a is lower than b, return -1.
// When a is higher than b, return 1.
// When a is close to b, return 0.
// If margin is not given, treat it as zero.
function closeCompare(a, b, margin){
    return margin >= Math.abs(a - b) ? 0
    : a < b ? -1
    : a > b ? 1
    : 0
  }

//Write a function that will compare two values, one will be a number and one will be a string. Return true if they are the same character (regardless of their different data types) and return false if they are not.
function add(a, b){
	return +a == +b
}

//Coding in function trueOrFalse, function accept 1 parameters:val, try to use the conditional statement if...else, if val value is false (val==false or it can convert to false), should return a string "false", if not, return a string "true".
function trueOrFalse(val){
    if(val) {
      return "true"
    } else {
      return "false"
    }
  }

//Oh no! Timmy hasn't followed instructions very carefully and forgot how to use the new String Template feature, Help Timmy with his string template so it works as he expects!
function buildString(...template){
    return `I like ${template.join(', ')}!`;
  }

//Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n (inclusive).
function powersOfTwo(n){
    let arr = []
    for(let i = 0; i <= n; i++) {
       arr.push(2 ** i)
    }
    return arr
  }

//Create a function named combineNames that accepts two parameters (first and last name). The function should return the full name.
let combineNames = (f, l) => `${f} ${l}`

//Each number should be formatted that it is rounded to two decimal places. You don't need to check whether the input is a valid number because only valid numbers are used in the tests.
let twoDecimalPlaces = n => +n.toFixed(2)

//Input: Array of elements: ["h","o","l","a"] Output: String with comma delimited elements of the array in th same order: "h,o,l,a"
let printArray = array => array.join(",")
