//In this kata you will be given a username and their score, your score (not your real score) and you need to calculate how many kata you need to complete to beat their score, by 1 point exactly.
function leaderB(user, user_score, your_score) {
	let difference = user_score - your_score;
	let beta = Math.floor(difference / 3);
	let phrase = `To beat ${user}'s score, I must complete ${beta} Beta kata and ${
		difference - beta * 3
	} 8kyu kata.`;

	if (user_score === your_score) {
		return "Only need one!";
	} else if (user_score < your_score) {
		return "Winning!";
	} else if (beta + (difference - beta * 3) > 1000) {
		return phrase + " Dammit!";
	} else {
		return phrase;
	}
}

//Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.
function capitalize(s) {
	let str1 = s
		.split("")
		.map((e, i) => (i % 2 == 0 ? e.toUpperCase() : e.toLowerCase()))
		.join("");
	let str2 = s
		.split("")
		.map((e, i) => (i % 2 !== 0 ? e.toUpperCase() : e.toLowerCase()))
		.join("");
	return [str1, str2];
}

//Write a program that, given a word, computes the scrabble score for that word.
function scrabbleScore(str) {
	str = str.toUpperCase().replace(/ /g, "");
	let total = 0;
	for (let i = 0; i < str.length; i++) {
		total += $dict[str[i]];
	}
	return total;
}
