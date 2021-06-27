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
