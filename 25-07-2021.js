//The 26 letters of the English alphabets are randomly divided into 5 groups of 5 letters with the remaining letter being ignored. Each of the group is assigned a score of more than 0. The ignored letter always has a score of 0. With this kata, write a function nameScore(name) to work out the score of a name that is passed to the function. The output should be returned as an object:
function nameScore(name) {
	let score = [];
	let letters = name.split("");

	for (let i = 0; i < name.length; i++) {
		for (let key in alpha) {
			if (key.includes(name[i].toUpperCase())) {
				score.push(alpha[key]);
			}
		}
	}
	const answer = {};
	answer[name] = score.reduce((p, c) => p + c, 0);
	return answer;
}
