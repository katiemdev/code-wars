//Create a function that finds the integral of the expression passed. In order to find the integral all you need to do is add one to the exponent (the second argument), and divide the coefficient (the first argument) by that new number. For example for 3x^2, the integral would be 1x^3: we added 1 to the exponent, and divided the coefficient by that new number).
function integrate(coefficient, exponent) {
    return `${coefficient / (exponent +1)}x^${exponent + 1}`
  }

//Write a function that returns the total surface area and volume of a box as an array: [area, volume]
function getSize(width, height, depth) {
    let area = 2*(height * depth) + 2*(height * width) + 2*(width * depth)
    let volume = height * width * depth
    return [area, volume]
  }

//You are given two interior angles (in degrees) of a triangle. Write a function to return the 3rd.
let otherAngle = (a, b) => 180 - (a + b)

//Wilson primes satisfy the following condition. Let P represent a prime number. Then ((P-1)! + 1) / (P * P) should give a whole number. Your task is to create a function that returns true if the given number is a Wilson prime.
function amIWilson(p) {
    let factorial = 1;
    for(let i = 1; i < p; i++) {
      factorial *= i
    }
    return (factorial + 1) / (p*p) % 1 === 0
  }

//Given a string of arbitrary length with any ascii characters. Write a function to determine whether the string contains the whole word "English". The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct. Upper or lower case letter does not matter -- "eNglisH" is also correct. Return value as boolean values, true for the string to contains "English", false for it does not.
let spEng = sentence => sentence.toLowerCase().includes("english")

//Complete function howManydays, function accept 1 parameters:month, means the month of year, different month has different days (refer to the following table), return a number that how many days in this month(month is always greater than 0, less than or equal to 12).
function howManydays(month){
    var days;
    switch (month){
      case 4:
      case 6:
      case 9:
      case 11:
        days = 30;
        break;
      case 2: 
        days = 28;
        break;
      default:
        days = 31;
    }
    return days;
  }

//Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
function removeExclamationMarks(s) {
    return s.replace(/!/g, "")
  }

//o help decide those things you've decided to write a function, is_divisible() that will tell you whether a wall of a certain length can exactly fit an integer number of pixels of a certain length. Your function should take two arguments: the size of the wall in millimeters and the size of a pixel in millimeters. It should return True if you can fit an exact number of pixels on the wall, otherwise it should return False. For example is_divisible(4050, 27) should return True, but is_divisible(4066, 27) should return False.
let isDivisible = (wallLength, pixelSize) => wallLength % pixelSize === 0

//You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again. Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.
function updateLight(current) {
    return current == "green" ? "yellow" : current == "yellow" ? "red" : "green"
   }

//Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database. At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text.Your harried co-workers are looking to you for a solution to take this garbled text and remove all of the numbers. Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.
function stringClean(s){
    return s.replace(/[0-9]/g, '');
  }

//The function takes in 2 inputs x and y, and should return x to the power of y. Simple, right? But you're NOT allowed to use Math.pow();
let power = (x,y) => x ** y

//Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake. Can you help her?
function greet(name){
    if(name === "Johnny") {
      return "Hello, my love!"
    }
    return "Hello, " + name + "!";
  }

//Write a function that calculates the original product price, without VAT.
function excludingVatPrice(price){
    let newPr = Number(((price / 115)*100).toFixed(2))
    return price == null ? -1 : newPr
  }
