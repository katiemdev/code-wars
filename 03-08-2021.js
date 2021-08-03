//Your function should:
// Capitalise the first letter of the first word.
// Add a period (.) to the end of the sentence.
// Join the words into a complete string, with spaces.
// Do no other manipulation on the words.
function sentencify(words) {
	words[0] = words[0][0].toUpperCase() + words[0].slice(1);
	words[words.length - 1] = words[words.length - 1] + ".";
	return words.join(" ");
}
