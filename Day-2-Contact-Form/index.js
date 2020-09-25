const submitButton = document.getElementById('submitButton');
const inputContainer = document.getElementById('inputContainer');

function showSuccessMessage() {
    const successMessage = 'Coolio, your message was successfully sent!';

    const successParagraph = document.createElement('p');
    successParagraph.innerText = successMessage;

    while (inputContainer.hasChildNodes()) {
        inputContainer.removeChild(inputContainer.firstChild);
    };

    inputContainer.appendChild(successParagraph);
}


submitButton.addEventListener('click', showSuccessMessage);