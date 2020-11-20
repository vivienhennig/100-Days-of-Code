const feedbackButtons = document.querySelectorAll('div');
const container = document.getElementsByTagName('main')[0];

let feedbackValue = '';

function setFeedbackValue(event) {
    feedbackValue = event.target.innerText;
    sendFeedback(feedbackValue)
};

function sendFeedback(feedback) {
    if (feedback != '') {
        container.innerHTML = '';
        const headline = document.createElement('h1');
        headline.innerText = 'Thank you for your feedback!';
        const content = document.createElement('h2');
        content.innerText = `You think this site is ${feedback}.`;
    
        container.appendChild(headline);
        container.appendChild(content);
    } else {
        const err = document.createElement('p');
        err.classList.add('error');
        err.innerText = 'Please select a feedback.';
        container.appendChild(err);
    };
};

feedbackButtons.forEach(button => button.addEventListener('click', (event) => setFeedbackValue(event)));