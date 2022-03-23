//jQuery
function blink_arrow() {
  $(".arrow").fadeOut(300);
  $(".arrow").fadeIn(300);
}
setInterval(blink_arrow, 500);

function docReady(fn) {
  if (
    document.readyState === "complete" ||
    document.readyState === "interactive"
  ) {
    setTimeout(fn, 1);
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

//vanilla Js
const computerChoice = document.getElementById("computer-choice");
const gameResult = document.getElementById("game-result");
const possibleChoices = document.getElementsByClassName("button");
const playerChoice = document.getElementById("player-choice");
let selectedMove;
let automaticMove;
let endResult;

function printPlayerChoice() {
  console.log("hi");
  Array.from(possibleChoices).forEach((possibleChoices) =>
    possibleChoices.addEventListener("click", (e) => {
      selectedMove = e.target.id;
      for (i = 0; i < selectedMove.length; i++) {
        playerChoice.innerHTML = `<span style="margin: 0.3rem;">${selectedMove}</span>`;
      }
      generateComputerChoice();
      result();
    })
  );
}

function generateComputerChoice() {
  //give me value between zero and three
  const randomNumber = Math.floor(Math.random() * possibleChoices.length);
  if(randomNumber === 0) {
    automaticMove = "Rock";
  } else if(randomNumber === 1) {
    automaticMove = "Paper";
  } else if(randomNumber === 2) {
    automaticMove = "Scissors";
  }
  computerChoice.innerHTML = `<span style="margin: 0.3rem;">${automaticMove}</span>`;
}

function result() {
  if(selectedMove === automaticMove) {
    endResult = "It's a draw!";
  } else if(automaticMove === "Rock" && selectedMove === "Paper") {
    endResult = "You win!";
  } else if(automaticMove === "Rock" && selectedMove === "Scissors") {
    endResult = "You lost!";
  } else if(automaticMove === "Paper" && selectedMove === "Scissors") {
    endResult = "You win!";
  } else if(automaticMove === "Paper" && selectedMove === "Rock") {
    endResult = "You lost!";
  } else if(automaticMove === "Scissors" && selectedMove === "Rock") {
    endResult = "You win!";
  } else if(automaticMove === "Sciossors" && selectedMove === "Paper") {
    endResult = "You lost!";
  }
  gameResult.innerHTML = `<span style="margin: 0.3rem;">${endResult}</span>`;
}

docReady(function () {
  printPlayerChoice();
});
