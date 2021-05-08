//You have to write a function which returns unique numbers array. You don't need to validate input arg arr. Retain the original order of the input.
let uniqueNumbers = (arr) => Array.from(new Set(arr));

//A trick I learned in elementary school to determine whether or not a number was divisible by three is to add all of the integers in the number together and to divide the resulting sum by three. If there is no remainder from dividing the sum by three, then the original number is divisible by three as well. Given a series of digits as a string, determine if the number represented by the string is divisible by three. You can expect all test case arguments to be strings representing values greater than 0.
function divisibleByThree(str) {
	let sum = str
		.split("")
		.map((e) => (e = +e))
		.reduce((p, c) => p + c);
	return Number.isInteger(sum / 3);
}

//Fellow code warrior, we need your help! We seem to have lost one of our sequence elements, and we need your help to retrieve it! Our sequence given was supposed to contain all of the integers from 0 to 9 (in no particular order), but one of them seems to be missing. Write a function that accepts a sequence of unique integers between 0 and 9 (inclusive), and returns the missing element.
function getMissingElement(arr) {
	let missing;
	for (let i = 0; i < 10; i++) {
		if (!arr.includes(i)) {
			missing = i;
		}
	}
	return missing;
}

//Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index. Assume the first parameter will always be an array filled with at least 1 number and no duplicates. Assume the second parameter will be a string holding one of two values: 'value' and 'index'.
let min = (arr, toReturn) =>
	toReturn == "value" ? Math.min(...arr) : arr.indexOf(Math.min(...arr));

//Program a function sumAverage(arr) where arr is an array containing arrays full of numbers. First, determine the average of each array. Then, return the sum of all the averages.
const sumAverage = (arr) =>
	Math.floor(
		arr
			.map((a) => a.reduce((p, c) => p + c, 0) / a.length)
			.reduce((p, c) => p + c, 0)
	);

//Write function replaceAll (Python: replace_all) that will replace all occurrences of an item with another.
function replaceAll(seq, find, replace) {
	if (seq.length === 0) {
		return [];
	} else if (typeof seq !== "string") {
		return seq.map((e) => (e === find ? (e = replace) : (e = e)));
	} else if (typeof seq === "string") {
		return seq
			.split("")
			.map((e) => (e === find ? (e = replace) : (e = e)))
			.join("");
	}
}

//Given an array/list [] of integers , Find the Nth smallest element in this array of integers
let nthSmallest = (arr, pos) => arr.sort((a, b) => a - b)[pos - 1];

//The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age, oldest age]. The order of the numbers passed in could be any order. The array will always include at least 2 items. If there are two or more oldest age, then return both of them in array format.
function twoOldestAges(ages) {
	ages = ages.sort((a, b) => b - a);
	return [ages[1], ages[0]];
}
