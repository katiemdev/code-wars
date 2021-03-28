//You are trying to put a hash in ruby or an object in javascript or java into an array, but it always returns error, solve it and keep it as simple as possible!
items = []
items.push({a: "b", c: "d"})

//Sum all the numbers of the array (in F# and Haskell you get a list) except the highest and the lowest element (the value, not the index!). (The highest/lowest element is respectively only one element at each edge, even if there are more than one with the same value!)
function sumArray(array) {
    console.log(array)
    if(array === null || array.length == 0 || array.length == 1) {
      return 0
    }else {
    let max = array.reduce((p, c) => Math.max(p, c))
    let min = array.reduce((p, c) => Math.min(p, c))
    return array.reduce((p, c) => p + c) - max - min
     }
  }

  //You need to write a function that reverses the words in a given string. A word can also fit an empty string.
  let reverse = string => string.split(" ").reverse().join(" ")
