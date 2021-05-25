//In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?
function nbYear(p0, percent, aug, p) {
	let count = 0;
	while (p0 < p) {
		p0 = Math.round(p0 + (p0 / 100) * percent + aug);
		count++;
	}
	return count;
}

//Given a position of a knight on the standard chessboard, find the number of different moves the knight can perform. The knight can move to a square that is two squares horizontally and one square vertically, or two squares vertically and one square horizontally away from it. The complete move therefore looks like the letter L. Check out the image below to see all valid moves for a knight piece that is placed on one of the central squares.
function chessKnight(cell) {
	switch (true) {
		case /[ah][18]/.test(cell):
			return 2;
			break;
		case /[ah][27]|[bg][18]/.test(cell):
			return 3;
			break;
		case /[bg][27]|[c-f][18]|[ah][3-6]/.test(cell):
			return 4;
			break;
		case /[c-f][27]|[bg][3-6]/.test(cell):
			return 6;
			break;
		default:
			return 8;
	}
}

//Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
function longest(s1, s2) {
	let arr = s1.split("").concat(s2.split(""));
	return [...new Set(arr)].sort().join("");
}

//Imagine you start on the 5th floor of a building, then travel down to the 2nd floor, then back up to the 8th floor. You have travelled a total of 3 + 6 = 9 floors of distance. Given an array representing a series of floors you must reach by elevator, return an integer representing the total distance travelled for visiting each floor in the array in order.
function elevatorDistance(arr) {
	let count = 0;
	for (let i = 0; i < arr.length; i++) {
		if (i === arr.length - 1) break;
		count += arr[i] < arr[i + 1] ? arr[i + 1] - arr[i] : arr[i] - arr[i + 1];
	}
	return count;
}

//hanks to the effects of El Nino this year my holiday snorkelling trip was akin to being in a washing machine... Not fun at all. Given a string made up of '~' and '_' representing waves and calm respectively, your job is to check whether a person would become seasick. Remember, only the process of change from wave to calm will add to the effect (really wave peak to trough but this will do). Find out how many changes in level the string has and if that figure is more than 20% of the array, return "Throw Up", if less, return "No Problem".
function seaSick(x) {
	let count = 0;
	for (let i = 0; i < x.length; i++) {
		if (i === x.length - 1) break;
		if (x[i] !== x[i + 1]) count++;
	}
	return count > x.length * 0.2 ? "Throw Up" : "No Problem";
}

//You are given a sequence of positive ints where every element appears three times, except one that appears only once (let's call it x) and one that appears only twice (let's call it y). Your task is to find x * x * y.
function missingValues(arr) {
	let obj = {};
	for (let i = 0; i < arr.length; i++) {
		!obj[arr[i]] ? (obj[arr[i]] = 1) : obj[arr[i]]++;
	}
	let x, y;
	for (let key in obj) {
		if (obj[key] === 1) x = key;
		if (obj[key] === 2) y = key;
	}
	return x * x * y;
}
