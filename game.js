const option = ['Rock', "Paper", "Scissors"]
function getComputerChoice(option) {
    optionIndex = Math.floor(Math.random() * option.length);
    let item = option[optionIndex];
    return item;
}
function playRound(playerSelection, computerSelection) {
    if (playerSelection == "Rock" && computerSelection == "Paper"){
        console.log("You Lose! Paper beats Rock")
    } 
    else if (playerSelection == "Scissors" && computerSelection == "Rock"){
        console.log("You Lose! Rock beats Scissors")
    } 
    else if (playerSelection == "Paper" && computerSelection == "Scissors"){
        console.log("You Lose! Rock beats Scissors")
    }
    else if (playerSelection == "Paper" && computerSelection == "Rock"){
        console.log("You Win! Paper beats Rock")
    }
    else if (playerSelection == "Rock" && computerSelection == "Scissors"){
        console.log("You Win! Rock beats Scissors")
    }
    else if (playerSelection == "Scissors" && computerSelection == "Paper"){
        console.log("You Win! Scissors beats Paper")
    }
    else console.log("It's a Tie!")
}
const playerSelection = "Rock";
const computerSelection = getComputerChoice(option);
console.log(playRound(playerSelection, computerSelection));