
// Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.
// Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. make the first character in the string "word" upper case).
// Don't worry about numbers, special characters, or non-string types being passed to the function. The string lengths will be from 1 character up to 10 characters, but will never be empty.
function capitalizeWord(word) {
    return word.charAt(0).toUpperCase() + word.slice(1)
  }


//   A student was working on a function and made some syntax mistakes while coding. Help them find their mistakes and fix them.
  function main (verb, noun) {
    return verb + noun
  }


//   While making a game, your partner, Greg, decided to create a function to check if the user is still alive called checkAlive/CheckAlive/check_alive. Unfortunately, Greg made some errors while creating the function.
//   checkAlive/CheckAlive/check_alive should return true if the player's health is greater than 0 or false if it is 0 or below.
//   The function receives one parameter health which will always be a whole number between -10 and 10.
let checkAlive = health => health <= 0 ? false : true


// A student was working on a function and made some syntax mistakes while coding. Help them find their mistakes and fix them.
function main (verb, noun) {
    return verb + noun
  }


//Your goal is to return multiplication table for number that is always an integer from 1 to 10.
  function multiTable(number) {
    return `1 * ${number} = ${1 * number}\n2 * ${number} = ${2 * number}\n3 * ${number} = ${3 * number}\n4 * ${number} = ${4 * number}\n5 * ${number} = ${5 * number}\n6 * ${number} = ${6 * number}\n7 * ${number} = ${7 * number}\n8 * ${number} = ${8 * number}\n9 * ${number} = ${9 * number}\n10 * ${number} = ${10 * number}`
  }

//Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).
//Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).
  function hello(name) {
    if(name === "" || name === undefined) {
      return "Hello, World!"
    } else {
      name = name.toLowerCase();
      name = name.charAt(0).toUpperCase() + name.slice(1)
      return `Hello, ${name}!`
    }
  }

//   All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.
//   Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.
//   Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.
  function feast(beast, dish) {
    if(beast.charAt(0) === dish.charAt(0) && 
       beast.charAt(beast.length - 1) === dish.charAt(dish.length - 1)) {
       return true
     } else {
       return false
     }
  }


//   Your task is to make two functions, max and min (maximum and minimum in PHP and Python) that take a(n) array/vector of integers list as input and outputs, respectively, the largest and lowest number in that array/vector.
var min = function(list){
    let newArr = list.sort((a, b) => a - b)
    return newArr[0]
  }
  
var max = function(list){
    let newArr = list.sort((a, b) => a - b)
    return newArr[newArr.length - 1]
  }
