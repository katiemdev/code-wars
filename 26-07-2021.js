//We've got a very long string, containing a bunch of User IDs. This string is a listing, which seperates each user ID with a comma and a whitespace ("' "). Sometimes there are more than only one whitespace. Keep this in mind! Futhermore, some user Ids are written only in lowercase, others are mixed lowercase and uppercase characters. Each user ID starts with the same 3 letter "uid", e.g. "uid345edj". But that's not all! Some stupid student edited the string and added some hashtags (#). User IDs containing hashtags are invalid, so these hashtags should be removed!
function getUsersIds(str) {
	if (str.includes("#")) {
		str = str.replace(/#/g, "");
	}

	return str
		.split(",")
		.map((e) => (e = e.replace(/uid/, "").trim().toLowerCase()));
}
