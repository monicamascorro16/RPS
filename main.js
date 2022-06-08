const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;


const playGame = () => {
    const rockBtn = document.querySelector('.rock');
    const paperBtn = document.querySelector('.paper');
    const scissorsBtn = document.querySelector('.scissors');
    const computerEnd = document.querySelectorAll('.computermoves');
    const playerPlay = [rockBtn, paperBtn, scissorsBtn];
    const computerPlay = ['Rock', 'Paper', 'Scissors'];
    

    playerPlay.forEach(play => {
        play.addEventListener('click', function() {
            const movesLeft = document.querySelector('.movesleft');
            moves++;
            movesLeft.innerText = `You Have ${5-moves} Moves Left to Defeat the Robot`;

            const choiceNumber = Math.floor(Math.random()*3);
            const computerChoice = computerPlay[choiceNumber];

            winner(this.innerText,computerChoice)

            if(moves == 5) {
                gameOver(playerPlay,movesLeft,computerEnd);
            }
        })
    })
}
const winner = (player,computer) => {
    const result = document.querySelector('.result');
    const playerGameBoard = document.querySelector('.p-count');
    const computerGameBoard = document.querySelector('.c-count');
    player = player.toLowerCase();
    computer = computer.toLowerCase();
    if(player === computer){
        result.textContent = 'Tie'
    }
    else if(player == 'rock') {
        if(computer == 'paper'){
            result.textContent = 'Point for Mr.Robot';
            computerScore++;
            computerGameBoard.textContent = computerScore;
        }else{
            result.textContent = 'Yay!'
            playerScore++;
            playerGameBoard.textContent = playerScore;
        }
    }
    else if(player == 'scissors'){
        if(computer == 'rock'){
            result.textContent = 'Point for Mr.Robot';
            computerScore++;
            computerGameBoard.textContent = computerScore;
        }else{
            result.textContent = 'Yay!'
            playerScore++;
            playerGameBoard.textContent = playerScore;
        }
    }
    else if(player == 'paper'){
        if(computer == 'scissors'){
            result.textContent = 'Point for Mr.Robot';
            computerScore++;
            computerGameBoard.textContent = computerScore;
        }else{
            result.textContent = 'Yay!'
            playerScore++;
            playerGameBoard.textContent = playerScore;
        }
    }
}

const gameOver = (playerPlay, movesLeft, computerEnd) => {
    const chooseMove = document.querySelector('.move');
    const result = document.querySelector('.result');
    const reloadBtn = document.querySelector('.reload');

    computerEnd.forEach(option => {
        option.style.display = 'none';
    })

    playerPlay.forEach(option => {
        option.style.display = 'none';
    })

    chooseMove.innerText = 'Game Over!';
    //chooseMove.style.display = 'center';
    movesLeft.style.display = 'none';

    if(playerScore > computerScore){
        result.innerText = 'Congrats! You win!';
    }else if(playerScore < computerScore){
        result.innerText = 'YOU LOSE!!';
    }else{
        result.innerText = 'Tie';
    }
    reloadBtn.innerText = 'Restart';
    reloadBtn.style.display = 'center';
    reloadBtn.addEventListener('click',() => {
        window.location.reload();
    })

}

playGame();

}

game();