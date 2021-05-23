//I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.
function generateShape(integer) {
	return `${"+".repeat(integer)}\n`.repeat(integer).slice(0, -1);
}

//The accounts of the "Fat to Fit Club (FFC)" association are supervised by John as a volunteered accountant. The association is funded through financial donations from generous benefactors. John has a list of the first n donations: [14, 30, 5, 7, 9, 11, 15] He wants to know how much the next benefactor should give to the association so that the average of the first n + 1 donations should reach an average of 30. After doing the math he found 149. He thinks that he made a mistake. Could you help him?
function newAvg(arr, newavg) {
	let ans = newavg * (arr.length + 1) - arr.reduce((p, c) => p + c, 0);
	if (ans < 0) throw new Error("error");
	return Math.ceil(ans);
}

//Your task is to return the sum of Triangular Numbers up-to-and-including the nth Triangular Number. Triangular Number: "any of the series of numbers (1, 3, 6, 10, 15, etc.) obtained by continued summation of the natural numbers 1, 2, 3, 4, 5, etc."
function sumTriangularNumbers(n) {
	let count = 0;
	for (let i = 1; i <= n; i++) {
		count += (i * (i + 1)) / 2;
	}
	return count;
}

//Santa asked his organizer to order the characters in alphabetical order, but the Elf fell asleep from consuming too much hot chocolate and candy canes! Can you help him out?
let sortGiftCode = (code) => code.split("").sort().join("");
