const EX = 'x'

const OH = `<tspan xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" sodipodi:role="line" id="tspan3099" x="-4.0406103" y="27.10034">O</tspan>`




const clearBoard = (board) => {
    for (let i = 0; i < board.length; i++) {
      board.item(i).innerHTML = '<div></div>'
    }
    
    board.p1Board = [];
    board.p2Board = [];
  }
  
  
  
  // clear the board, populate the game object with players
  const startGame = () => {
  
    let board = document.querySelectorAll('.piece')
    let form = document.querySelectorAll('.player-form');
    let p1 = document.getElementById('p1');
    let p2 = document.getElementById('p2');
  
    clearBoard(board);
    game.p1 = p1.value;
    game.p2 = p2.value;
    p2.value = '';
    p1.value = '';
    game.updateMessage(`It's ${game.p1}'s turn`);
  }
  