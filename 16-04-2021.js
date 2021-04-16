//Given a string str, reverse it omitting all non-alphabetic characters.
let reverseLetter = (str) =>
	str
		.replace(/[^a-zA-Z]/g, "")
		.split("")
		.reverse()
		.join("");

//Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.
function adjacentElementsProduct(array) {
	let newArr = [];
	for (let i = 1; i < array.length; i++) {
		newArr.push(array[i - 1] * array[i]);
	}
	newArr.sort((a, b) => a - b);
	return newArr[newArr.length - 1];
}

//Create a function that takes one positive three digit integer and rearranges its digits to get the maximum possible number. Assume that the argument is an integer. Return null if the argument is not valid.
var maxRedigit = function (num) {
	if (num.toString().length != 3) {
		return null;
	}
	let newNum = num
		.toString()
		.split("")
		.map((e) => (e = Number(e)));
	return Number(newNum.sort((a, b) => b - a).join(""));
};
