let buttons = document.querySelectorAll(".box")
let turn = document.querySelector(".turn")
let restart = document.querySelector(".restart");

let current = "X";

restart.addEventListener("click",()=>{
    location.reload();
})

buttons.forEach(item=>{
    item.addEventListener("click",()=>{
        if(item.textContent=="X" || item.textContent=="O"){
            return;
        }
        item.textContent=current;
        if(current=="X"){
            current="O";
        }
        else{
            current="X";
        }
        turn.textContent=`It is ${current}'s turn`;
    });
});

