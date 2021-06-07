//our task is to make a function that takes the value of word and returns it with an "i" at the beginning of the word. For example we get the word "Phone", so we must return "iPhone". But we have a few rules:
// The word should not begin with the letter "I", for example Inspire.
// The number of vowels should not be greater than or equal to the number of consonants, for example East or Peace. ("y" is considered a consonant)
// The first letter should not be lowercase, for example road.
// If the word does not meet the rules, we return "Invalid word".
function i(word) {
	if (
		word.toLowerCase().startsWith("i") ||
		(word.match(/[aeiou]/gi) || []).length >=
			(word.match(/[^aeiou]/gi) || []).length ||
		word.charAt(0) == word.charAt(0).toLowerCase()
	) {
		return "Invalid word";
	} else {
		return "i" + word;
	}
}
