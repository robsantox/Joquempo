const $stoneButton = document.querySelector(".button-stone-player-1");
const $paperButton = document.querySelector(".button-paper-player-1");
const $scissorsButton = document.querySelector(".button-scissors-player-1");

const $fieldPlayer1 = document.querySelector(".field-player-1");
const $fieldPlayer2 = document.querySelector(".field-player-2");

$stoneButton.addEventListener("click", function () {
  $fieldPlayer1.innerHTML = '<img class="move-image" src="stone.png"/>';
});
$paperButton.addEventListener("click", function () {
  $fieldPlayer1.innerHTML = '<img class="move-image" src="paper.png"/>';
});
$scissorsButton.addEventListener("click", function () {
  $fieldPlayer1.innerHTML = '<img class="move-image" src="scissors.png"/>';
});

alert(number);
