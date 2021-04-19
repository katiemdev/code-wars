//You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.
let smallEnough = (a, limit) => a.every((e) => e <= limit);

//Complete the function that takes a list of numbers (nums), as the only argument to the function. Take each number in the list and square it if it is even, or square root the number if it is odd. Take this new list and return the sum of it, rounded to two decimal places.
const sumSquareEvenRootOdd = (ns) => {
	let x = ns.map((e) => (e % 2 == 0 ? e ** 2 : Math.sqrt(e)));
	return +x.reduce((p, c) => p + c, 0).toFixed(2);
};

//Given a string of digits confirm whether the sum of all the individual even digits are greater than the sum of all the indiviudal odd digits. Always a string of numbers will be given. If the sum of even numbers is greater than the odd numbers return: "Even is greater than Odd" If the sum of odd numbers is greater than the sum of even numbers return: "Odd is greater than Even" If the total of both even and odd numbers are identical return: "Even and Odd are the same"
function evenOrOdd(str) {
	str = str.split("").map((e) => Number(e));
	let evenSum = str.filter((n) => n % 2 === 0).reduce((p, c) => p + c, 0);
	let oddSum = str.filter((n) => n % 2 !== 0).reduce((p, c) => p + c, 0);
	return evenSum > oddSum
		? "Even is greater than Odd"
		: oddSum > evenSum
		? "Odd is greater than Even"
		: "Even and Odd are the same";
}

//Write function heron which calculates the area of a triangle with sides a, b, and c. Heron's formula: sqrt (s * (s - a) * (s - b) * (s - c)), where s = (a + b + c) / 2. Output should have 2 digits precision.
function heron(a, b, c) {
	let s = (a + b + c) / 2;
	return +Math.sqrt(s * (s - a) * (s - b) * (s - c)).toFixed(2);
}

//In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m. The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a... Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m. You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression. The string has a length greater or equal to one and contains only letters from ato z.
let printerError = (s) => `${(s.match(/[^a-m]/g) || []).length}/${s.length}`;

//You will be given two inputs: a string of words and a letter. For each string, return the alphabetic character after every instance of letter(case insensitive). If there is a number, punctuation or underscore following the letter, it should not be returned.
function comes_after(str, l) {
	let x = "";
	for (let i = 0; i < str.length; i++) {
		if (
			str[i].match(new RegExp(l, "i")) &&
			str[i + 1] &&
			str[i + 1].match(/[a-z]/i)
		) {
			x += str[i + 1];
		}
	}
	return x;
}

//It has long been rumoured that behind Chuck's beard is not a chin, but another fist! When shaving, Chuck accidentally punched himself in the face. He is the only man that could take that punch without dying, but that doesn't mean it didn't sting! Chuck can't remember a thing - he needs your help!! Hidden within the provided sequence of sequences are numbers that represent the letters of the words for some of Chuck's favourite things! Your job is to translate them, and return the words so that Chuck can get back to the business of punching and kicking things.
function fistBeard(arr) {
	let word = [];
	arr.forEach((a) => word.push(...a));
	return word.map((n) => String.fromCharCode(n)).join("");
}
