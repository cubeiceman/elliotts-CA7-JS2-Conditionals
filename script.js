// gets player name and their choice
const name = prompt("Welcome to Bear Hunter Ninja! Please enter your name to get started:");
alert(`Hi ${name} Let's play!!`);
const playerChoice = prompt("Who are you: Bear, Hunter, or Ninja?");

// hashmap/dictionary to convert the character to a numnber
const characterNum = new Map([
  ["bear", 0],
  ["hunter", 1],
  ["ninja", 2]
]);

// insert logic to get computer to pick a choice
const compChoice = characterNum.get("bear")

// logic to determine to wins or not ------------------------------------------
// save who won for later
let winState;

// calculation to see who won, modulo to keep the range between 0 and 2
switch ((3 + characterNum.get(playerChoice.toLowerCase()) - compChoice) % 3) {
  case 1:  // win
    winState = 1;
    break;
  case 2:  // lose
    winState = 2;
    break;
  default:  // tie
    winState = 0;
    break;
};

//logs the results to the console and webpage ---------------------------------
console.log(`${name} You picked ${playerChoice}!`);
console.log(`The computer picked Bear!`);

document.getElementById("player").innerHTML = `${name}, You picked ${playerChoice}!`;
document.getElementById("computer").innerHTML = `The computer picked Bear!`;

// based on the winState, print a different message
// 1 = win, 2 = lose, 0 = tie
if (winState === 1) {
  console.log(`You win!!`);
  document.getElementById("result").innerHTML = `You win!!`;
}
else if (winState === 0) {
  console.log(`It's a tie!`);
  document.getElementById("result").innerHTML = `It's a tie!`;
}
else {
  console.log(`You lose.`);
  document.getElementById("result").innerHTML = `You lose.`;
}