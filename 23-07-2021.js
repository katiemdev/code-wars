//Given a string, you need to write a method that order every letter in this string in ascending order.Also, you should validate that the given string is not empty or null. If so, the method should return: "Invalid String!"
function orderWord(s) {
	return s == null || !s.length
		? "Invalid String!"
		: s.split("").sort().join("");
}
