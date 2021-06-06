//Your task is to remove all duplicate words from a string, leaving only single (first) words entries.
let removeDuplicateWords = (s) => [...new Set(s.split(" "))].join(" ");

//Implement String#eight_bit_number?, which should return true if given object is a number representable by 8 bit unsigned integer (0-255), false otherwise.
String.prototype.eightBitNumber = function () {
	return /^([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$/.test(this);
};
