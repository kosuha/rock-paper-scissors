const computerTag = document.querySelector('#computer');

const coordinates = {
    rock: '0',
    scissors: '-620',
    paper: '-1280'
}

// Image source: dribbble.com by Sacha Jerrems. URL => https://dribbble.com/shots/2193123-Rock-Paper-Scissors
const img = './img.png';

let coordinate = coordinates.rock;

computerTag.style.background = `url(${img}) ${coordinate}px 0px`;

setInterval(() => {
    if (coordinate === coordinates.rock) {
        coordinate = coordinates.scissors;
    } else if (coordinate === coordinates.scissors) {
        coordinate = coordinates.paper;
    } else if (coordinate === coordinates.paper) {
        coordinate = coordinates.rock;
    }
    computerTag.style.background = `url(${img}) ${coordinate}px 0px`;
}, 100);
