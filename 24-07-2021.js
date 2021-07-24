//Given a string of words and numbers. Extract the expression including:
// the operator: either addition or subtraction
// the two numbers that we are operating on
// Return the result of the calculation.
function calculate(string) {
	const nums = string.match(/\d+/g).map((e) => (e = Number(e)));
	let op = string.match(/loses|gains/gi);

	return op[0] == "loses" ? nums[0] - nums[1] : nums[0] + nums[1];
}
