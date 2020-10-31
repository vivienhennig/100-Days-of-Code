const iframe = document.createElement('iframe');
const body = document.getElementsByTagName('body')[0];

const gifs = ['https://giphy.com/embed/xUOxeZy7TXZYptBMSA', 'https://giphy.com/embed/l2JI99PGIRUFoPVjW','https://giphy.com/embed/3o8dp0ltTgrhzcUIgg', 'https://giphy.com/embed/3oxHQoyto7T8wBjUJ2', 'https://giphy.com/embed/26hisvdh5RnngkMLu', 'https://giphy.com/embed/26tP2eKk8akKXoC0U'];

function appendIframe() {
    const index = Math.floor(Math.random() * gifs.length);

    iframe.setAttribute('src', `${gifs[index]}`);
    body.appendChild(iframe);
};

appendIframe();