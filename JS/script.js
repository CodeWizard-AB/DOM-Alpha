"use strict";

// * ELEMENTS SELECTIONS -

const homeScreen = document.getElementById("home-screen"),
	alphabet = document.getElementById("alphabet"),
	gameScore = document.getElementById("score"),
	gameLife = document.getElementById("life");

let [life, score] = [Number(gameLife.textContent), 0];

// * FUNCTIONS -

const showSection = function (section) {
	document.getElementById(section).classList.remove("hidden");
};

const hideSection = function (section) {
	document.getElementById(section).classList.add("hidden");
};

const generateAlphabet = function () {
	const alphabets = "abcdefghijklmnoqrstuvwsxyz".split("");
	const randomInt = Math.floor(Math.random() * 26);
	return alphabets[randomInt].toUpperCase();
};

setInterval(() => {
	alphabet.textContent = generateAlphabet();
}, 2000);

// * EVENT HANDLERS -

document.querySelectorAll(".btn").forEach((btn) => {
	btn.addEventListener("click", function (e) {
		showSection("play-screen");
		e.target.closest("section").classList.add("hidden");
	});
});

document.getElementById("keyboard").addEventListener("click", function (e) {
	const clicked = e.target;
	document.querySelectorAll(".kbd").forEach((key) => {
		key.style.background = "white";
	});
	if (clicked.classList.contains("kbd")) clicked.style.background = "#FFA500";
});

document.addEventListener("keyup", function (e) {
	if (life > 0) {
		e.key.toUpperCase() === alphabet.textContent ? score++ : life--;
		gameScore.textContent = score;
		gameLife.textContent = life;
	} else {
		hideSection("home-screen");
		hideSection("play-screen");
		showSection("score-screen");
		document.getElementById("gameScore").textContent = score;
	}
});
