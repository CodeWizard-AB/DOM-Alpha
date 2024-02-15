"use strict";

// * ELEMENTS SELECTIONS -

const homeScreen = document.getElementById("home-screen"),
	alphabet = document.getElementById("alphabet"),
	gameScore = document.getElementById("score"),
	gameLife = document.getElementById("life");

let [life, score] = [Number(gameLife.textContent), 0];

// * FUNCTIONS -

const generateAlphabet = function () {
	const alphabets = "abcdefghijklmnoqrstuvwsxyz".split("");
	const randomInt = Math.floor(Math.random() * 26);
	return alphabets[randomInt].toUpperCase();
};

// * EVENT HANDLERS -

document.querySelectorAll(".btn").forEach((btn) => {
	btn.addEventListener("click", function (e) {
		document.getElementById("play-screen").classList.remove("hidden");
		e.target.closest("section").classList.add("hidden");
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

	alphabet.textContent = generateAlphabet();
	if (life > 0) {
		e.key.toUpperCase() === alphabet.textContent ? score++ : life--;
		gameScore.textContent = score;
		gameLife.textContent = life;
	} else {
		document.querySelectorAll("section").forEach((section) => {
			if (section.getAttribute("id") === "score-screen") {
				section.classList.remove("hidden");
			} else {
				section.classList.add("hidden");
			}
		});
		document.getElementById("gameScore").textContent = score;
	}
});
