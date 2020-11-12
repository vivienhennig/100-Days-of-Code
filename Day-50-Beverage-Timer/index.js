const beverages = document.querySelectorAll('figure');
const timerDisplay = document.getElementById('timerContainer');

const dripCoffee = 210;
const espresso = 30;
const greenTea = 240;
const blackTea = 150;


function displayTimer(seconds) {
    let time = seconds;
    timerDisplay.innerHTML = '';
    const timeParagraph = document.createElement('p');
    timerDisplay.appendChild(timeParagraph);
    
    const interval = setInterval(() => {
        timingFunction(time);
        time--;
    }, 1000);
    
    function timingFunction(time) {
        if (time === 0) {
            clearInterval(interval);
            timeParagraph.innerHTML = '';
            const readyText = 'Your drink is ready!';
            timeParagraph.classList.add('animated');
            timeParagraph.innerText = readyText;
        } else {
            timeParagraph.innerHTML = `${time}<br><span>seconds until your drink is ready</span>`;
        };
    };
};


function getBeverageTime(event) {
    const id = (event.target.nodeName === 'FIGURE') ? event.target.id : event.target.parentNode.id;
    const target = (event.target.nodeName === 'FIGURE') ? event.target : event.target.parentNode;

    beverages.forEach(beverage => {
        if (beverage == target) {
            beverage.classList.add('chosen');
        } else {
            beverage.classList.remove('chosen');
        };
    });

    switch (id) {
        case 'dripCoffee':
            displayTimer(dripCoffee);
            break;
        case 'espresso':
            displayTimer(espresso);
            break;
        case 'greenTea':
            displayTimer(greenTea);
            break;
        case 'blackTea':
            displayTimer(blackTea);
            break;
        default:
            alert('sorry, something went wrong, please try again.');
            break;
    };
};


beverages.forEach(beverage => {
    beverage.addEventListener('click', (event) => getBeverageTime(event));
});