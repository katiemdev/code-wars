//Complete the function/method so that it returns the url with anything after the anchor (#) removed.
let removeUrlAnchor = (url) => url.split("#")[0];

//our task is to write a function that takes one parameter str that MUST be a string and removes all capital and small letters B, M and W. If data of the wrong data type was sent as a parameter the function must throw an error with the following specific message: new Error("This program only works for text.");
function removeBMW(str) {
	if (typeof str != "string")
		throw new Error("This program only works for text.");
	return str.replace(/[bmw]/gi, "");
}

//In English, all words at the begining of a sentence should begin with a capital letter. You will be given a paragraph that does not use capital letters. Your job is to capitalise the first letter of the first word of each sentence.
function fix(paragraph) {
	if (paragraph === "") return "";
	return paragraph
		.split(". ")
		.map((e) => e.charAt(0).toUpperCase() + e.slice(1))
		.join(". ");
}
