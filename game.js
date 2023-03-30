const option = ['rock', "paper", "scissors"]
function getComputerChoice(option) {
    optionIndex = Math.floor(Math.random() * option.length);
    let item = option[optionIndex];
    return item;
}
function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "paper"){
        console.log("You Lose! Paper beats Rock")
    } 
    else if (playerSelection == "scissors" && computerSelection == "rock"){
        console.log("You Lose! Rock beats Scissors")
    } 
    else if (playerSelection == "paper" && computerSelection == "scissors"){
        console.log("You Lose! Rock beats Scissors")
    }
    else if (playerSelection == "paper" && computerSelection == "rock"){
        console.log("You Win! Paper beats Rock")
    }
    else if (playerSelection == "rock" && computerSelection == "scissors"){
        console.log("You Win! Rock beats Scissors")
    }
    else if (playerSelection == "scissors" && computerSelection == "paper"){
        console.log("You Win! Scissors beats Paper")
    }
    else console.log("It's a Tie!")
}
const playerSelection = prompt("Choose rock, paper or scissors").toLowerCase();
const computerSelection = getComputerChoice(option);
console.log(playRound(playerSelection, computerSelection));