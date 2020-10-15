const inputText = document.getElementById('setUsernameInput');
const setCookieBtn = document.getElementById('setCookieButton');
const readCookieBtn = document.getElementById('readCookieButton');
const deleteCookieBtn = document.getElementById('deleteCookieButton');

function setCookie() {
    const username = inputText.value;
    const date = new Date();
    console.log(date + 14);

    // document.cookie = `username=${username}; expires=`
}

function readCookie() {

}

function deleteCookie() {

}

setCookieBtn.addEventListener('click', () => setCookie());
readCookieBtn.addEventListener('click', () => readCookie());
deleteCookieBtn.addEventListener('click', () => deleteCookie());