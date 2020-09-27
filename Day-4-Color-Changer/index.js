const button = document.getElementById('colorChangeButton');
const body = document.getElementById('container');

const characters = `ABCDEF1234567890`;

function getRandomColor() {
    let colorCode = '';

    for (let i = 1; i <= 6; i++) {
        const stringIndex = Math.floor(Math.random() * 16);
        colorCode += characters[stringIndex];
    };

    return `#${colorCode}`;
};

function changeBackgroundColor() {
    const hexCode = getRandomColor();

    body.style.backgroundColor = `${hexCode}`;
    button.style.backgroundColor = `${hexCode}`;
}

button.addEventListener('click', changeBackgroundColor)