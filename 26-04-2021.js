//Write a function that returns a sequence (index begins with 1) of all the even characters from a string. If the string is smaller than two characters or longer than 100 characters, the function should return "invalid string".
let evenChars = (string) =>
	string.length < 2 || string.length > 100
		? "invalid string"
		: string.split("").filter((e, i) => i % 2 != 0);

//The function weRateDogs(str, rating) takes a string and an integer as the inputs. Within the string is an incorrect rating x/y. You will need to change the incorrect rating x/y to the correct rating rating/10. The given string may contain numbers and letters, but no special characters other than /.
function weRateDogs(str, rating) {
	let rate = str
		.match(/\d+\/\d+/)
		.join("")
		.split("/");
	if (rate[0] < 11) {
		console.log(rate);
		return str.replace(/\d+\/\d+/, `${rating}/10`);
	} else {
		return str;
	}
}

//Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
let solution = (str, ending) => str.endsWith(ending);
