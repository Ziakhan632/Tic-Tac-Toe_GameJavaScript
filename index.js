let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let winnerDetail=document.querySelector("#msg");
let msgContainer=document.querySelector(".msg-container");
let newGame=document.querySelector(".new");
let turnO=true;

const resetGame=()=>{
    turnO=true;
    enabledBoxes();
    msgContainer.classList.add("hide")

}
newGame.addEventListener('click',resetGame)
resetBtn.addEventListener('click',resetGame)
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box,index)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;

        checkWinner();
        
    })
})
const disabledBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
    
}
const enabledBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
    
}
function showWinner(winner){
    winnerDetail.innerHTML=`Winner ${winner}`;
    msgContainer.classList.remove("hide")

     disabledBoxes()
}
const checkWinner=()=>{
    for(let pattern of winPatterns){
        let posVal1=boxes[pattern[0]].innerHTML;
        let posVal2=boxes[pattern[1]].innerHTML;
        let posVal3=boxes[pattern[2]].innerHTML;

        if(posVal1 !="" && posVal2 !="" && posVal3 !=""){
            if(posVal1 === posVal2 && posVal2 === posVal3){
                showWinner(posVal1);
            }
        }
    }
}
