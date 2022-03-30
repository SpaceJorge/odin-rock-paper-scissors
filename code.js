console.log("Hello World!")

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
            console.log("Rock");
            choice = "Rock";
            break;
        case random >= 33:
            console.log("Paper");
            choice = "Paper";
            break;
        default:
            console.log("Scissors");           
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
    } else {
        
        result = "Lose";
    }    
    return result;
}
function game(){
    let win = 0;

    for (let i=1; i<6;i++){
        let playerSelection = "undefined";
        let flag = 0;

        while ( flag == 0 ){
            playerSelection = prompt("Choose between Rock, Paper or Scissors");
            if (playerSelection == null) {
                console.log("You can't do that in the middle of a game!");
            }else if ( playerSelection.toLowerCase() == "rock" || playerSelection.toLowerCase() == "paper" || playerSelection.toLowerCase() == "scissors" ){
                flag = 1;
                console.log("bip bup processing results bip bup");
            }else{
                console.log("Wrong input, it can only be Rock, Paper or Scissors!");
            }
        }

        let computerSelection = computerPlay();
        let result = playRound(playerSelection,computerSelection);
        
        switch (result) {
            case "Win":
                console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
                win ++;
                break;
            case "Lose":
                console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
                break;
            default:
                console.log(`Wow a draw, what are the chances of you picking ${playerSelection} and the computer picking ${computerSelection}? :0`);
        }

        console.log(`You have won ${win} out of ${i} rounds.`);


    }
}

console.log("Let's play 5 rounds of rock paper scissors!");
game();
