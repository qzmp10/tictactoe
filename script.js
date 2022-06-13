
let gameboard = (function(){

    let state = 
    [{ topLeft: '', symbol: '' }, { topCtr: '', symbol: ''  }, { topRight: '', symbol: ''  }, 
    { midLeft: '', symbol: ''  }, { midCtr: '', symbol: ''  }, { midRight: '', symbol: ''  }, 
    { btmLeft: '', symbol: ''  }, { btmCtr: '', symbol: ''  }, { btmRight: '', symbol: ''  }];

    return { state }
})();


let playerClicksGameBoard = (function(){
    let playerTurn = 1;

    return { playerTurn }
})();


let alerts = (function() {

})();

let playerWin = (function() {
    let isTopLeftMarked = function() {
        if(gameboard.state[0].topLeft == 'marked' ) {
            return true;
        } else {
            return false;
        }
    }
    return { isTopLeftMarked }
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
                    if(gameboard.state[0].topLeft == 'marked') {
                        return;
                    } else {
                    gameboard.state[0].topLeft = 'marked';
                    markAreaAndFinishTurn();
                    }
                    break;

                case 'top-ctr':
                    if(gameboard.state[1].topCtr == 'marked') {
                        return;
                    } else {
                    gameboard.state[1].topCtr = 'marked';
                    markAreaAndFinishTurn();
                    }
                    break;

                case 'top-right':
                    if(gameboard.state[2].topRight == 'marked') {
                        return;
                    } else {
                    gameboard.state[2].topRight = 'marked';
                    markAreaAndFinishTurn();
                    }
                    break;

                case 'mid-left':
                    if(gameboard.state[3].midLeft == 'marked') {
                        return;
                    } else {
                    gameboard.state[3].midLeft = 'marked';
                    markAreaAndFinishTurn();
                    }
                    break;

                case 'mid-ctr':
                    if(gameboard.state[4].midCtr == 'marked') {
                        return;
                    } else {
                    gameboard.state[4].midCtr = 'marked';
                    markAreaAndFinishTurn();
                    }
                    break;

                case 'mid-right':
                    if(gameboard.state[5].midRight == 'marked') {
                        return;
                    } else {
                    gameboard.state[5].midRight = 'marked';
                    markAreaAndFinishTurn();
                    }
                    break;

                case 'btm-left':
                    if(gameboard.state[6].btmLeft == 'marked') {
                        return;
                    } else {
                    gameboard.state[6].btmLeft = 'marked';
                    markAreaAndFinishTurn();
                    }
                    break;

                case 'btm-ctr':
                    if(gameboard.state[7].btmCtr == 'marked') {
                        return;
                    } else {
                    gameboard.state[7].btmCtr = 'marked';
                    markAreaAndFinishTurn();
                    }
                    break;

                case 'btm-right':
                    if(gameboard.state[8].btmRight == 'marked') {
                        return;
                    } else {
                    gameboard.state[8].btmRight = 'marked';
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
