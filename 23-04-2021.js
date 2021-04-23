//Complete the function which converts hex number (given as a string) to a decimal number.
let hexToDec = (hexString) => parseInt(hexString, 16);

//Give you two strings: s1 and s2. If they are opposite, return true; otherwise, return false. Note: The result should be a boolean value, instead of a string. The opposite means: All letters of the two strings are the same, but the case is opposite. you can assume that the string only contains letters or it's a empty string. Also take note of the edge case - if both strings are empty then you should return false/False.
function isOpposite(s1, s2) {
	if (s1 === "" || s2 === "") return false;
	let opposite = s1
		.split("")
		.map((e) => (e === e.toUpperCase() ? e.toLowerCase() : e.toUpperCase()))
		.join("");
	return opposite === s2;
}

//Mr. despair wants to jump off Dutch act, So he came to the top of a building. Scientific research shows that a man jumped from the top of the roof, when the floor more than 6, the person will often die in an instant; When the floor is less than or equal to 6, the person will not immediately die, he would scream. (without proof) Input: floor, The height of the building (floor) Output: a string, The voice of despair(When jumping Dutch act)
function sc(floor) {
	if (floor <= 1) return "";
	let str = "Aa~ ".repeat(floor - 1) + "Pa!";
	return floor <= 6 ? str + " Aa!" : str;
}
