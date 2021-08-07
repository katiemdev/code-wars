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
