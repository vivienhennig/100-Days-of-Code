const button = document.getElementById('button');

function moveButton() {
    const yCoordinate = Math.floor(Math.random() * 700);
    const xCoordinate = Math.floor(Math.random() * 1080);

    button.style.left = `${xCoordinate}px`;
    button.style.top = `${yCoordinate}px`;
};

button.addEventListener('mouseenter', moveButton);
button.addEventListener('click', () => alert('Not bad!'));