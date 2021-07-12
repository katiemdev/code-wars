//Create a method that accepts an array of names, and returns an array of each name with its first letter capitalized.
function capMe(names) {
	return names.map((e) => (e = e[0].toUpperCase() + e.slice(1).toLowerCase()));
}
