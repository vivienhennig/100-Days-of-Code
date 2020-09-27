const hamburgerMenu = document.getElementById('hamburgerMenu');
const lineOne = document.getElementById('lineOne');
const lineTwo = document.getElementById('lineTwo');
const lineThree = document.getElementById('lineThree');
let counter = 0;


function changeMenuToCross() {
    lineOne.style.transform = 'rotate(45deg) translateY(3px) translateX(6.5px)';
    lineOne.style.margin = '0';

    lineThree.style.transform = 'rotate(-45deg) translateY(-3px) translateX(6.5px)';
    lineThree.style.margin = '0';

    lineTwo.style.opacity = '0';

    counter++;
};


function changeMenuToBurger() {


    lineOne.style.transform = 'rotate(0deg) translateY(-3px)';
    lineOne.style.margin = '2px auto';

    lineThree.style.transform = 'rotate(0deg) translateY(3px)';
    lineThree.style.margin = '2px auto';

    lineTwo.style.opacity = '100';

    counter++;
}


function animateHamburgerMenu() {
    if (counter % 2 !== 0) {
        changeMenuToBurger()
    } else {
        changeMenuToCross()
    }
}

hamburgerMenu.addEventListener('click', animateHamburgerMenu);