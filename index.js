
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
        _gameOver();
    }

    function _gameOver() {
        // player one wins
        if (myGameBoard.render()[0] === player1.marker &&
        myGameBoard.render()[1] === player1.marker &&
        myGameBoard.render()[2] === player1.marker) {
            console.log("PLAYER 1 WINS")
            myGameBoard.render().length = 0;
            switchPlayer();
        }
        if (myGameBoard.render()[3] === player1.marker &&
        myGameBoard.render()[4] === player1.marker &&
        myGameBoard.render()[5] === player1.marker) {
            console.log("PLAYER 1 WINS")
            myGameBoard.render().length = 0;
            switchPlayer();
        }
        if (myGameBoard.render()[6] === player1.marker &&
        myGameBoard.render()[7] === player1.marker &&
        myGameBoard.render()[8] === player1.marker) {
            console.log("PLAYER 1 WINS")
            myGameBoard.render().length = 0;
            switchPlayer();
        }
        if (myGameBoard.render()[0] === player1.marker &&
        myGameBoard.render()[3] === player1.marker &&
        myGameBoard.render()[6] === player1.marker) {
            console.log("PLAYER 1 WINS")
            myGameBoard.render().length = 0;
            switchPlayer();
        }
        if (myGameBoard.render()[1] === player1.marker &&
        myGameBoard.render()[4] === player1.marker &&
        myGameBoard.render()[7] === player1.marker) {
            console.log("PLAYER 1 WINS")
            myGameBoard.render().length = 0;
            switchPlayer();
        }
        if (myGameBoard.render()[2] === player1.marker &&
        myGameBoard.render()[5] === player1.marker &&
        myGameBoard.render()[8] === player1.marker) {
            console.log("PLAYER 1 WINS")
            myGameBoard.render().length = 0;
            switchPlayer();
        }
        if (myGameBoard.render()[6] === player1.marker &&
        myGameBoard.render()[4] === player1.marker &&
        myGameBoard.render()[2] === player1.marker) {
            console.log("PLAYER 1 WINS")
            myGameBoard.render().length = 0;
            switchPlayer();
        }
        if (myGameBoard.render()[0] === player1.marker &&
        myGameBoard.render()[4] === player1.marker &&
        myGameBoard.render()[8] === player1.marker) {
            console.log("PLAYER 1 WINS")
            myGameBoard.render().length = 0;
            switchPlayer();
        }
        // player 2 wins
        if (myGameBoard.render()[0] === player2.marker &&
        myGameBoard.render()[1] === player2.marker &&
        myGameBoard.render()[2] === player2.marker) {
            console.log("PLAYER 2 WINS")
            myGameBoard.render().length = 0;
            switchPlayer();
        }
        if (myGameBoard.render()[3] === player2.marker &&
        myGameBoard.render()[4] === player2.marker &&
        myGameBoard.render()[5] === player2.marker) {
            console.log("PLAYER 2 WINS")
            myGameBoard.render().length = 0;
            switchPlayer();
        }
        if (myGameBoard.render()[6] === player2.marker &&
        myGameBoard.render()[7] === player2.marker &&
        myGameBoard.render()[8] === player2.marker) {
            console.log("PLAYER 2 WINS")
            myGameBoard.render().length = 0;
            switchPlayer();
        }
        if (myGameBoard.render()[0] === player2.marker &&
        myGameBoard.render()[3] === player2.marker &&
        myGameBoard.render()[6] === player2.marker) {
            console.log("PLAYER 2 WINS")
            myGameBoard.render().length = 0;
            switchPlayer();
        }
        if (myGameBoard.render()[1] === player2.marker &&
        myGameBoard.render()[4] === player2.marker &&
        myGameBoard.render()[7] === player2.marker) {
            console.log("PLAYER 2 WINS")
            myGameBoard.render().length = 0;
            switchPlayer();
        }
        if (myGameBoard.render()[2] === player2.marker &&
        myGameBoard.render()[5] === player2.marker &&
        myGameBoard.render()[8] === player2.marker) {
            console.log("PLAYER 2 WINS")
            myGameBoard.render().length = 0;
            switchPlayer();
        }
        if (myGameBoard.render()[6] === player2.marker &&
        myGameBoard.render()[4] === player2.marker &&
        myGameBoard.render()[2] === player2.marker) {
            console.log("PLAYER 2 WINS")
            myGameBoard.render().length = 0;
            switchPlayer();
        }
        if (myGameBoard.render()[0] === player2.marker &&
        myGameBoard.render()[4] === player2.marker &&
        myGameBoard.render()[8] === player2.marker) {
            console.log("PLAYER 2 WINS")
            myGameBoard.render().length = 0;
            switchPlayer();
        }
        

    }
    

    return {playRound}
    
})();


console.log(myGameBoard.render());


