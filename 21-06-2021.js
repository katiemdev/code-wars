//Write a function, bucketOf(str), that takes a string and determines what will be dumped on your head. If you haven't said anything you shouldn't have, the bucket should be filled with "air". The words should be tested regardless of case.
function bucketOf(str) {
	if (/water|wet|wash/gi.test(str) && /i don't know|slime/gi.test(str))
		return "sludge";
	if (/water|wet|wash/gi.test(str)) return "water";
	if (/i don't know|slime/gi.test(str)) return "slime";
	return "air";
}
