//Given a sequence of integers, return the sum of all the integers that have an even index, multiplied by the integer at the last index. Indices in sequence start from 0. If the sequence is empty, you should return 0.
let evenLast = (nums) =>
	nums.filter((el, i) => i % 2 == 0).reduce((p, c) => p + c, 0) *
		nums[nums.length - 1] || 0;
