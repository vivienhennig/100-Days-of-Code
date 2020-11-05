const body = document.getElementsByTagName('body')[0];
const countdownDisplay = document.getElementById('countdownDisplay');
let number = 0;

function countUp() {
    let color = number.toString(16).padStart(6, '0');
    if (number <= 16700000) {
        body.style.backgroundColor = `#${color}`;
        countdownDisplay.innerText = `#${color}`;
        number++;
    } else if (number <= 16777215) {
        body.style.backgroundColor = `#${color}`;
        countdownDisplay.innerText = `#${color}`;
        countdownDisplay.style.color = '#8d8d8d85';
        number++;
    }
};

setInterval(() => countUp(), 10);