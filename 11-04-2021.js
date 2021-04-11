//A Narcissistic Number is a number of length n in which the sum of its digits to the power of n is equal to the original number. If this seems confusing, refer to the example below. Ex: 153, where n = 3 (number of digits in 153) 13 + 53 + 33 = 153 Write a method is_narcissistic(i) (in Haskell: isNarcissistic :: Integer -> Bool) which returns whether or not i is a Narcissistic Number.
function isNarcissistic(n) {
	let sum = n
		.toString()
		.split("")
		.map((e) => Number(e));
	let result = sum.reduce((p, c) => p + c ** sum.length, 0);
	return result == n;
}

//The bloody photocopier is broken... Just as you were sneaking around the office to print off your favourite binary code! Instead of copying the original, it reverses it: '1' becomes '0' and vice versa. Given a string of binary, return the version the photocopier gives you as a string.
function broken(x) {
	let binary = { 1: "0", 0: "1" };
	return x.replace(/[01]/g, (e) => binary[e]);
}

//Being a bald man myself, I know the feeling of needing to keep it clean shaven. Nothing worse that a stray hair waving in the wind. You will be given a string(x). Clean shaved head is shown as "-" and stray hairs are shown as "/". Your task is to check the head for stray hairs and get rid of them. You should return the original string, but with any stray hairs removed. Keep count ot them though, as there is a second element you need to return:
// 0 hairs --> "Clear!"
// 1 hair --> "Unicorn!"
// 2 hairs --> "Homer!"
// 3-5 hairs --> "Careless!"
// >5 hairs --> "Hobo!"
function bald(x) {
	let hairs = x.match(/\//g) || 0;
	return [
		`${x.replace(/\//g, "-")}`,
		`${
			hairs.length > 5
				? "Hobo!"
				: hairs.length > 2
				? "Careless!"
				: hairs.length == 2
				? "Homer!"
				: hairs.length == 1
				? "Unicorn!"
				: "Clean!"
		}`,
	];
}
