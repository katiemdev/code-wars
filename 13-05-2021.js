//Write a function that reverses the bits in an integer. For example, the number 417 is 110100001 in binary. Reversing the binary is 100001011 which is 267.
let reverseBits = (n) =>
	parseInt(n.toString(2).split("").reverse().join(""), 2);

//Your task is to write a function called valid_spacing() or validSpacing() which checks if a string has valid spacing. The function should return either True or False.
let validSpacing = (s) => s.length === s.replace(/\s{2,}/g, " ").trim().length;

//Write a function which maps a function over the lists in a list:
let gridMap = (fn, a) => a.map((arr) => arr.map((n) => fn(n)));

//We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).
let vowelIndices = (word) => {
	return word
		.split("")
		.map((l, i) => (/[aeiouy]/i.test(l) ? (l = i + 1) : l))
		.filter((e) => typeof e == "number");
};

//Create a function that returns the average of an array of numbers ("scores"), rounded to the nearest whole number. You are not allowed to use any loops (including for, for/in, while, and do/while loops).
let average = (scores) =>
	Math.round(scores.reduce((p, c) => p + c, 0) / scores.length);

//Write a function that takes a string and returns an array containing binary numbers equivalent to the ASCII codes of the characters of the string. The binary strings should be eight digits long.
function wordToBin(str) {
	return str.split("").map((l) => (l = "0" + l.charCodeAt().toString(2)));
}

//Create a function that takes an integer argument of seconds and converts the value into a string describing how many hours and minutes comprise that many seconds.
function toTime(seconds) {
	return `${Math.floor(seconds / 3600)} hour(s) and ${Math.floor(
		(seconds % 3600) / 60
	)} minute(s)`;
}
