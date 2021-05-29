//You receive the name of a city as a string, and you need to return a string that shows how many times each letter shows up in the string by using asterisks (*).
function getStrings(city) {
	let ans = [];
	city = city.toLowerCase().split(" ").join("");
	for (let i = 0; i < city.length; i++) {
		ans.push(`${city[i]}:${"*".repeat(city.split(city[i]).length - 1)}`);
	}
	return [...new Set(ans)].join(",");
}

//Given a string, return true if the first instance of "x" in the string is immediately followed by the string "xx".
let tripleX = (str) =>
	str.slice(str.indexOf("x"), str.indexOf("x") + 2) === "xx";

//isMatching checks if a string can be created by combining and rearranging the letters of two other strings (not case sensitive). Spaces will be ignored but special characters and numbers won't match the string and return false.
function isMatching(string, str1, str2) {
	let arr1 = [...string.toLowerCase()].filter((e) => e.trim() != "").sort();
	let arr2 = [...str1.toLowerCase(), ...str2.toLowerCase()]
		.filter((e) => e.trim() != "")
		.sort();
	if (arr1.length !== arr2.length) return false;
	for (let i = 0; i < arr1.length; i++) {
		if (arr1[i] !== arr2[i]) return false;
	}
	return true;
}

//Petya started to attend programming lessons. On the first lesson his task was to write a simple program. The program was supposed to do the following: in the given string, consisting of uppercase and lowercase Latin letters, it:
// deletes all the vowels,
// inserts a character "." before each consonant,
// replaces all uppercase consonants with corresponding lowercase ones.
//  Vowels are letters "A", "O", "Y", "E", "U", "I", and the rest are consonants. The program's input is exactly one string, it should return the output as a single string, resulting after the program's processing the initial string.
function stringTask(s) {
	return s
		.replace(/[aeiouy]/gi, "")
		.replace(/[^aeiouy]/g, (e) => "." + e)
		.replace(/[^AEIOUY]/g, (e) => e.toLowerCase());
}
