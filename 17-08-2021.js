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
