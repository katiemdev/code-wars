//Your job is to figure out the index of which vowel is missing from a given string:
// A has an index of 0,
// E has an index of 1,
// I has an index of 2,
// O has an index of 3,
// U has an index of 4.
function absentVowel(x) {
	let vowels = "aeiou".split("");
	for (let v in vowels) {
		if (!x.includes(vowels[v])) return vowels.indexOf(vowels[v]);
	}
}
