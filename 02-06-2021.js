//Create a function which accepts one arbitrary string as an argument, and return a string of length 26. The objective is to set each of the 26 characters of the output string to either '1' or '0' based on the fact whether the Nth letter of the alphabet is present in the input (independent of its case). So if an 'a' or an 'A' appears anywhere in the input string (any number of times), set the first character of the output string to '1', otherwise to '0'. if 'b' or 'B' appears in the string, set the second character to '1', and so on for the rest of the alphabet.
function change(string) {
	let ans = [];
	let alphabet = "abcdefghijklmnopqrstuvwxyz";
	for (let i = 0; i < alphabet.length; i++) {
		if (new RegExp(alphabet[i], "gi").test(string)) {
			ans[i] = 1;
		} else {
			ans[i] = 0;
		}
	}
	return ans.join("");
}
