// identify the shuffle button and listen for a click
let shuffleButton = document.getElementById("shuffle-button");
shuffleButton.addEventListener("click", function () {
	// identify list items in the speaker list (to be changed)
	let firstPerson = document.getElementById("first");
	let secondPerson = document.getElementById("second");
	let thirdPerson = document.getElementById("third");
	firstPerson.textContent = "Mango A Gogo";
	secondPerson.textContent = "🍓 Strawbery Whirl";
	thirdPerson.textContent = "Orange Dream Machine";
});
