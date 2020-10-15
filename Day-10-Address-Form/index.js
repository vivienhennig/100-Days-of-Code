const errorMassageParagraph = document.getElementById('errorMessage');
const formContainer = document.getElementById('formContainer');
const orderButton = document.getElementById('orderButton');
const addressFormInputs = document.querySelectorAll('input');

let validForm = false;

function setErrorMessage(message) {
    errorMassageParagraph.innerText = message;
}

function validateInput(event) {
    switch (event.target.name) {
        case 'firstName':
            event.target.textLength > 1 ? event.target.classList.add('validInput') : setErrorMessage('Please enter a valid first name.');
            event.target.textLength > 1 ? validForm = true : validForm = false;
            break;
        case 'lastName':
            event.target.textLength > 1 ? event.target.classList.add('validInput') : setErrorMessage('Please enter a valid last name.');
            event.target.textLength > 1 ? validForm = true : validForm = false;
            break;
        case 'street':
            event.target.textLength > 3 ? event.target.classList.add('validInput') : setErrorMessage('Please enter a valid street.');
            event.target.textLength > 3 ? validForm = true : validForm = false;
            break;
        case 'zipCode':
            event.target.value.match(/^[0-9]/) && event.target.textLength === 5 ? event.target.classList.add('validInput') : setErrorMessage('Please enter a valid zip code.');
            event.target.value.match(/^[0-9]/) && event.target.textLength === 5 ? validForm = true : validForm = false;
            break;
        case 'county':
            event.target.textLength > 3 ? event.target.classList.add('validInput') : setErrorMessage('Please enter a valid county.');
            event.target.textLength > 3 ? validForm = true : validForm = false;
            break;
        default:
            setErrorMessage('Something went wrong, please reload the page.');
    };
}

function submitInput() {
    if (validForm) {
        const successParagraph = document.createElement('h1');
        const successText = 'Cool, your order has been successfully submitted!';
        successParagraph.classList.add('success');
        formContainer.removeChild(formContainer.childNodes[1]);
        successParagraph.innerText = successText;
        formContainer.appendChild(successParagraph);
    } else {
        const errorParagraph = document.createElement('h1');
        const errorText = 'Sorry we could not send your order, there occured an error.';
        errorParagraph.classList.add('error');
        formContainer.removeChild(formContainer.childNodes[1]);
        errorParagraph.innerText = errorText;
        formContainer.appendChild(errorParagraph);
    };
}

addressFormInputs.forEach(inputField => { inputField.addEventListener('change', (event) => validateInput(event)) });

orderButton.addEventListener('click', () => submitInput());