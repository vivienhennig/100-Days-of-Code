const errorMassageParagraph = document.getElementById('errorMessage');
const formContainer = document.getElementById('formContainer');
const orderButton = document.getElementById('orderButton');
const addressFormInputs = document.querySelectorAll('input');

function setErrorMessage(message) {
    errorMassageParagraph.innerText = message;
    orderButton.disabled = true;
    orderButton.style.cursor = 'no-drop';
};

function validateInput(event) {
    switch (event.target.name) {
        case 'firstName':
            event.target.textLength > 1 ? event.target.classList.add('validInput') : setErrorMessage('Please enter a valid first name.');
            break;
        case 'lastName':
            event.target.textLength > 1 ? event.target.classList.add('validInput') : setErrorMessage('Please enter a valid last name.');
            break;
        case 'street':
            event.target.textLength > 3 ? event.target.classList.add('validInput') : setErrorMessage('Please enter a valid street.');
            break;
        case 'zipCode':
            event.target.value.match(/^[0-9]/) && event.target.textLength === 5 ? event.target.classList.add('validInput') : setErrorMessage('Please enter a valid zip code.');
            break;
        case 'county':
            event.target.textLength > 3 ? event.target.classList.add('validInput') : setErrorMessage('Please enter a valid county.');
            break;
        default:
            setErrorMessage('Something went wrong, please reload the page.');
    }
}

function submitInput() {
    formContainer.removeChild(formContainer.childNodes[1]);

    const successParagraph = document.createElement('h1');
    const successText = 'Cool, your order has been successfully submitted!';

    successParagraph.innerText = successText;
    formContainer.appendChild(successParagraph);
}

addressFormInputs.forEach(inputField => { inputField.addEventListener('change', (event) => validateInput(event)) });

orderButton.addEventListener('click', submitInput);