
let gameboard = (function(){

    //did player already play in this area and which player marked it:
    let state = 
    [{ topLeft: '', symbol: '' }, { topCtr: '', symbol: ''  }, { topRight: '', symbol: ''  }, 
    { midLeft: '', symbol: ''  }, { midCtr: '', symbol: ''  }, { midRight: '', symbol: ''  }, 
    { btmLeft: '', symbol: ''  }, { btmCtr: '', symbol: ''  }, { btmRight: '', symbol: '' }];

    let resetGameboard = function() {
        gameboard.state = 
        [{ topLeft: '', symbol: '' }, { topCtr: '', symbol: ''  }, { topRight: '', symbol: ''  }, 
        { midLeft: '', symbol: ''  }, { midCtr: '', symbol: ''  }, { midRight: '', symbol: ''  }, 
        { btmLeft: '', symbol: ''  }, { btmCtr: '', symbol: ''  }, { btmRight: '', symbol: '' }];
    }

    return { state, resetGameboard }
})();

//whos turn is it
let playerClicksGameBoard = (function(){
    let playerTurn = 1;

    return { playerTurn }
})();

let win = (function() {

    //clears the textContent of the board
    let clearDom = function() {
        domElements.individualArea.forEach(area => {
            area.textContent = '';
        });
    }

    //checks if any win situation is met
    let checkWin = function() {
        firstRowWin();
        secondRowWin();
        thirdRowWin();
        firstColWin();
        secondColWin();
        thirdColWin();
        firstDiagWin();
        secondDiagWin();
    }

    //every win situation
    let firstRowWin = function() {
        if((gameboard.state[0].topLeft == 'marked' && gameboard.state[0].symbol == 'x') 
        && (gameboard.state[1].topCtr == 'marked' && gameboard.state[1].symbol == 'x') 
        && (gameboard.state[2].topRight == 'marked' && gameboard.state[2].symbol == 'x')) {
            alert(`${domElements.playerOne} wins!`);
            //resets gameboard state
            gameboard.resetGameboard();
            //clears the x's and o's on the board
            clearDom();
        } else if ((gameboard.state[0].topLeft == 'marked' && gameboard.state[0].symbol == 'o') 
        && (gameboard.state[1].topCtr == 'marked' && gameboard.state[1].symbol == 'o') 
        && (gameboard.state[2].topRight == 'marked' && gameboard.state[2].symbol == 'o')){
            alert(`${domElements.playerTwo} wins!`);
            gameboard.resetGameboard();
            clearDom();
        } else {
            return;
        }
    }

    let secondRowWin = function() {
        if((gameboard.state[3].midLeft == 'marked' && gameboard.state[3].symbol == 'x') 
        && (gameboard.state[4].midCtr == 'marked' && gameboard.state[4].symbol == 'x') 
        && (gameboard.state[5].midRight == 'marked' && gameboard.state[5].symbol == 'x')) {
            alert(`${domElements.playerOne} wins!`);
            gameboard.resetGameboard();
            clearDom();
        } else if ((gameboard.state[3].midLeft == 'marked' && gameboard.state[3].symbol == 'o') 
        && (gameboard.state[4].midCtr == 'marked' && gameboard.state[4].symbol == 'o') 
        && (gameboard.state[5].midRight == 'marked' && gameboard.state[5].symbol == 'o')){
            alert(`${domElements.playerTwo} wins!`);
            gameboard.resetGameboard();
            clearDom();
        } else {
            return;
        }
    }

    let thirdRowWin = function() {
        if((gameboard.state[6].btmLeft == 'marked' && gameboard.state[6].symbol == 'x') 
        && (gameboard.state[7].btmCtr == 'marked' && gameboard.state[7].symbol == 'x') 
        && (gameboard.state[8].btmRight == 'marked' && gameboard.state[8].symbol == 'x')) {
            alert(`${domElements.playerOne} wins!`);
            gameboard.resetGameboard();
            clearDom();
        } else if ((gameboard.state[6].btmLeft == 'marked' && gameboard.state[6].symbol == 'o') 
        && (gameboard.state[7].btmCtr == 'marked' && gameboard.state[7].symbol == 'o') 
        && (gameboard.state[8].btmRight == 'marked' && gameboard.state[8].symbol == 'o')){
            alert(`${domElements.playerTwo} wins!`);
            gameboard.resetGameboard();
            clearDom();
        } else {
            return;
        }
    }

    let firstColWin = function() {
        if((gameboard.state[0].topLeft == 'marked' && gameboard.state[0].symbol == 'x') 
        && (gameboard.state[3].midLeft == 'marked' && gameboard.state[3].symbol == 'x') 
        && (gameboard.state[6].btmLeft == 'marked' && gameboard.state[6].symbol == 'x')) {
            alert(`${domElements.playerOne} wins!`);
            gameboard.resetGameboard();
            clearDom();
        } else if ((gameboard.state[0].topLeft == 'marked' && gameboard.state[0].symbol == 'o') 
        && (gameboard.state[3].midLeft == 'marked' && gameboard.state[3].symbol == 'o') 
        && (gameboard.state[6].btmLeft == 'marked' && gameboard.state[6].symbol == 'o')){
            alert(`${domElements.playerTwo} wins!`);
            gameboard.resetGameboard();
            clearDom();
        } else {
            return;
        }
    }


    let secondColWin = function() {
        if((gameboard.state[1].topCtr == 'marked' && gameboard.state[1].symbol == 'x') 
        && (gameboard.state[4].midCtr == 'marked' && gameboard.state[4].symbol == 'x') 
        && (gameboard.state[7].btmCtr == 'marked' && gameboard.state[7].symbol == 'x')) {
            alert(`${domElements.playerOne} wins!`);
            gameboard.resetGameboard();
            clearDom();
        } else if ((gameboard.state[1].topCtr == 'marked' && gameboard.state[1].symbol == 'o') 
        && (gameboard.state[4].midCtr == 'marked' && gameboard.state[4].symbol == 'o') 
        && (gameboard.state[7].btmCtr == 'marked' && gameboard.state[7].symbol == 'o')){
            alert(`${domElements.playerTwo} wins!`);
            gameboard.resetGameboard();
            clearDom();
        } else {
            return;
        }
    }

    let thirdColWin = function() {
        if((gameboard.state[2].topRight == 'marked' && gameboard.state[2].symbol == 'x') 
        && (gameboard.state[5].midRight == 'marked' && gameboard.state[5].symbol == 'x') 
        && (gameboard.state[8].btmRight == 'marked' && gameboard.state[8].symbol == 'x')) {
            alert(`${domElements.playerOne} wins!`);
            gameboard.resetGameboard();
            clearDom();
        } else if ((gameboard.state[2].topRight == 'marked' && gameboard.state[2].symbol == 'o') 
        && (gameboard.state[5].midRight == 'marked' && gameboard.state[5].symbol == 'o') 
        && (gameboard.state[8].btmRight == 'marked' && gameboard.state[8].symbol == 'o')){
            alert(`${domElements.playerTwo} wins!`);
            gameboard.resetGameboard();
            clearDom();
        } else {
            return;
        }
    }

    let firstDiagWin = function() {
        if((gameboard.state[0].topLeft == 'marked' && gameboard.state[0].symbol == 'x') 
        && (gameboard.state[4].midCtr == 'marked' && gameboard.state[4].symbol == 'x') 
        && (gameboard.state[8].btmRight == 'marked' && gameboard.state[8].symbol == 'x')) {
            alert(`${domElements.playerOne} wins!`);
            gameboard.resetGameboard();
            clearDom();
        } else if ((gameboard.state[0].topLeft == 'marked' && gameboard.state[0].symbol == 'o') 
        && (gameboard.state[4].midCtr == 'marked' && gameboard.state[4].symbol == 'o') 
        && (gameboard.state[8].btmRight == 'marked' && gameboard.state[8].symbol == 'o')){
            alert(`${domElements.playerTwo} wins!`);
            gameboard.resetGameboard();
            clearDom();
        } else {
            return;
        }
    }

    let secondDiagWin = function() {
        if((gameboard.state[2].topRight == 'marked' && gameboard.state[2].symbol == 'x') 
        && (gameboard.state[4].midCtr == 'marked' && gameboard.state[4].symbol == 'x') 
        && (gameboard.state[6].btmLeft == 'marked' && gameboard.state[6].symbol == 'x')) {
            alert('Player 1 wins!');
            gameboard.resetGameboard();
            clearDom();
        } else if ((gameboard.state[2].topRight == 'marked' && gameboard.state[2].symbol == 'o') 
        && (gameboard.state[4].midCtr == 'marked' && gameboard.state[4].symbol == 'o') 
        && (gameboard.state[6].btmLeft == 'marked' && gameboard.state[6].symbol == 'o')){
            alert(`${domElements.playerTwo} wins!`);
            gameboard.resetGameboard();
            clearDom();
        } else {
            return;
        }
    }
    

    return { checkWin, clearDom }
})();

let domElements = (function(){

    //selecting the html elements
    let playArea = document.querySelector('.ttt-game');
    let individualArea = playArea.querySelectorAll('.ttt-area');
    let inputBox = document.querySelector('.inputs');
    let gameHeader = document.querySelector('h1');
    let playButton = document.querySelector('.submit-names');
    let resetButton = document.querySelector('.reset');

    let playerOne = '';
    let playerTwo = '';

    //stores player names and makes the gameboard appear
    playButton.addEventListener('click', () => {
        domElements.playerOne = document.getElementById("player1").value;
        domElements.playerTwo = document.querySelector('#player2').value;
        playArea.style = 'transform: scale(1)';
        playArea.style.width = '16rem';
        playArea.style.height = '16rem';
        resetButton.style.height = '30px';
        resetButton.style.width = '130px';
        resetButton.style = 'transform: scale(1)';
        resetButton.style.margin = '1rem';
        gameHeader.style = 'transform: scale(0)';
        gameHeader.style.width = '0rem';
        gameHeader.style.height = '0rem';
        inputBox.style = 'transform: scale(0)';
        inputBox.style.width = '0rem';
        inputBox.style.height = '0rem';
        inputBox.style.padding = '0';
    })

    resetButton.addEventListener('click', () => {
        win.clearDom();
        gameboard.resetGameboard();
    });

    


    //functions for each individual tic-tac-toe area (stuff happens when u click the area)
    let markAreaWith_X_or_O = individualArea.forEach(area => {

        //different stuff happens depending on the area Id
        let areaId =  area.getAttribute('id');

        //this marks the DOM
        let markAreaAndFinishTurn = function() {
            if (playerClicksGameBoard.playerTurn === 1) {
                area.textContent = 'X';
                playerClicksGameBoard.playerTurn = 2;
            } 
            
            else if (playerClicksGameBoard.playerTurn === 2) {
                area.textContent = 'O';
                playerClicksGameBoard.playerTurn = 1;
            }
        }

        function getAreaIdAndMarkArea() {

            switch (areaId) {
                case 'top-left':

                //this marks the area, prevents player from overwriting area
                    if(gameboard.state[0].topLeft == 'marked') {
                        return;
                    } else {
                    gameboard.state[0].topLeft = 'marked';

                    //this marks the symbol in the state array, mostly to help determine when someone wins 
                    //(ex: three top in a row with x as a symbol = player 1 win)
                    if (playerClicksGameBoard.playerTurn == 1) {
                        gameboard.state[0].symbol = 'x';
                    } else if (playerClicksGameBoard.playerTurn == 2) {
                        gameboard.state[0].symbol = 'o';
                    }
                    markAreaAndFinishTurn();
                    win.checkWin();
                    }
                    break;

                case 'top-ctr':
                    if(gameboard.state[1].topCtr == 'marked') {
                        return;
                    } else {
                    gameboard.state[1].topCtr = 'marked';
                    
                    if (playerClicksGameBoard.playerTurn == 1) {
                        gameboard.state[1].symbol = 'x';
                    } else if (playerClicksGameBoard.playerTurn == 2) {
                        gameboard.state[1].symbol = 'o';
                    }
                    markAreaAndFinishTurn();
                    win.checkWin();
                    }
                    break;

                case 'top-right':
                    if(gameboard.state[2].topRight == 'marked') {
                        return;
                    } else {
                    gameboard.state[2].topRight = 'marked';

                    if (playerClicksGameBoard.playerTurn == 1) {
                        gameboard.state[2].symbol = 'x';
                    } else if (playerClicksGameBoard.playerTurn == 2) {
                        gameboard.state[2].symbol = 'o';
                    }
                    markAreaAndFinishTurn();
                    win.checkWin();
                    }
                    break;

                case 'mid-left':
                    if(gameboard.state[3].midLeft == 'marked') {
                        return;
                    } else {
                    gameboard.state[3].midLeft = 'marked';

                    if (playerClicksGameBoard.playerTurn == 1) {
                        gameboard.state[3].symbol = 'x';
                    } else if (playerClicksGameBoard.playerTurn == 2) {
                        gameboard.state[3].symbol = 'o';
                    }
                    markAreaAndFinishTurn();
                    win.checkWin();
                    }
                    break;

                case 'mid-ctr':
                    if(gameboard.state[4].midCtr == 'marked') {
                        return;
                    } else {
                    gameboard.state[4].midCtr = 'marked';

                    if (playerClicksGameBoard.playerTurn == 1) {
                        gameboard.state[4].symbol = 'x';
                    } else if (playerClicksGameBoard.playerTurn == 2) {
                        gameboard.state[4].symbol = 'o';
                    }
                    markAreaAndFinishTurn();
                    win.checkWin();
                    }
                    break;

                case 'mid-right':
                    if(gameboard.state[5].midRight == 'marked') {
                        return;
                    } else {
                    gameboard.state[5].midRight = 'marked';

                    if (playerClicksGameBoard.playerTurn == 1) {
                        gameboard.state[5].symbol = 'x';
                    } else if (playerClicksGameBoard.playerTurn == 2) {
                        gameboard.state[5].symbol = 'o';
                    }
                    markAreaAndFinishTurn();
                    win.checkWin();
                    }
                    break;

                case 'btm-left':
                    if(gameboard.state[6].btmLeft == 'marked') {
                        return;
                    } else {
                    gameboard.state[6].btmLeft = 'marked';

                    if (playerClicksGameBoard.playerTurn == 1) {
                        gameboard.state[6].symbol = 'x';
                    } else if (playerClicksGameBoard.playerTurn == 2) {
                        gameboard.state[6].symbol = 'o';
                    }
                    markAreaAndFinishTurn();
                    win.checkWin();
                    }
                    break;

                case 'btm-ctr':
                    if(gameboard.state[7].btmCtr == 'marked') {
                        return;
                    } else {
                    gameboard.state[7].btmCtr = 'marked';

                    if (playerClicksGameBoard.playerTurn == 1) {
                        gameboard.state[7].symbol = 'x';
                    } else if (playerClicksGameBoard.playerTurn == 2) {
                        gameboard.state[7].symbol = 'o';
                    }
                    markAreaAndFinishTurn();
                    win.checkWin();
                    }
                    break;

                case 'btm-right':
                    if(gameboard.state[8].btmRight == 'marked') {
                        return;
                    } else {
                    gameboard.state[8].btmRight = 'marked';

                    if (playerClicksGameBoard.playerTurn == 1) {
                        gameboard.state[8].symbol = 'x';
                    } else if (playerClicksGameBoard.playerTurn == 2) {
                        gameboard.state[8].symbol = 'o';
                    }
                    markAreaAndFinishTurn();
                    win.checkWin();
                    }
                    break;       
            }
        }

        area.addEventListener('click', () => {
            getAreaIdAndMarkArea();
        })
    })

    return { markAreaWith_X_or_O, individualArea, playerOne, playerTwo };
})();
