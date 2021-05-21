//A variation of determining leap years, assuming only integers are used and years can be negative and positive. Write a function which will return the days in the year and the year entered in a string. For example 2000, entered as an integer, will return as a string 2000 has 366 days
function yearDays(year) {
	let isLeap = (y) => (y % 100 === 0 ? y % 400 === 0 : y % 4 === 0);
	return `${year} has ${isLeap(year) ? 366 : 365} days`;
}

//Given an array of 4 integers [a,b,c,d] representing two points (a, b) and (c, d), return a string representation of the slope of the line joining these two points. For an undefined slope (division by 0), return undefined . Note that the "undefined" is case-sensitive.
function slope(points) {
	if (!isFinite((points[3] - points[1]) / (points[2] - points[0])))
		return "undefined";
	return `${(points[3] - points[1]) / (points[2] - points[0])}`;
}

//You already implemented a Cube class, but now we need your help again! I'm talking about constructors. We don't have one. Let's code two: One taking an integer and one handling no given arguments! Also we got a problem with negative values. Correct the code so negative values will be switched to positive ones! The constructor taking no arguments should assign 0 to Cube's Side property.
function Cube(n = 0) {
	this.side = n;

	this.getSide = () => this.side;

	this.setSide = (n) => {
		if (isNaN(n) === true) return;
		this.side = Math.abs(n);
	};
}

//Coding in function bigToSmall. function accept 1 parameter arr(2D number array). Your task is: First to all, refer to the example above, flat output arr to a one-dimensional array. And then sort array in descending order. Finally, use the separator ">" to connect the elements into a string.
function bigToSmall(arr) {
	let arr1 = [];
	for (let i = 0; i < arr.length; i++) {
		arr1 = arr1.concat(arr[i]);
	}
	return arr1.sort((a, b) => b - a).join(">");
}

//You are given a program squaresOnly that accepts an array of natural numbers up to and including 100 (and including 0) of length >= 1, array, and returns a new array containing only square numbers that have appeared in the input array.
let squaresOnly = (arr) => arr.filter((n) => Number.isInteger(Math.sqrt(n)));

//Preloaded for you is a class Dog. You are then given a working class Labrador as your initial code. Shorten it so that it meets the strict character count requirements for this Kata.
class Labrador extends Dog {
	constructor(name, age, gender, master) {
		super(name, age, gender);
		this.species = "Labrador";
		this.legs = 4;
		this.size = "Large";
		this.loyal = true;
		this.master = master;
	}
}

//Coding in function giveMeFive, function accept 1 parameter:obj, it's an object. You need to the traverse the obj, if the length of the object key equals to 5, then push the key value to the array (you need to define the array by yourself, this time I won't help you). Additionally push the value to the array as well, if the length of the value is equal to 5.
function giveMeFive(obj) {
	let arr = [];
	for (let prop in obj) {
		if (prop.length === 5) arr.push(prop);
		if (obj[prop].length === 5) arr.push(obj[prop]);
	}
	return arr;
}
