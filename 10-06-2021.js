//The world is in quarantine! There is a new pandemia that struggles mankind. Each continent is isolated from each other but infected people have spread before the warning. You would be given a map of the world in a type of string.  Your task is to find the percentage of human population that got infected in the end.
function infected(s) {
	if (!s.includes("1") && !s.includes("0")) return 0;
	let world = s.split("X");
	let population = 0,
		infected = 0;
	for (let i = 0; i < world.length; i++) {
		population += world[i].length;
		if (world[i].includes("1")) infected += world[i].length;
	}
	return (100 * infected) / population;
}
