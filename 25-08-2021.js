//So, your task is to sum up all the digits in string, possibly multiple times, till you get a one digit result. You should then return it as a string. The input will be always valid.
function digitSum(str) {
	const sum = (num) => num.split("").reduce((p, c) => p + +c, 0);
	let answer = sum(str).toString();

	while (answer.length > 1) {
		answer = sum(answer).toString();
	}

	return answer;
}
