class TicGame {

    constructor() {
  
      this.p1 = '';
      this.p2 = '';
      this.currentTurn = 'x';
      this.p1Board = [];
      this.p2Board = [];
      this.message = "Enter Player Names and Click Submit to Start"
      this.winState = { 1 : [0,1,2],
                                          2 : [3,4,5],
                        3 : [6,7,8],
                        4 : [0,3,6],
                        5 : [1,4,7],
                        6 : [2,5,8],
                        7 : [0,4,8],
                        8 : [2,4,6]
                                  }
    }
  
    takeTurn(e) {
      this.fillSquare(e);
      let space = parseInt(e.id[e.id.length - 1]);
      if (this.currentTurn === 'x') {
        this.p1Board.push(space)
        this.gameEnd(this.p1Board)
      } else {
        this.p2Board.push(space);
        this.gameEnd(this.p2Board)
      }
      this.currentTurn === 'x' ? this.currentTurn = 'o' : this.currentTurn = 'x';
    }
  
    fillSquare(e) {
      let mark = this.currentTurn === 'x' ? EX : OH;
      e.innerHTML = mark;
  
    }
  
    gameEnd(board) {
        let name = this.currentTurn === 'x' ? this.p1 : this.p2 ;
      for (let key in this.winState) {
       let win = this.winState[key].every((num)=> {
           return board.indexOf(num) !== -1;
       });
       if(win === true) {
       this.p1Board = [];
       this.p2Board = [];
       this.updateMessage(`${name} wins!  Play again?`)
       }
       
       
       
      }
      
      
  
    }
  
    updateMessage(message) {
      const mes = document.querySelectorAll('#message');
      mes[0].innerHTML = message;
    }
  
  }
  
  // instantiate new game
  const game = new TicGame()
  