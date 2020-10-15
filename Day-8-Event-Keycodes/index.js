const body = document.querySelector('body');
const keyDisplayContainer = document.getElementById('keyCodeContainer');

function getKeyCode(event) {

    if (keyDisplayContainer.childElementCount != 0) {
        keyDisplayContainer.removeChild(keyDisplayContainer.childNodes[2]);
        keyDisplayContainer.removeChild(keyDisplayContainer.childNodes[1]);
    };

    const keyContainer = createDisplayDiv(event, 'event.key');
    const keyCodeContainer = createDisplayDiv(event, 'event.keyCode');

    keyDisplayContainer.appendChild(keyContainer);
    keyDisplayContainer.appendChild(keyCodeContainer);
};

function createDisplayDiv(event, title) {
    const container = document.createElement('div');
    const titleParagraph = document.createElement('p');
    const titleText = `${title}`;
    const contentParagraph = document.createElement('p');

    container.classList.add('displayKey');
    titleParagraph.innerText = titleText;
    contentParagraph.innerText = title === 'event.key' ? `${event.key}` : `${event.keyCode}`;

    container.appendChild(titleParagraph);
    container.appendChild(contentParagraph);

    return container;
}

body.addEventListener('keypress', (event) => getKeyCode(event));