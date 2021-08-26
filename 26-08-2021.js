//Complete the function power_of_two/powerOfTwo (or equivalent, depending on your language) that determines if a given non-negative integer is a power of two.
function isPowerOfTwo(n) {
	if (n == 0) return false;

	while (n != 1) {
		n = n / 2;
		if (n % 2 != 0 && n != 1) return false;
	}

	return true;
}

//Print all numbers up to 3rd parameter which are multiple of both 1st and 2nd parameter.
// Javascript: return multiples into an array
function multiples(s1, s2, s3) {
	const arr = [];

	for (let i = s2; i < s3; i++) {
		if (i % s1 == 0 && i % s2 == 0) {
			arr.push(i);
		}
	}

	return arr;
}

//In this Kata, you will be given an array of unique elements, and your task is to rearrange the values so that the first max value is followed by the first minimum, followed by second max value then second min value, etc.
function solve(arr) {
	const answer = [];

	while (arr.length) {
		if (arr.length == 1) {
			answer.push(arr[0]);
			break;
		}

		let max = Math.max(...arr);
		let min = Math.min(...arr);

		answer.push(max, min);

		arr.splice(arr.indexOf(max), 1);
		arr.splice(arr.indexOf(min), 1);
	}

	return answer;
}
