//ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits. If the function is passed a valid PIN string, return true, else return false.
let validatePIN = (pin) => /\b^\d{4}$|\b^\d{6}$/.test(pin);

//You have a string of numbers; starting with the third number each number is the result of an operation performed using the previous two numbers. Complete the function which returns a string of the operations in order and separated by a comma and a space, e.g. "subtraction, subtraction, addition"
function sayMeOperations(str) {
	let ans = "";
	let arr = str.split(" ").map((e) => parseInt(e));
	for (let i = 0; i < arr.length; i++) {
		if (i + 2 > arr.length - 1) break;
		arr[i] + arr[i + 1] === arr[i + 2]
			? (ans += "addition, ")
			: arr[i] - arr[i + 1] === arr[i + 2]
			? (ans += "subtraction, ")
			: arr[i] * arr[i + 1] === arr[i + 2]
			? (ans += "multiplication, ")
			: (ans += "division, ");
	}
	return ans.slice(0, -2);
}

//In this Kata, you will be given a string that has lowercase letters and numbers. Your task is to compare the number groupings and return the largest number. Numbers will not have leading zeros. For example, solve("gh12cdy695m1") = 695, because this is the largest of all number groupings.
let solve = (s) => Math.max(...s.match(/[0-9]+/g).map((e) => +e));
