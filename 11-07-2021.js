//It involves implementing a program that sums the digits of a non-negative integer. For example, the sum of 3433 digits is 13. Digits can be a number or a string, and you should control it is no undefined and return an empty string. To give you a little more excitement, the program will not only write the result of the sum, but also write all the sums used: 3 + 4 + 3 + 3 = 13.
function sum(digits) {
	if (digits == undefined) return "";
	digits = digits.toString().split("");
	const sum = digits.reduce((p, c) => p + +c, 0);
	return `${digits.join(" + ").toString()} = ${sum}`;
}

//Write a function, nicknameGenerator that takes a string name as an argument and returns the first 3 or 4 letters as a nickname. If the 3rd letter is a consonant, return the first 3 letters. If the 3rd letter is a vowel, return the first 4 letters. If the string is less than 4 characters, return "Error: Name too short".
function nicknameGenerator(name) {
	if (name.length < 4) return "Error: Name too short";
	return !name[2].match(/[aeiou]/i) ? name.slice(0, 3) : name.slice(0, 4);
}

//Write a function "coffee" that accepts a string as a parameter and returns that string with every instance of coffee in all caps.
function coffee(str) {
	return str.replace(/coffee/gi, "COFFEE");
}
