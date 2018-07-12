import
TicGame
from './ticGame';

let game = new TicGame()


const EX = `<div>X</div>`;
const OH = `<div>O</div>`;

const clearBoard = () => {
  const board = document.querySelectorAll(".piece");
  for (let i = 0; i < board.length; i++) {
    board.item(i).innerHTML = "";
  }

  board.p1Board = [];
  board.p2Board = [];
  board.currentTurn = "x";
};

// clear the board, populate the game object with players
const startGame = (player1, player2) => {
  let p1 = document.getElementById("p1");
  let p2 = document.getElementById("p2");
  if (!!game) {
    game = new TicGame(game.p1, game.p2)
  } else {
    let game = new TicGame(p1.value, p2.value)
  };
  clearBoard();
  p2.value = "";
  p1.value = "";
  game.updateMessage(`It's ${game.p1}'s turn`);
};

const snackBar = (message) => {

  var x = document.getElementById("snackbar");
  x.innerText = message;
  x.className = "show";
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 3000);

}

const bonk = (n) => {
  return 2 * n;
}


export {
  snackBar,
  startGame,
  clearBoard,
  bonk
}