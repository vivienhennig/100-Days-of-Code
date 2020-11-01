const priceInput = document.getElementById('priceInput');
const percentageInput = document.getElementById('percentageInput');
const calculatedTotal = document.getElementById('calculatedTotal');

let validPercentage = false;

if (location.reload) {
    percentageInput.value = '';
    priceInput.value = '';
};

function validatePercentage() {
    if (percentageInput.value < 100 && percentageInput.value > 0) {
        validPercentage = true;
    } else {
        validPercentage = false;
    };
};

function calculateTip() {
    validatePercentage();
    
    const price = parseInt(priceInput.value);
    const percentage = parseInt(percentageInput.value) / 100;
    
    if (percentageInput.value === '' && validPercentage === false) {
        calculatedTotal.innerText = 'Really? At least a little tip should be possible.';
    } else if (validPercentage === false) {
        calculatedTotal.innerText = 'Your tip percentage must be between 1 and 100%.';
    } else if (priceInput.value <= 0 && validPercentagem === true) {
        calculatedTotal.innerText = 'Your full price is missing.';
    } else if (validPercentage === true){    
        const total = price + (price * percentage);
        calculatedTotal. innerText = `You pay: ${total}$`;
    };
};

percentageInput.addEventListener('input', () => calculateTip());
priceInput.addEventListener('input', () => calculateTip());
