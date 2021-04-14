//Complete the solution so that it returns a formatted string. The return value should equal "Value is VALUE" where value is a 5 digit padded number.
function solution(value) {
	let num = value.toString().split("");
	console.log(num);
	for (let i = 0; i <= num.length; i++) {
		if (num.length < 5) {
			num.unshift("0");
		}
	}
	num = num.join("");
	return `Value is ${num}`;
}

//Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.
let solution = (nums) => (nums === null ? [] : nums.sort((a, b) => a - b));

//A local birthing center is interested in names! They have arrays of all the baby names they see each year, but the lists are sooo long! They don’t know how to calculate how many times one name is used. Given an array of names and a specific name string, return the number of times that specific name appears in the array.
function countName(arr, name) {
	let count = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === name) {
			count++;
		}
	}
	return count;
}
