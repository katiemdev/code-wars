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

//Implement the function likes which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:
function likes(names) {
	// TODO
	if (names.length == 0) {
		return "no one likes this";
	} else if (names.length == 1) {
		return `${names[0]} likes this`;
	} else if (names.length == 2) {
		return `${names[0]} and ${names[1]} like this`;
	} else if (names.length == 3) {
		return `${names[0]}, ${names[1]} and ${names[2]} like this`;
	} else {
		return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
	}
}
