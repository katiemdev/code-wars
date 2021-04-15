//JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.
let getEvenNumbers = (numArr) => numArr.filter((n) => n % 2 == 0);

//Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.
let switcheroo = (x) =>
	x.replace(/a/g, "y").replace(/b/g, "a").replace(/y/g, "b");

//You are given an odd-length array of integers, in which all of them are the same, except for one single number. Complete the method which accepts such an array, and returns that single different number.
function stray(numbers) {
	let u = {};
	for (let i = 0; i < numbers.length; i++) {
		if (!u[numbers[i]]) {
			u[numbers[i]] = 1;
		} else {
			u[numbers[i]]++;
		}
	}
	return +Object.keys(u).find((n) => u[n] === 1);
}
