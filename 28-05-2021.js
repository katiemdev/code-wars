//For every string, after every occurrence of 'and' and/or 'but', insert the substring 'apparently' directly after the occurrence(s). If input does not contain 'and' or 'but', return the same string. If a blank string, return ''. If substring 'apparently' is already directly after an 'and' and/or 'but', do not add another. (Do not add duplicates).
function apparently(str) {
	if (!str.includes("and") && !str.includes("but")) return str;
	let and = new RegExp(/\band\b(?!\sapparently\b)/, "gi");
	let but = new RegExp(/\bbut\b(?!\sapparently\b)/, "gi");
	return str.replace(and, "and apparently").replace(but, "but apparently");
}

//You need to write a code that will return product ID from string representing URL for that product's page in your online shop. All URLs are formatted similarly, first there is a domain exampleshop.com, then we have name of a product separated by dashes(-), then we have letter p indicating start of product ID, then an actual ID (no limit on length), and lastly 8-digit long representation of date when product got added followed by .html.
function getProductId(url) {
	return url
		.match(/-p-\d+-\d{8}/g)
		.join("")
		.slice(3, -9);
}

//Insert an "egg" after each consonant. If there are no consonants, there will be no eggs. Argument will consist of a string with only alphabetic characters and possibly some spaces.
function heggeleggleggo(word) {
	return word
		.split("")
		.map((e) => (e = !/[aeiou\s]/i.test(e) ? e + "egg" : e))
		.join("");
}
