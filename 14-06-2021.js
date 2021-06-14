//Complete the function which accepts two strings and calculates the golf score of a game. Both strings will be of length 18, and each character in the string will be a number between 1 and 9 inclusive.
function golfScoreCalculator(parList, scoreList) {
	(parList = parList.split("")), (scoreList = scoreList.split(""));
	let result = [];
	for (let i = 0; i < parList.length; i++) {
		result.push(parseInt(scoreList[i]) - parseInt(parList[i]));
	}
	return result.reduce((p, c) => p + c);
}
