const debug = true; // mode debug
var player = 1; //1 for Yellow (player1), 2 for Red (player2)
var row = 6;
var gameActive = false;
var jeu = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
];



///work/////

function startGame() {
    if (gameActive == true) return false;
    gameActive = true;
}



function drawBoard() {
    for (col = 0; col <= 6; col++) {
        for (row = 0; row <= 6; row++) {
            if (jeu[row][col] == 0) { //verify if the number in the array is 0
                document.getElementById("cell" + row + col).style.backgroundColor = "white";
            } else if (jeu[row][col] == 1) { //verify if the number in the array is 0
                document.getElementById("cell" + row + col).style.backgroundColor = "yellow";
            } else if (jeu[row][col] == 2) { //verify if the number in the array is 0
                document.getElementById("cell" + row + col).style.backgroundColor = "red";
            }
        }
    }
}

function displayPlay() {
    if (gameActive) {
        document.getElementById("colorTurn").innerHTML = "Tour : Joueur " + player;
    }
    if (player == 1) {
        document.getElementById("colorTurn").style.color = "yellow";
    } else {
        document.getElementById("colorTurn").style.color = "red";
    }
}

// add a piece to the lowest available column 
function selectColumn(col) {
    lookForWin();
    // Look for the lowest point in this row that is open
    for (row = 6; row >= 0; row--) {
        if (jeu[row][col] == 0) {
            jeu[row][col] = player;
            drawBoard();
            //change the active players turn:
            if (player == 1) {
                player = 2;
            } else {
                player = 1;
            }
            displayPlay();

            //stop looking for empty spaces
            return true;
        }
    }
}

// look if a player win and who's winning
function lookForWin() {
    //check horizontal
    for (i = 1; i <= 2; i++) {
        for (col = 0; col <= 3; col++) {
            for (row = 0; row <= 6; row++) {
                if (jeu[row][col] == i) {
                    if ((jeu[row][col + 1] == i) && (jeu[row][col + 2] == i) && (jeu[row][col + 3] == i)) {
                        endGame(i);
                        return true; //the game is ending
                    }
                }
            }
        }
    }
    //check vertical
    for (i = 1; i <= 2; i++) {
        for (col = 0; col <= 6; col++) {
            for (row = 0; row <= 3; row++) {
                if (jeu[row][col] == i) {
                    if ((jeu[row + 1][col] == i) && (jeu[row + 2][col] == i) && (jeu[row + 3][col] == i)) {
                        endGame(i);
                        return true;
                    }
                }
            }
        }
    }
    //chek diagonal direction 1
    for (i = 1; i <= 2; i++) {
        for (col = 0; col <= 3; col++) {
            for (row = 0; row <= 2; row++) {
                if (jeu[row][col] == i) {
                    if ((jeu[row + 1][col + 1] == i) && (jeu[row + 2][col + 2] == i) && (jeu[row + 3][col + 3] == i)) {
                        endGame(i);
                        return true;
                    }
                }
            }
        }
    }
    //check diagonal directon 2
    for (i = 1; i <= 2; i++) {
        for (col = 0; col <= 3; col++) {
            for (row = 3; row <= 5; row++) {
                if (jeu[row][col] == i) {
                    if ((jeu[row - 1][col + 1] == i) && (jeu[row - 2][col + 2] == i) && (jeu[row - 3][col + 3] == i)) {
                        endGame(i);
                        return true;
                    }
                }
            }
        }
    }

}

function endGame(winner) {
    gameActive = false;
    document.getElementById('winLose').innerHTML = "Joueur gagnant: joueur " + winner; //set the winning player
    if (player == 1) {
        document.getElementById("winLose").style.color = "red";
    } else {
        document.getElementById("winLose").style.color = "yellow";
    }
}












var reset = document.getElementById("resetButton");
resetButton.addEventListener("click",
    function resetGame() {
        location.reload();
    });