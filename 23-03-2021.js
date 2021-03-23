//Coding in function blackAndWhite. function accept 1 parameter arr(a number array).
// If arr is not an array, function should return: "It's a fake array"
// If arr contains elements 5 and 13, function should return: "It's a black array"
// If arr contains neither 5 nor 13, function should return: "It's a white array"
function blackAndWhite(arr){
    return Array.isArray(arr) == false ? "It's a fake array"
    : arr.includes(5) && arr.includes(13) ? "It's a black array"
    : "It's a white array"
  }

//Return the Nth even number
let nthEven = n => (n * 2) - 2

//Create a function which translates a given DNA string into RNA.
let DNAtoRNA = dna => dna.includes("T") ? dna.replace(/T/g, "U") : dna

//Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:
// I love you
// a little
// a lot
// passionately
// madly
// not at all
// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.
// Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.
function howMuchILoveYou(nbPetals) {
    let answers = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"]
    return nbPetals > answers.length ? answers[(nbPetals % answers.length) - 1] || answers[5] : answers[nbPetals - 1]
  }

//There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants. Your task is to change the letters with diacritics, and print out the string without the use of the Polish letters.
function correctPolishLetters (string) {
    let letters = {
      ą: "a",
      ć: "c",
      ę: "e",
      ł: "l",
      ń: "n",
      ó: "o",
      ś: "s",
      ź: "z",
      ż: "z"
    }
    let arr = string.split("")
    for(let prop in letters)
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] === prop) {
        arr[i] = letters[prop]
      }
    }
    return arr.join("")
  }

  //Get ASCII value of a character.
  let getASCII = c => c.charCodeAt(0)

//You and a friend have decided to play a game to drill your statistical intuitions. The game works like this:
// You have a bunch of red and blue marbles. To start the game you grab a handful of marbles of each color and put them into the bag, keeping track of how many of each color go in. You take turns reaching into the bag, guessing a color, and then pulling one marble out. You get a point if you guessed correctly. The trick is you only have three seconds to make your guess, so you have to think quickly. You've decided to write a function, guessBlue() to help automatically calculate whether you should guess "blue" or "red". The function should take four arguments:
// the number of blue marbles you put in the bag to start
// the number of red marbles you put in the bag to start
// the number of blue marbles pulled out so far (always lower than the starting number of blue marbles)
// the number of red marbles pulled out so far (always lower than the starting number of red marbles)
// guessBlue() should return the probability of drawing a blue marble, expressed as a float. For example, guessBlue(5, 5, 2, 3) should return 0.6.
function guessBlue(blueStart, redStart, bluePulled, redPulled) {
    let blueEnd = blueStart - bluePulled
    let redEnd = redStart - redPulled
    return blueEnd / (blueEnd + redEnd)
  }

//Since we cannot define keywords in Javascript (well, at least I don't know how to do it), your task is to define a function xor(a, b) where a and b are the two expressions to be evaluated. Your xor function should have the behaviour described above, returning true if exactly one of the two expressions evaluate to true, false otherwise.
let xor = (a, b) =>(a == true && b == false) || (a == false && b == true) ? true : false

//Return true if the cuboid could have equal sides, return false otherwise. Return false for invalid numbers too (e.g volume or side is less than or equal to 0).
let cubeChecker = (volume, side) => volume <= 0 || side <= 0 ? false : volume === side ** 3

//Determine if the sex of the offspring will be male or female based on the X or Y chromosome present in the male's sperm.If the sperm contains the X chromosome, return "Congratulations! You're going to have a daughter."; If the sperm contains the Y chromosome, return "Congratulations! You're going to have a son.";
let chromosomeCheck = sperm => `Congratulations! You're going to have a ${sperm == "XY" ? "son" : "daughter"}.`

//Implement a function which accepts 2 arguments: string and separator. The expected algorithm: split the string into words by spaces, split each word into separate characters and join them back with the specified separator, join all the resulting "words" back into a sentence with spaces.
function splitAndMerge(string, separator) {
    let arr = string.split(" ")
    let newArr = arr.map(item => item = item.split("").join(separator))
    return newArr.join(" ")
  }