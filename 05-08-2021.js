//Complete the function caffeineBuzz, which takes a non-zero integer as it's one argument.
// If the integer is divisible by 3, return the string "Java".
// If the integer is divisible by 3 and divisible by 4, return the string "Coffee"
// If the integer is one of the above and is even, add "Script" to the end of the string.
// Otherwise, return the string "mocha_missing!"
function caffeineBuzz(n) {
	let answer = "";
	//   if(n % 3 == 0 && n % 4 == 0 && n % 2 == 0) {
	//     answer = "CoffeeScript"
	if (n % 3 == 0 && n % 4 == 0) {
		answer = "Coffee";
	} else if (n % 3 == 0) {
		answer = "Java";
	} else {
		answer = "mocha_missing!";
	}

	if (answer !== "mocha_missing!" && n % 2 == 0) {
		answer = answer + "Script";
	}

	return answer;
}
