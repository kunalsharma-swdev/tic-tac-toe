let buttons = document.querySelectorAll(".box")
let turn = document.querySelector(".turn")
let restart = document.querySelector(".restart");
let win = document.querySelector(".win");
let overlay = document.querySelector(".overlay");

let current = "X";

let gameboard = ["","","",
                "","","",
                "","",""]

restart.addEventListener("click",()=>{
    location.reload();
})

let winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

buttons.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        if(item.textContent=="X" || item.textContent=="O"){
            return;
        }
        item.textContent=current;
        if(current=="X"){
            gameboard[index]="X";
            current="O";
        }
        else{
            gameboard[index]="O";
            current="X";
        }
        for(i=0;i<8;i++){
            if(winningPatterns[i].every(index=>gameboard[index]==="X")){
                win.style.display="flex";
                overlay.style.display="flex";
                win.style.flexDirection="column";
                win.style.justifyContent="center";
                win.style.alignItems="center";
                let text = document.createElement("span");
                text.textContent="X Wins!";
                win.appendChild(text);
                win.appendChild(restart);
                return;
            }
            if(winningPatterns[i].every(index=>gameboard[index]=="O")){
                win.style.display="flex";
                overlay.style.display="flex";
                win.style.flexDirection="column";
                win.style.justifyContent="center";
                win.style.alignItems="center";
                let text = document.createElement("span");
                text.textContent="O Wins!";
                win.appendChild(text);
                win.appendChild(restart);
                return;
            }
        }
        turn.textContent=`It is ${current}'s turn`;
    });
});

