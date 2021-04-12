//Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321) Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.
function reverseNumber(n) {
	let reverse = n.toString().split("").reverse();
	return n < 0 ? -Number(reverse.slice(0, -1).join("")) : +reverse.join("");
}

//To celebrate the start of the Rio Olympics (and the return of 'the Last Leg' on C4 tonight) this is an Olympic inspired kata.Given a string of random letters, you need to examine each. Some letters naturally have 'rings' in them. 'O' is an obvious example, but 'b', 'p', 'e', 'A', etc are all just as applicable. 'B' even has two!! Please note for this kata you can count lower case 'g' as only one ring.Your job is to count the 'rings' in each letter and divide the total number by 2. Round the answer down. Once you have your final score: if score is 1 or less, return 'Not even a medal!'; if score is 2, return 'Bronze!'; if score is 3, return 'Silver!'; if score is more than 3, return 'Gold!';
function olympicRing(a) {
	let oneRing =
		a.match(/[abdegopqrADOPQR]/g) === null
			? 0
			: a.match(/[abdegopqADOPQR]/g).length;
	let twoRing = a.match(/B/g) === null ? 0 : a.match(/B/g).length * 2;
	let total = Math.floor((oneRing + twoRing) / 2);
	console.log(oneRing, twoRing, total);
	return total <= 1
		? "Not even a medal!"
		: total == 2
		? "Bronze!"
		: total == 3
		? "Silver!"
		: "Gold!";
}

//Math hasn't always been your best subject, and these programming symbols always trip you up! I mean, does ** mean "Times, Times" or "To the power of"? Luckily, you can create the function to write out the expressions for you!
// The operators you'll need to use are:
// "+"   -->  "Plus"
// "-"   -->  "Minus"
// "*"   -->  "Times"
// "/"   -->  "Divided By"
// "**"  -->  "To The Power Of"
// "="   -->  "Equals"
// "!="  -->  "Does Not Equal"
// Notes:
// the numbers used will be 1 to 10
// the valid operators and the relevant texts are stored in the preloaded dictionary/hash OPERATORS
// invalid operators will also be tested, to which you should return "That's not an operator!"
function expressionOut(expr) {
	expr = expr.split(" ");
	console.log(expr);
	let nums = {
		0: "Zero",
		1: "One",
		2: "Two",
		3: "Three",
		4: "Four",
		5: "Five",
		6: "Six",
		7: "Seven",
		8: "Eight",
		9: "Nine",
		10: "Ten",
	};

	let ops = {
		"+": "Plus",
		"-": "Minus",
		"*": "Times",
		"/": "Divided By",
		"**": "To The Power Of",
		"=": "Equals",
		"!=": "Does Not Equal",
	};
	return ops[expr[1]] == undefined
		? "That's not an operator!"
		: `${nums[expr[0]]} ${ops[expr[1]]} ${nums[expr[2]]}`;
}
