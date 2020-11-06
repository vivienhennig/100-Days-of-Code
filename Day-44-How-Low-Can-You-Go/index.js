const meterDisplay = document.getElementById('meterDisplay');

if (location.reload) {
    window.scrollTo(0, 0);
};

function numberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

function displayDistance(distance) {

    const num = (distance * 0.0002645833).toFixed(2);

    const distanceWithCommas = numberWithCommas(num);

    meterDisplay.innerText = `${distanceWithCommas} m`;
};

window.addEventListener('scroll', () => displayDistance(window.pageYOffset));