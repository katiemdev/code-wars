//Complete the solution so that it returns the number of times the search_text is found within the full_text.
function solution(fullText, searchText) {
	return (fullText.match(new RegExp(searchText, "g")) || []).length;
}
