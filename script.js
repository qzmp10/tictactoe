
let gameboard = (function(){

    //did player already play in this area and which player marked it:
    let state = 
    [{ topLeft: '', symbol: '' }, { topCtr: '', symbol: ''  }, { topRight: '', symbol: ''  }, 
    { midLeft: '', symbol: ''  }, { midCtr: '', symbol: ''  }, { midRight: '', symbol: ''  }, 
    { btmLeft: '', symbol: ''  }, { btmCtr: '', symbol: ''  }, { btmRight: '', symbol: '' }];

    return { state }
})();

//whos turn is it
let playerClicksGameBoard = (function(){
    let playerTurn = 1;

    return { playerTurn }
})();


let alerts = (function() {

})();


let win = (function() {

    // i need to do this for every win possibility
    // then need to make function that checks if player won game after turn 

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

    let firstRowWin = function() {
        if((gameboard.state[0].topLeft == 'marked' && gameboard.state[0].symbol == 'x') 
        && (gameboard.state[1].topCtr == 'marked' && gameboard.state[1].symbol == 'x') 
        && (gameboard.state[2].topRight == 'marked' && gameboard.state[2].symbol == 'x')) {
            alert('Player 1 wins!');
        } else if ((gameboard.state[0].topLeft == 'marked' && gameboard.state[0].symbol == 'o') 
        && (gameboard.state[1].topCtr == 'marked' && gameboard.state[1].symbol == 'o') 
        && (gameboard.state[2].topRight == 'marked' && gameboard.state[2].symbol == 'o')){
            return alert('Player 2 wins!');
        } else {
            return;
        }
    }

    let secondRowWin = function() {
        if((gameboard.state[3].midLeft == 'marked' && gameboard.state[3].symbol == 'x') 
        && (gameboard.state[4].midCtr == 'marked' && gameboard.state[4].symbol == 'x') 
        && (gameboard.state[5].midRight == 'marked' && gameboard.state[5].symbol == 'x')) {
            alert('Player 1 wins!');
        } else if ((gameboard.state[3].midLeft == 'marked' && gameboard.state[3].symbol == 'o') 
        && (gameboard.state[4].midCtr == 'marked' && gameboard.state[4].symbol == 'o') 
        && (gameboard.state[5].midRight == 'marked' && gameboard.state[5].symbol == 'o')){
            return alert('Player 2 wins!');
        } else {
            return;
        }
    }

    let thirdRowWin = function() {
        if((gameboard.state[6].btmLeft == 'marked' && gameboard.state[6].symbol == 'x') 
        && (gameboard.state[7].btmCtr == 'marked' && gameboard.state[7].symbol == 'x') 
        && (gameboard.state[8].btmRight == 'marked' && gameboard.state[8].symbol == 'x')) {
            alert('Player 1 wins!');
        } else if ((gameboard.state[6].btmLeft == 'marked' && gameboard.state[6].symbol == 'o') 
        && (gameboard.state[7].btmCtr == 'marked' && gameboard.state[7].symbol == 'o') 
        && (gameboard.state[8].btmRight == 'marked' && gameboard.state[8].symbol == 'o')){
            return alert('Player 2 wins!');
        } else {
            return;
        }
    }

    let firstColWin = function() {
        if((gameboard.state[0].topLeft == 'marked' && gameboard.state[0].symbol == 'x') 
        && (gameboard.state[3].midLeft == 'marked' && gameboard.state[3].symbol == 'x') 
        && (gameboard.state[6].btmLeft == 'marked' && gameboard.state[6].symbol == 'x')) {
            alert('Player 1 wins!');
        } else if ((gameboard.state[0].topLeft == 'marked' && gameboard.state[0].symbol == 'o') 
        && (gameboard.state[3].midLeft == 'marked' && gameboard.state[3].symbol == 'o') 
        && (gameboard.state[6].btmLeft == 'marked' && gameboard.state[6].symbol == 'o')){
            return alert('Player 2 wins!');
        } else {
            return;
        }
    }


    let secondColWin = function() {
        if((gameboard.state[1].topCtr == 'marked' && gameboard.state[1].symbol == 'x') 
        && (gameboard.state[4].midCtr == 'marked' && gameboard.state[4].symbol == 'x') 
        && (gameboard.state[7].btmCtr == 'marked' && gameboard.state[7].symbol == 'x')) {
            alert('Player 1 wins!');
        } else if ((gameboard.state[1].topCtr == 'marked' && gameboard.state[1].symbol == 'o') 
        && (gameboard.state[4].midCtr == 'marked' && gameboard.state[4].symbol == 'o') 
        && (gameboard.state[7].btmCtr == 'marked' && gameboard.state[7].symbol == 'o')){
            return alert('Player 2 wins!');
        } else {
            return;
        }
    }

    let thirdColWin = function() {
        if((gameboard.state[2].topRight == 'marked' && gameboard.state[2].symbol == 'x') 
        && (gameboard.state[5].midRight == 'marked' && gameboard.state[5].symbol == 'x') 
        && (gameboard.state[8].btmRight == 'marked' && gameboard.state[8].symbol == 'x')) {
            alert('Player 1 wins!');
        } else if ((gameboard.state[2].topRight == 'marked' && gameboard.state[2].symbol == 'o') 
        && (gameboard.state[5].midRight == 'marked' && gameboard.state[5].symbol == 'o') 
        && (gameboard.state[8].btmRight == 'marked' && gameboard.state[8].symbol == 'o')){
            return alert('Player 2 wins!');
        } else {
            return;
        }
    }

    let firstDiagWin = function() {
        if((gameboard.state[0].topLeft == 'marked' && gameboard.state[0].symbol == 'x') 
        && (gameboard.state[4].midCtr == 'marked' && gameboard.state[4].symbol == 'x') 
        && (gameboard.state[8].btmRight == 'marked' && gameboard.state[8].symbol == 'x')) {
            alert('Player 1 wins!');
        } else if ((gameboard.state[0].topLeft == 'marked' && gameboard.state[0].symbol == 'o') 
        && (gameboard.state[4].midCtr == 'marked' && gameboard.state[4].symbol == 'o') 
        && (gameboard.state[8].btmRight == 'marked' && gameboard.state[8].symbol == 'o')){
            return alert('Player 2 wins!');
        } else {
            return;
        }
    }

    let secondDiagWin = function() {
        if((gameboard.state[2].topRight == 'marked' && gameboard.state[2].symbol == 'x') 
        && (gameboard.state[4].midCtr == 'marked' && gameboard.state[4].symbol == 'x') 
        && (gameboard.state[6].btmLeft == 'marked' && gameboard.state[6].symbol == 'x')) {
            alert('Player 1 wins!');
        } else if ((gameboard.state[2].topRight == 'marked' && gameboard.state[2].symbol == 'o') 
        && (gameboard.state[4].midCtr == 'marked' && gameboard.state[4].symbol == 'o') 
        && (gameboard.state[6].btmLeft == 'marked' && gameboard.state[6].symbol == 'o')){
            return alert('Player 2 wins!');
        } else {
            return;
        }
    }
    

    return { checkWin }
})();


let domElements = (function(){

    let playArea = document.querySelector('.ttt-game');
    let individualArea = playArea.querySelectorAll('.ttt-area');

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
                    }
                    break;       
            }
        }

        area.addEventListener('click', () => {
            getAreaIdAndMarkArea();
        })
    })

    return { markAreaWith_X_or_O };
})();





// ------------------------------------------------------------

// -- examples of modules & factory functions -- //

// let myModule = (function() {
//     let privateSecret = 'osmosis GOT RUGGED!';
//     let _displayMessage = function() {
//         for (i = 0; i < 10; i++) {
//             console.log(privateSecret);
//         }
//     }
//     return {
//         publicMsgCall: function() {
//             _displayMessage();
//         }
//     }
// })();

// myModule.publicMsgCall();

// -----------------------------------------------------------

// let Veggie = (vegetable) => {
//     let whichVeggie =  function() {
//         console.log(vegetable);
//     }
//     return { whichVeggie };
// };

// let whichFknVeggie = Veggie('carrot');

// whichFknVeggie.whichVeggie();
