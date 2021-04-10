//Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1. Then replace any incidence of the number 7 with the number 1, and call this number 'total2'. Then return the difference between the sum of the digits in total1 and total2.
function calc(x) {
	x = x
		.split("")
		.map((e) => e.charCodeAt())
		.join("");
	let y = x;
	y = y.replace(/7/g, "1").split("");
	x = x.split("");

	let total1 = x.reduce((p, c) => +p + +c, 0);
	let total2 = y.reduce((p, c) => +p + +c, 0);
	return total1 - total2;
}

//Write a function filterLongWords that takes a string sentence and an integer n. Return a list of all words that are longer than n.
let filterLongWords = (sentence, n) =>
	sentence.split(" ").filter((word) => word.length > n);

//In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
function highAndLow(numbers) {
	numbers = numbers.split(" ").sort((a, b) => Number(b) - Number(a));
	return `${numbers[0]} ${numbers[numbers.length - 1]}`;
}
