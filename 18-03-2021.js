// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer. When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes. Your task is correct the errors in the digitised text. You only have to handle the following mistakes:
// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.
function correct(string){
    let arr = string.split("")
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] === "5") {
        arr[i] = "S"
      } else if(arr[i] === "0") {
        arr[i] = "O"
      } else if(arr[i] === "1") {
        arr[i] = "I"
      }
    }
    return arr.join("")
  }

// Given an array of integers. Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. If the input array is empty or null, return an empty array.
function countPositivesSumNegatives(input) {
    if(!input) {
      return [];
    }else {
    let positives = input.filter(item => item > 0)
    let negatives = input.filter(item => item < 0).reduce((c,p) => c + p, 0)
    if(positives.length === 0 && negatives === 0) {
      return []
    }else {
      return [positives.length, negatives]
      }
    }
  }

  //Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects. This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above); This function should return a number (final grade). There are four types of final grades:
// 100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
// 90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
// 75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
// 0, in other cases
function finalGrade (exam, projects) {
    if(exam > 90 || projects > 10) {
      return 100
    }else if(exam > 75 && projects >= 5) {
      return 90
    }else if(exam > 50 && projects >=2) {
      return 75
    } else {
      return 0
    }
  }

//Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.
let combat = (health, damage) => health - damage < 0 ? 0 : health - damage

//Inspired by the development team at Vooza, write the function howManyLightsabersDoYouOwn that
// accepts the name of a programmer, and
// returns the number of lightsabers owned by that person.
// The only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome number of lightsabers. Anyone else owns 0.
let howManyLightsabersDoYouOwn = name => name === "Zach" ? 18 : 0

//Write function isPalindrome that checks if a given string (case insensitive) is a palindrome.
function isPalindrome(x) {
    x = x.toLowerCase()
    return x === x.split("").reverse().join("")
  }

//   Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
let smash = words => words.join(" ")

//Don Drumphet lives in a nice neighborhood, but one of his neighbors has started to let his house go. Don Drumphet wants to build a wall between his house and his neighbor’s, and is trying to get the neighborhood association to pay for it. He begins to solicit his neighbors to petition to get the association to build the wall. Unfortunately for Don Drumphet, he cannot read very well, has a very limited attention span, and can only remember two letters from each of his neighbors’ names. As he collects signatures, he insists that his neighbors keep truncating their names until two letters remain, and he can finally read them. Your code will show Full name of the neighbor and the truncated version of the name as an array. If the number of the characters in name is less than or equal to two, it will return an array containing only the name as is.
let whoIsPaying = name => name.length <= 2 ? [name] : [name, name.slice(0, 2)]

//Complete the function which returns the weekday according to the input number:
// 1 returns "Sunday"
// 2 returns "Monday"
// 3 returns "Tuesday"
// 4 returns "Wednesday"
// 5 returns "Thursday"
// 6 returns "Friday"
// 7 returns "Saturday"
// Otherwise returns "Wrong, please enter a number between 1 and 7"
function whatday(num) { 
    switch(num) {
        case 1: return "Sunday"; break;
        case 2: return "Monday"; break;
        case 3: return "Tuesday"; break;
        case 4: return "Wednesday"; break;
        case 5: return "Thursday"; break;
        case 6: return "Friday"; break;
        case 7: return "Saturday"; break;
        default: return "Wrong, please enter a number between 1 and 7"
    }
  }

//Give you a function animal, accept 1 parameter:obj like this: {name:"dog",legs:4,color:"white"} and return a string like this: "This white dog has 4 legs."
let animal = obj => `This ${obj.color} ${obj.name} has ${obj.legs} legs.`

//In this kata you will create a function that takes in a list and returns a list with the reverse order.
let reverseList = list => list.reverse()

//Create a method none? (JS none) that accepts an array and a function, and returns true if the function returns true for none of the items in the array. An empty list should return true.
let none = (arr, fun) => !arr.some(fun)

//Create an any? (JS: any) function that accepts an array and a block (JS: function), and returns true if the block (/function) returns true for any item in the array. If the array is empty, the function should return false.
let any = (arr, fun) => arr.some(fun)

//Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.
let include = (arr, item) => arr.includes(item)

//Write a function which calculates the average of the numbers in a given list. Note: Empty arrays should return 0
function find_average(array) {
    let arr = array.reduce((c,p) => c + p, 0)
    return arr / array.length || 0
  }

//Write function typeValidation that will accept two parameters: variable and type and check if type of variable is matching type. Return true if types match or false if not.
let typeValidation = (variable, type) => (typeof variable === type)

//Write a function that accepts two arguments and returns the remainder after dividing the larger number by the smaller number. Division by zero should return NaN (in C#, throw a new DivideByZeroException instead). Arguments will both be integers.
function remainder(a, b){
    if(a > b && b != 0) {
     return a % b
    }else if(a < b && b != 0) {
      return b % a
    } else if(a < 0 || b < 0) {
      return 0
    } else {
      return NaN
    }
  }

  //Your task is to complete this Class, the Person class has been created. You must fill in the Constructor method to accept a name as string and an age as number, complete the get Info property and getInfo method/Info getter which should return johns age is 34
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
  get info(){
      return `${this.name}s age is ${this.age}`
    }
  }