const countdownContainer = document.getElementById('countdownContainer');
const countdownTitle = document.getElementById('countdownTitle');
const endDate = new Date('Nov 17, 2020, 23:59:59').getTime();

setInterval(function () {
    const startDate = new Date().getTime();
    const distance = endDate - startDate;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 6 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    let dayText = days != 1 ? 'days' : 'day';
    let hourText = hours != 1 ? 'hours' : 'hour';
    let minuteText = minutes != 1 ? 'minutes' : 'minute';
    let secondText = seconds != 1 ? 'seconds' : 'second';

    countdownContainer.innerText = `${days} ${dayText} ${hours} ${hourText} ${minutes} ${minuteText} ${seconds} ${secondText}`;

    let today = 100 - days;

    countdownTitle.innerText = `Today is day ${today} of 55 Days of Code`;
}, 1000);