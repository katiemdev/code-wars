//You are given a string representing a number in binary. Your task is to delete all the unset bits in this string and return the corresponding number (after keeping only the '1's).
const eliminateUnsetBits = (n) => parseInt(n.replace(/0/g, ""), 2) || 0;
