
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
        },
        marker,
        name
    }
}

const player1 = myPlayers("symon", "x");
const player2 = myPlayers("Ogwe", "o");


// MY GAME MODULE
const myGame = (function() {
    let _playerArray = [player1, player2];
    let _currentPlayer = _playerArray[0];

    function switchPlayer() {
        _currentPlayer = _currentPlayer === _playerArray[0] ? 
        _playerArray[1] : _playerArray[0];
    }

    function _printPlayer() {
        console.log(_currentPlayer);
    }

    function playRound(index) {
        _currentPlayer.addToBoard(index);
        switchPlayer();
        _printPlayer();
    }
    

    return {playRound}
    
})();


console.log(myGameBoard.render());


