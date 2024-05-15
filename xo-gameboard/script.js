// set up players turn
let currentPlayer = 'X';

// Define the game board (3x3 array)
let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];


// change turns
const changeTurn = () => {
    currentPlayer = (currentPlayer=='X')?'O':'X';
}

// check win condition
const checkWinCondition = () => {
    // check row
    for (let i=0; i<3; i++){
        if ((board[i][0] === board[i][1]) && (board[i][1] === board[i][2])){
            return board[i][0];
        }
    }
    // check diagonal
    if ((board[0][0] === board[1][1]) && (board[1][1] === board[2][2])
    || (board[0][2] === board[1][1]) && (board[1][1] === board[2][0])){
        return board[1][1];
    
    }
    // check column
    for (let j=0; j<3; j++){
        if ((board[0][j] === board[1][j]) && (board[1][j] === board[2][j])){
            return board[0][j];
        }
    }
    return null;
}

const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', ()=> {
    //TODO: reset
    resetGame();
})

const resetGame = () => {
    cellBtns.forEach((cellBtn, index) => {
        cellBtn.textContent = '';
        const row = Math.floor(index / 3); // Calculate row index
        const col = index % 3; // Calculate column index
        board[row][col] = ''; 
    });
    currentPlayer = 'X';
}

// click button to play - logic
const cellBtns = document.querySelectorAll('.cell');
cellBtns.forEach((cellBtn, index) => {
    cellBtn.addEventListener('click', ()=> {
        // update the html board and js board
        cellBtn.textContent = currentPlayer;
        const row = Math.floor(index / 3); // Calculate row index
        const col = index % 3; // Calculate column index
        board[row][col] = currentPlayer;

        console.log(board);

        const winner = checkWinCondition();
        if (winner) {
            // console.log(`${winner} wins!`);
            alert( `${winner} wins! Reset the match!`)
            resetGame();

        } else {
            changeTurn();
        }
    })
});


