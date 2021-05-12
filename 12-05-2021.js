//Given a string and an array of index numbers, return the characters of the string rearranged to be in the order specified by the accompanying array.
function scramble(str, arr) {
	let ans = [];
	for (let i = 0; i < arr.length; i++) {
		ans[arr[i]] = str.charAt(i);
	}
	return ans.join("");
}

//Every now and then people in the office moves teams or departments. Depending what people are doing with their time they can become more or less boring. Time to assess the current team. You will be provided with an object(staff) containing the staff names as keys, and the department they work in as values. Each department has a different boredom assessment score, as follows:
// accounts = 1
// finance = 2
// canteen = 10
// regulation = 3
// trading = 6
// change = 6
// IS = 8
// retail = 5
// cleaning = 4
// pissing about = 25
// Depending on the cumulative score of the team, return the appropriate sentiment:
// <=80: 'kill me now'
// < 100 & > 80: 'i can handle this'
// 100 or over: 'party time!!'
function boredom(staff) {
	let score = 0;
	for (let dep in staff) {
		switch (staff[dep]) {
			case "accounts":
				score++;
				break;
			case "finance":
				score += 2;
				break;
			case "canteen":
				score += 10;
				break;
			case "regulation":
				score += 3;
				break;
			case "trading":
			case "change":
				score += 6;
				break;
			case "IS":
				score += 8;
				break;
			case "retail":
				score += 5;
				break;
			case "cleaning":
				score += 4;
				break;
			case "pissing about":
				score += 25;
				break;
		}
	}
	return score <= 80
		? "kill me now"
		: score < 100 && score > 80
		? "i can handle this"
		: "party time!!";
}

//You will be given a string. You need to return an array of three strings by gradually pulling apart the string. You should repeat the following steps until the string length is 1:
// a) remove the final character from the original string, add to solution string 1. b) remove the first character from the original string, add to solution string 2.
// The final solution string value is made up of the remaining character from the original string, once originalstring.length == 1.
function popShift(s) {
	s = s.split("");
	let str1 = "",
		str2 = "";
	while (s.length > 1) {
		str1 += s.pop();
		str2 += s.shift();
	}
	return [str1, str2, s.join("")];
}
