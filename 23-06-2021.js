//Our fruit guy has a bag of fruit (represented as an array of strings) where some fruits are rotten. He wants to replace all the rotten pieces of fruit with fresh ones. For example, given ["apple","rottenBanana","apple"] the replaced array should be ["apple","banana","apple"]. Your task is to implement a method that accepts an array of strings containing fruits should returns an array of strings where all the rotten fruits are replaced by good ones.
function removeRotten(bag) {
	return bag
		? bag.map((e) =>
				e.includes("rotten")
					? (e = e.toLowerCase().replace(/rotten/gi, ""))
					: e.toLowerCase()
		  )
		: [];
}
