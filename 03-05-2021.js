//In a certain kingdom, strange mathematics is taught at school. Its main difference from ordinary mathematics is that the numbers in it are not ordered in ascending order, but lexicographically, as in a dictionary (first by the first digit, then, if the first digit is equal, by the second, and so on). In addition, we do not consider an infinite set of natural numbers, but only the first n numbers.Help your students to learn this science: write a function that receives two integer numbers: n (total amount of numbers in strange mathematics) and k (number from sequence) and returns the location of a given number k in the order defined in strange mathematics. Output: position of the number k in sequence of the first n natural numbers in lexicographic order. Numbering starts with 1.
function strangeMath(n, k) {
	let arr = [];
	for (let i = 1; i <= n; i++) {
		arr.push(i);
	}
	return arr.sort().indexOf(k) + 1;
}
