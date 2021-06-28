function select(arrSearch, arrTake) {
	//arrSearch has to be sorted in reverse alphabetical order
	arrSearch = arrSearch.sort().reverse();

	//Now, from arrSearch extract the third element, and from that element select the third letter.
	let third = arrSearch[2].charAt(2);

	//If the letter you selected matches the first letter of one or more elements of arrTake, return the first element that starts with the respective letter. If there is no element to match in the second array then return 'Nothing here'.
	if (arrTake.some((e) => e[0] === third)) {
		return arrTake.find((e) => e[0] === third);
	} else {
		return "Nothing here";
	}
}
