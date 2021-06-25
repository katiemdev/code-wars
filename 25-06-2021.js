//Your job is to create a simple password validation function, as seen on many websites. The rules for a valid password are as follows:
// There needs to be at least 1 uppercase letter.
// There needs to be at least 1 lowercase letter.
// There needs to be at least 1 number.
// The password needs to be at least 8 characters long.
function password(str) {
	return (
		/[A-Z]/g.test(str) &&
		/[a-z]/g.test(str) &&
		/\d+/g.test(str) &&
		str.length >= 8
	);
}

//Create a function that takes an input String and returns a String, where all the uppercase words of the input String are in front and all the lowercase words at the end. The order of the uppercase and lowercase words should be the order in which they occur. If a word starts with a number or special character, skip the word and leave it out of the result.
function capitalsFirst(str) {
	str = str.split(" ");
	const upper = [];
	const lower = [];

	for (let i in str) {
		if (str[i].match(/^[^a-z]/i)) {
			continue;
		} else if (str[i][0] === str[i][0].toUpperCase()) {
			upper.push(str[i]);
		} else {
			lower.push(str[i]);
		}
	}

	return [...upper, ...lower].join(" ");
}
