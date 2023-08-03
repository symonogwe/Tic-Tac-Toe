
// GAME-BOARD MODULE
const myGameBoard = (function() {
    let _gameBoard = ["x", "x", "x", "o", "x", "o"];

    function render() {
        return _gameBoard;
    }
    
    return {render}
})();



// PLAYER FACTORY FUNCTION
const myPlayers = function() {
    return {}
}

console.log(myGameBoard.render());


