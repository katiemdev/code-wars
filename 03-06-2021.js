//Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.
let greet = (name) =>
	`Hello ${name[0].toUpperCase() + name.slice(1).toLowerCase()}!`;

//Write a function that accepts a sequence of Reindeer names, and returns a sequence with the Reindeer names sorted by their last names.
function sortReindeer(reindeerNames) {
	return reindeerNames
		.map((e) => e.split(" "))
		.sort((a, b) => a[1].localeCompare(b[1]))
		.map((e) => e.join(" "));
}
