const userChoice = document.querySelector(".user-choice");
let computerPoints = 0, userPoints = 0;
userChoice.addEventListener("click", (event)=>{
    let target = event.target;
    if(target.classList.contains('user-choice')){
        console.log("Clicked outside the hitbox")
        return;
    }
    let computerChoice = getComputerChoice();
    let userChoice;
    switch(target.id){
        case 'rock':
            console.log("rock was clicked");
            userChoice = 'rock';
            break;
        case 'paper':
            console.log("paper was clicked");
            userChoice = 'paper';
            break;

        case 'scissors':
            console.log("scissors was clicked");
            userChoice = 'scissors'
            break;
    }
    if(playRound(userChoice, computerChoice) == 'h'){
        userPoints++;
    }
    else{
        computerPoints++;
    }
    displayscore(userPoints, computerPoints);
});
function displayscore(userPoints, computerPoints){
    const results = document.querySelector("#results");
    //use above instead of lower
    const running_score = document.querySelector("#results #running-score");
    running_score.textContent = `User: ${userPoints} Computer: ${computerPoints}`
    if(userPoints >= 5 || computerPoints >= 5){
        let winnerDisplay = document.querySelector("#winner-display");
        if(winnerDisplay != null){
            winnerDisplay.remove();
        }
        else{
        winnerDisplay = document.createElement("p")
        let winner ;
        if(userPoints > computerPoints)
            winner =  "user";
        else
            winner =  "computer";
        winnerDisplay.id = "winner-display";
        winnerDisplay.textContent = `Winner is: ${winner}`;
        results.appendChild(winnerDisplay);
        }
    }
}
// returns h if human wins, c if computer wins
function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase()
    const result = document.querySelector("#results #round-winner");
    if(computerChoice == "rock"){
        if(humanChoice == "paper"){
            result.textContent = "Paper beats rock. You win!";
            return 'h'
        }
        else if(humanChoice == "scissors"){
            result.textContent =  "Rock beats scissors. You lose!";
            return 'c'
        }
        else{
            result.textContent = ("Both selected rock. Draw!");
        }
    }
    else if(computerChoice == "paper"){
        if(humanChoice == "scissors"){
            result.textContent = ("Scissors beat paper. You win!");
            return 'h'
        }
        else if(humanChoice == "rock"){
            result.textContent = ("Paper beats rock. You lose!");
            return 'c'
        }
        else{
            result.textContent = ("Both selected paper. Draw!");
        }
    }
    else{ //scissors
        if(humanChoice == "rock"){
            result.textContent = ("rock beat scissors. You win!");
            return 'h';
        }
        else if(humanChoice == "paper"){
            result.textContent = ("scissors beat paper. You lose!");
            return 'c'
        }
        else{
            result.textContent = ("Both selected scissors. Draw!");
        }
    }

}

// function playGame(){



//     humanScore = 0;
//     computerScore = 0;

//     for(let i = 0; i < 5; i++){
//         let userChoice = getHumanChoice();
//         let computerChoice = getComputerChoice();
//         playRound(userChoice, computerChoice);
//     }
//     winner = humanScore > computerScore ?  "Human" : "Computer";
//     console.log(`The winner is: ${winner}`);
// }

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