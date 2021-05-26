//Consider the word "abode". We can see that the letter a is in position 1 and b is in position 2. In the alphabet, a and b are also in positions 1 and 2. Notice also that d and e in abode occupy the positions they would occupy in the alphabet, which are positions 4 and 5. Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,
function solve(arr) {
	let ans = [],
		count = 0;
	arr = arr.map((e) => (e = e.toLowerCase().split("")));
	let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr[i].length; j++) {
			if (arr[i][j] === alphabet[j]) count++;
		}
		ans.push(count);
		count = 0;
	}
	return ans;
}

//Let's call a string cool if it is formed only by Latin letters and no two lowercase and no two uppercase letters are in adjacent positions. Given a string, check if it is cool.
function coolString(s) {
	if ((s.match(/\s|\d/g) || []).length > 0) return false;
	for (let i = 0; i < s.length; i++) {
		if (i === s.length - 1) break;
		if (
			(s[i] === s[i].toLowerCase() && s[i + 1] === s[i + 1].toLowerCase()) ||
			(s[i] === s[i].toUpperCase() && s[i + 1] === s[i + 1].toUpperCase())
		) {
			return false;
		}
	}
	return true;
}

//Write a function box_capacity() that figures out how many crates you can store in a given warehouse. The function should take three arguments: the length, width, and height of your warehouse (in feet) and should return an integer representing the number of boxes you can store in that space.
function boxCapacity(l, w, h) {
	return (
		Math.floor((l * 12) / 16) *
		Math.floor((w * 12) / 16) *
		Math.floor((h * 12) / 16)
	);
}
