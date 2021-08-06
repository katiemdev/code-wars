//Remove all exclamation marks from the end of words. Words are separated by spaces in the sentence.
function remove(s) {
	s = s.split(" ");
	return s
		.map((e) => (e = e.endsWith("!") ? e.replace(/\!+$/, "") : e))
		.join(" ");
}
