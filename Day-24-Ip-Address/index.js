const getIpButton = document.getElementById('getIpButton');
const ipParagraph = document.getElementById('ipParagraph');
const locationParagraph = document.getElementById('locationParagraph');
const mapContainer = document.getElementById('mapContainer');

const mapsAPIKey = 'AIzaSyBUGCXy2CF2syh6g-LA8BGFLO1FJd3Rb8k';

let userIp = '';
let userLocation = '';
let userLocationDegrees = '';


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
            console.log(data)
            userIp = data.ip;
            userLocation = data.city;
            userLocationDegrees = data.loc;
            displayData(userIp, userLocation);
            displayLocationMap(userLocationDegrees);
        })
        .catch(error => console.error(error));
};

function displayData(ip, location) {
    ipParagraph.innerHTML = `<span>Your IP: </span>${ip}`;
    locationParagraph.innerHTML = `<span>Your Location: </span> ${location}`;
};

function displayLocationMap(locationDegrees) {
    const length = locationDegrees.split(',')[0];
    const width = locationDegrees.split(',')[1];

    mapContainer.innerHTML = `<iframe width="700" height="350" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?q=${length}%2C${width}&key=${mapsAPIKey}" allowfullscreen></iframe>`
}

getIpButton.addEventListener('click', () => getIpData());