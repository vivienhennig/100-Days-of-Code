const icon = document.querySelector('img');
const searchbar = document.querySelector('input');

function displaySearchbar () {
    if (searchbar.style.display === 'none') {
        searchbar.style.animation = 'slideIn 600ms ease forwards';
        searchbar.style.display = 'block';
        searchbar.focus();
    } else {
        searchbar.style.animation = 'slideIn 600ms ease forwards';
        searchbar.style.display = 'none';
    };
};

icon.addEventListener('click', () => displaySearchbar());