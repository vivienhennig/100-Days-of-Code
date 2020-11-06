const inputFields = document.querySelectorAll('input');
const validationContainer = document.getElementById('validationContainer');

inputFields.forEach(inputField => inputField.value = '');

let index = 0;

//TODO: copy paste issue

function changeFocus(event) {

    if (index <= 4) {
        index++;
        inputFields[index].focus();
    } else if (index === 5) {
        setTimeout(() => {
            validationContainer.innerHTML = '';
            const message = document.createElement('p')
            const messageText = 'Thank you. Your Account is verified.'
            message.innerText = messageText;
            validationContainer.appendChild(message);
        }, 500);
    } else {
        alert('Sorry, there went something wrong, please start again.');
        index = 0;
    };
};

inputFields.forEach(inputField => inputField.addEventListener('keyup', (event) => changeFocus(event)));