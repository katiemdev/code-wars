//Bob is a chicken sexer. His job is to sort baby chicks into a Male(M) and Female(F) piles. When bob can't guess can throw his hands up and declare it with a '?'. Bob's bosses don't trust Bob's ability just yet, so they have paired him with an expert sexer. All of Bob's decisions will be checked against the experts choices to generate a correctness score.
function correctness(bob, expert) {
	let score = 0;
	for (let i = 0; i < bob.length; i++) {
		if (bob[i] == expert[i]) {
			score++;
		} else if (bob[i] == "?" || expert[i] == "?") {
			score += 0.5;
		}
	}
	return score;
}
