// Santa needs you to write two functions. Both of the functions accept a sequence of objects. The first one returns a sequence containing only the names of the nice people, and the other returns a sequence containing only the names of the naughty people. Return an empty sequence [] if the result from either of the functions contains no names.The objects in the passed will represent people. Each object contains two properties: name and wasNice.
// name - The name of the person
// wasNice - True if the person was nice this year, false if they were naughty
function getNiceNames(people) {
	people = people.filter((e) => e.wasNice);
	return people === [] ? [] : people.map((e) => (e = e.name));
}

function getNaughtyNames(people) {
	people = people.filter((e) => !e.wasNice);
	return people === [] ? [] : people.map((e) => (e = e.name));
}

//Implement a function which finds the numbers less than 2, and the indices of numbers greater than 1 in the given sequence, and returns them as a pair of sequences.Return a nested array or a tuple depending on the language: The first sequence being only the 1s and 0s from the original sequence. The second sequence being the indexes of the elements greater than 1 in the original sequence.
function binaryCleaner(arr) {
	let arr1 = arr.filter((e) => e === 1 || e === 0);
	let arr2 = [];
	arr.forEach((e, i) => {
		if (e > 1) arr2.push(i);
	});
	return [arr1, arr2];
}

//Your task is to write a function, which takes two arguments and returns a sequence. First argument is a sequence of values, second is multiplier. The function should filter all non-numeric values and multiply the rest by given multiplier.
let multiplyAndFilter = (arr, m) =>
	arr.filter((e) => typeof e === "number").map((e) => (e = e * m));

//Your task is to determine how many files of the copy queue you will be able to save into your Hard Disk Drive. The files must be saved in the order they appear in the queue.
function save(sizes, hd) {
	if (!sizes.length) return 0;
	let total = 0;
	let count = 0;
	for (let i = 0; i < sizes.length; i++) {
		if (sizes.reduce((p, c) => p + c, 0) <= hd) {
			return sizes.length;
		} else if (total + sizes[i] > hd) {
			return count;
		} else {
			total += sizes[i];
			count++;
		}
	}
}

//Write a function that returns the number of occurrences of an element in an array.
Array.prototype.numberOfOccurrences = function (num) {
	let obj = {};
	for (let i = 0; i < this.length; i++) {
		if (!obj[this[i]]) {
			obj[this[i]] = 1;
		} else {
			obj[this[i]]++;
		}
	}
	return !obj[num] ? 0 : obj[num];
};

//Given an array/list [] of integers , Find the product of the k maximal numbers.
let maxProduct = (nums, size) =>
	nums
		.sort((a, b) => b - a)
		.slice(0, size)
		.reduce((p, c) => p * c);

//Modify the spacify function so that it returns the given string with spaces inserted between each character.
let spacify = (str) => str.split("").join(" ");

//Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.
function flattenAndSort(array) {
	let arr = [];
	array.forEach((a) => arr.push(...a));
	return arr.sort((a, b) => a - b);
}

//As part of this Kata, you need to find the length of the sequence in an array, between the first and the second occurrence of a specified number.
var lengthOfSequence = function (arr, n) {
	let first = arr.indexOf(n);
	let second = arr.indexOf(n, first + 1);
	if (arr.indexOf(n, second + 1) !== -1) return 0;
	return arr.slice(first, second + 1).length;
};

//Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined/None/nil/NULL if any of the values aren't numbers.
function cubeOdd(arr) {
	if (!arr.every((e) => typeof e === "number")) return undefined;
	return arr
		.map((e) => e ** 3)
		.filter((e) => e % 2 !== 0)
		.reduce((p, c) => p + c, 0);
}
