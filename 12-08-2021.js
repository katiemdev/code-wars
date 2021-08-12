//The code provided is supposed return a person's Full Name given their first and last names. But it's not working properly.
class Dinglemouse {
	constructor(firstName, lastName) {
		(this.firstName = firstName), (this.lastName = lastName);
	}

	getFullName() {
		return (this.firstName + " " + this.lastName).trim();
	}
}

//#Get the averages of these numbers. Write a method, that gets an array of integer-numbers and return an array of the averages of each integer-number and his follower, if there is one.
function averages(numbers) {
	if (!numbers) return [];
	const averageArr = [];

	for (let i = 0; i < numbers.length; i++) {
		if (i == numbers.length - 1) break;

		averageArr.push((numbers[i] + numbers[i + 1]) / 2);
	}
	return averageArr;
}

//Write a function that takes a string which has integers inside it separated by spaces, and your task is to convert each integer in the string into an integer and return their sum.
function summy(stringOfInts) {
	return stringOfInts
		.split(" ")
		.map((e) => +e)
		.reduce((p, c) => p + c, 0);
}
