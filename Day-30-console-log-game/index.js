console.log('call the start function');

let playersName = '';
let points = 0;
const breakfast = ['Bread', 'Butter', 'Orange Juice', 'Avocado', 'Eggs', 'Bacon', 'Salmon'];
const breakfastSorted = ['Avocado', 'Bacon', 'Bread', 'Butter', 'Eggs', 'Orange Juice', 'Salmon'];

function questionOne(answer) {
    if (answer) {
        if (answer == 'a') {
            console.log('Yes, that\'s right.');
            points += 5;
            console.log(`You now have ${points} points.`);
            questionTwo();
            return;
        } else if (answer == 'b') {
            console.log('No. The src is an attribute of the script tag where you insert the JavaScript.');
            questionTwo();
            return;
        } else if (answer == 'c') {
            console.log('Nope, that\'s wrong.');
            questionTwo();
            return;
        } else {
            console.log('That is no possible answer.');
        }
    };

    let answers = ['a: <script>', 'b: <src>', 'c: <head>'];
    console.log('Easy one. In which tags do you insert the JavaScript into the document?');

    answers.forEach(answer => {
        setInterval(console.log(answer), 1000);
    });
};


function questionTwo(answer) {
    if (answer) {
        if (answer === '[\'Avocado\', \'Bacon\', \'Bread\', \'Butter\', \'Eggs\', \'Orange Juice\', \'Salmon\']') {
            console.log('Awesome, you found the right way.');
            points += 5;
            console.log(`You now have ${points} points.`);
            return;
        } else if (answer == breakfastSorted) {
            console.log('Awesome, you found the right way.');
            points += 5;
            console.log(`You now have ${points} points.`);
            return;
        } else {
            console.log('Sorry, that\'s wrong. Please try again.');
        };
    };

    console.log('Question two:');
    console.log('We have an array called "breakfast". Sort it alphabetically and put the sorted array(as a string) as paramater when calling the questionTwo function.');
};

function startGame() {
    console.log('Cool, first step is made. now call the myName function and tell it your name.');
};


function myName(name) {
    playersName = name;
    console.log(`${playersName}, let\'s start. To answer a question call the questionFunction, for example questionOne() and add your answer as a parameter. First question:`);
    questionOne();
};



