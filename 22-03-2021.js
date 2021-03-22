//I've hit a few bugs in my Java/Type/Coffee-script code recently, and I've traced the problem back to the global isNaN function I was using. I had expected it to be more discerning, but it's returning true for undefined right now. Write a function isReallyNaN that returns true only if passed in an argument that evalutes to NaN, and returns false otherwise.
const isReallyNaN = (val) => Number.isNaN(val)

//Define a class Person with the following properties:
// A constructor that accepts 4 arguments: firstName/FirstName (defaults to "John" if not set), lastName/LastName (defaults to "Doe" if not set), age/Age (defaults to 0 if not set) and gender/Gender (defaults to "Male" if not set). These should be stored in this.firstName/this.FirstName, this.lastName/this.LastName, this.age/this.Age and this.gender/this.Gender respectively.
// A method sayFullName/SayFullName that accepts no arguments and returns the full name (e.g. "John Doe")
// A class/static method greetExtraTerrestrials/GreetExtraTerrestrials that accepts one parameter raceName and returns "Welcome to Planet Earth raceName". For example, if the race name is "Martians", it should say "Welcome to Planet Earth Martians"
class Person {
    constructor(firstName = "John", lastName = "Doe", age = 0, gender = "Male") {
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
      this.gender = gender
    }
    
    sayFullName() {
      return `${this.firstName} ${this.lastName}`
    }
    
    static greetExtraTerrestrials(raceName) {
      return `Welcome to Planet Earth ${raceName}`
    }
  }

//Remove a exclamation mark from the end of string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.
function remove(s){
    return s.charAt(s.length - 1) === "!" ? s.slice(0, s.length -1) : s
  }

//You are required to create a simple calculator that returns the result of addition, subtraction, multiplication or division of two numbers. Your function will accept three arguments:
// The first and second argument should be numbers.
// The third argument should represent a sign indicating the operation to perform on these two numbers.
// if the variables are not numbers or the sign does not belong to the list above a message "unknown value" must be returned.
function calculator(a,b,sign){
    if(typeof a != "number" || typeof b !== "number") {
      return "unknown value"
    } else {
      return sign === "+" ? a + b 
      : sign === "-" ? a - b 
      : sign === "*" ? a * b 
      : sign === "/" ? a / b
      : "unknown value"
    }
  }

//You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all ASCII characters.
function uniTotal(n) {
    let total = 0
    for(let i = 0; i < n.length; i++) {
      total += +n.charCodeAt(i)
    }
    return total || 0
  }

//Given an integer (1 <= n <= 100) representing a person's age, return their minimum and maximum age range.
function datingRange(age){
    let min;
    let max;
     if(age <= 14) {
       min = Math.floor(age - 0.10 * age)
       max = Math.floor(age + 0.10 * age)
     } else {
       min = Math.floor((age / 2) + 7)
       max = Math.floor((age - 7) * 2)
     }
    return `${min}-${max}`
  }

  //Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .
  function addLength(str) {
    let arr = str.split(" ")
    let newArr = arr.map(item => `${item} ${item.length}`)
    return newArr
  }

  //An AI has infected a text with a character!! This text is now fully mutated to this character. If the text or the character are empty, return an empty string. There will never be a case when both are empty as nothing is going on!! Note: The character is a string of length 1 or an empty string.
  function contamination(text, char){
    return text.split("").map(item => char).join("")
  }

  //Your task is to write a function that takes two parameters: the year of birth and the year to count years in relation to. As Philip is getting more curious every day he may soon want to know how many years it was until he would be born, so your function needs to work with both dates in the future and in the past.
  function  calculateAge(a, b) {
    if(a === b) {
      return "You were born this very year!"
    }else if(a < b) {
      return b - a == 1 ? `You are ${b - a} year old.` : `You are ${b - a} years old.`
    } else if(a > b) {
      return a - b == 1 ? `You will be born in ${a - b} year.` : `You will be born in ${a - b} years.`
    }
  }

//Create a method all which takes an array and a predicate (function pointer), and returns true if the predicate returns true for every element in the array. Otherwise, it should return false. If the array is empty, it should return true, since technically nothing failed the test.
let all = (arr, fun) => arr.every(fun)