//Define a function that removes duplicates from an array of numbers and returns it as a result.
let distinct = (a) => Array.from(new Set(a));

//You are given a list of character sequences as a comma separated string. Write a function which returns another string containing all the character sequences except the first and the last ones, separated by spaces. If the input string is empty, or the removal of the first and last items would cause the string to be empty, return a null value.
function array(arr) {
	arr = arr.split(",");
	arr.pop();
	arr.shift();
	return arr.length == "" ? null : arr.join(" ");
}

//Create a function called shortcut to remove all the lowercase vowels in a given string.
let shortcut = (str) => str.replace(/[aeiou]/g, "");

//Simple, remove the spaces from the string, then return the resultant string.
let noSpace = (x) => x.replace(/\s/g, "");

//Write function parseF which takes an input and returns a number or null if conversion is not possible. The input can be one of many different types so be aware.
function parseF(s) {
	return parseFloat(s) >= 0 ? parseFloat(s) : null;
}
