
// GAME-BOARD MODULE
const myGameBoard = (function() {
    let _gameBoard = ["x", "x", "x", "o", "x", "o"];

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

console.log(myGameBoard.render());


