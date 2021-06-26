//Given two words and a letter, return a single word that's a combination of both words, merged at the point where the given letter first appears in each word. The returned word should have the beginning of the first word and the ending of the second, with the dividing letter in the middle. You can assume both words will contain the dividing letter.
function stringMerge(string1, string2, letter) {
	return (
		string1.slice(0, string1.indexOf(letter)) +
		string2.slice(string2.indexOf(letter))
	);
}

//You are given an initial 2-value array (x). You will use this to calculate a score. If both values in (x) are numbers, the score is the sum of the two. If only one is a number, the score is that number. If neither is a number, return 'Void!'. Once you have your score, you must return an array of arrays. Each sub array will be the same as (x) and the number of sub arrays should be equal to the score.
function explode(x) {
	let score;
	if (x.every((e) => typeof e === "number")) {
		score = x.reduce((p, c) => p + c, 0);
	} else if (x.some((e) => typeof e === "number")) {
		score = x.filter((e) => typeof e === "number")[0];
	} else {
		return "Void!";
	}

	const arr = [];
	for (let i = 1; i <= score; i++) {
		arr.push(x);
	}

	return arr;
}

//this kata requires you to turn any sentence provided (s) into ex-pat balinese waffle by inserting the word 'pak' between every other word.
function pak(s) {
	if (s.trim() == "") return "";
	return s
		.split(" ")
		.map((e, i) => e + " pak")
		.join(" ")
		.slice(0, -4);
}
