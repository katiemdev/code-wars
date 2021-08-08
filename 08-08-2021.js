//Implement count_red_beads(n) (in PHP count_red_beads($n); in Java, Javascript, TypeScript, C, C++ countRedBeads(n)) so that it returns the number of red beads. If there are less than 2 blue beads return 0.
function countRedBeads(n) {
	if (n < 2) return 0;
	return (n - 1) * 2;
}

//In order to stop the Mad Coder evil genius you need to decipher the encrypted message he sent to his minions. The message contains several numbers that, when typed into a supercomputer, will launch a missile into the sky blocking out the sun, and making all the people on Earth grumpy and sad. You figured out that some numbers have a modified single digit in their binary representation. More specifically, in the given number n the kth bit from the right was initially set to 0, but its current value might be different. It's now up to you to write a function that will change the kth bit of n back to 0.
function killKthBit(n, k) {
	n = n.toString(2);
	let bin =
		k == 1 ? n.slice(0, -1) + "0" : n.slice(0, -k) + "0" + n.slice(-k + 1);
	return parseInt(bin, 2);
}
