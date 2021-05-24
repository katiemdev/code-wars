//Given a string as input, move all of its vowels to the end of the string, in the same order as they were before.
function moveVowel(input) {
	let vowels = input.split("").filter((e) => e.match(/[aeiou]/));
	return input
		.replace(/[aeiou]/g, "")
		.split("")
		.concat(...vowels)
		.join("");
}

//Complete the function that accepts a valid string and returns an integer. Wait, that would be too easy! Every character of the string should be converted to the hex value of its ascii code, then the result should be the sum of the numbers in the hex strings (ignore letters).
function hexHash(code) {
	let arr = [];
	for (let i = 0; i < code.length; i++) {
		arr.push(Number(code.charCodeAt(i)).toString(16));
	}
	return arr
		.join("")
		.split("")
		.filter((e) => e.match(/[0-9]/))
		.map((e) => (e = +e))
		.reduce((p, c) => p + c, 0);
}

//We will call a natural number a "doubleton number" if it contains exactly two distinct digits. For example, 23, 35, 100, 12121 are doubleton numbers, and 123 and 9980 are not. For a given natural number n (from 1 to 1 000 000), you need to find the next doubleton number. If n itself is a doubleton, return the next bigger than n.
function doubleton(num) {
	let doubleNum = (n) => {
		let obj = {};
		n = n.toString();
		for (let i = 0; i < n.length; i++) {
			if (!obj[n[i]]) obj[n[i]] = 1;
			obj[n[i]]++;
		}
		return Object.values(obj).length === 2;
	};
	num++;
	while (!doubleNum(num)) {
		num++;
	}
	return num;
}
