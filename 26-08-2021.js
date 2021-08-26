//Complete the function power_of_two/powerOfTwo (or equivalent, depending on your language) that determines if a given non-negative integer is a power of two.
function isPowerOfTwo(n) {
	if (n == 0) return false;

	while (n != 1) {
		n = n / 2;
		if (n % 2 != 0 && n != 1) return false;
	}

	return true;
}
