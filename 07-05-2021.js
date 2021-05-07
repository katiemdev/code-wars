//You are provided an array of strings that represent the cage and Chuck's opponents. Your task, in traditional Chuck style, is to take their heads off!! Throw punches, kicks, headbutts (or more likely - regex or iteration...) but whatever you do, remove their heads. Return the same array of strings, but with the heads ('O') removed and replaced with a space (' '). If the provided array is empty, or is an empty string, return 'Gym is empty'. If you are given an array of numbers, return 'This isn't the gym!!'.
function headSmash(array) {
	return array.length === 0 || array === ""
		? "Gym is empty"
		: typeof array == "number"
		? "This isn't the gym!!"
		: array.map((e) => e.replace(/O/gi, " "));
}

//Create a function that returns a villain name based on the user's birthday. The birthday will be passed to the function as a valid Date object, so for simplicity, there's no need to worry about converting strings to dates.
function getVillainName(birthday) {
	const m = [
		"Evil",
		"Vile",
		"Cruel",
		"Trashy",
		"Despicable",
		"Embarrassing",
		"Disreputable",
		"Atrocious",
		"Twirling",
		"Orange",
		"Terrifying",
		"Awkward",
	];
	const d = [
		"Mustache",
		"Pickle",
		"Hood Ornament",
		"Raisin",
		"Recycling Bin",
		"Potato",
		"Tomato",
		"House Cat",
		"Teaspoon",
		"Laundry Basket",
	];
	console.log(birthday.getDate());
	return `The ${m[birthday.getMonth()]} ${
		d[
			birthday.getDate() > 9
				? Number(birthday.getDate().toString().slice(1))
				: birthday.getDate()
		]
	}`;
}

//Given a Divisor and a Bound , Find the largest integer N , Such That ,
// N is divisible by divisor
// N is less than or equal to bound
// N is greater than 0.
function maxMultiple(divisor, bound) {
	let total = 0;
	for (let i = divisor; i <= bound; i++) {
		if (i % divisor === 0 && i > total) {
			total = i;
		}
	}
	return total;
}
