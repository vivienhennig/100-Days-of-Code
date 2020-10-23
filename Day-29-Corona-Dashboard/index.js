const dailyTotalGlobalCard = document.getElementById('dailyTotalGlobalCard');
const dailyTotalByCountry = document.getElementById('dailyTotalByCountry');

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
            countries = data;
            data.forEach(country => {
                const option = document.createElement('option');
                option.innerText = country.Country;
                option.value = country.Country;
                option.setAttribute('data-slug', country.Slug);
                select.appendChild(option);
            });
        })
        .catch(error => console.error(error));

    select.addEventListener('click', (event) => displayCountOfCountry(event))
    dailyTotalByCountry.appendChild(select);
};


function displayCountOfCountry(event) {


    console.log(dailyTotalByCountry.childElementCount);
    console.log(event.target);

    if (event.target.tagName === 'OPTION') {
        const slug = event.target.getAttribute('data-slug');
        console.log(slug);
        console.log(date.toISOString());
        console.log(date - 1);
        fetchAPI(`total/country/${slug}/status/confirmed?from=${date.toISOString()}&to=${date.toISOString()}`)
            .then(data => {
                if (data.length != 0) {
                    const numberDisplay = document.createElement('p');
                    const index = (data.length) - 1;
                    numberDisplay.innerText = data[index].Cases;
                    if (dailyTotalByCountry.childElementCount >= 3) {
                        dailyTotalByCountry.removeChild(dailyTotalByCountry.childNodes[dailyTotalByCountry.childElementCount + 1]);
                    };
                    dailyTotalByCountry.appendChild(numberDisplay);
                } else {
                    const numberDisplay = document.createElement('p');
                    numberDisplay.innerText = `sorry, we have no data for ${event.target.innerText}`;
                    if (dailyTotalByCountry.childElementCount >= 3) {
                        dailyTotalByCountry.removeChild(dailyTotalByCountry.childNodes[dailyTotalByCountry.childElementCount + 1]);
                    };
                    dailyTotalByCountry.appendChild(numberDisplay);
                };
                console.log(data.length);
            })
            .catch(error => console.error(error));
    };
};


setSelect();