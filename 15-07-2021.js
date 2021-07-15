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

//Maya writes weekly articles to a well known magazine, but she is missing one word each time she is about to send the article to the editor. The article is not complete without this word. Maya has a friend, Dan, and he is very good with words, but he doesn't like to just give them away. He texts Maya a number and she needs to find out the hidden word. The words can contain only the letter: "a", "b", "d", "e", "i", "l", "m", "n", "o", and "t".
//Luckily, Maya has the key: "a" - 6 "b" - 1 "d" - 7 "e" - 4 "i" - 3 "l" - 2 "m" - 9 "n" - 8 "o" - 0 "t" - 5
//You can help Maya by writing a function that will take a number between 100 and 999999 and return a string with the word. The input is always a number, contains only the numbers in the key. The output should be always a string with one word, all lowercase.
function hiddenWord(num) {
	let answer = "";
	num = num
		.toString()
		.split("")
		.map((e) => (e = Number(e)));
	const letters = "oblietadnm".split("");
	num.forEach((n) => (answer += letters[n]));
	return answer;
}
