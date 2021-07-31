//Simplified number to money converter.
//Note:
// truncate to 2 decimal places
// don't keep trailing zeros
// input will be a positive number with at least two trailing digits
var numberToMoney = function (n) {
	n = n.toString().split(".");

	if (n[0].length == 4) {
		n[0] = n[0].substr(0, 1) + "," + n[0].substr(1);
	} else if (n[0].length == 5) {
		n[0] = n[0].substr(0, 2) + "," + n[0].substr(2);
	}

	if (n[1].charAt(1) == "0") {
		n[1] = n[1].slice(0, 1);
	} else {
		n[1] = n[1].slice(0, 2);
	}

	return n[1] == "0" ? n[0] : n[0] + "." + n[1];
};
