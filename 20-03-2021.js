//You will be provided a string that lists many boat related items. If any of these items are "Fire" you must spring into action. Change any instance of "Fire" into "~~". Then return the string.
function fireFight(s){
    if(s.includes("Fire")) {
      return s.replace(/Fire/g, "~~")
    } else {
      return s
    }
  }

//Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
var countSheep = function (num){
  let i = 1;
  let sheep = ""
  for(let i=1; i <= num; i++) {
    sheep +=`${i} sheep...`
  }
  return sheep
}

//Suzuki is a monk who climbs a large staircase to the monastery as part of a ritual. Some days he climbs more stairs than others depending on the number of students he must train in the morning. He is curious how many stairs might be climbed over the next 20 years and has spent a year marking down his daily progress. The sum of all the stairs logged in a year will be used for estimating the number he might climb in 20. 20_year_estimate = one_year_total * 20
//You will receive the following data structure representing the stairs Suzuki logged in a year. You will have all data for the entire year so regardless of how it is logged the problem should be simple to solve.
function stairsIn20(s){ 
  let arr = []
  s.forEach(item => item.forEach(num => arr.push(num)))
  return arr.reduce((c,p) => c + p, 0) * 20
}

//I have a cat and a dog. I got them at the same time as kitten/puppy. That was humanYears years ago. Return their respective ages now as [humanYears,catYears,dogYears].
var humanYearsCatYearsDogYears = function(humanYears) {
  let catYears;
  let dogYears;
  if(humanYears === 1) {
    catYears = 15
    dogYears = 15
  } else if(humanYears === 2) {
    catYears = 24
    dogYears = 24
  } else if (humanYears > 2) {
    catYears = 24 + ((humanYears -2 )* 4)
    dogYears = 24 + ((humanYears -2 )* 5) 
  }
  return [humanYears, catYears, dogYears]
}

//Add the value "codewars" to the array websites/Websites 1,000 times.
var websites = []
let i = 0;
while (i < 1000) {
  websites.push("codewars")
  i++
}

//A western man is trying to find gold in a river. To do that, he passes a bucket through the river's soil and then checks if it contains any gold. However, he could be more productive if he wrote an algorithm to do the job for him. So, you need to check if there is gold in the bucket, and if so, return True/true. If not, return False/false.
let checkTheBucket = bucket => bucket.includes("gold")

//You get any card as an argument. Your task is to return a suit of this card.
function defineSuit(card) {
  return card.charAt(card.length -1) === "♣" ? "clubs"
    : card.charAt(card.length -1) === "♠" ? "spades"
    : card.charAt(card.length -1) === "♦" ? "diamonds"
    : "hearts"
}

//For this problem you must create a program that says who ate the last cookie. If the input is a string then "Zach" ate the cookie. If the input is a float or an int then "Monica" ate the cookie. If the input is anything else "the dog" ate the cookie. The way to return the statement is: "Who ate the last cookie? It was (name)!"
function cookie(x){
  let str = "Who ate the last cookie? It was "
  return (typeof x === "string") ? str+"Zach!" : (typeof x === "number") ? str+"Monica!" : str+"the dog!"
}

//Return the type of the sum of the two arguments
function typeOfSum(a, b) {
  return typeof a === "string" || typeof b === "string" ? "string" : "number"
}

//Your task is to complete the Cat class which Extends Animal and replace the speak method to return the cats name + meows. e.g. 'Mr Whiskers meows.' The name attribute is passed with this.name (JS), @name (Ruby) or self.name (Python).
class Cat extends Animal {
  speak() {
    return `${this.name} meows.`
  }
}

//You forgot to count the number of toast you put into there, you don't know if you put exactly six pieces of toast into the toasters. Define a function that counts how many more (or less) pieces of toast you need in the toasters. Even though you need more or less, the number will still be positive, not negative.
let sixToast = num => num <= 6 ? 6 - num : num - 6

//Create a function that takes a number as an argument and returns a grade based on that number.
// Score	Grade
// Anything greater than 1 or less than 0.6	"F"
// 0.9 or greater	"A"
// 0.8 or greater	"B"
// 0.7 or greater	"C"
// 0.6 or greater	"D"
function grader(score) {
  return score > 1 || score < 0.6 ? "F"
  : score >= 0.9 ? "A"
  : score >= 0.8 ? "B"
  : score >= 0.7 ? "C"
  : "D"
}

//Our counter prototype is broken. Can you spot, what's wrong here?
class Counter {
  constructor(value) {
  this.value = 0;
}
  increase() {
  this.value++;
};

  getValue() {
  return this.value;
};

  reset() {
  this.value = 0;
  }
};

//Create a method sayHello/say_hello/SayHello that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.
function sayHello( name, city, state ) {
  return `Hello, ${name.toString().replace(/,/g, " ")}! Welcome to ${city}, ${state}!`
}

//Let's play Rock Paper Scissors! You have to return which player won! In case of a draw return Draw!.
const rps = (p1, p2) => {
  if((p1 === "rock" && p2 === "scissors") || (p1 === "paper" && p2 === "rock") || (p1 === "scissors" && p2 === "paper")) {
    return "Player 1 won!"
  }else if((p2 === "rock" && p1 === "scissors") || (p2 === "paper" && p1 === "rock") || (p2 === "scissors" && p1 === "paper")) {
  return "Player 2 won!"
  }else {
    return "Draw!"
  }
};

//Write a function that returns a string in which firstname is swapped with last name.
let nameShuffler = str => str.split(" ").reverse().join(" ")


//Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers.
function multiply(number){
  let otherNum = number.toString().includes("-") ? number.toString().length -1 : number.toString().length
  return number * (5 ** otherNum)
}

//Create a function that takes a string and an integer (n). The function should return a string that repeats the input string n number of times. If anything other than a string is passed in you should return "Not a string"
function repeatIt(str, n) {
  if(typeof str !== "string") {
    return "Not a string"
  }else{
   let i = 1;
   let newStr = ""
   while(i <= n) {
    newStr +=str
    i++
  }
  return newStr
  }
}

//Add an item to the list: AddExtra method adds a new item to the list and returns the list. The new item can be any object, and it does not matter. (lets say you add an integer value, like 13) In our test case we check to assure that the returned list has one more item than the input list. However the method needs some modification to pass this test. P.S. You have to create a new list and add a new item to that. (This Kata is originally designed for C# language and it shows that adding a new item to the input list is not going to work, even though the parameter is passed by value, but the value is poining to the reference of list and any change on parameter will be seen by caller)
function addExtra( listOfNumbers ){
  let newArr = [...listOfNumbers]
  newArr.push(listOfNumbers[listOfNumbers.length] + 1)
  return newArr
}

//Write a JavaScript function to get the first element of an array. Passing a parameter n (default=1) will return the first n elements of the array. If n == 0 return an empty array ([]);
function first(arr, n = 1) {
  return arr.slice(0, n)
}

//ES6 has introduced another way of joining strings. Your task is to find out what this is and write a function that will add two strings together, there must be a space between the two strings.
let joinStrings = (string1, string2) => `${string1} ${string2}`

//In this Kata you should fix/create a program that returns the following values:
// false if either a or b (or both) are not numbers
// a % b plus b % a if both arguments are numbers
function myFirstKata(a, b) {
  if (typeof(a) !== "number" || typeof(b) !== "number") {
    return false;
  } else {
    return (a % b) + (b % a)
  }
}

//It's a well known fact that anything Chuck Norris wants, he gets. As a result Chuck very rarely has to use the word false. It is a less well known fact that if something is true, and Chuck doesn't want it to be, Chuck can scare the truth with his massive biceps, and it automatically becomes false. Your task is to be more like Chuck (ha! good luck!). You must return false without ever actually using the word false...
function ifChuckSaysSo(){
  return 1 + 1 === 100049384093849394
}

//We need a simple function that determines if a plural is needed or not. It should take a number, and return true if a plural should be used with that number or false if not. This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun.
let plural = n => n < 1 ? true : n == 1 ? false : true
