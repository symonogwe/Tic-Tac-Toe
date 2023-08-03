
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


let allDiv = document.querySelectorAll(".game-grid");
allDiv.forEach(div => {
    div.addEventListener("click", player1.addToBoard.bind(div, div.dataset.index))
})

allDiv.forEach(div => {
    div.addEventListener("click", player2.addToBoard.bind(div, div.dataset.index))
})


console.log(myGameBoard.render());


