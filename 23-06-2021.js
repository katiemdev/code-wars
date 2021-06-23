//Our fruit guy has a bag of fruit (represented as an array of strings) where some fruits are rotten. He wants to replace all the rotten pieces of fruit with fresh ones. For example, given ["apple","rottenBanana","apple"] the replaced array should be ["apple","banana","apple"]. Your task is to implement a method that accepts an array of strings containing fruits should returns an array of strings where all the rotten fruits are replaced by good ones.
function removeRotten(bag) {
	return bag
		? bag.map((e) =>
				e.includes("rotten")
					? (e = e.toLowerCase().replace(/rotten/gi, ""))
					: e.toLowerCase()
		  )
		: [];
}

//Given a string S. You have to return another string such that even-indexed and odd-indexed characters of S are grouped and groups are space-separated (see sample below)
function sortMyString(S) {
	let odd = "",
		even = "";
	for (let l in S) {
		l % 2 === 0 ? (even += S[l]) : (odd += S[l]);
	}
	return `${even} ${odd}`;
}

//Your task is to complete the function which takes a string, and returns an array with all possible rotations of the given string, in uppercase.
function scrollingText(text) {
	text = text.toUpperCase();
	let arr = [text],
		textCopy = text.slice(1) + text.slice(0, 1);

	while (textCopy !== text) {
		arr.push(textCopy);
		textCopy = textCopy.slice(1) + textCopy.slice(0, 1);
	}
	return arr;
}

//The input will be an array of dictionaries. Return the values as a string-seperated sentence in the order of their keys' integer equivalent (increasing order). The keys are not reoccurring and their range is -999 < key < 999. The dictionaries' keys & values will always be strings and will always not be empty.
function sentence(list) {
	return list
		.sort((a, b) => parseInt(Object.keys(a)[0]) - parseInt(Object.keys(b)[0]))
		.map((e) => (e = Object.values(e).toString()))
		.join(" ");
}
