/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let icons = [
    { key: "♦", color: "red" },
    { key: "♥", color: "red" },
    { key: "♠", color: "black" },
    { key: "♣", color: "black" }
  ];

  let numbers = ["AS", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

  document.getElementById("button").addEventListener("click", () => {
    let audio = document.getElementById("theRock");
    audio.play();

    let randomIcon = icons[Math.floor(Math.random() * icons.length)];
    let randomNumber = numbers[Math.floor(Math.random() * numbers.length)];

    document.querySelector(".top-suit").innerHTML = randomIcon.key;
    document.querySelector(".top-suit").style.color = randomIcon.color;
    document.querySelector(".bottom-suit").innerHTML = randomIcon.key;
    document.querySelector(".bottom-suit").style.color = randomIcon.color;
    document.querySelector(".number").innerHTML = randomNumber;
  });

  setInterval(function() {
    document.querySelector("#button").click();
  }, 3000);

  document.getElementById("stopMusic").addEventListener("click", () => {
    let audio = document.getElementById("theRock");
    audio.pause();
  });
};

var widthInput = document.getElementById("width-input");
var heightInput = document.getElementById("height-input");
var card = document.querySelector(".card");

document.getElementById("doneButton").addEventListener("click", function() {
  var newWidth = widthInput.value;
  var newHeight = heightInput.value;

  card.style.width = newWidth + "rem";
  card.style.height = newHeight + "rem";
});
