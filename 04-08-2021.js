//It's your job to help Mary solve the puzzles. Write a program spot_diff/Spot that will compare the two strings and return a list with the positions where the two strings differ. In the example above, your program should return [3, 5] because String 1 is different from String 2 at positions 3 and 5.
function spot(s1, s2) {
	if (s1 == s2) return [];
	const arr = [];
	for (let i = 0; i < s1.length; i++) {
		if (s1[i] !== s2[i]) {
			arr.push(i);
		}
	}
	return arr;
}
