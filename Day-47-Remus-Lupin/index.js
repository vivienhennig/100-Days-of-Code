const quote = document.getElementById('quote');
const quoteText = 'It is the quality of one’s convictions that determines success, not the number of followers.';

let index = 0;


function displayQuote() {
    if (index <= quoteText.length) {
        quote.innerText = quoteText.substring(index, 0);
        index++;
    } else {
        clearInterval();
    }
};

setInterval(() => {
    displayQuote();
}, 75);