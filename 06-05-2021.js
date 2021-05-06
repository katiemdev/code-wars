//Given a 2D array of size m * n. Your task is to find the sum of minimum value in each row.
let sumOfMinimums = (arr) =>
	arr.map((e) => Math.min(...e)).reduce((p, c) => p + c, 0);

//Write a program that outputs the top n elements from a list.
let largest = (n, xs) =>
	xs
		.sort((a, b) => b - a)
		.slice(0, n)
		.reverse();

//You must implement a function that return the difference between the biggest and the smallest value in a list(lst) received as parameter.
let maxDiff = (list) =>
	list.length <= 1 ? 0 : Math.max(...list) - Math.min(...list);
