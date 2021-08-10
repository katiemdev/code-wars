//If　a = 1, b = 2, c = 3 ... z = 26
// Then l + o + v + e = 54
// and f + r + i + e + n + d + s + h + i + p = 108
// So friendship is twice stronger than love :-)
// The input will always be in lowercase and never be empty.
function wordsToMarks(string) {
	const alphabet = ".abcdefghijklmnopqrstuvwxyz";

	let count = 0;
	for (let i = 0; i < string.length; i++) {
		count += alphabet.indexOf(string[i]);
	}

	return count;
}

//You are given an n by n ( square ) grid of characters, for example:
// [['m', 'y', 'e'],
// ['x', 'a', 'm'],
// ['p', 'l', 'e']]
// You are also given a list of integers as input, for example:
// [1, 3, 5, 8]
// You have to find the characters in these indexes of the grid if you think of the indexes as:
// [[1, 2, 3],
// [4, 5, 6],
// [7, 8, 9]]
// Remember that the indexes start from one and not zero.
// Then you output a string like this:
// "meal"
function gridIndex(grid, indices) {
	let arr = ["0"];

	for (let i in grid) {
		arr.push(...grid[i]);
	}

	let str = "";
	for (let i in indices) {
		str += arr[indices[i]];
	}

	return str;
}
