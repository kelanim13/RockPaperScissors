let userScore = 0; 
let computerScore = 0; 
const userScoreSpan = document.getElementById('user-score');
const computerScoreSpan = document.getElementById('computer-score');
const scoreBoardDiv = document.querySelector('.score-board');
const resultP = document.querySelector('.result > p'); 
const rockDiv = document.getElementById('r');
const paperDiv = document.getElementById('p');
const scissorsDiv = document.getElementById('s');

function getComputerChoice() {
    const choices = ['r', 'p', 's']; 
    const randomNumber = Math.floor(Math.random() * 3); 
    return choices[randomNumber]; 
}

function convertToWord(letter){
    if(letter === 'r') return 'Rock'; 
    if(letter === 'p') return 'Paper'; 
    return 'Scissors'
}

function win(userChoice, computerChoice){
    const smallUserWord = 'user'.fontsize(3).sub(); 
    const smallCompWord = 'comp'.fontsize(3).sub(); 
    const userChoiceDiv = document.getElementById(userChoice); 
    userScore++; 
    userScoreSpan.innerHTML = userScore; 
    computerScoreSpan.innerHTML = computerScore;
  
    resultP.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. You Win! 🔥`
    userChoiceDiv.classList.add('green-glow');
    setTimeout(() => userChoiceDiv.classList.remove('green-glow'), 300); 
}



function lose(userChoice, computerChoice){
    const smallUserWord = 'user'.fontsize(3).sub(); 
    const smallCompWord = 'comp'.fontsize(3).sub(); 
    const userChoiceDiv = document.getElementById(userChoice); 
    computerScore++; 
    userScoreSpan.innerHTML = userScore; 
    computerScoreSpan.innerHTML = computerScore;
    resultP.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord}. You Lost... 😢`
    userChoiceDiv.classList.add('red-glow');
    setTimeout(() => userChoiceDiv.classList.remove('red-glow'), 300); 
}

function draw(userChoice, computerChoice){
    const smallUserWord = 'user'.fontsize(3).sub(); 
    const smallCompWord = 'comp'.fontsize(3).sub(); 
    const userChoiceDiv = document.getElementById(userChoice); 
    resultP.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallCompWord}. A draw! 😒`
    userChoiceDiv.classList.add('blue-glow');
    setTimeout(() => userChoiceDiv.classList.remove('blue-glow'), 300); 
}

function game(userChoice){
    const computerChoice = getComputerChoice(); 
    switch(userChoice + computerChoice){
        case 'rs':
        case 'pr':
        case 'sp':
            win(userChoice, computerChoice);
            break; 
        case 'rp':
        case 'ps':
        case 'sr':
            lose(userChoice, computerChoice)
            break; 
        case 'rr':
        case 'pp':
        case 'ss':
            draw(userChoice, computerChoice); 
            break; 
    }
}

function main(){
    rockDiv.addEventListener('click', () => game('r'));
    paperDiv.addEventListener('click', () => game('p')); 
    scissorsDiv.addEventListener('click', () => game('s')); 
}

main(); 