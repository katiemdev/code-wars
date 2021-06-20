//Your are given a string. You must replace any occurence of the sequence coverage by covfefe, however, if you don't find the word coverage in the string, you must add covfefe at the end of the string with a leading space.
function covfefe(str) {
	if (!str.includes("coverage")) {
		return str + " covfefe";
	} else {
		return str.replace(/coverage/gi, "covfefe");
	}
}

//Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
function reverseWords(str) {
	return str
		.split(" ")
		.map((w) => (w = w.split("").reverse().join("")))
		.join(" ");
}

//Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.
String.prototype.toJadenCase = function () {
	return this.split(" ")
		.map((w) => (w = w[0].toUpperCase() + w.slice(1).toLowerCase()))
		.join(" ");
};

//When provided with a String, capitalize all vowels
const swap = (st) => st.replace(/[aeiou]/g, (v) => v.toUpperCase());

//Create a function wordSearch(word,text) that searches to see whether a word word is present in the given text variable. Note it has to be a full word which means it is surround by a word boundary (spaces, end/start of string, various punctuation, ... ).
function wordSearch(word, text) {
	let regex = new RegExp(`\\b${word}\\b`, "gi");
	return regex.test(text);
}
