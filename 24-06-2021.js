//Your mission is to write a function which removes this noise from the message. Notice that noise can only be %$&/#·@|º\ª charaters, other characteres are not considered noise.
const removeNoise = (str) => str.replace(/[%$&\/#·@|º\\ª]/gi, "");

//// reverse the letters in the sentence
function reverser(sentence) {
	return sentence
		.split(" ")
		.map((word) => (word = word.split("").reverse().join("")))
		.join(" ");
}
