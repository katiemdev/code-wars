//You are given an array of numbers in string form. Your task is to convert this to an array of numbers. Your function can only be a maximum of 30 characters long (not including whitespaces)! I have limited the char count because there is a very short and easy way to achieve this task.
let convert = (x) => x.map((e) => (e = +e));
