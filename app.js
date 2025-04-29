let started=false;
let gameseq=[];
let userseq=[];
let score=[];
let turns=0;
let level=0;
let maxScore=0
let lastLvl=0;
let btns=["blue","red","green","pink"];
let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started==false){
        started=true;
        console.log("game is started");
        levelup();
    }
});

function levelup(){
    userseq=[];
 level +=1;
 h2.innerHTML=`Level ${level}`;
//random btn;
let maxScore=Math.max(...score);
if(turns>=1){
    h2.innerHTML=`Level ${level} <br> your Target is ${maxScore}`;
}
let randomIdx=Math.floor(Math.random()*4)+0;
let randomColor=btns[randomIdx];
let btn=document.querySelector(`.${randomColor}`);

btnflash(btn);
gameseq.push(randomColor);

}

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function btnPress(){
   let btn=this;
   btnflash(btn);
   let usercolor =btn.getAttribute("id");
    userseq.push(usercolor);
    checkAns(userseq.length-1);
}


let allbtn=document.querySelectorAll(".box");
for(btn of allbtn){
    btn.addEventListener("click",btnPress);
}


function checkAns(idx){
    if(userseq[idx]==gameseq[idx]){
       if(gameseq.length==userseq.length){
         setTimeout(levelup,1000);
       }
    }
    else{
         lastLvl=level;
         reset()
         turns +=1;
         score.push(lastLvl);
         maxScore=Math.max(...score);
         h2.innerHTML=`Game Is Over  <b>Your Score Is ${level} <br> Maximum Score is ${maxScore}<br>Press Any Key To Start `;
    } 
}
function reset(){
    started=false;
    level=0;
    userseq=[];
    gameseq=[];
}