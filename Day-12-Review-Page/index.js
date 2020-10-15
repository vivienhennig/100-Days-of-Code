const stars = document.querySelectorAll('.star');

function addHoverColorYellow(event) {
    const rating = event.target.getAttribute('data-star');

    for (let i = 0; i <= rating; i++) {
        stars[i].classList.add('ratedStar');
    };
};

function removeHoverColorYellow() {
    stars.forEach(star => star.classList.remove('ratedStar'));
};

function addClickColorYellow(event) {
    const rating = event.target.getAttribute('data-star');

    for (let i = 0; i <= rating; i++) {
        stars[i].id = `star${i}`;
    };

}


stars.forEach(star => star.addEventListener('mouseover', (event) => addHoverColorYellow(event)));
stars.forEach(star => star.addEventListener('mouseleave', () => removeHoverColorYellow()));
stars.forEach(star => star.addEventListener('click', (event) => addClickColorYellow(event)));
stars.forEach(star => star.addEventListener('touchstart', (event) => addClickColorYellow(event)));