

/*
Console Rock Paper Scissors Plan
Ask for the players choice (writting the option in a prompt)
check if it's usable
Run a random to determine the computers play (returns string)
compare the answers
show the result in a dialog

extra
keep the cumulative score
ask to play again
*/

function computerPlay() {
    let random = (Math.random()*100);
    let choice = "Scissors";
    switch (true) {
        case random >= 66:
            
            choice = "Rock";
            break;
        case random >= 33:
            
            choice = "Paper";
            break;
        default:
                     
    }
    return choice;

}
function playRound(playerSelection,computerSelection){
    let result = "undefined";
    const player = playerSelection.toLowerCase();
    const comp = computerSelection.toLowerCase();
    if (player == comp) {
        
        result = "Draw";
    } else if ( ( (player == "rock") && (comp == "scissors") ) || ( (player == "paper") && (comp == "rock") ) || ( (player == "scissors") && (comp == "paper") ) ){
        
        result = "Win";
        playerWins ++
        
    } else {
        
        result = "Lose";
        computerWins ++
    }  
    rounds++
    
    writeResult(result,player,comp);
    return result;
}

function writeResult(result,playerSelection,computerSelection){
   const p =  document.querySelector('#result');
   p.textContent = "";
   switch (result) {
    case "Win":
        p.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
        break;
    case "Lose":
        p.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
        break;
    case "Intro":
        p.textContent = "";
        break;
        default:
        p.textContent = `Wow a draw, what are the chances of you picking ${playerSelection} and the computer picking ${computerSelection}? :0`;
    }
}
function game(){
    const score = document.querySelector("#score");
    const trophy = document.querySelector("#trophy");
    score.textContent = "";
    if (rounds ==0) {
        score.textContent = `This game is about to start, the first one to get to 5 points gets a huge congratulation!`;
        score.style.cssText = "color: white; font-size: 16px;";
        rock.disabled = false;
        paper.disabled = false;
        scissors.disabled = false;
        start.disabled = true;
        trophy.src="images/trophy.jpg";
        trophy.style.width= "300px";

    } else if (playerWins == 5) {
        score.textContent = "Congratulations, you won!";
        score.style.cssText = "color: white; font-size: 26px;";
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
        start.disabled = false;
        trophy.src="images/congratulationsHuman.png";
        trophy.style.width= "500px";
    } else if (computerWins == 5){
        score.textContent = "Congratulations Computer, you won! Or in your language, bipbupbipbup";
        score.style.cssText = "color: white; font-size: 26px;";
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
        start.disabled = false;
        trophy.src="images/congratulationsComputer.png";
        trophy.style.width= "500px";
    }else{
        score.textContent = `Player Wins: ${playerWins} Computer Wins: ${computerWins} Rounds: ${rounds}.`;
    }
    
}


/*
console.log("Hello World!")
console.log("Let's play 5 rounds of rock paper scissors!");
game();
*/

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const start = document.querySelector("#start");
const gameSection = document.querySelector(".game");
const signup = document.querySelector("#signup");
let playerWins = 0;
let computerWins = 0;
let rounds = 0;

rock.disabled = true;
paper.disabled = true;
scissors.disabled = true;

start.addEventListener("click", () => {
    playerWins = 0;
    computerWins = 0;
    rounds = 0;
    gameSection.style.cssText="display:block;"
    writeResult("Intro",0,0);
    game();
    
});

rock.addEventListener("click", () => {
    playRound("rock", computerPlay());
    game();
});
paper.addEventListener("click", () => {
    playRound("paper", computerPlay());
    game();
});
scissors.addEventListener("click", ()=>{
    playRound("scissors", computerPlay());
    game();
});

signup.addEventListener("click",()=>{
    alert("Come on, you really shouldn't give me anything. Go out and be free while you can you sexy thang.");
});

