//Given a sequence of numbers, find the largest pair sum in the sequence.
function largestPairSum(nums) {
	nums = nums.sort((a, b) => b - a);
	return nums[0] + nums[1];
}

//Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.
let addBinary = (a, b) => (a + b).toString(2);

//Given 2 strings, a and b, return a string of the form: shorter+reverse(longer)+shorter. In other words, the shortest string has to be put as prefix and as suffix of the reverse of the longest. Strings a and b may be empty, but not null (In C# strings may also be null. Treat them as if they are empty.). If a and b have the same length treat a as the longer producing b+reverse(a)+b
function shorter_reverse_longer(a, b) {
	let longest = a.length >= b.length ? a : b;
	let shortest = b.length <= a.length ? b : a;
	return shortest + longest.split("").reverse().join("") + shortest;
}

//You might know some pretty large perfect squares. But what about the NEXT one? Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer. If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.
function findNextSquare(sq) {
	if (Math.sqrt(sq) !== Math.round(Math.sqrt(sq))) return -1;
	sq++;
	while (Math.sqrt(sq) !== Math.round(Math.sqrt(sq))) {
		sq++;
	}
	return sq;
}
