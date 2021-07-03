//Your job in this kata is to calculate the maximum speed you will achieve during your downhill run. The speed is dictated by the height of the mountain. Each element of the array is a layer of the mountain as indicated by the diagram above (and further below). So for this example the mountain has a height of 5 (5 rows of stars). Speed is mountain height * 1.5.
// The jump length is calculated by (mountain height * speed * 9) / 10. Jump length should be rounded to 2 decimal places.
// You must return the length of the resulting jump as a string in the following format:
// when less than 10 m: "X metres: He's crap!"
// between 10 and 25 m: "X metres: He's ok!"
// between 25 and 50 m: "X metres: He's flying!"
// when more than 50 m: "X metres: Gold!!"
function skiJump(mountain) {
	const height = mountain.length;
	const speed = height * 1.5;
	const length = ((height * speed * 9) / 10).toFixed(2);

	return `${length} metres: ${
		length < 10
			? "He's crap!"
			: length >= 10 && length < 25
			? "He's ok!"
			: length >= 25 && length < 50
			? "He's flying!"
			: "Gold!!"
	}`;
}
