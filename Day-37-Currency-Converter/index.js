let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

const body = document.getElementsByTagName('body')[0];
const moneyInput = document.getElementById('moneyInput');
const firstCurrency = document.getElementById('firstCurrency');
const secondCurrency = document.getElementById('secondCurrency');
const conversionOutput = document.getElementById('conversionOutput');
conversionOutput.style.opacity = 0;

const title = document.getElementsByTagName('h1')[0];
title.innerHTML = `Money For Nothing <br> (and your chicks for free)`

const selections = [firstCurrency, secondCurrency];

const url = 'https://currency-converter13.p.rapidapi.com/';


if (location.reload) {
    moneyInput.value = '';
};


async function fetchApi(slug) {
    const response = await fetch(`${url}${slug}`, {
        'method': 'GET',
        'headers': {
            "x-rapidapi-host": "currency-converter13.p.rapidapi.com",
            "x-rapidapi-key": "539723036emshd5c6592eea05863p14b455jsn5baa277e4d5c"
        }
    });
    return response.json();
};

function createCurrencyOptions() {
    const slug = 'list';

    fetchApi(slug)
    .then(res => res.forEach(currency => {
        const firstOption = document.createElement('option');
        const secondOption = document.createElement('option');
        firstOption.innerText = currency;
        firstOption.value = currency;
        secondOption.innerText = currency;
        secondOption.value = currency;
        firstCurrency.append(firstOption);
        secondCurrency.append(secondOption);
    }))
    .catch(err => {
        console.error(err);
    });
};

createCurrencyOptions();


function convertCurrency() {
    if (firstCurrency.value === secondCurrency.value) {
        conversionOutput.innerText = moneyInput.value;
    };

    const slug = `convert?amount=${moneyInput.value}&from=${firstCurrency.value}&to=${secondCurrency.value}`;

    fetchApi(slug)
    .then(res => {
        let conversion = Math.round(res.amount * 100) / 100;
        conversionOutput.innerText = conversion;
    })
    .catch(err => console.error(err));

    conversionOutput.style.opacity = '1';
};

selections.forEach(element => element.addEventListener('click', () => convertCurrency()));