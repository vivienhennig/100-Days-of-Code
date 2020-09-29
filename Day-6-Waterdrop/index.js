const waterdropContainer = document.getElementById('waterdropContainer');

const colors = ['#F94144', '#F3722C', '#F8961E', '#F9844A', '#F9C74F', '#90BE6D', '#43AA8B', '#4D908E', '#577590', '#277DA1'];

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
}

function addWaterdropAnimation(event) {
    const xCoordinate = event.clientX;
    const yCoordinate = event.clientY;
    const waterdrop = document.createElement('div');
    const color = getRandomColor();

    waterdrop.classList.add('waterdrop');
    waterdrop.style.backgroundColor = `${color}`;
    waterdrop.style.left = `${xCoordinate - 300}px`;
    waterdrop.style.top = `${yCoordinate - 150}px`;

    waterdropContainer.appendChild(waterdrop);
}

waterdropContainer.addEventListener('click', (event) => addWaterdropAnimation(event))