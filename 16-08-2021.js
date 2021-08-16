//I'm creating a scoreboard on my game website, but I want the score to be displayed as tally marks instead of Roman numerals. Write a function that translates the numeric score into tally marks. My tally mark font uses the letters a, b, c, d, e to represent tally marks for 1, 2, 3, 4, 5, respectively. I want a space and line break ( ) after each completed tally (5). Assume that the score you receive will be an integer. This function should return an HTML string that I can insert into my website that represents the correct score.
var scoreToTally = function (score) {
	let scores = [0, "a", "b", "c", "d", "e <br>"];

	if (score <= 5) {
		return scores[score];
	} else if (score % 5 == 0) {
		return scores[5].repeat(score / 5);
	} else {
		let modulus = score % 5;
		return scores[5].repeat((score - modulus) / 5) + scores[modulus];
	}
};
