let player1 = prompt("Player 1: Enter your name");
let player2 = prompt("Player 2: Enter your name");
let choice = prompt("Who wants to go first? Enter your name");
let symbol = prompt("Player " + choice + " what do you want, X or O?");
symbol=symbol.toUpperCase();
let turnO = (symbol === "O");
let c = 0;
let gameEnded = false;
let winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const boxes = document.querySelectorAll(".box");
const message = document.querySelector(".message");
const reset = document.querySelector("#reset");
const newbtn = document.querySelector("#ng");
const msg = document.querySelector("#msg");
const msg_container = document.querySelector(".msg-container");

const newGame = () => {
    let player1 = prompt("Player 1: Enter your name");
    let player2 = prompt("Player 2: Enter your name");
    let choice = prompt("Who wants to go first? Enter your name");
    let symbol = prompt("Player " + choice + " what do you want, X or O?");
    message.innerText = "";
    msg.innerText = "";
    c = 0;
    turnO = (symbol === "O");
    gameEnded = false;
    enableBoxes();
    msg_container.classList.add("hide");
}
const resetGame = () => {
    message.innerText = "";
    msg.innerText = "";
    c = 0;
    turnO = (symbol === "O");
    gameEnded = false;
    enableBoxes();
    msg_container.classList.add("hide");
}
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (gameEnded) return; 
        c++;
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if (pos1 !== '' && pos2 !== '' && pos3 !== '') {
            if (pos1 === pos2 && pos2 === pos3) {
                disableBoxes();
                let winner = (pos1 === symbol) ? choice : (choice === player1 ? player2 : player1);
                msg.innerText = "Congratulations, " + winner + ", you won!";
                msg_container.classList.remove("hide");
                gameEnded = true;
                return; 
            }
        }
    }
    if (c === 9 && !gameEnded) {
        message.innerText = "It's a draw, Click reset button to play again!";
        gameEnded = true;
    }
}

newbtn.addEventListener("click", newGame);
reset.addEventListener("click", resetGame);
