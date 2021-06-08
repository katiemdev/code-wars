//Your job is to create a class called Song. A new Song will take two parameters, title and artist. You will also have to create an instance method named howMany() (or how_many()). The method takes an array of people who have listened to the song that day. The output should be how many new listeners the song gained on that day out of all listeners. Names should be treated in a case-insensitve manner, i.e. "John" is the same as "john". Also if the same person listened to it more than once a day it should only count them once.
class Song {
	constructor(title, artist) {
		(this.title = title), (this.artist = artist);
		this.listeners = [];
	}

	howMany(people) {
		people = [...new Set(people.map((e) => (e = e.toLowerCase())))];
		let newListeners = people.filter((p) => !this.listeners.includes(p));
		this.listeners.push(...newListeners);
		return newListeners.length;
	}
}
