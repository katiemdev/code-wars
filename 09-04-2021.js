//Trolls are attacking your comment section! A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat. Your task is to write a function that takes a string and return a new string with all vowels removed.
let disemvowel = (str) => str.replace(/[aeiou]/gi, "");

//Write a function that appends the items from sequence 2 onto sequence 1, returning the newly formed sequence. Your function should also be able to handle nested sequences.
function appendArrays(arr1, arr2) {
	arr1.push(...arr2);
	return arr1;
}

//Write a function named repeater() that takes two arguments (a string and a number), and returns a new string where the input string is repeated that many times.
let repeater = (string, n) => string.repeat(n);
