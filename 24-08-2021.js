//Groups of characters decided to make a battle. Help them to figure out which group is more powerful. Create a function that will accept 2 variables and return the one who's stronger.
function battle(x, y) {
	const alphabet = "0ABCDEFGHIJKLMNOPQRSTUVWXYZ";

	const power = (n) =>
		n
			.split("")
			.map((e) => alphabet.indexOf(e))
			.reduce((p, c) => p + c, 0);

	return power(x) > power(y) ? x : power(y) > power(x) ? y : "Tie!";
}
