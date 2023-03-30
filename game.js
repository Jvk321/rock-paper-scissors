const option = ['Rock', "Paper", "Scissors"]
function getComputerChoice(option) {
    randomIndex = Math.floor(Math.random() * option.length);
    let item = option[randomIndex];
    return item;
}