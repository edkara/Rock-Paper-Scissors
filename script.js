function blink_arrow() {
  $(".arrow").fadeOut(300);
  $(".arrow").fadeIn(300);
  console.log("BLAAAAAAAAAAA");
}
setInterval(blink_arrow, 500);

const computerChoice = document.getElementById("computer-choice");
const gameResult = document.getElementById("game-result");
const possibleChoices = document.getElementsByClassName("button");
const playerChoice = document.getElementById("player-choice");

Array.from(possibleChoices).forEach((possibleChoices) =>
  possibleChoices.addEventListener("click", (e) => {
    let selectedMove = e.target.id;
    for (i = 0; i < selectedMove.length; i++) {
      playerChoice.innerHTML += `<span style="margin: 0.3rem;">${selectedMove.charAt(i)}</span>`;
    }
    console.log("HAAAAAAAAAAAAAAAAAAAAAAA");
  })
);
