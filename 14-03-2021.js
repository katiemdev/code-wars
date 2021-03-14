// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.
function sumMix(x){
    let newArr = x.map(item => Number(item))
    return newArr.reduce((previous, current) => previous + current)
  }

//   Simple challenge - eliminate all bugs from the supplied code so that the code runs and outputs the expected value. Output should be the length of the longest word, as a number.
//   There will only be one 'longest' word.
function findLongest(str) {
    var spl = str.split(" ");
    var longest = 0
    
    for (var i = 0; i < spl.length; i++) {
      if (spl[i].length > longest) {
        longest = spl[i].length
      }
    }
    return longest
  }


//  Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.
//  If no arguments are given, ball objects should instantiate with a "ball type" of "regular."
var Ball = function(ballType) {
    ballType ? this.ballType = ballType : this.ballType = "regular"
  }  

//   What is the most asked question on CodeWars?
//     Can someone explain /*...*/?
//     You need to write a function detect that will check if a string starts with Can someone explain, case sensitive. Return true if so, false otherwise.
function detect(comment) {
    return comment.startsWith("Can someone explain") ? true : false
  }

//   Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( length 0 ).
function solution(a, b){
    if(a.length > b.length) {
      return `${b + a + b}`
    } else {
      return `${a + b + a}`
    }
  }

//In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.
// For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.
// If you can, try writing it in only one line of code.
function findMultiples(integer, limit) {
    let arr = []
    for(let i = integer; i <= limit; i++) {
      if(i % integer === 0) {
        arr.push(i)
      }
    }
    return arr
  }
  