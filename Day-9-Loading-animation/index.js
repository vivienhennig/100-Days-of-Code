const loadingAnimationContainer = document.getElementById('loadingAnimationContainer');

function displayLoadingAnimation() {
    console.log('hello');
    const circle = document.createElement('div');
    circle.classList.add('circle');

    loadingAnimationContainer.appendChild(circle);
}

window.onload = displayLoadingAnimation();