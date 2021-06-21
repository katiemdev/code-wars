//Write a function, bucketOf(str), that takes a string and determines what will be dumped on your head. If you haven't said anything you shouldn't have, the bucket should be filled with "air". The words should be tested regardless of case.
function bucketOf(str) {
	if (/water|wet|wash/gi.test(str) && /i don't know|slime/gi.test(str))
		return "sludge";
	if (/water|wet|wash/gi.test(str)) return "water";
	if (/i don't know|slime/gi.test(str)) return "slime";
	return "air";
}

//One suggestion to build a satisfactory password is to start with a memorable phrase or sentence and make a password by extracting the first letter of each word. Even better is to replace some of those letters with numbers (e.g., the letter O can be replaced with the number 0):
// instead of including i or I put the number 1 in the password;
// instead of including o or O put the number 0 in the password;
// instead of including s or S put the number 5 in the password.
function makePassword(phrase) {
	let password = [];
	phrase = phrase.split(" ");
	for (let i = 0; i < phrase.length; i++) {
		password.push(phrase[i].slice(0, 1));
	}
	return password
		.join("")
		.replace(/i/gi, "1")
		.replace(/o/gi, "0")
		.replace(/s/gi, "5");
}
