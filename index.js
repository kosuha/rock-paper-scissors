const computerTag = document.querySelector('#computer');
const rockTag = document.querySelector('#rock');
const scissorsTag = document.querySelector('#scissors');
const paperTag = document.querySelector('#paper');
const restartTag = document.querySelector('#restart');
const scoreTag = document.querySelector('#score');
const logTag = document.querySelector('#log');
const winLateTag = document.querySelector('#winLate');

const coordinates = {
    rock: '0',
    scissors: '-620',
    paper: '-1280'
};

let logs = {
    win: 0,
    lose: 0,
    draw: 0
};

const img = './img.png'; // Image source: dribbble.com by Sacha Jerrems.
let computerChoice = 'rock';
let pause = false;

computerTag.style.background = `url(${img}) ${coordinates[computerChoice]}px 0px`;

let interval = setInterval(changeImg, 50);

rockTag.addEventListener('click', () => {
    if (pause === false) {
        if (computerChoice === 'rock') {
            draw();
        }
        if (computerChoice === 'scissors') {
            win();
        }
        if (computerChoice === 'paper') {
            lose();
        }
        pauseImg();
    }
});

scissorsTag.addEventListener('click', () => {
    if (pause === false) {
        if (computerChoice === 'rock') {
            lose();
        }
        if (computerChoice === 'scissors') {
            draw();
        }
        if (computerChoice === 'paper') {
            win();
        }
        pauseImg();
    }
});

paperTag.addEventListener('click', () => {
    if (pause === false) {
        if (computerChoice === 'rock') {
            win();
        }
        if (computerChoice === 'scissors') {
            lose();
        }
        if (computerChoice === 'paper') {
            draw();
        }
        pauseImg();
    }
});

restartTag.addEventListener('click', () => {
    if (pause === true) {
        scoreTag.textContent = ''
        interval = setInterval(changeImg, 50);
        pause = false;
    }
});

function changeImg() {
    if (computerChoice === 'rock') {
        computerChoice = 'scissors';
    } else if (computerChoice === 'scissors') {
        computerChoice = 'paper';
    } else if (computerChoice === 'paper') {
        computerChoice = 'rock';
    }
    computerTag.style.background = `url(${img}) ${coordinates[computerChoice]}px 0px`;
}

function pauseImg() {
    if (pause === false) {
        clearInterval(interval);
        pause = true;
    }
    let sum = logs.win + logs.lose + logs.draw;
    winLateTag.textContent = `승률: ${(logs.win/sum).toFixed(2)} %`;
    logTag.textContent = `전적: ${sum}전 ${logs.win}승 ${logs.draw}무 ${logs.lose}패`;
}

function draw() {
    scoreTag.textContent = '무승부!';
    logs.draw++;
}

function win() {
    scoreTag.textContent = '승리!';
    logs.win++;
}

function lose() {
    scoreTag.textContent = '패배!';
    logs.lose++;
}