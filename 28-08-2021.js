//Complete the function that takes a sequence of numbers as single parameter. Your function must return the sum of the even values of this sequence. Only numbers without decimals like 4 or 4.0 can be even.
function sumEvenNumbers(input) {
	return input.filter((n) => n % 2 == 0).reduce((p, c) => p + c, 0);
}
