//Create a function to lowercase all strings in an array. Non-string items should remain unchanged.
function arrayLowerCase(arr) {
	return arr.map((e) => (e = typeof e == "string" ? e.toLowerCase() : e));
}
