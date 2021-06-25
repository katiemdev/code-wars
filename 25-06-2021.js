//Your job is to create a simple password validation function, as seen on many websites. The rules for a valid password are as follows:
// There needs to be at least 1 uppercase letter.
// There needs to be at least 1 lowercase letter.
// There needs to be at least 1 number.
// The password needs to be at least 8 characters long.
function password(str) {
	return (
		/[A-Z]/g.test(str) &&
		/[a-z]/g.test(str) &&
		/\d+/g.test(str) &&
		str.length >= 8
	);
}
