//In this Kata, you will be given a number, two indexes (index1 and index2) and a digit to look for. Your task will be to check if the digit exists in the number, within the indexes given.
function checkDigit(number, index1, index2, digit) {
	let snippet =
		index1 > index2
			? number.toString().slice(index2, index1 + 1)
			: number.toString().slice(index1, index2 + 1);
	return snippet.includes(digit);
}

//Check if it is a vowel(a, e, i, o, u,) on the n position in a string (the first argument). Don't forget about uppercase.
function checkVowel(string, position) {
	if (!string[position]) return false;
	return /[aeiou]/i.test(string[position]);
}
