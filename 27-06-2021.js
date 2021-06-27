//In this kata you will be given a random string of letters and tasked with returning them as a string of comma-separated sequences sorted alphabetically, with each sequence starting with an uppercase character followed by n-1 lowercase characters, where n is the letter's alphabet position 1-26.
function alphaSeq(str) {
	const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
	return str
		.toLowerCase()
		.split("")
		.sort()
		.map((e) => (e = e.toUpperCase() + e.repeat(alphabet.indexOf(e))))
		.join(",");
}

//Check that a number is a valid number that has been given to 2 decimal places. The number passed to the function will be given as a string. If the number satisfies the criteria below, the function should return true, else it should return false.
const validNumber = (num) => /^[+-]?\d*\.\d{2}$/.test(num);

//Some people just have a first name; some people have first and last names and some people have first, middle and last names. You task is to initialize the middle names (if there is any).
function initializeNames(name) {
	name = name.split(" ");
	let newName = [];

	if (name.length > 2) {
		newName = name.map(
			(e, i) =>
				(e = i != 0 && i != name.length - 1 ? e[0].toUpperCase() + "." : e)
		);
		return newName.join(" ");
	} else {
		return name.join(" ");
	}
}
