const scrollIndicator = document.getElementById('scrollIndicator');
const indicator = document.createElement('div');
scrollIndicator.appendChild(indicator);


function displayScrollIndicator(width) {
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollHeight = (width / height) * 100;

    indicator.style.backgroundColor = '#000';
    indicator.style.width = `${scrollHeight}%`;
};

window.addEventListener('scroll', () => displayScrollIndicator(window.scrollY));