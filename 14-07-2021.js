// I want what I give you back in reverse order, with only the last letter of each item capitalized. If the item is a single letter word and not capitilized when I give it to you, do not capitalize it.
function flipper(stringArr) {
	return stringArr
		.reverse()
		.map(
			(e) =>
				(e =
					e.length == 1
						? e
						: e.slice(0, -1).toLowerCase() + e.slice(-1).toUpperCase())
		)
		.join(" ");
}
