//You probably know that some characters written on a piece of paper, after turning this sheet 180 degrees, can be read, although sometimes in a different way. So, uppercase letters "H", "I", "N", "O", "S", "X", "Z" after rotation are not changed, the letter "M" becomes a "W", and Vice versa, the letter "W" becomes a "M". We will call a word "shifter" if it consists only of letters "H", "I", "N", "O", "S", "X", "Z", "M" and "W". After turning the sheet, this word can also be read, although in a different way. So, the word "WOW "turns into the word "MOM". On the other hand, the word "HOME" is not a shifter. Find the number of unique shifter words in the input string (without duplicates). All shifters to be counted, even if they are paired (like "MOM" and "WOW"). String contains only uppercase letters.
function shifter(s) {
	let matches = s
		.split(" ")
		.filter(
			(word) => (word.match(/[HINOSXZMW]/g) || []).length === word.length
		);
	return s == "" ? 0 : [...new Set(matches)].length;
}

//Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.
function divCon(x) {
	let nums = x.filter((n) => typeof n === "number");
	let str = x.filter((n) => typeof n === "string");
	return nums.reduce((p, c) => p + c, 0) - str.reduce((p, c) => +p + +c, 0);
}

//You have stumbled across the divine pleasure that is owning a dog and a garden. Now time to pick up all the cr@p! :D Given a 2D array to represent your garden, you must find and collect all of the dog cr@p - represented by '@'. You will also be given the number of bags you have access to (bags), and the capactity of a bag (cap). If there are no bags then you can't pick anything up, so you can ignore cap. You need to find out if you have enough capacity to collect all the cr@p and make your garden clean again. If you do, return 'Clean', else return 'Cr@p'. Watch out though - if your dog is out there ('D'), he gets very touchy about being watched. If he is there you need to return 'Dog!!'.
function crap(x, bags, cap) {
	if (x.some((e) => e.includes("D"))) {
		return "Dog!!";
	} else if ((x.join("").match(/@/g) || []).length <= cap * bags) {
		return "Clean";
	} else {
		return "Cr@p";
	}
}
