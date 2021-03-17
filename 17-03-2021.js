// You will be given an array (a) and a value (x). All you need to do is check whether the provided array contains the value, without using a loop.
// Array can contain numbers or strings. X can be either. Return true if the array contains the value, false if not. With strings you will need to account for case.
let check = (a,x) => a.includes(x)

// Bob needs a fast way to calculate the volume of a cuboid with three values: length, width and the height of the cuboid. Write a function to help Bob with this calculation.
class Kata {
    static getVolumeOfCuboid(length, width, height) {
      return length*width*height
    }
  }

//   Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
    let digitize = n => n.toString().split("").reverse().map(item => +item)

//Write a function that rearranges an integer into its largest possible value.
function superSize(num){
    let arr = num.toString().split("").map(item => +item)
    return Number(arr.sort((a,b) => b-a).join(""))
  }

//This function should test if the factor is a factor of base. Return true if it is a factor or false if it is not.
//Factors are numbers you can multiply together to get another number. 2 and 3 are factors of 6 because: 2 * 3 = 6.
let checkForFactor = (base, factor) => base % factor === 0

//The wide mouth frog is particularly interested in the eating habits of other creatures.He just can't stop asking the creatures he encounters what they like to eat. But then he meet the alligator who just LOVES to eat wide-mouthed frogs!
//When he meets the alligator, it then makes a tiny mouth. Your goal in this kata is to create complete the mouth_size method this method take one argument animal which corresponds to the animal encountered by frog. If this one is an alligator (case insensitive) return small otherwise return wide.
let mouthSize = (animal) => animal.toLowerCase() === "alligator" ? "small" : "wide"

//Create a method take that accepts a list/array and a number n, and returns a list/array array of the first n elements from the list/array.
let take => (arr, n) => arr.slice(0, n)

//Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.
let divisibleBy = (numbers, divisor) => numbers.filter(item => item % divisor === 0)

//You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1. As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.
function monkeyCount(n) {
    let arr = []
    for(let i = 1; i <= n; i++) {
      arr.push(i)
    }
    return arr
  }

// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.
function between(a, b) {
    let arr = []
    for(let i = a; i <= b; i++) {
      arr.push(i)
    }
    return arr
  }

//Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.You need to consider the following ratings:
//   Terrible: tip 0%
//   Poor: tip 5%
//   Good: tip 10%
//   Great: tip 15%
//   Excellent: tip 20%
//The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is received, then you need to return:"Rating not recognised"
function calculateTip(amount, rating) {
    rating = rating.toLowerCase()
    switch(rating) {
        case "terrible": 
          return 0;
          break;
        case "poor":
          return Math.ceil(amount*0.05);
          break;
        case "good":
          return Math.ceil(amount*0.1);
          break;
        case "great":
          return Math.ceil(amount*0.15);
          break;
        case "excellent":
          return Math.ceil(amount*0.2);
          break;
        default:
          return "Rating not recognised"
    }
  }

//For every good kata idea there seem to be quite a few bad ones! In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.
function well(x){
    let count = 0;
    for(let i=0; i < x.length; i++) {
      if (x[i] === "good") {
        count++;
      }
    }
    if(count === 0) {
      return "Fail!"
    } else if(count <= 2) {
      return "Publish!"
    } else if(count > 2) {
      return "I smell a series!"
    }
  }

  // Your job is simple, if (x) squared is more than 1000, return 'It's hotter than the sun!!', else, return 'Help yourself to a honeycomb Yorkie for the glovebox.'. X will be either a number or a string. Both are valid.
  let apple = x => +(x**2) > 1000 ? "It's hotter than the sun!!" : "Help yourself to a honeycomb Yorkie for the glovebox."

  // Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :) If Alex gets 10 or more hoops, return the string "Great, now move on to tricks". If he doesn't get 10 hoops, return the string "Keep at it until you get it".
  let hoopCount = n => n >= 10 ? "Great, now move on to tricks" : "Keep at it until you get it" 

// Write a function that always returns 5. Sounds easy right? Just bear in mind that you can't use any of the following characters: 0123456789*+-/
let unusualFive = () => "hello".length


// It's a fight between the two legends: Conor McGregor vs George Saint Pierre in Madison Square Garden. Only one fighter will remain standing, and after the fight in an interview with Joe Rogan the winner will make his legendary statement. It's your job to return the right statement depending on the winner!
// If the winner is George Saint Pierre he will obviously say: "I am not impressed by your performance."
// If the winner is Conor McGregor he will most undoubtedly say: "I'd like to take this chance to apologize.. To absolutely NOBODY!"
var quote = function(fighter) {
  return fighter.toLowerCase() === "conor mcgregor" ? "I'd like to take this chance to apologize.. To absolutely NOBODY!"
    : "I am not impressed by your performance."
};

// Your friend has been out shopping for puppies (what a time to be alive!)... He arrives back with multiple dogs, and you simply do not know how to respond! By repairing the function provided, you will find out exactly how you should respond, depending on the number of dogs he has. The number of dogs will always be a number and there will always be at least 1 dog.
function howManyDalmatians(number) {
  var dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];
   return (number <= 10) ? dogs[0] 
   : (number <= 50) ? dogs[1] 
   : (number === 101) ? dogs[3] 
   : dogs[2]
}

//Since Nessie is a master of disguise, the only way accurately tell is to look for the phrase "tree fiddy". Since you are tired of being grifted by this monster, the time has come to code a solution for finding The Loch Ness Monster. Note: It can also be written as 3.50 or three fifty.
function isLockNessMonster(n) {
  return n.includes("tree fiddy") || n.includes("three fiddy") || n.includes("3.50")
}

// We need a function that can transform a string into a number. What ways of achieving this do you know?
var stringToNumber = str => +str

// Can you find the needle in the haystack? Write a function findNeedle() that takes an array full of junk but containing one "needle" After your function finds the needle it should return a message (as a string) that says: "found the needle at position " plus the index it found the needle.
function findNeedle(haystack) {
  if(haystack.includes("needle")) {
    return `found the needle at position ${haystack.indexOf("needle")}`
  } 
 }

//  This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
let simpleMultiplication = (number) => number % 2 === 0 ? number*8 : number*9

//Create a function with two arguments that will return an array of the first (n) multiples of (x). Assume both the given number and the number of times to count will be positive numbers greater than 0. Return the results as an array.
function countBy(x, n) {
  var z = [];
  let y = x
  for(let i=0; i < n; i++) {
    z.push(x)
    x = x + y
  }
  return z;
}


//A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers. Implement a function that checks if something is a palindrome.
function isPalindrome(line) {
  let reverse;
  if(typeof line === 'number') {
  reverse = Number(line.toString().split("").reverse().join(""))
  } else {
  reverse = line.split("").reverse().join("")
  }
  return line === reverse
}

// Some new animals have arrived at the zoo. The zoo keeper is concerned that perhaps the animals do not have the right tails. To help her, you must correct the broken function to make sure that the second argument (tail), is the same as the last letter of the first argument (body) - otherwise the tail wouldn't fit! If the tail is right return true, else return false. The arguments will always be strings, and normal letters.
function correctTail(body, tail) {
  let sub = body.charAt(body.length -1)
  return sub === tail
 }