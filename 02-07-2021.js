//You received an array with two strings. Create a function that will return their product as a string. E.g.
const arrMultiply = (arr) => (parseInt(arr[0]) * parseInt(arr[1])).toString();

//Write a function to validate the array of hash values. In this scenario, a valid hash value consists of five numbers and five lowercase letters in any order. Return an array of valid hash values, and eliminate any duplicates.
function malwareValidate(hashArr) {
	const result = [];
	for (let i = 0; i < hashArr.length; i++) {
		if (
			(hashArr[i].match(/[0-9]/gi) || []).length == 5 &&
			(hashArr[i].match(/[a-z]/g) || []).length == 5 &&
			hashArr[i].length == 10
		) {
			result.push(hashArr[i]);
		}
	}
	return [...new Set(result)];
}
