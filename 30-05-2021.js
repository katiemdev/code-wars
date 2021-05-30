//Normally we have firstname, middle and the last name but there may be more than one word in a name like a South Indian one. Similar to those kinda names we need to initialize the names.
function initials(n) {
	let lastName = n
		.split(" ")
		.map((e) => e.charAt(0).toUpperCase() + e.slice(1))
		.slice(-1)
		.join("");
	let initials = n
		.split(" ")
		.map((e) => e.charAt(0).toUpperCase() + ".")
		.slice(0, -1)
		.join("");
	return initials + lastName;
}
