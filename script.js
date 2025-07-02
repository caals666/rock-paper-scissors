let humanScore=0;
let computerScore=0;

function getComputerChoice(){
    let c=Math.floor(Math.random()*3);
    if(c==1){
        return "scissors";
    }
    else if(c==0){
        return "rock";
    }
    else{
        return "paper";
    }
}
function getHumanChoice(){
    let choice = prompt("Enter your choice: ","Rock, Paper, Scissors");
    choice=choice.toLowerCase();
    return choice;
}

function playRound(){
    let hc=getHumanChoice();
    let cc=getComputerChoice();
    if(hc=="rock"){
        if(cc=="rock"){
            console.log("Tie.")
        }
        else if(cc=="paper"){
            console.log("You lost, Paper beats Rock");
            computerScore+=1;
        }
        else{
            console.log("You won, Rock beats Scissors");
            humanScore+=1;
        }
    }
    else if(hc=="paper"){
        if(cc=="rock"){
            console.log("You won, Paper beats Rock");
            humanScore+=1;
        }
        else if(cc=="paper"){
            console.log("Tie");
        }
        else{
            console.log("You lost, Scissors beats Paper");
            computerScore+=1;
        }
    }
    else if(hc=="scissors"){
        if(cc=="rock"){
            console.log("You lost, Rock beats Scissors");
            computerScore+=1;
        }
        else if(cc=="scissors"){
            console.log("Tie.");
        }
        else{
            console.log("You won, Scissors beats Paper");
            humanScore+=1;
        }
    }
    else{
        console.log("Wrong input");
        getHumanChoice();
    }
}

function playGame(){
    let i=0;
    while(i<5){
        playRound();
        i+=1;
    }
}
playGame();
if(computerScore>humanScore){
            console.log("You lost the game");
        }
        else if(humanScore>computerScore){
            console.log("You won the game");
        }
        else{
            console.log("It's a tie");
}