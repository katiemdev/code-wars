//Your are given a string. You must replace any occurence of the sequence coverage by covfefe, however, if you don't find the word coverage in the string, you must add covfefe at the end of the string with a leading space.
function covfefe(str) {
	if (!str.includes("coverage")) {
		return str + " covfefe";
	} else {
		return str.replace(/coverage/gi, "covfefe");
	}
}
