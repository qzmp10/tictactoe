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


let domElements = (function(){

    let playArea = document.querySelector('.ttt-game');
    let individualArea = playArea.querySelectorAll('.ttt-area');

    let markAreaWith_X_or_O = individualArea.forEach(area => {

        let areaId =  area.getAttribute('id');

        function getAreaIdAndMarkArea() {
            switch (areaId) {
                case 'top-left':
                    gameboard.state.topLeft = 'marked';
                    break;
                case 'top-ctr':
                    gameboard.state.topCtr = 'marked';
                    break;
                case 'top-left':
                    gameboard.state.topLeft = 'marked';
                    break;
                case 'top-ctr':
                    gameboard.state.topCtr = 'marked';
                    break;
                case 'top-left':
                    gameboard.state.topLeft = 'marked';
                    break;
                case 'top-ctr':
                    gameboard.state.topCtr = 'marked';
                    break;
                case 'top-left':
                    gameboard.state.topLeft = 'marked';
                    break;
                case 'top-ctr':
                    gameboard.state.topCtr = 'marked';
                    break;
                case 'top-ctr':
                    gameboard.state.topCtr = 'marked';
                    break;        
            }
        }

        area.addEventListener('click', () => {

            if (playerClicksGameBoard.playerTurn === 1) {
                area.textContent = 'X';
                playerClicksGameBoard.playerTurn = 2;
                getAreaIdAndMarkArea();
            } 
            else if (playerClicksGameBoard.playerTurn === 2) {
                area.textContent = 'O';
                playerClicksGameBoard.playerTurn = 1;
            }
        })
    })

    return { playArea, individualArea, markAreaWith_X_or_O };
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
