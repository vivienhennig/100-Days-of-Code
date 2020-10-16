const tagInput = document.getElementById('tagInput');
const suggestionContainer = document.getElementById('suggestionContainer');
const tagCloud = document.getElementById('tagCloud');

function showSuggestion() {
    const input = tagInput.value;

    if (input.length == '') {
        suggestionContainer.innerHTML = '';
        return;
    } else {
        let xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                clearSuggestionContainer();
                if (this.responseText != '') {
                    const tags = this.responseText.split(',');
                    tags.forEach(tag => {
                        const suggestionParagraph = createSuggestion(tag);
                        suggestionContainer.appendChild(suggestionParagraph);
                    });
                };
            };
        };

        xmlhttp.open('GET', `autosuggest.php?q=${input}`, true);
        xmlhttp.send();
    };
}

function createSuggestion(tag) {
    const suggestionParagraph = document.createElement('p');
    suggestionParagraph.classList.add('suggestion');
    suggestionParagraph.innerText = tag;
    suggestionParagraph.addEventListener('click', () => addToTagCloud(tag));
    return suggestionParagraph;
}

function addToTagCloud(tag) {
    const tagParagraph = document.createElement('p');
    tagParagraph.classList.add('tag');
    tagParagraph.innerText = tag;
    tagCloud.appendChild(tagParagraph);
    tagInput.value = '';
    clearSuggestionContainer();
}

function clearSuggestionContainer() {
    while (suggestionContainer.childElementCount > 0) {
        suggestionContainer.removeChild(suggestionContainer.childNodes[0]);
    };
}

tagInput.addEventListener('keyup', () => showSuggestion());