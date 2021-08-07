//Given a string, return a copy of the string with the vowels' case swapped.
function swapVowelCase(str) {
	return str
		.split("")
		.map(
			(e) =>
				(e = /[aeiou]/.test(e)
					? e.toUpperCase()
					: /[AEIOU]/.test(e)
					? e.toLowerCase()
					: e)
		)
		.join("");
}

//Implement a function named generateRange(min, max, step), which takes three arguments and generates a range of integers from min to max, with the step. The first integer is the minimum value, the second is the maximum of the range and the third is the step. (min < max)
function generateRange(min, max, step) {
	let arr = [];
	for (let i = min; i <= max; i += step) {
		arr.push(i);
	}
	return arr;
}
