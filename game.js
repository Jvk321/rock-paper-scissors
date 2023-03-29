function getComputerChoice(x) {
    randomIndex = Math.floor(Math.random() * x.length);
    let item = x[randomIndex];
    return item;
}

const option = ['Rock', "Paper", "Scissors"]
console.log(getComputerChoice(option));