//Your task is to return how many times a string contains a given character. The function takes a string(inputS) as a parameter and a char(charS) which is the character that you will have to find and count. For example, if you get an input string "Hello world" and the character to find is "o", return 2.
const stringCounter = (inputS, charS) => {
	if (/[^a-z0-9\s]/i.test(charS)) {
		charS = "\\" + charS;
	}

	const char = new RegExp(`${charS}`, "g");
	return (inputS.match(char) || []).length;
};

//Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's. All non-vowels including non alpha characters (spaces,commas etc.) should be included
function vowelOne(s) {
	return s
		.split("")
		.map((e) => (e = /[aeiou]/i.test(e) ? "1" : "0"))
		.join("");
}
