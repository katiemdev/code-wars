//Input: a string strng
//an array of strings arr
//Output of function contain_all_rots(strng, arr) (or containAllRots or contain-all-rots):
//a boolean true if all rotations of strng are included in arr (C returns 1)
//false otherwise (C returns 0)
function containAllRots(s, arr) {
	for (let i = 0; i < s.length; i++) {
		if (!arr.includes(s)) {
			return false;
		}
		s = s.slice(1) + s[0];
	}
	return true;
}
