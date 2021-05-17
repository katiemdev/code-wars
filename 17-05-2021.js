//You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising. Your task is to return an array where each object will have a new property 'greeting' with the following string value: Hi < firstName here >, what do you like the most about < language here >?
function greetDevelopers(list) {
	for (let i = 0; i < list.length; i++) {
		list[
			i
		].greeting = `Hi ${list[i].firstName}, what do you like the most about ${list[i].language}?`;
	}
	return list;
}

//You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising. Your task is to return: true if at least one Ruby developer has signed up; or false if there will be no Ruby developers.
let isRubyComing = (list) =>
	list.filter((d) => d.language == "Ruby").length > 0;

//You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising. The list is ordered according to who signed up first. Your task is to return one of the following strings: < firstName here >, < country here > of the first Python developer who has signed up; or There will be no Python developers if no Python developer has signed up.
function getFirstPython(list) {
	for (let i = 0; i < list.length; i++) {
		if (list[i].language == "Python")
			return `${list[i].firstName}, ${list[i].country}`;
	}
	return "There will be no Python developers";
}

//Your task is to return an object (associative array in PHP) which includes the count of each coding language represented at the meetup.
function countLanguages(list) {
	let obj = {};
	for (let i = 0; i < list.length; i++) {
		if (!obj[list[i].language]) {
			obj[list[i].language] = 1;
		} else {
			obj[list[i].language]++;
		}
	}
	return obj;
}

//Your task is to return either: true if all developers in the list code in the same language; or false otherwise.
let isSameLanguage = (list) =>
	list.every((dev) => dev.language == list[0].language);
