const textInput = document.getElementById('textInput');
const binaryContainer = document.getElementById('binaryContainer');

function convertTextToBinary() {
    const text = textInput.value;
    let binary = '';

    for (let i = 0; i < text.length; i++) {
        binary += `${text[i].charCodeAt(0).toString(2)} `;
    }

    binaryContainer.innerText = binary;
}

textInput.addEventListener('input', convertTextToBinary);