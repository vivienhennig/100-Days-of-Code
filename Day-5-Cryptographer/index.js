const messageInput = document.getElementById('messageInput');
const outputParagraph = document.getElementById('outputParagraph');

const characters = 'abcdefghijklmnopqrstuvwxyz';

function encryptMessage() {
    let message = messageInput.value;
    let encryptedMessage = '';

    console.log(message);

    for (let i = 0; i < message.length; i++) {
        encryptedMessage += characters.indexOf(message[i]) + 2;
    };

    return encryptedMessage;
}

function displayEncryptedMessage() {
    outputParagraph.innerText = encryptMessage();
};

messageInput.addEventListener('input', displayEncryptedMessage);