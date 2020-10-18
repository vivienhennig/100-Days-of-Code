const editorContainer = document.getElementById('editorContainer');
const displayContainer = document.getElementById('displayContainer');
const runCodeButton = document.getElementById('runCodeButton');

function setInitialCodeBlock() {
    const initialCode = `
    <!DOCTYPE html>
    <html>
    <body>
        <h1>Write your code here</h1>

        <script>
            
        </script>
    </body>
    </html>
    `
    editorContainer.innerText = initialCode;
}

function displayCodeFromEditor() {
    const textContent = editorContainer.innerText;

    displayContainer.src = "data:text/html;charset=utf-8," + encodeURI(textContent);
};

setInitialCodeBlock();

runCodeButton.addEventListener('click', () => displayCodeFromEditor())