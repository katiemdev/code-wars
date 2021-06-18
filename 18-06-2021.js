//Complete the code which should return true if the given object is a single ASCII letter (lower or upper case), false otherwise.
String.prototype.isLetter = function () {
	return /^[a-z]$/i.test(this);
};

//You need to write a function, that returns the first non-repeated character in the given string. For example for string "test" function should return 'e'. For string "teeter" function should return 'r'. If a string contains all unique characters, then return just the first character of the string. Example: for input "trend" function should return 't' You can assume, that the input string has always non-zero length. If there is no repeating character, return null in JS or Java, and None in Python.
function firstNonRepeated(s) {
	for (let letter in s) {
		let regex = new RegExp(s[letter], "gi");
		if ((s.match(regex) || []).length === 1) return s[letter];
	}
	return null;
}
