//1. make the html & css of the tic tac toe board X
//2. make the gameplay aspect (X's & O's appear on the board)
//3. make the storing game state aspect (multiple X's and O's)
//4. keep the players scores

//5. 

const Gameboard = () => {
    let gameboardState = [];
};

const PlayerScores = () => {

};

const PlayerTurn = () => {

};


//THIS WORKS LFG!!!! GOOD NIGHT MTL!
let domElements = (function(){

    let playArea = document.querySelector('.ttt-game');
    let playAreaClick = playArea.addEventListener('click', () => {
        playArea.style = 'background-color: red'
    })

    return { playAreaClick };
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
