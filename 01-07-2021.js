//Help Gotham City PD decode the puzzle below. If all the letters of the Joker's name are encoded in the string of cards, return true. If not, return false. Note the input is a string of shuffled cards i.e. "6s5s4cAs4s2c7s..." and the name can be found in any order.
function whySoSerious(str) {
	str = str.toLowerCase();
	const joker = ["jc", "7s", "5s", "as", "9c"];
	return joker.every((card) => str.includes(card));
}
