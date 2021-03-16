// Your function takes two arguments:
// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).
function twiceAsOld(dadYearsOld, sonYearsOld) {
    let twice = sonYearsOld*2
    return Math.abs(dadYearsOld - twice)
  }

  //You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.
// You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.
// Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.
function mergeArrays(arr1, arr2) {
    let arr = new Set([...arr1, ...arr2])
    return Array.from(arr).sort((a,b) => a -b)
  }

//   This function takes two numbers as parameters, the first number being the coefficient, and the second number being the exponent.
// Your function should multiply the two numbers, and then subtract 1 from the exponent. Then, it has to print out an expression (like 28x^7). "^1" should not be truncated when exponent = 2.
let derive = (coefficient,exponent) => `${coefficient*exponent}x^${exponent-1}`

// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.
let areaOrPerimeter = (l , w) => l === w ? l*w : 2*(l+w)

// The purpose of this kata is to work out just how many bottles of duty free whiskey you would have to buy such that the saving over the normal high street price would effectively cover the cost of your holiday.
// You will be given the high street price (normPrice), the duty free discount (discount) and the cost of the holiday.
// For example, if a bottle cost £10 normally and the discount in duty free was 10%, you would save £1 per bottle. If your holiday cost £500, the answer you should return would be 500.
// All inputs will be integers. Please return an integer. Round down.
function dutyFree(normPrice, discount, hol){
    let savings = (normPrice / 100)*discount
    return Math.floor(hol / savings)
    }

// Think of a way to store the languages as a database (eg an object). The languages are listed below so you can copy and paste!
// Write a 'welcome' function that takes a parameter 'language' (always a string), and returns a greeting - if you have it in your database. It should default to English if the language is not in the database, or in the event of an invalid input.
function greet(language) {
    let welcomes = {
    english: 'Welcome',
    czech: 'Vitejte',
    danish: 'Velkomst',
    dutch: 'Welkom',
    estonian: 'Tere tulemast',
    finnish: 'Tervetuloa',
    flemish: 'Welgekomen',
    french: 'Bienvenue',
    german: 'Willkommen',
    irish: 'Failte',
    italian: 'Benvenuto',
    latvian: 'Gaidits',
    lithuanian: 'Laukiamas',
    polish: 'Witamy',
    spanish: 'Bienvenido',
    swedish: 'Valkommen',
    welsh: 'Croeso'
      };
    
    for(let prop in welcomes) {
      if(prop === language) {
        return welcomes[prop]
      } else if(language == 'IP_ADDRESS_INVALID' || language == 'IP_ADDRESS_NOT_FOUND' || language == 'IP_ADDRESS_REQUIRED') {
        return "Welcome"
      }
    }
}

// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
// Array can contain numbers or strings. X can be either.
// Return true if the array contains the value, false if not.
let check = (a, x) => a.includes(x)

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.
function abbrevName(name){
    name = name.split(" ")
    return `${name[0].charAt(0).toUpperCase()}.${name[1].charAt(0).toUpperCase()}`
  }

//   Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase.
String.prototype.toAlternatingCase = function () {
    let arr = this.split("");
    let newArr = arr.map(item => item == item.toLowerCase() ? item.toUpperCase() : item.toLowerCase())
    return newArr.join("")
    }

// Add the isUpperCase method to String to see whether the string is ALL CAPS. In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.
String.prototype.isUpperCase = function() {
    let upperCase = x => x === x.toUpperCase() ? true : false
    return this.split("").every(upperCase)
   }

// Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.
function arrayMadness(a, b) {
    let squareA = a.reduce((p,c) => p += c**2, 0)
    let cubeB = b.reduce((p, c) => p += c**3, 0)
    return squareA > cubeB
  }

//   Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one. If no occurrences can be found, a count of 0 should be returned.
function strCount(str, letter){  
    let count = 0
    let arr = str.split("")
    arr.forEach(item => {
      if(item === letter) {
        count++;
      }
    })
    return count
  }

// In this Kata we are passing a number (n) into a function. Your code will determine if the number passed is even (or not).The function needs to return either a true or false. Numbers may be positive or negative, integers or floats. Floats are considered UNeven for this kata.
let testEven = (n) => n % 2 === 0 

// You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left. Considering these factors, write a function that tells you if it is possible to get to the pump or not. Function should return true (1 in Prolog) if it is possible and false (0 in Prolog) if not. The input values are always positive.
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return mpg*fuelLeft >= distanceToPump
  };

// At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.
// You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].
function differenceInAges(ages){
    ages.sort((a,b) => a - b)
      return [ages[0], ages[ages.length-1], (ages[ages.length - 1] - ages[0])]
    }

// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
let removeEveryOther = (arr) => arr.filter((item, index) => index % 2 == 0)

//The code gives an error! a = 123.toString
var a = 123
a = a.toString()

//Given an integral number of watermelons w (1 ≤ w ≤ 100; 1 ≤ w in Haskell), check whether Pete and Billy can divide the melons so that each of them gets an even amount.
let divide = (weight) => weight === 2 ? false : weight % 2 === 0 

// There was a test in your class and you passed it. Congratulations! But you're an ambitious person. You want to know if you're better than the average student in your class. You receive an array with your peers' test scores. Now calculate the average and compare your score! Return True if you're better, else False!
function betterThanAverage(classPoints, yourPoints) {
    let sum = classPoints.reduce((c, p) => c + p)
    let average = sum / classPoints.length
    return yourPoints > average
  }

// Messi is a soccer player with goals in three leagues: LaLiga, Copa del Rey, Champions. Complete the function to return his total number of goals in all three leagues.
function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals
  }

// Americans are odd people: in their buildings, the first floor is actually the ground floor and there is no 13th floor (due to superstition). Write a function that given a floor in the american system returns the floor in the european system. With the 1st floor being replaced by the ground floor and the 13th floor being removed, the numbers move down to take their place. In case of above 13, they move down by two because there are two omitted numbers below them. Basements (negatives) stay the same as the universal level.
function getRealFloor(n) {
    if(n < 13 && n > 0) {
      return n - 1
    } else if(n >= 13) {
      return n - 2
    } else {
      return n
    }
  }

//   Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
function multipleOfIndex(array) {
    return array.filter((item, index) => item % index === 0)
   }

//Write a function to split a string and convert it into an array of words.
let stringToArray = (string) => string.split(" ")

//You are given a function describeAge / describe_age that takes a parameter age (which will always be a positive integer) and does the following:
// If the age is 12 or lower, it return "You're a(n) kid"
// If the age is anything between 13 and 17 (inclusive), it return "You're a(n) teenager"
// If the age is anything between 18 and 64 (inclusive), it return "You're a(n) adult"
// If the age is 65 or above, it return "You're a(n) elderly"
// Your task is to shorten the code as much as possible. Note that submitting the given code will not work because there is a character limit of 137.
function describeAge(age){return`You're a(n) ${age<=12?"kid":(age>=13&&age<=17)?"teenager":(age>=18&&age<=64)?"adult":"elderly"}`}
