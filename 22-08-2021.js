//Given a non-empty array of non-empty integer arrays, multiply the contents of each nested array and return the smallest total.
function smallestProduct(arr) {
	const multiples = arr.map((e) => e.reduce((p, c) => p * c));
	return multiples.sort((a, b) => a - b)[0];
}
