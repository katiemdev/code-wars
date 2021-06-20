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
