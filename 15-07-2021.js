//Write a method that will search an array of strings for all strings that contain another string, ignoring capitalization. Then return an array of the found strings. The method takes two parameters, the query string and the array of strings to search, and returns an array. If the string isn't contained in any of the strings in the array, the method returns an array containing a single string: "Empty"
function wordSearch(query, seq) {
	const answer = seq.filter((e) => new RegExp(query, "gi").test(e));
	return answer.length > 0 ? answer : ["Empty"];
}

//Consider a game, wherein the player has to guess a target word. All the player knows is the length of the target word.To help them in their goal, the game will accept guesses, and return the number of letters that are in the correct position. Write a method that, given the correct word and the player's guess, returns this number. For example, here's a possible thought process for someone trying to guess the word "dog":
function countCorrectCharacters(correctWord, guess) {
	if (correctWord.length != guess.length) throw new Error();
	let answer = 0;
	for (let i = 0; i < correctWord.length; i++) {
		if (correctWord[i] === guess[i]) {
			answer++;
		}
	}
	return answer;
}

//In order to find out what the word is, you should use the sticker (array of 3 numbers) to retrive 3 letters from the comment (string) that create the word.Each of the numbers in the array refers to the position of a letter in the string, in increasing order. Spaces are not places, you need the actual letters. No spaces. The returned word should be all lowercase letters. if you can't find one of the letters using the index numbers, return "No mission today". Jenny would be very sad, but that's life... :(
function missingWord(nums, str) {
	nums = nums.sort((a, b) => a - b);
	str = str.replace(/ /g, "");
	let arr = [];

	for (let i in nums) {
		arr.push(str.charAt(nums[i]));
	}

	return arr.some((e) => e == "")
		? "No mission today"
		: arr.join("").toLowerCase();
}
