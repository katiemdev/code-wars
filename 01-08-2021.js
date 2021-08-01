//Return an output string that translates an input string s/$s by replacing each character in s/$s with a number representing the number of times that character occurs in s/$s and separating each number with the character(s) sep/$sep.
function freqSeq(str, sep) {
	const freq = {};
	for (let i = 0; i < str.length; i++) {
		if (!freq[str[i]]) {
			freq[str[i]] = 1;
		} else {
			freq[str[i]]++;
		}
	}

	let arr = [];
	for (let i = 0; i < str.length; i++) {
		arr.push(freq[str[i]]);
	}

	return arr.join(sep);
}
