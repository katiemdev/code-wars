//Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each. If two words have the same last letter, they returned array should show them in the order they appeared in the given string.
let last = (x) =>
	x
		.split(" ")
		.sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));

//Take a number and check each digit if it is divisible by the digit on its left checked and return an array of booleans. The booleans should always start with false becase there is no digit before the first one.
function divisibleByLast(n) {
	n = n
		.toString()
		.split("")
		.map((e) => (e = +e));
	let arr = [false];
	for (let i = 1; i < n.length; i++) {
		if (n[i] % n[i - 1] === 0) {
			arr.push(true);
		} else {
			arr.push(false);
		}
	}
	return arr;
}

//Given an array/list [] of n integers , find maximum triplet sum in the array Without duplications .
function maxTriSum(numbers) {
	let nums = [...new Set(numbers)].sort((a, b) => b - a);
	return nums[0] + nums[1] + nums[2];
}

//Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.
function sumTwoSmallestNumbers(numbers) {
	let nums = numbers.sort((a, b) => a - b);
	return nums[0] + nums[1];
}

//Implement a function which filters out array values which satisfy the given predicate.
let reject = (array, predicate) => array.filter((e) => predicate(e) === false);

//You are given an array of non-negative integers, your task is to complete the series from 0 to the highest number in the array. If the numbers in the sequence provided are not in order you should order them, but if a value repeats, then you must return a sequence with only one item, and the value of that item must be 0.
function completeSeries(arr) {
    let answer = []
     if([...new Set(arr)].length === arr.length && [...new Set(arr)].every((e,i) => e === arr[i])) {
       let max = Math.max(...arr)
       for(let i = 0; i <= max; i++) {
         answer.push(i)
       }
     } else {
       return [0]
    }
    return answer
