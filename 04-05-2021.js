//Simple enough this one - you will be given an array. The values in the array will either be numbers or strings, or a mix of both. You will not get an empty array, nor a sparse one. Your job is to return a single array that has first the numbers sorted in ascending order, followed by the strings sorted in alphabetic order. The values must maintain their original type. Note that numbers written as strings are strings and must be sorted with the other strings.
function dbSort(a) {
	let nums = a.filter((e) => typeof e === "number");
	let str = a.filter((e) => typeof e === "string");
	return [...nums.sort((a, b) => a - b), ...str.sort()];
}

//Given an array of digital numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.
function evenNumbers(array, number) {
	let evens = array.filter((e) => e % 2 === 0);
	return evens.slice(evens.length - number);
}

//Return an array containing the numbers from 1 to N, where N is the parametered value. N will never be less than 1 (in C#, N might be less then 1). Replace certain values however if any of the following conditions are met:
// If the value is a multiple of 3: use the value "Fizz" instead
// If the value is a multiple of 5: use the value "Buzz" instead
// If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
function fizzbuzz(n) {
	let arr = [];
	for (let i = 1; i <= n; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			arr.push("FizzBuzz");
		} else if (i % 3 === 0) {
			arr.push("Fizz");
		} else if (i % 5 === 0) {
			arr.push("Buzz");
		} else {
			arr.push(i);
		}
	}
	return arr;
}
