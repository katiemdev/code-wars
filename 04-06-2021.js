//You are given a function that should insert an asterisk (*) between every pair of even digits in the given input, and return it as a string. If the input is a sequence, concat the elements first as a string.
function asteriscIt(n) {
	n = Array.isArray(n) ? n.join("").split("") : n.toString().split("");
	for (let i = 0; i < n.length; i++) {
		if (+n[i] % 2 == 0 && +n[i + 1] % 2 == 0) {
			n.splice(i + 1, 0, "*");
			i++;
		}
	}
	return n.join("");
}

//Bob is a lazy man. He needs you to create a method that can determine how many letters and digits are in a given string.
let countLettersAndDigits = (input) => (input.match(/[a-z]|\d/gi) || []).length;
