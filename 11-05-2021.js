//Given an array/list [] of integers , Construct a product array Of same size Such That prod[i] is equal to The Product of all the elements of Arr[] except Arr[i].
function productArray(nums) {
	let arr = [];
	for (let i = 0; i < nums.length; i++) {
		arr.push(nums.reduce((p, c) => p * c) / nums[i]);
	}
	return arr;
}

//Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering. Write a function which takes a list of strings and returns each line prepended by the correct number. The numbering starts at 1. The format is n: string. Notice the colon and space in between.
var number = function (array) {
	let answer = [];
	for (let i = 0; i < array.length; i++) {
		answer.push(`${i + 1}: ${array[i]}`);
	}
	return answer;
};

//Complete the function that takes an array of words. You must concatenate the nth letter from each word to construct a new word which should be returned as a string, where n is the position of the word in the list.
let nthChar = (words) => words.map((e, i) => e.charAt(i)).join("");

//You will be given an array (a) and a limit value (limit). You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.
let smallEnough = (a, limit) => a.every((e) => e <= limit);

//You have two arrays in this kata, every array contain only unique elements. Your task is to calculate number of elements in first array which also are in second array.
function matchArrays(v, r) {
	let count = 0;
	for (let i = 0; i < r.length; i++) {
		if (v.includes(r[i])) count++;
	}
	return count;
}
