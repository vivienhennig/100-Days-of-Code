const totalGlobal = document.getElementById('totalGlobalCard');
const totalByCountry = document.getElementById('totalByCountryCard');
const dailyNewGlobal = document.getElementById('dailyNewGlobalCard');

const date = new Date();

async function fetchAPI(urlSlug) {
    const url = `https://api.covid19api.com/${urlSlug}`;
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return response.json();
};


function setSelect() {

    const select = document.createElement('select');

    fetchAPI('countries')
        .then(data => {
            data.sort((a, b) => a.Country > b.Country);
            data.forEach(country => {
                const option = document.createElement('option');
                option.innerText = country.Country;
                option.value = country.Country;
                option.setAttribute('data-slug', country.Slug);
                select.appendChild(option);
            });
        })
        .catch(error => console.error(error));

    select.addEventListener('click', (event) => displayCountOfCountry(event));
    totalByCountry.appendChild(select);
};


function displayCountOfCountry(event) {

    if (event.target.tagName === 'OPTION') {
        const slug = event.target.getAttribute('data-slug');
        fetchAPI(`total/country/${slug}/status/confirmed`)
            .then(data => {
                if (data.length != 0) {
                    const numberDisplay = document.createElement('p');
                    const index = (data.length) - 1;
                    const number = formatNumber(data[index].Cases);
                    numberDisplay.innerText = number;
                    if (totalByCountry.childElementCount >= 3) {
                        totalByCountry.removeChild(totalByCountry.childNodes[totalByCountry.childElementCount + 1]);
                    };
                    totalByCountry.appendChild(numberDisplay);
                } else {
                    const numberDisplay = document.createElement('p');
                    numberDisplay.innerText = `sorry, we have no data for ${event.target.innerText}`;
                    if (totalByCountry.childElementCount >= 3) {
                        totalByCountry.removeChild(totalByCountry.childNodes[totalByCountry.childElementCount + 1]);
                    };
                    totalByCountry.appendChild(numberDisplay);
                };
            })
            .catch(error => console.error(error));
    };
};


function displayCountGlobal() {
    fetchAPI('summary')
        .then(data => {
            const numberDisplay = document.createElement('p');
            const number = formatNumber(data.Global.TotalConfirmed);
            numberDisplay.innerText = number;
            totalGlobal.appendChild(numberDisplay);
            console.log(data);
        })
        .catch(error => console.error(error));
};


function displayDailyNewCountGlobal() {
    fetchAPI('summary')
        .then(data => {
            const numberDisplay = document.createElement('p');
            const number = formatNumber(data.Global.NewConfirmed);
            numberDisplay.innerText = number;
            dailyNewGlobal.appendChild(numberDisplay);
        })
        .catch(error => console.error(error));
};


function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

displayDailyNewCountGlobal();
displayCountGlobal();
setSelect();