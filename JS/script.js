"use strict";

// * ELEMENTS SELECTIONS -

const homeScreen = document.getElementById("home-screen"),
	alphabet = document.getElementById("alphabet"),
	gameScore = document.getElementById("score"),
	gameLife = document.getElementById("life");

let life, score;

// * FUNCTIONS -

const gameStart = function () {
	[life, score] = [5, 0];
	gameScore.textContent = score;
	gameLife.textContent = life;
};

const generateAlphabet = function () {
	const alphabets = "abcdefghijklmnoqrstuvwsxyz".split("");
	const randomInt = Math.floor(Math.random() * 26);
	return alphabets[randomInt].toUpperCase();
};

const showSection = function (section) {
	document.getElementById(section).classList.remove("hidden");
};

const hideSection = function (section) {
	document.getElementById(section).classList.add("hidden");
};

// * EVENT HANDLERS -

document.querySelectorAll(".btn").forEach((btn) => {
	btn.addEventListener("click", function (e) {
		gameStart();
		showSection("play-screen");
		alphabet.textContent = generateAlphabet();
		hideSection(e.target.closest("section").getAttribute("id"));
	});
});

document.addEventListener("keyup", function (e) {
	document.querySelectorAll(".kbd").forEach((key) => {
		if (key.textContent === e.key) {
			key.style.background = "orange";
			setTimeout(() => {
				key.style.background = "white";
			}, 500);
		}
	});

	if (life > 0) {
		e.key.toUpperCase() === alphabet.textContent ? score++ : life--;
		gameScore.textContent = score;
		gameLife.textContent = life;
	} else {
		gameStart();
		document.getElementById("gameScore").textContent = score;
		document.querySelectorAll("section").forEach((section) => {
			if (section.getAttribute("id") === "score-screen") {
				section.classList.remove("hidden");
			} else {
				section.classList.add("hidden");
			}
		});
	}
	alphabet.textContent = generateAlphabet();
	if (e.key === "Escape") {
		document.querySelectorAll("section").forEach((sec) => {
			hideSection(sec.getAttribute("id"));
		});
		showSection("home-screen");
	}
});
