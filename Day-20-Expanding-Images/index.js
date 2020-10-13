const images = document.querySelectorAll('.expandingImage');

function expandImage(event) {
    images.forEach(image => {
        image.classList.remove('expandedImage');
    });

    event.target.classList.add('expandedImage');
};

images.forEach(image => {
    image.addEventListener('click', (event) => expandImage(event));
});