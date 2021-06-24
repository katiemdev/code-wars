//Your mission is to write a function which removes this noise from the message. Notice that noise can only be %$&/#·@|º\ª charaters, other characteres are not considered noise.
const removeNoise = (str) => str.replace(/[%$&\/#·@|º\\ª]/gi, "");

//// reverse the letters in the sentence
function reverser(sentence) {
	return sentence
		.split(" ")
		.map((word) => (word = word.split("").reverse().join("")))
		.join(" ");
}

//Your computer has forgotten how to speak ASCII! (or Unicode, whatever) It can only communicate in binary, and it has something important to tell you. Write a function which will receive a long string of binary code and convert it to a string. Remember, in Python binary output starts with '0b'.
function binaryToString(binary) {
	return binary
		.split("0b")
		.slice(1)
		.map((bin) => String.fromCharCode(parseInt(bin, 2)))
		.join("");
}

//Complete the function that counts the number of unique consonants in a string (made up of printable ascii characters).
function countConsonants(str) {
	const consonants = str.replace(/[aeiou\d\W]/gi, "").toLowerCase();
	return [...new Set(consonants)].length;
}
