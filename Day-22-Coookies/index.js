const inputText = document.getElementById('setUsernameInput');
const readCookieParagraph = document.getElementById('readCookieParagraph');
const setCookieBtn = document.getElementById('setCookieButton');
const readCookieBtn = document.getElementById('readCookieButton');
const deleteCookieBtn = document.getElementById('deleteCookieButton');

function setCookie(daysToExpire) {
    const username = inputText.value;
    let date = new Date();
    date.setTime(date.getTime() + (daysToExpire * 24 * 60 * 60 * 1000));
    const exDays = date.toUTCString();
    document.cookie = `username=${username}; expires=${exDays}; path=/"; Secure`
}

function readCookie() {
    let cookie = decodeURIComponent(document.cookie);
    console.log(document.cookie);
    readCookieParagraph.innerText = cookie;
}

function deleteCookie() {
    const date = new Date();
    document.cookie = `username=; expires=${date}; path=/"; Secure`
}

setCookieBtn.addEventListener('click', () => setCookie(14));
readCookieBtn.addEventListener('click', () => readCookie());
deleteCookieBtn.addEventListener('click', () => deleteCookie());