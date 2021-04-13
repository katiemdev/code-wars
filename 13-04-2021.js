//Basic regex tasks. Write a function that takes in a numeric code of any length. The function should check if the code begins with 1, 2, or 3 and return true if so. Return false otherwise.
let validateCode = (code) => code.toString().match(/^[123]/) > 0;

//Your task is simply to count the total number of lowercase letters in a string.
function lowercaseCount(str) {
	return str.match(/[a-z]/g) < 1 ? 0 : str.match(/[a-z]/g).length;
}

//You and a group of friends are earning some extra money in the school holidays by re-painting the numbers on people's letterboxes for a small fee. Since there are 10 of you in the group each person just concentrates on painting one digit! For example, somebody will paint only the 1's, somebody else will paint only the 2's and so on... But at the end of the day you realise not everybody did the same amount of work. To avoid any fights you need to distribute the money fairly. That's where this Kata comes in.
var paintLetterboxes = function (start, end) {
	let tracker = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	for (let i = start; i <= end; i++) {
		`${i}`.split("").forEach((num) => tracker[num]++);
	}
	return tracker;
};
