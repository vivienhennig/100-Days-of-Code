const textInput = document.getElementById('textInput');
const sessionsStorageButton = document.getElementById('sessionStorageButton');
const localStorageButton = document.getElementById('localStorageButton');
const getSessionStorageButton = document.getElementById('getSessionStorage');
const getLocalStorageButton = document.getElementById('getLocalStorage');
const sessionStorageText = document.getElementById('sessionStorageText');
const localStorageText = document.getElementById('localStorageText');

function saveToSessionStorage() {
    const textToSave = textInput.value;

    sessionStorage.setItem('paragraph', textToSave);
    textInput.value = '';
}

function saveToLocalStorage() {
    const textToSave = textInput.value;

    localStorage.setItem('paragraph', textToSave);
    textInput.value = '';
}

sessionsStorageButton.addEventListener('click', () => saveToSessionStorage());
localStorageButton.addEventListener('click', () => saveToLocalStorage());

getSessionStorageButton.addEventListener('click', () => sessionStorage.getItem('paragraph') ? sessionStorageText.innerText = sessionStorage.getItem('paragraph') : sessionStorageText.innerText = 'There is nothing in your session storage');
getLocalStorageButton.addEventListener('click', () => localStorage.getItem('paragraph') ? localStorageText.innerText = localStorage.getItem('paragraph') : localStorageText.innerText = 'There is nothing in your local storage');

