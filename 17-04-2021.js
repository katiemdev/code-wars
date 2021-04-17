//There are five workers : James,John,Robert,Michael and William.They work one by one and on weekends they rest. Order is same as in the description(James works on mondays,John works on tuesdays and so on).You have to create a function 'task' that will take 3 arguments(w, n, c): Weekday, Number of trees that must be sprayed on that day, Cost of 1 litre liquid that is needed to spray tree,let's say one tree needs 1 litre liquid.
function task(w, n, c) {
	let names = {
		Monday: "James",
		Tuesday: "John",
		Wednesday: "Robert",
		Thursday: "Michael",
		Friday: "William",
	};
	return `It is ${w} today, ${
		names[w]
	}, you have to work, you must spray ${n} trees and you need ${
		n * c
	} dollars to buy liquid`;
}

//Write a program to determine if a string contains only unique characters. Return true if it does and false otherwise.The string may contain any of the 128 ASCII characters. Characters are case-sensitive, e.g. 'a' and 'A' are considered different characters.
function hasUniqueChars(str) {
	str = str.split("");
	let obj = {};
	for (let i = 0; i < str.length; i++) {
		if (!obj[str[i]]) {
			obj[str[i]] = 1;
		} else {
			obj[str[i]]++;
		}
	}
	return Object.values(obj).every((e) => e === 1);
}

//Write a function that replaces 'two', 'too' and 'to' with the number '2'. Even if the sound is found mid word (like in octopus) or not in lowercase grandma still thinks that should be replaced with a 2. Bless her.
let textin = (s) => s.replace(/(two|too|to)/gi, "2");
