const getIpButton = document.getElementById('getIpButton');
const ipSpan = document.getElementById('ipSpan');
const locationSpan = document.getElementById('locationSpan');

let userIp = '';
let userLocation = '';


async function fetchAPI(url, method) {
    const response = await fetch(url, {
        method: `${method}`,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer d520fb01f906db`,
            'Accept': 'application/json'
        },
    });
    return response.json();
};

function getIpData() {
    fetchAPI('https://ipinfo.io', 'GET')
        .then(data => {
            userIp = data.ip;
            userLocation = data.city;
            displayData(userIp, userLocation);
        })
        .catch(error => console.error(error));
};

function displayData(ip, location) {
    ipSpan.innerText = ip;
    locationSpan.innerText = location;
};

getIpButton.addEventListener('click', () => getIpData());