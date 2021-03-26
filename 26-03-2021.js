//Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.
function replace(s) {
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let x = s.split("");
  for (let i = 0; i < vowels.length; i++) {
    for (let y = 0; y < x.length; y++) {
      if (vowels[i] == x[y]) {
        x[y] = "!";
      }
    }
  }
  return x.join("");
}
