//This time no story, no theory. The examples below show you how to write function accum:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
let accum = (s) =>
	s
		.toLowerCase()
		.split("")
		.map((e, i) => (e = e.charAt(0).toUpperCase() + e.repeat(i)))
		.join("-");

//Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer. Square all numbers k (0 <= k <= n) between 0 and n. Count the numbers of digits d used in the writing of all the k**2. Call nb_dig (or nbDig or ...) the function taking n and d as parameters and returning this count.
function nbDig(n, d) {
	let arr = [];
	for (let i = 0; i <= n; i++) {
		arr.push(i * i);
	}
	let r = new RegExp(d, "g");
	return arr
		.map((e) => (e = e.toString()))
		.join("")
		.match(r).length;
}

//Count the number of divisors of a positive integer n.
function getDivisorsCnt(n) {
	let count = 0;
	for (let i = 1; i <= n; i++) {
		if (n % i === 0) count++;
	}
	return count;
}
