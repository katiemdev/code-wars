//Number is a palindrome if it is equal to the number with digits in reversed order. For example, 5, 44, 171, 4884 are palindromes, and 43, 194, 4773 are not. Write a function which takes a positive integer and returns the number of special steps needed to obtain a palindrome. The special step is: "reverse the digits, and add to the original number". If the resulting number is not a palindrome, repeat the procedure with the sum until the resulting number is a palindrome. If the input number is already a palindrome, the number of steps is 0. All inputs are guaranteed to have a final palindrome which does not overflow MAX_SAFE_INTEGER.
var palindromeChainLength = function (n) {
	const reversed = (num) =>
		parseInt(num.toString().split("").reverse().join(""));
	const add = (num) => num + reversed(num);

	if (n == reversed(n)) return 0;

	let count = 1;
	while (add(n) != reversed(add(n))) {
		n = add(n);
		count++;
	}

	return count;
};

//Kevin is noticing his space run out! Write a function that removes the spaces from the values and returns an array showing the space decreasing. For example, running this function on the array ['i', 'have','no','space'] would produce ['i','ihave','ihaveno','ihavenospace'].
function spacey(array) {
	let answer = [array[0]];

	while (array.length != 1) {
		array.splice(0, 2, `${array[0] + array[1]}`);
		answer.push(array[0]);
	}

	return answer;
}
