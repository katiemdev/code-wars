//Two players - "black" and "white" are playing a game. The game consists of several rounds. If a player wins in a round, he is to move again during the next round. If a player loses a round, it's the other player who moves on the next round. Given whose turn it was on the previous round and whether he won, determine whose turn it is on the next round.
function whoseMove(lastPlayer, win) {
    let otherPlayer = lastPlayer == "black" ? "white" : "black"
    return win == true ? lastPlayer : otherPlayer
  }

//Write a method, that will get an integer array as parameter and will process every number from this array. Return a new array with processing every number of the input-array like this: If the number has an integer square root, take this, otherwise square the number.
function squareOrSquareRoot(array) {
    return array.map(item => Math.sqrt(item) % 1 == 0 ? Math.sqrt(item) : item ** 2)
  }

//Provided is a function find which accepts two parameters in the following order: array, element and returns the index of the element if found and "Not found" otherwise. Your task is to shorten the code as much as possible in order to meet the strict character count requirements of the Kata. (no more than 85) You may assume that all array elements are unique.
let find = (array, element) => array.includes(element) ? array.indexOf(element) : "Not found"
