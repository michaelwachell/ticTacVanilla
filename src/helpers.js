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
const startGame = () => {
  let form = document.querySelectorAll(".player-form");
  let p1 = document.getElementById("p1");
  let p2 = document.getElementById("p2");

  clearBoard();
  game.p1 = p1.value || "Player 1";
  game.p2 = p2.value || "Player 2";
  p2.value = "";
  p1.value = "";
  game.updateMessage(`It's ${game.p1}'s turn`);
};
