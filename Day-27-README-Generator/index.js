const inputFields = document.querySelectorAll('input');
const languages = document.querySelectorAll('.language');
const frameworks = document.querySelectorAll('.framework');
const generateReadmeButton = document.getElementById('generateReadme');

let fname = '';
let company = '';
let position = '';
let favGif = '';

let languagesOutput = [];
let frameworksOutput = [];

function setInputValues(event) {
    switch (event.target.name) {
        case 'name':
            fname = event.target.value;
            break;
        case 'company':
            company = event.target.value;
            break;
        case 'position':
            position = event.target.value;
            break;
        case 'favGif':
            favGif = event.target.value;
            break;
        default:
            console.log('Error');
    };
};


function setLanguage(event) {
    if (event.target.classList.contains('languageSet')) {
        event.target.classList.toggle('languageSet', false);
        const languageToRemove = event.target.innerText;
        const index = languagesOutput.indexOf(languageToRemove);
        languagesOutput.splice(index, 1);
    } else {
        event.target.classList.toggle('languageSet', true);
        const languageToAdd = event.target.innerText;
        languagesOutput.push(languageToAdd);
    };
    console.log(languagesOutput);
};


function setFramework(event) {
    if (event.target.classList.contains('frameworkSet')) {
        event.target.classList.toggle('frameworkSet', false);
        const frameworkToRemove = event.target.innerText;
        const index = frameworksOutput.indexOf(frameworkToRemove);
        frameworksOutput.splice(index, 1);
    } else {
        event.target.classList.toggle('frameworkSet', true);
        const frameworkToAdd = event.target.innerText;
        frameworksOutput.push(frameworkToAdd);
    };
    console.log(frameworksOutput);
};


function download(filename, content) {
    let link = document.createElement('a');
    link.setAttribute('href', 'data:text/html;charset=utf-8,' + encodeURIComponent(content));
    link.setAttribute('download', filename);
    link.style.display = 'none';

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
};


function generateReadme() {
    (fname != '') ? fname = `### Hello my name is ${fname}.<br>` : null;
    (company != '') ? company = `I'm working at ${company}.<br>` : null;
    (position != '') ? position = `I am a ${position}.<br>` : null;
    (favGif != '') ? favGif = `![favourite gif](${favGif})<br>` : null;

    let string = fname + company + position + favGif;
    console.log(string);

    let languageString = languagesOutput.map(language => {
        return `<br> * ${language}`;
    }).join(' ');

    let frameworkString = frameworksOutput.map(framework => {
        return `<br> * ${framework}`;
    }).join(' ');

    console.log(frameworkString);

    const text = `${string}I speak:<br>${languageString}<br>I can build with:<br>${frameworkString}`;

    download('README.md', text);
};


languages.forEach(language => language.addEventListener('click', (event) => setLanguage(event)));
frameworks.forEach(framework => framework.addEventListener('click', (event => setFramework(event))));
inputFields.forEach(input => input.addEventListener('input', (event) => setInputValues(event)));
generateReadmeButton.addEventListener('click', () => generateReadme());