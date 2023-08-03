
// GAME-BOARD MODULE
const myGameBoard = (function() {
    let _gameBoard = [];


    function render() {
        return _gameBoard;
    }
    
    return {render}
})();



// PLAYER FACTORY FUNCTION
const myPlayers = function(name, marker) {
    return {
        addToBoard: function(index) {
            myGameBoard.render()[index] = marker;
        }
    }
}

// PLAYER OBJECTS
const player1 = myPlayers("symon", "x");
const player2 = myPlayers("Ogwe", "o");


// MY GAME MODULE
const myGame = (function() {
    let _allDiv = document.querySelectorAll(".game-grid");

    function gamePlay() {
        
    }

    return {gamePlay}
})();


console.log(myGameBoard.render());


myGame.gamePlay();
