const generationButton = document.getElementById('generationButton');
const passwordContainer = document.getElementById('passwordContainer');

function generateNewPassword() {
    let password = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!$?&%@';
    const passwordLength = 18;

    for (let i = 1; i <= passwordLength; i++) {
        password += characters[Math.floor(Math.random() * characters.length)];
    };

    return password;
};

function displayPassword() {
    if (passwordContainer.childElementCount) {
        for (let i = 0; i = passwordContainer.childElementCount; i++) {
            passwordContainer.removeChild(passwordContainer.childNodes[i]);
        };
    };

    const password = generateNewPassword();
    const textLine = `Your new and safe password:`;
    const textParagraph = document.createElement('p');
    const passwordParagraph = document.createElement('p');

    textParagraph.innerText = textLine;

    passwordParagraph.classList.add('passwordParagraph');
    passwordParagraph.id = 'generatedPassword';
    passwordParagraph.innerText = password;

    passwordContainer.appendChild(textParagraph);
    passwordContainer.appendChild(passwordParagraph);
};

generationButton.addEventListener('click', displayPassword);