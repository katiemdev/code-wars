//Your task, to please Chuck, is to create a function that chains 4 methods on a SINGLE LINE! You can pass with multiple lines, but CHuck will pity you. Go big or go home. ONE LINE!! Chuck expects his list of favourite items to be split, sorted, joined AND have any occurrences of the letters 'e' and 'a' removed - why, you ask? Well Nunchuks hasn't got the letters 'a' or 'e' in it has it?? Chuck says shut your mouth... and don't forget the capitals.
onePunch = (items) =>
	typeof items !== "string" || items === ""
		? "Broken!"
		: items
				.split(" ")
				.sort()
				.map((e) => e.replace(/[ae]/gi, ""))
				.join(" ");

//Your task, to stop Chuck beating your ass with his little finger, is to use regex to verify if the number is a genuine Chuck score. If not it's probably some crap made up by his nemesis Bruce Lee. Return true if the provided count passes, and false if it does not.
let bodyCount = (code) =>
	/([A-Z][0-9]){5}\.-[A-Z]{1}%[0-9]{1}\.[0-9]{2}\./.test(code);

//Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.
function alphabetWar(fight) {
	let left = 0,
		right = 0;
	let leftPoints = [0, "s", "b", "p", "w"];
	let rightPoints = [0, "z", "d", "q", "m"];
	for (let i = 0; i < fight.length; i++) {
		if (leftPoints.includes(fight[i])) {
			left += leftPoints.indexOf(fight[i]);
		} else if (rightPoints.includes(fight[i])) {
			right += rightPoints.indexOf(fight[i]);
		}
	}
	return left === right
		? "Let's fight again!"
		: `${left > right ? "Left" : "Right"} side wins!`;
}

//Given an integer width and a string ratio written as WIDTH:HEIGHT, output the screen dimensions as a string written as WIDTHxHEIGHT.
function findScreenHeight(width, ratio) {
	ratio = ratio.split(":");
	let height = (width / parseInt(ratio[0])) * parseInt(ratio[1]);
	return `${width}x${height}`;
}
