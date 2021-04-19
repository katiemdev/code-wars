//Write a function that takes a positive integer n, sums all the cubed values from 1 to n, and returns that sum.
function sumCubes(n) {
	let arr = [];
	for (let i = 1; i <= n; i++) {
		arr.push(i);
	}
	return arr.reduce((p, c) => p + c ** 3, 0);
}

//No Story, No Description, Only by Thinking and Testing. Look at result of testcase, guess the code!
function testit(act, s) {
	let str = "";
	for (let i = 0; i < act.length; i++) {
		if (act[i] === "run" && s[i] === "_") {
			str += "_";
		} else if (act[i] === "run" && s[i] === "|") {
			str += "/";
		} else if (act[i] === "jump" && s[i] === "_") {
			str += "x";
		} else if (act[i] === "jump" && s[i] === "|") {
			str += "|";
		}
	}
	return str;
}

//Write a small function that returns the values of an array that are not odd. All values in the array will be integers. Return the good values in the order they are given.
let noOdds = (values) => values.filter((e) => e % 2 === 0);

//Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings! You need to cast the whole array to the correct type. Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.
let toNumberArray = (arr) => arr.map((e) => Number(e));

//Given two integers a and b, which can be positive or negative, find the sum of all the integers between including them too and return it. If the two numbers are equal return a or b. Note: a and b are not ordered!
function getSum(a, b) {
	let arr = [];
	for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
		arr.push(i);
	}
	return arr.reduce((p, c) => p + c, 0);
}

//Given: a sequence of different type of values (number, string, boolean). You should return an object with a separate properties for each of types presented in input. Each property should contain an array of corresponding values. keep order of values like in input array. if type is not presented in input, no corresponding property are expected
function separateTypes(input) {
	let obj = {};
	input.forEach((e) => {
		!obj[typeof e] ? (obj[typeof e] = [e]) : obj[typeof e].push(e);
	});
	return obj;
}
