//Write a function which takes a input string s and return a string in the following way:
function sortVowels(s) {
	if (typeof s !== "string") return "";
	return s
		.replace(/[^aeiou]/gi, (m) => `${m}|\n`)
		.replace(/[aeiou]/gi, (m) => `|${m}\n`)
		.slice(0, -1);
}
