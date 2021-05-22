//Coding in function colorOf. function accept 3 parameter:r g b. It means value of color red green and blue. the value range is 0-255. Use toString(16) Convert numbers r g b to hex string form. at last, combine them to a web color code and return it. the color code should starting with "#". and then use 2 characters per color.
function colorOf(r, g, b) {
	let rgb = (c) =>
		c.toString(16).length == 1 ? "0" + c.toString(16) : c.toString(16);
	return `#${rgb(r)}${rgb(g)}${rgb(b)}`;
}

//Create a package.json configuration and assign it to the configuration constant so it can be tested. To pass the kata you need only the least that a real package file would require.
const configuration = {
	name: "your-pack-name",
	description: "",
	version: "1.0.0",
};

//Write a funciton called decode(). Given an encoded string, return the actual phone number in string form. Don't worry about input validation, parenthesies, or hyphens.
function decodeStr(string) {
	let nums = {
		1: "9",
		2: "8",
		3: "7",
		4: "6",
		5: "0",
		6: "4",
		7: "3",
		8: "2",
		9: "1",
		0: "5",
	};
	return string
		.split("")
		.map((e) => (e = nums[e]))
		.join("");
}
