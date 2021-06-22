//Gematria is an Assyro-Babylonian-Greek system of code and numerology later adopted into Jewish culture. The system assigns numerical value to a word or a phrase in the belief that words or phrases with identical numerical values bear some relation to each other or bear some relation to the number itself. While more commonly used on Hebrew words, there is also an English version. Each letter has a value and the gematrian value of a word or a phrase is the sum of those values. The code takes a word or an expression and returns the gematrian value of it.
function gematria(str) {
	str = str.toLowerCase().replace(/\W/g, "");
	let total = 0;
	const points = {
		a: 1,
		b: 2,
		c: 3,
		d: 4,
		e: 5,
		f: 6,
		g: 7,
		h: 8,
		i: 9,
		k: 10,
		l: 20,
		m: 30,
		n: 40,
		o: 50,
		p: 60,
		q: 70,
		r: 80,
		s: 90,
		t: 100,
		u: 200,
		x: 300,
		y: 400,
		z: 500,
		j: 600,
		v: 700,
		w: 900,
	};

	for (let i in str) {
		console.log(str[i], points[str[i]]);
		total += points[str[i]];
	}
	return total;
}
