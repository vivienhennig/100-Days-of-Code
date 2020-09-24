const countdownContainer = document.getElementById('countdownContainer');
const countdownTitle = document.getElementById('countdownTitle');
const endDate = new Date('Jan 01, 2021, 23:59:59').getTime();

setInterval(function () {
    const startDate = new Date().getTime();
    const distance = endDate - startDate;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 6 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownContainer.innerHTML = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;

    const today = days - (days - 1);

    countdownTitle.innerHTML = `Today is day ${today} of 100 Days of Code`;
}, 1000);