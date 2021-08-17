//Write a function smaller(arr) that given an array arr, you have to return the amount of numbers that are smaller than arr[i] to the right.
function smaller(nums) {
	let answer = [];

	while (true) {
		if (nums.length == 0) break;
		answer.push(nums.filter((e) => e < nums[0]).length);
		nums = nums.slice(1);
	}
	return answer;
}

//Write a function that converts any sentence into a V A P O R W A V E sentence. a V A P O R W A V E sentence converts all the letters into uppercase, and adds 2 spaces between each letter (or special character) to create this V A P O R W A V E effect.
function vaporcode(string) {
	return string
		.replace(/\s/g, "")
		.split("")
		.map((e) => (e = e.toUpperCase()))
		.join("  ");
}

//Given an integral number, determine if it's a square number
const isSquare = (n) => Math.sqrt(n) % 1 == 0;
