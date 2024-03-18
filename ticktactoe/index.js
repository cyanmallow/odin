function getComputerChoice(){
    const randomNumber = Math.floor(Math.random() *3);
    const options = ["rock", "paper", "scissors"];
    return options[randomNumber];
}

console.log(getComputerChoice());


document.getElementById('rock').addEventListener('click', function(){
    const computerChoice = getComputerChoice();
    if (computerChoice == 'rock') {
        alert('Draw!!');
    } else if (computerChoice == 'paper'){
        alert('You win!!');
    } else {
        alert("You lose :(");
    }
});

document.getElementById('paper').addEventListener('click', function(){
    const computerChoice = getComputerChoice();
    if (computerChoice == 'paper') {
        alert('Draw!!');
    } else if (computerChoice == 'scissors'){
        alert('You win!!');
    } else {
        alert("You lose :(");
    }
});

document.getElementById('scissors').addEventListener('click', function(){
    const computerChoice = getComputerChoice();
    if (computerChoice == 'scissors') {
        alert('Draw!!');
    } else if (computerChoice == 'rock'){
        alert('You win!!');
    } else {
        alert("You lose :(");
    }
});