//Basic regex tasks. Write a function that takes in a numeric code of any length. The function should check if the code begins with 1, 2, or 3 and return true if so. Return false otherwise.
let validateCode = (code) => code.toString().match(/^[123]/) > 0;

//Your task is simply to count the total number of lowercase letters in a string.
function lowercaseCount(str) {
	return str.match(/[a-z]/g) < 1 ? 0 : str.match(/[a-z]/g).length;
}

//You and a group of friends are earning some extra money in the school holidays by re-painting the numbers on people's letterboxes for a small fee. Since there are 10 of you in the group each person just concentrates on painting one digit! For example, somebody will paint only the 1's, somebody else will paint only the 2's and so on... But at the end of the day you realise not everybody did the same amount of work. To avoid any fights you need to distribute the money fairly. That's where this Kata comes in.
var paintLetterboxes = function (start, end) {
	let tracker = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	for (let i = start; i <= end; i++) {
		`${i}`.split("").forEach((num) => tracker[num]++);
	}
	return tracker;
};

//An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
function isIsogram(str) {
	str = str.toLowerCase();
	let freq = {};
	for (let i = 0; i < str.length; i++) {
		let chars = str.charAt(i);
		if (freq[chars]) {
			freq[chars]++;
		} else {
			freq[chars] = 1;
		}
	}
	console.log(freq);
	return Object.keys(freq).every((num) => freq[num] === 1);
}

//Given a list of integers, determine whether the sum of its elements is odd or even. Give your answer as a string matching "odd" or "even". If the input array is empty consider it as: [0] (array with a zero).
function oddOrEven(array) {
	let sum = array.reduce((p, c) => p + c, 0);
	return sum % 2 === 0 ? "even" : "odd";
}

//Given a non-negative integer, return an array / a list of the individual digits in order.
let digitize = (n) =>
	n
		.toString()
		.split("")
		.map((num) => +num);

//Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD
let alternateCase = (s) =>
	s
		.split("")
		.map((char) =>
			char.match(/[a-z]/g) ? char.toUpperCase() : char.toLowerCase()
		)
		.join("");

//In this kata you need to check the provided 2 dimensional array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.
function well(x) {
	let goods = x.join("").match(/good/gi);
	return goods == null
		? "Fail!"
		: goods.length <= 2
		? "Publish!"
		: "I smell a series!";
}

//To complete this Kata you need to make a function multiplyAll/multiply_all which takes an array of integers as an argument. This function must return another function, which takes a single integer as an argument and returns a new array. The returned array should consist of each of the elements from the first array multiplied by the integer.
let multiplyAll = (arr) => (num) => arr.map((n) => n * num);

//It's your Birthday. Your colleagues buy you a cake. The numbers of candles on the cake is provided (x). Please note this is not reality, and your age can be anywhere up to 1,000. Yes, you would look a mess. As a surprise, your colleagues have arranged for your friend to hide inside the cake and burst out. They pretend this is for your benefit, but likely it is just because they want to see you fall over covered in cake. Sounds fun! When your friend jumps out of the cake, he/she will knock some of the candles to the floor. If the number of candles that fall is higher than 70% of total candles (x), the carpet will catch fire. You will work out the number of candles that will fall from the provided string (y). You must add up the character ASCII code of each even indexed (assume a 0 based indexing) character in y, with the alphabetical position of each odd indexed character in y to give the string a total.
function cake(x, y) {
	let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
	let count = 0;
	y.split("").forEach((e, i) => {
		if (i % 2 == 0) {
			count += e.charCodeAt();
		} else {
			count += alphabet.indexOf(e) + 1;
		}
	});
	return count > x * 0.7 ? "Fire!" : "That was close!";
}
