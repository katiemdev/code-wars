//Your task is to remove all duplicate words from a string, leaving only single (first) words entries.
let removeDuplicateWords = (s) => [...new Set(s.split(" "))].join(" ");
