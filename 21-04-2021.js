//You are given a integer array formula. Array contains only digits 1-8 that represents material 1-8. Your task is to determine if the formula is valid. Returns true if it's valid, false otherwise.
function isValid(formula) {
	if (
		(formula.includes(1) && formula.includes(2)) ||
		(formula.includes(3) && formula.includes(4)) ||
		(formula.includes(5) && !formula.includes(6)) ||
		(!formula.includes(5) && formula.includes(6)) ||
		(!formula.includes(7) && !formula.includes(8))
	) {
		return false;
	} else {
		return true;
	}
}

//Welcome, Warrior! In this kata, you will get a message and you will need to get the frequency of each and every character!
function charFreq(message) {
	let freq = {};
	for (let i = 0; i < message.length; i++) {
		if (!freq[message[i]]) {
			freq[message[i]] = 1;
		} else {
			freq[message[i]]++;
		}
	}
	return freq;
}

//Your task is to create a function that, given a proper first and last name, will return the correct alias. Two objects that return a one word name in response to the first letter of the first name and one for the first letter of the surname are already given. If the first character of either of the names given to the function is not a letter from A - Z, you should return "Your name must start with a letter from A - Z." Sometimes people might forget to capitalize the first letter of their name so your function should accommodate for these grammatical errors.
function aliasGen(fName, lName) {
	let name1 = firstName[fName.toUpperCase().slice(0, 1)];
	let name2 = surname[lName.toUpperCase().slice(0, 1)];
	if (name1 == undefined || name2 == undefined) {
		return "Your name must start with a letter from A - Z.";
	} else {
		return `${name1} ${name2}`;
	}
}

//You will be given an array of numbers which can be used using the String.fromCharCode() (JS), Tools.FromCharCode() (C#) method to convert the number to a character. It is recommended to map over the array of numbers and convert each number to the corresponding ascii character.
var ArrowFunc = function (arr) {
	return arr.map((e) => String.fromCharCode(e)).join(""); //Complete this function
};

//Given a string s, write a method (function) that will return true if its a valid single integer or floating number or false if its not.
function isDigit(s) {
	if (s.trim() == "") return false;
	return !isNaN(Number(s));
}

//Christmas is coming and many people dreamed of having a ride with Santa's sleigh. But, of course, only Santa himself is allowed to use this wonderful transportation. And in order to make sure, that only he can board the sleigh, there's an authentication mechanism. Your task is to implement the authenticate() method of the sleigh, which takes the name of the person, who wants to board the sleigh and a secret password. If, and only if, the name equals "Santa Claus" and the password is "Ho Ho Ho!" (yes, even Santa has a secret password with uppercase and lowercase letters and special characters :D), the return value must be true. Otherwise it should return false.
function Sleigh() {}

Sleigh.prototype.authenticate = function (name, password) {
	return name === "Santa Claus" && password === "Ho Ho Ho!";
};

//Write the function circleArea/CircleArea which takes in a Circle object and calculates the area of that circle.
function circleArea(circle) {
	return Math.PI * circle.radius ** 2;
}

//Your mission is to implement a function htmlspecialchars() that converts the following potentially harmful characters:
// < --> &lt;
// > --> &gt;
// " --> &quot;
// & --> &amp;
function htmlspecialchars(formData) {
	let symbols = {
		"<": "&lt;",
		">": "&gt;",
		'"': "&quot;",
		"&": "&amp;",
	};
	formData = formData.replace(/[<>"&]/g, (match) => symbols[match]);
	return formData;
}

//Not all integers can be represented by JavaScript/TypeScript. It has space to to represent 53bit signed integers. In this Kata, we've to determine if it is safe to use the integer or not. Make use of the latest ES6 features to find this.
let SafeInteger = (n) => n < Number.MAX_SAFE_INTEGER;

//In this first kata in the series, you need to define a Hero prototype to be used in a terminal game.
function Hero(name) {
	return {
		name: name || "Hero",
		position: "00",
		health: 100,
		damage: 5,
		experience: 0,
	};
}

//Taking into account that an average crew member on board adds 1.5 units to the draft, a ship that has a draft of more than 20 without crew is considered worthy to loot. Any ship weighing that much must have a lot of booty! Add the method isWorthIt to decide if the ship is worthy to loot.
function Ship(draft, crew) {
	this.draft = draft;
	this.crew = crew;
	this.isWorthIt = function () {
		return draft - crew * 1.5 > 20;
	};
}

//You are creating a text-based terminal version of your favorite board game. In the board game, each turn has six steps that must happen in this order: roll the dice, move, combat, get coins, buy more health, and print status.
function doTurn() {
	rollDice();
	move();
	combat();
	getCoins();
	buyHealth();
	printStatus();
}

//The number n is Evil if it has an even number of 1's in its binary representation. The first few Evil numbers: 3, 5, 6, 9, 10, 12, 15, 17, 18, 20 The number n is Odious if it has an odd number of 1's in its binary representation. The first few Odious numbers: 1, 2, 4, 7, 8, 11, 13, 14, 16, 19 You have to write a function that determine if a number is Evil of Odious, function should return "It's Evil!" in case of evil number and "It's Odious!" in case of odious number.
let evil = (n) =>
	n.toString(2).match(/1/g || []).length % 2 === 0
		? "It's Evil!"
		: "It's Odious!";
