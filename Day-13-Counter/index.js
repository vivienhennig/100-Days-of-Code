const counters = document.querySelectorAll('.counterNumber');

counters.forEach(counter => {
    counter.innerText = '0';

    const targetNumber = +counter.getAttribute('data-targetNumber');

    function countToTarget() {
        let digit = +counter.innerText

        const increment = 2;

        if (digit < targetNumber) {
            counter.innerText = digit + increment;
            setTimeout(countToTarget, 1);
        } else {
            counter.innerText = targetNumber;
        };
    };
    countToTarget();
});