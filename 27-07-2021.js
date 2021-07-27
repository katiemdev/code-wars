//Your dad doesn't really get punctuation, and he's always putting extra commas in when he posts. You can tolerate the run-on sentences, as he does actually talk like that, but those extra commas have to go! Write a function called dadFilter that takes a string as argument and returns a string with the extraneous commas removed. The returned string should not end with a comma or any trailing whitespace.
function dadFilter(str) {
	str = str.replace(/,{2,}/g, ",").trim();
	return str.charAt(str.length - 1) == "," ? str.slice(0, -1) : str;
}

//Implement String#whitespace?(str) (Ruby), String.prototype.whitespace(str) (JavaScript), String::whitespace(str) (CoffeeScript), or whitespace(str) (Python), which should return true/True if given object consists exclusively of zero or more whitespace characters, false/False otherwise.
String.prototype.whitespace = function () {
	return this.length == (this.match(/\s/g) || []).length;
};
