//Create a function that takes a string and returns that string with the first half lowercased and the last half uppercased. eg: foobar == fooBAR. If it is an odd number then 'round' it up to find which letters to uppercase.
function sillycase(silly) {
	const middle = Math.ceil(silly.length / 2);
	return silly
		.split("")
		.map((e, i) => (e = i < middle ? e.toLowerCase() : e.toUpperCase()))
		.join("");
}
