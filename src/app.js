// function for getting a random integer between min and max
function getRandomInt(min, max) {
	// Math.random() gets a decimal between 0 and 1 inclusive
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function for creating a random order
function getNewOrder() {
	let previousList = ["Julie", "Josh", "Megan"];
	let newOrder = [];

	while (previousList.length > 1) {
		// get an index for a name in the previous list of names
		let index = getRandomInt(0, previousList.length - 1);

		// put that name into the new order, and remove it from the previous list of names
		newOrder.push(previousList[index]);
		previousList.splice(index, 1);
	}

	// put that last remaining name into the new order, and remove it from the previous list of names
	newOrder.push(previousList.shift());

	// return the new order of names
	return newOrder;
}

// identify the shuffle button and listen for a click
let shuffleButton = document.getElementById("shuffle-button");
shuffleButton.addEventListener("click", function () {
	// identify list items in the speaker list (to be changed)
	let firstPerson = document.getElementById("first");
	let secondPerson = document.getElementById("second");
	let thirdPerson = document.getElementById("third");

	// get a new speaker order
	let newSpeakerOrder = getNewOrder();

	// update the text content displayed in the HTML
	firstPerson.textContent = newSpeakerOrder[0];
	secondPerson.textContent = newSpeakerOrder[1];
	thirdPerson.textContent = newSpeakerOrder[2];
});
