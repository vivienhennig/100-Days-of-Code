const buttons = document.querySelectorAll('input');

function excecuteCommand(event) {
    switch (event.target.name) {
        case 'bold':
            document.execCommand('bold', false, '');
            break;
        case 'italic':
            document.execCommand('italic', false, '');
            break;
        case 'underline':
            document.execCommand('underline', false, '');
            break;
        case 'link':
            break;
        case 'cut':
            document.execCommand('cut', false, '');
            break;
        case 'paint':
            break;
        case 'delete':
            document.execCommand('delete', false, '');
            break;
        case 'redo':
            document.execCommand('redo', false, '');
            break;
        case 'undo':
            document.execCommand('undo', false, '');
            break;
        case 'alignCenter':
            document.execCommand('justifyCenter', false, '');
            break;
        case 'alignLeft':
            document.execCommand('justifyLeft', false, '');
            break;
        case 'alignRight':
            document.execCommand('justifyRight', false, '');
            break;
        case 'justifyText':
            document.execCommand('justifyFull', false, '');
            break;
        default:
            break;
    }
}

buttons.forEach(button => addEventListener('click', (event) => excecuteCommand(event)));