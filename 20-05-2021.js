//We have implemented a function wrap(value) that takes a value of arbitrary type and wraps it in a new Javascript Object setting the 'value' key on the new Object to the passed-in value. Unfortunately, the code is not working as designed. Please fix the code so that it behaves as specified.
function wrap(value) {
	return {
		value: value,
	};
}

//Shouldn't the two functions getMax1 and getMax2 be equivalent and return the same value? Can you spot a problem and fix it? Can you learn something about JavaScript style in this kata?
function getMax1() {
	var max = {
		name: "Max Headroom",
	};
	return max;
}

function getMax2() {
	return {
		name: "Max Headroom",
	};
}

//This function should return an object, but it's not doing what's intended. What's wrong?
function mystery() {
	var results = { sanity: "Hello" };
	return results;
}

//Functional closures can get overly attached. Set them straight! Why doesn't greet_abe() actually greet Abe?
let name = "Abe";
var greet_abe = function () {
	return "Hello, " + name + "!";
};
let name2 = "Ben";
var greet_ben = function () {
	return "Hello, " + name2 + "!";
};

//There is an object/class already created called MrFreeze. Mark this object as frozen so that no other changes can be made to it.
Object.freeze(MrFreeze);

//You have a quiver of arrows, but some have been damaged. The quiver contains arrows with an optional range information (different types of targets are positioned at different ranges), so each item is an arrow. You need to verify that you have some good ones left, in order to prepare for battle.
let anyArrows = (arrows) => arrows.some((a) => !a.damaged);

//Complete the Person object, by completing the FillFriends function to fill the _friends Array for the person object.
var Person = function () {
	var person = {
		_name: "Leroy",
		_friends: [],
		fillFriends: function (f) {
			this._friends = [...f];
		},
	};
	return person;
};

//Your task is simple, search the password string for any injected code (Injected code is any thing that would be used to exploit flaws in the current code, so basically anything that contains || or //) if you find any you must return "Wrong username or password!" because no one likes someone trying to cheat their way in! You will be given a preloaded class called Database with a method login this takes two parameters username and password. This is a generic login function which will check the database for the user it will return either 'Successfully Logged in!' if it passes the test or 'Wrong username or password!' if either the password is wrong or username does not exist.
function validate(username, password) {
	var database = new Database();
	return password.match(/\/\/|\|\||x0r/g)
		? "Wrong username or password!"
		: "Successfully Logged in!";
}

//You are running the calculation 2 + 2 * 2 + 2 * 2 and expect to get the answer 32 but instead the function keeps returning 10. Fix the function to make it return 32 without changing the number or the operators.
function orderOperations() {
	return (2 + 2) * (2 + 2) * 2;
}

//Your task is to create userlinks for the url, you will be given a username and must return a valid link.
function generateLink(user) {
	return `http://www.codewars.com/users/${encodeURIComponent(user)}`;
}
