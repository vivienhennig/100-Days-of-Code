const counterContainer = document.getElementById('counterContainer');

let counter = 0;

function createLine() {
    if (counter === 0) {
        counterContainer.innerHTML = '';
    };
    
    if ((counter + 1) % 5 != 0) {
        console.log(true);
        const line = document.createElement('p');
        line.innerText = 'I';
        counterContainer.appendChild(line);
        counter++;
    } else {
        const diagonal = document.createElement('span');
        diagonal.innerText = 'I';
        counterContainer.appendChild(diagonal);
        counter++;
    };
};

counterContainer.addEventListener('click', () => createLine());