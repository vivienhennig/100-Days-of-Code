const nightModeToggle = document.getElementById('toggleSwitch');
const body = document.getElementById('body');

let isNightMode = false;

function changeColorMode() {
    if (!isNightMode) {
        body.style.backgroundColor = '#14213d';
        isNightMode = true;
    } else {
        body.style.backgroundColor = '';
        isNightMode = false;
    };
};

nightModeToggle.addEventListener('click', () => changeColorMode());