let playerX = document.querySelector(".playerx");
let playerO = document.querySelector(".playero");
let result = document.querySelector(".resultBox");
let boxes = document.querySelectorAll(".btn");

let winningPattern = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];


let player = "x";

let winner = (ele) => {
    let isWinner = false ;
    winningPattern.forEach(item=>{
        
    })
}

boxes.forEach(item => {
    item.addEventListener("click", e => {
        console.log("clicked");
        if (winner(player)) {
            alert("Winner hai");
        }
        else {
            if (e.target.innerText == "") {
                if (player == "x") {
                    e.target.innerText = "x";
                    player = "o";
                }
                else {
                    e.target.innerText = "o";
                    player = "x";
                }
            }
            else {
                // do nothing
                alert("Already Selected");
            }
        }
    })
})