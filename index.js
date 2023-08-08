"use strict"
// GAME-BOARD MODULE
const myGameBoard = (function() {
    let _gameBoard = [" ", " ", " ", " ", " ", " ", " ", " ", " "];


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

    function printPlayer() {
       return `it is ${_currentPlayer.name}'s turn`;
    }

    function playRound(index) {
        _currentPlayer.addToBoard(index);
        switchPlayer();
        gameOver();
    }

    function gameOver() {
        // CHECK IF PLAYER ONE WINS
        if (myGameBoard.render()[0] === player1.marker &&
        myGameBoard.render()[1] === player1.marker &&
        myGameBoard.render()[2] === player1.marker) {
            myGameBoard.render().length = 0;
            switchPlayer();
            myDisplayController.playerOneWins();
        }
        if (myGameBoard.render()[3] === player1.marker &&
        myGameBoard.render()[4] === player1.marker &&
        myGameBoard.render()[5] === player1.marker) {
            myGameBoard.render().length = 0;
            switchPlayer();
            myDisplayController.playerOneWins();
        }
        if (myGameBoard.render()[6] === player1.marker &&
        myGameBoard.render()[7] === player1.marker &&
        myGameBoard.render()[8] === player1.marker) {
            myGameBoard.render().length = 0;
            switchPlayer();
            myDisplayController.playerOneWins();
        }
        if (myGameBoard.render()[0] === player1.marker &&
        myGameBoard.render()[3] === player1.marker &&
        myGameBoard.render()[6] === player1.marker) {
            myGameBoard.render().length = 0;
            switchPlayer();
            myDisplayController.playerOneWins();
        }
        if (myGameBoard.render()[1] === player1.marker &&
        myGameBoard.render()[4] === player1.marker &&
        myGameBoard.render()[7] === player1.marker) {
            myGameBoard.render().length = 0;
            switchPlayer();
            myDisplayController.playerOneWins();
        }
        if (myGameBoard.render()[2] === player1.marker &&
        myGameBoard.render()[5] === player1.marker &&
        myGameBoard.render()[8] === player1.marker) {
            myGameBoard.render().length = 0;
            switchPlayer();
            myDisplayController.playerOneWins();
        }
        if (myGameBoard.render()[6] === player1.marker &&
        myGameBoard.render()[4] === player1.marker &&
        myGameBoard.render()[2] === player1.marker) {
            myGameBoard.render().length = 0;
            switchPlayer();
            myDisplayController.playerOneWins();
        }
        if (myGameBoard.render()[0] === player1.marker &&
        myGameBoard.render()[4] === player1.marker &&
        myGameBoard.render()[8] === player1.marker) {
            myGameBoard.render().length = 0;
            switchPlayer();
            myDisplayController.playerOneWins();
        }
        // CHECK IF PLAYER 2 WINS
        if (myGameBoard.render()[0] === player2.marker &&
        myGameBoard.render()[1] === player2.marker &&
        myGameBoard.render()[2] === player2.marker) {
            myGameBoard.render().length = 0;
            switchPlayer();
            myDisplayController.playerTwoWins();
        }
        if (myGameBoard.render()[3] === player2.marker &&
        myGameBoard.render()[4] === player2.marker &&
        myGameBoard.render()[5] === player2.marker) {
            myGameBoard.render().length = 0;
            switchPlayer();
            myDisplayController.playerTwoWins();
        }
        if (myGameBoard.render()[6] === player2.marker &&
        myGameBoard.render()[7] === player2.marker &&
        myGameBoard.render()[8] === player2.marker) {
            myGameBoard.render().length = 0;
            switchPlayer();
            myDisplayController.playerTwoWins();
        }
        if (myGameBoard.render()[0] === player2.marker &&
        myGameBoard.render()[3] === player2.marker &&
        myGameBoard.render()[6] === player2.marker) {
            myGameBoard.render().length = 0;
            switchPlayer();
            myDisplayController.playerTwoWins();
        }
        if (myGameBoard.render()[1] === player2.marker &&
        myGameBoard.render()[4] === player2.marker &&
        myGameBoard.render()[7] === player2.marker) {
            myGameBoard.render().length = 0;
            switchPlayer();
            myDisplayController.playerTwoWins();
        }
        if (myGameBoard.render()[2] === player2.marker &&
        myGameBoard.render()[5] === player2.marker &&
        myGameBoard.render()[8] === player2.marker) {
            myGameBoard.render().length = 0;
            switchPlayer();
            myDisplayController.playerTwoWins();
        }
        if (myGameBoard.render()[6] === player2.marker &&
        myGameBoard.render()[4] === player2.marker &&
        myGameBoard.render()[2] === player2.marker) {
            myGameBoard.render().length = 0;
            switchPlayer();
            myDisplayController.playerTwoWins();
        }
        if (myGameBoard.render()[0] === player2.marker &&
        myGameBoard.render()[4] === player2.marker &&
        myGameBoard.render()[8] === player2.marker) {
            myGameBoard.render().length = 0;
            switchPlayer();
            myDisplayController.playerTwoWins();
        }
        // CHECK FOR A DRAW
        if (myGameBoard.render().length === 9 && 
        myGameBoard.render().every(i => !i.includes(" "))) {
            myGameBoard.render().length = 0;
            switchPlayer();
            myDisplayController.noPlayerWins();
        }
        

    }
    

    return {playRound, printPlayer, gameOver}
    
})();

// SCREEN CONTROLLER MODULE
const myDisplayController = (function() {

    // DOM elements
    const _gameContainer = document.querySelector(".game-grid-container");
    const _playerTurnDisplay = document.querySelector(".player-turn");

    const _playNameContainer = document.querySelector(".player-names-container");
    const _playBtnDiv = document.querySelector(".play-game");
    const _playGameBtn = document.querySelector(".play-game-btn");

    // methods that update display on the result of the game
    function playerOneWins() {
        _playerTurnDisplay.textContent = `Game Over! ${player1.name} Wins`;
        
        console.log(myGame.playerTurn);
    }

    function playerTwoWins() {
        _playerTurnDisplay.textContent = `Game Over! ${player2.name} Wins`;

        console.log(myGame.playerTurn);
    }

    function noPlayerWins() {
        _playerTurnDisplay.textContent = "Its a Tie!";
    }

    function _invalidMove() {
        _playerTurnDisplay.textContent = "Invalid! Click Empty Square";
    }

    // Method that updates screen after EACH player plays a turn
    function _updateScreen() {
        _gameContainer.textContent = "";

        // creates divs based on length of gameBoard array
        for (let i = 0; i < myGameBoard.render().length; i++) {
            let gameDiv = document.createElement("div");
            gameDiv.classList.add("game-grid");
            gameDiv.addEventListener("click", clickHandler);
            gameDiv.dataset.index = i;

            // Place player's marker on the clicked div
            if (myGameBoard.render()[i] === "x") {
                let divP = document.createElement("p");
                divP.textContent = "X";
                divP.classList.add("player-marker");
                gameDiv.append(divP);
            }else if (myGameBoard.render()[i] === "o") {
                let divP = document.createElement("p");
                divP.textContent = "O";
                divP.classList.add("player-marker");
                gameDiv.append(divP);
            }
            
            _playerTurnDisplay.textContent = myGame.printPlayer();
            
            
            _gameContainer.append(gameDiv);
            
        }
        
        console.log(_gameContainer);
    }

    // click event function added to all created box divs
    function clickHandler(e) {
        if (myGameBoard.render()[e.target.dataset.index] !== " ") {
            _invalidMove();
        }else{
            myGame.playRound(e.target.dataset.index);
            console.log(myGameBoard.render());
            _updateScreen()
        }
    }

    function _playerNames() {
        player1.name = document.getElementById("player-1").value;
        player2.name = document.getElementById("player-2").value;

        _playNameContainer.style.display = "none";
        _playBtnDiv.style.display = "none";

        _updateScreen();
    }

    _playGameBtn.addEventListener("click", _playerNames);

    
    return {playerOneWins, playerTwoWins, noPlayerWins}

})();


console.log(myGameBoard.render());


