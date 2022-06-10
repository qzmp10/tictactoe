//1. make the html & css of the tic tac toe board X
//2. make the gameplay aspect (X's & O's appear on the board)
//3. make the storing game state aspect (multiple X's and O's)
//4. keep the players scores

//5. 

let gameboard = (function(){
    let state = 
    [{ topLeft: '' }, { topCtr: '' }, { topRight: '' }, 
    { midLeft: '' }, { midCtr: '' }, { midRight: '' }, 
    { btmLeft: '' }, { btmCtr: '' }, { btmRight: '' }];

    return { state }
})();

let playerClicksGameBoard = (function(){
    let playerTurn = 1;

    return { playerTurn }
})();


let alerts = (function() {

})();


let domElements = (function(){

    let playArea = document.querySelector('.ttt-game');
    let individualArea = playArea.querySelectorAll('.ttt-area');

    let markAreaWith_X_or_O = individualArea.forEach(area => {

        let areaId =  area.getAttribute('id');

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
                    if(gameboard.state.topLeft == 'marked') {
                        return;
                    } else {
                    gameboard.state.topLeft = 'marked';
                    markAreaAndFinishTurn();
                    }
                    break;

                case 'top-ctr':
                    if(gameboard.state.topCtr == 'marked') {
                        return;
                    } else {
                    gameboard.state.topCtr = 'marked';
                    markAreaAndFinishTurn();
                    }
                    break;

                case 'top-right':
                    if(gameboard.state.topRight == 'marked') {
                        return;
                    } else {
                    gameboard.state.topRight = 'marked';
                    markAreaAndFinishTurn();
                    }
                    break;

                case 'mid-left':
                    if(gameboard.state.midLeft == 'marked') {
                        return;
                    } else {
                    gameboard.state.midLeft = 'marked';
                    markAreaAndFinishTurn();
                    }
                    break;

                case 'mid-ctr':
                    if(gameboard.state.midCtr == 'marked') {
                        return;
                    } else {
                    gameboard.state.midCtr = 'marked';
                    markAreaAndFinishTurn();
                    }
                    break;

                case 'mid-right':
                    if(gameboard.state.midRight == 'marked') {
                        return;
                    } else {
                    gameboard.state.midRight = 'marked';
                    markAreaAndFinishTurn();
                    }
                    break;

                case 'btm-left':
                    if(gameboard.state.btmLeft == 'marked') {
                        return;
                    } else {
                    gameboard.state.btmLeft = 'marked';
                    markAreaAndFinishTurn();
                    }
                    break;

                case 'btm-ctr':
                    if(gameboard.state.btmCtr == 'marked') {
                        return;
                    } else {
                    gameboard.state.btmCtr = 'marked';
                    markAreaAndFinishTurn();
                    }
                    break;

                case 'btm-right':
                    if(gameboard.state.btmRight == 'marked') {
                        return;
                    } else {
                    gameboard.state.btmRight = 'marked';
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
