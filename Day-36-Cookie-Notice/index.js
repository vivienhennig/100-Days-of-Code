const acceptCookiesButton = document.getElementById('acceptCookiesButton');
const declineCookiesButton = document.getElementById('declineCookiesButton');
const cookieNoticeContainer = document.getElementById('cookieNoticeContainer');

function setCookies() {
    cookieNoticeContainer.animate([
        {height: '5rem'},
        {height: '0rem'}
    ], {
        duration: 200,
        fill: "forwards"
    });
    cookieNoticeContainer.innerHTML = '';
};

acceptCookiesButton.addEventListener('click', () => setCookies());
declineCookiesButton.addEventListener('click', () => notSetCookies());