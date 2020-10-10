const body = document.getElementById('squareContainer');
const numOfSquares = Math.floor(Math.random() * 12) + 4;

for (let i = 1; i <= 10; i++) {
    const line = document.createElement('div');
    line.classList.add('line');

    for (let i = 1; i <= numOfSquares; i++) {
        const square = document.createElement('div');
        square.classList.add('coverDiv');
        line.appendChild(square);
    }

    body.appendChild(line);
}
