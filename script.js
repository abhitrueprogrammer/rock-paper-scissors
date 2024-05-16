console.log("Hello World")
playGame()
function playGame(){
    humanScore = 0;
    computerScore = 0;
    function playRound(humanChoice, computerChoice){
        humanChoice = humanChoice.toLowerCase()
        if(computerChoice == "rock"){
            if(humanChoice == "paper"){
                console.log("Paper beats rock. You win!");
                humanScore++;
            }
            else if(humanChoice == "scissors"){
                console.log("Rock beats scissors. You lose!");
                computerScore++;
            }
            else{
                console.log("Both selected rock. Draw!");
            }
        }
        else if(computerChoice == "paper"){
            if(humanChoice == "scissors"){
                console.log("Scissors beat paper. You win!");
                humanScore++;
            }
            else if(humanChoice == "rock"){
                console.log("Paper beats rock. You lose!");
                computerScore++;
            }
            else{
                console.log("Both selected paper. Draw!");
            }
        }
        else{ //scissors
            if(humanChoice == "rock"){
                console.log("rock beat scissors. You win!");
                humanScore++;
            }
            else if(humanChoice == "paper"){
                console.log("scissors beat paper. You lose!");
                computerScore++;
            }
            else{
                console.log("Both selected scissors. Draw!");
            }
        }
    
    }
    for(let i = 0; i < 5; i++){
        let userChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(userChoice, computerChoice);
    }
    winner = humanScore > computerScore ?  "Human" : "Computer";
    console.log(`The winner is: ${winner}`);
}

function getComputerChoice()
{
    const choice = ["rock", "paper", "scissors"]
    let index_return = Math.random() * 3
    if (index_return < 1){
        return choice[0]
    }
    else if (index_return < 2){
        return choice[1]
    }
    else{
        return choice[2]
    }
}
//return NaN if user inputs a string
function getHumanChoice()
{
    let message = "Enter(Rock, paper, scissors): ";
    let response = prompt(message)
    return response
}