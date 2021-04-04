//Coding in function ```grabDoll```. function accept 1 parameter:```dolls```. it's a string array, a list of some dolls.You need traverse ```dolls``` by using ```for``` loop. If element is  "Hello Kitty" or "Barbie doll", you should push it to a ```bag```(bag is an array, I've defined in the function); if it's other strings, we should use ```continue``` skip it. When the ```bag``` has three element, ```bag``` is full. You should use ```break``` jump out the loop; If ```bag``` is not full, you should traverse ```dolls``` until the last element.  Return the ```bag``` after for loop finished.
function grabDoll(dolls) {
	var bag = [];
	for (let i = 0; i < dolls.length; i++) {
		if (bag.length === 3) break;
		if (dolls[i] === "Hello Kitty" || dolls[i] === "Barbie doll") {
			bag.push(dolls[i]);
		} else {
			continue;
		}
	}
	return bag;
}

//Coding in function fiveLine, function accept 1 parameter:s. s is a string. Please return a string of 5 lines(newline symbol is \n). The first line has one s; Second line have two s; and so on..Fifth line have five s; Note1: The two sides of the parameter s may contain some whitespace, please clear them before using s. Note2: Using a string template can make your job easier.
function fiveLine(s) {
	s = s.trim();
	return `${s}\n${s + s}\n${s + s + s}\n${s + s + s + s}\n${s + s + s + s + s}`;
}

//Can you realize a function that returns word count from a given string? You have to ensure that spaces in string is a whitespace for real.What kind of tests we got for your code:
// Function have to count words, but not spaces, so be sure that it does right.
// Empty string has no words.
// String with spaces around should be trimmed.
// Non-whitespace (ex. breakspace, unicode chars) should be assumed as delimiter
// Be sure that words with chars like -, ', ` are counted right.
function countWords(str) {
	str = str
		.trim()
		.split(/[\s,]+/)
		.filter((words) => words.length > 0);
	return str.length;
}
