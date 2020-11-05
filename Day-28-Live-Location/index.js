const getPositionButton = document.getElementById('getPositionButton');
const body = document.getElementsByTagName('body')[0];
let latitude = 0;
let longitude = 0;

function getPosition() {
    navigator.geolocation.getCurrentPosition(setDegrees);
};

function setDegrees(position) {
    longitude = position.coords.longitude;
    latitude = position.coords.latitude;

    displayPosition();
};

function displayPosition() {
    getPositionButton.style.display = 'none';

    let iframe = document.createElement('iframe');
    iframe.setAttribute('frameborder', '0');
    iframe.style.border = '0';

    iframe.src = `https://www.google.com/maps/embed/v1/view?key=AIzaSyBUGCXy2CF2syh6g-LA8BGFLO1FJd3Rb8k&center=${latitude},${longitude}&zoom=15`;

    body.appendChild(iframe);
};

getPositionButton.addEventListener('click', () => getPosition());