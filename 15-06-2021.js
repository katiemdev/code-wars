//You have to write a function pattern which returns the following Pattern(See Pattern & Examples) upto n number of rows.
function pattern(n) {
	let output = "";
	for (let i = 0; i < n; i++) {
		output += `${`${i + 1}`.repeat(i + 1)}\n`;
	}
	return output.slice(0, -1);
}
