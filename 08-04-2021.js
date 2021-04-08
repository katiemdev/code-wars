//Your job at E-Corp is both boring and difficult. It isn't made any easier by the fact that everyone constantly wants to have a meeting with you, and that the meeting rooms are always taken! In this kata, you will be given an array. Each value represents a meeting room. Your job? Find the first empty one and return its index (N.B. There may be more than one empty room in some test cases). 'X' --> busy 'O' --> empty
function meeting(x) {
	let index = x.findIndex((e) => e == "O");
	return index < 0 ? "None available!" : index;
}

//Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally. Unfortunately for you, your drive is very bumpy! Given a string showing either flat road ("_") or bumps ("n"), work out if you make it home safely. 15 bumps or under, return "Woohoo!", over 15 bumps return "Car Dead".
function bump(x) {
	let bumps = new RegExp(/n/g);
	return x.match(bumps) === null || x.match(bumps).length <= 15
		? "Woohoo!"
		: "Car Dead";
}

//I would like to be able to pass an array with two elements to my swapValues function to swap the values. However it appears that the values aren't changing. Can you figure out what's wrong here?
function swapValues(args) {
	var temp = args[0];
	args[0] = args[1];
	args[1] = temp;
}

//You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value. The returned value must be a string, and have "***" between each of its letters. You should not remove or add elements from/to the array.
function twoSort(s) {
	s.sort((a, b) => {
		if (a.charAt(0) < b.charAt(0)) {
			return -1;
		} else if (a.charAt(0) > b.charAt(0)) {
			return 1;
		}
	});
	return s[0].split("").join("***");
}

//Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
function invert(array) {
	let newArr = array.map((item) => {
		return item < 0 ? Math.abs(item) : item > 0 ? item * -1 : 0;
	});
	return newArr;
}

//Write a function which takes a number and returns the corresponding ASCII char for that value.
let getChar = (c) => String.fromCharCode(c);

//Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.
let toBinary = (n) => +n.toString(2);

//The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).If the score < 0, return 0.
function checkExam(array1, array2) {
	let score = 0;
	for (let i = 0; i < array1.length; i++) {
		if (array1[i] == array2[i]) {
			score += 4;
		} else if (array2[i] == "") {
			score += 0;
		} else if (array1[i] != array2[i]) {
			--score;
		}
	}
	return score < 0 ? 0 : score;
}

//The function is not returning the correct values. Can you figure out why?
function getPlanetName(id) {
	var name;
	switch (id) {
		case 1:
			name = "Mercury";
			break;
		case 2:
			name = "Venus";
			break;
		case 3:
			name = "Earth";
			break;
		case 4:
			name = "Mars";
			break;
		case 5:
			name = "Jupiter";
			break;
		case 6:
			name = "Saturn";
			break;
		case 7:
			name = "Uranus";
			break;
		case 8:
			name = "Neptune";
			break;
	}

	return name;
}

//Numbers ending with zeros are boring. They might be fun in your world, but not here. Get rid of them. Only the ending ones.
let noBoringZeros = (n) => +n.toString().replace(/0*$/, "");

//Create a function called _if which takes 3 arguments: a boolean value bool and 2 functions (which do not take any parameters): func1 and func2. When bool is truth-ish, func1 should be called, otherwise call the func2.
function _if(bool, func1, func2) {
	return bool == true ? func1() : func2();
}
