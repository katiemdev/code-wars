//Given two arrays of strings, return the number of times each string of the second array appears in the first array.
function solve(arr1, arr2) {
	let answer = [];
	for (let i = 0; i < arr1.length; i++) {
		if (i == arr2.length) break;
		answer.push(arr1.filter((e) => e == arr2[i]).length);
	}
	return answer;
}
