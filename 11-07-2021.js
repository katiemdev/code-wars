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

//In this kata you must take an input string, reverse the order of the words, and reverse the order of the letters within the words. But, as a bonus, every test input will end with a punctuation mark (! ? .) and the output should be returned with the mark at the end.
function esrever(str) {
	if (str == "") return "";
	let i = str[str.length - 1];
	return str.slice(0, -1).split("").reverse().join("") + i;
}

//What is the rank of a playing card? The function takes a string like '2c' or 'Kh' and returns a value based on rank of the card. The first character corresponds to the rank of the card and the second character corresponds to the suit of the card. Cards 2-9 should return the corresponding number. T returns 10, J => 11, Q => 12, K => 13 and A => 14. Otherwise the rank should be returned as 0.
function rank(card) {
	const letters = {
		T: 10,
		J: 11,
		Q: 12,
		K: 13,
		A: 14,
	};

	if (letters[card[0]]) return letters[card[0]];
	return +card[0] >= 2 ? +card[0] : 0;
}
