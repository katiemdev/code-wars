//Write a function, format_poem() that takes a string like the one line example as an argument and returns a new string that is formatted across multiple lines with each new sentence starting on a new line when you print it out.
let formatPoem = (poem) => poem.split(". ").join(".\n");
