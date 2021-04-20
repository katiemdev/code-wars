//Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, (). In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained
function expressionMatter(a, b, c) {
	return Math.max(a * (b + c), a * b * c, a + b * c, (a + b) * c, a + b + c);
}

//Given a number n, draw stairs using the letter "I", n tall and n wide, with the tallest in the top left.
function drawStairs(n) {
	let str = "I\n";
	for (let i = 1; i < n; i++) {
		str += " ".repeat(i) + "I\n";
	}
	return n === 1 ? "I" : n === 0 ? "" : str.slice(0, -1);
}

//Given 2 elevators (named "left" and "right") in a building with 3 floors (numbered 0 to 2), write a function elevator accepting 3 arguments (in order):
// left - The current floor of the left elevator
// right - The current floor of the right elevator
// call - The floor that called an elevator
// It should return the name of the elevator closest to the called floor ("left"/"right").
// In the case where both elevators are equally distant from the called floor, choose the elevator to the right.
let elevator = (left, right, call) =>
	Math.abs(call - right) <= Math.abs(call - left) ? "right" : "left";
