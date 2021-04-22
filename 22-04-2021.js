//Coding in function cutIt, function accept 1 parameter:arr. arr is a string array. The first mission: Traversing arr, find the shortest string length. The second mission: Traversing arr again, intercept all strings to the shortest string length(Start from index0). you can use one of slice() substring() or substr() do it. return the result after finished the work.
function cutIt(arr) {
	let short = arr.reduce((a, b) => (a.length < b.length ? a : b));
	return arr.map((e) => e.slice(0, short.length));
}

//Coding in function firstToLast, function accept 2 parameters:str and c. str is a string. c is a char. Please return the gap between the first position of c and the last position of c. If there are a lot of c in the str, should return a positive integer; If there is only one c in str, should return 0; If there is no c in the str, should return -1. Retrieval should not ignored the case.
function firstToLast(str, c) {
	if (str.indexOf(c) === -1) {
		return -1;
	} else if (str.indexOf(c) === str.lastIndexOf(c)) {
		return 0;
	} else {
		return str.lastIndexOf(c) - str.indexOf(c);
	}
}

//Coding in function howManySmaller, function accept 2 parameter:arr and n. arr is a decimal array. n is a decimal. The first mission: let all elements in the array keep two decimal places(No need to convert number n). The second mission: Traversal arr, count the number of the element which smaller than n and return it.
let howManySmaller = (arr, n) =>
	arr.map((n) => parseFloat(n.toFixed(2))).filter((x) => x < n).length;

//Coding in function padIt, function accept 2 parameters: str, it's a string representing the string to pad, we need pad some "*" at leftside or rightside of str n, it's a number, how many times to pad the string.
function padIt(str, n) {
	str = str.split("");
	let num = 0;
	do {
		num % 2 == 0 ? str.unshift("*") : str.push("*");
		num++;
	} while (num < n);
	return str.join("");
}

//Coding in function roundIt. function accept 1 parameter n. It's a number with a decimal point. Please use different methods based on the location of the decimal point, turn the number into an integer. If the decimal point is on the left side of the number (that is, the count of digits on the left of the decimal point is less than that on the right), Using ceil() method. If the decimal point is on the right side of the number (that is, the count of digits on the left of the decimal point is more than that on the right), Using floor() method. If the decimal point is on the middle of the number (that is, the count of digits on the left of the decimal point is equals that on the right), Using round() method.
function roundIt(n) {
	let arr = n.toString().split(".");
	return arr[0].length > arr[1].length
		? Math.floor(n)
		: arr[0].length < arr[1].length
		? Math.ceil(n)
		: Math.round(n);
}

//here are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:
// number of pillars (≥ 1);
// distance between pillars (10 - 30 meters);
// width of the pillar (10 - 50 centimeters).
// Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).
function pillars(p, d, w) {
	return p > 1 ? d * (p - 1) * 100 + (p - 2) * w : 0;
}

//Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number. For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.
const quarterOf = (month) => {
	return month >= 1 && month <= 3
		? 1
		: month >= 4 && month <= 6
		? 2
		: month >= 7 && month <= 9
		? 3
		: 4;
};

//This series of katas will introduce you to basics of doing geometry with computers. Point objects have x and y attributes (X and Y in C#) attributes. Write a function calculating distance between Point a and Point b.Tests round answers to 6 decimal places.
function distanceBetweenPoints(a, b) {
	return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
}

//Your task is to sum the differences between consecutive pairs in the array in descending order.
function sumOfDifferences(arr) {
	arr = arr.sort((a, b) => b - a);
	let arr2 = [];
	if (arr.length <= 1) {
		return 0;
	} else {
		for (let i = 0; i < arr.length; i++) {
			arr2.push(arr[i] - arr[i + 1]);
		}
		return arr2.slice(0, -1).reduce((p, c) => p + c, 0);
	}
}

//Clock shows h hours, m minutes and s seconds after midnight. Your task is to write a function which returns the time since midnight in milliseconds.
function past(h, m, s) {
	let midnight = new Date(2021, 0, 0, 0, 0, 0);
	let time = new Date(2021, 0, 0, h, m, s);
	return time.getTime() - midnight.getTime();
}
