//Your task is to return the correct string using the Template String Feature.
var TempleStrings = function(obj, feature) {
    return `${obj} are ${feature}`
  }

//Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.
function remove(s){
    s = s.replace(/!/g, "")
    return s + "!"
  }