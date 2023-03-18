//Contstants
const generateButton = document.getElementById('generateButton');
const QNASection = document.getElementById('QNA');
const logSection = document.getElementById('log');
const qlogSection = document.getElementById('qlog');

//Variables
let numQs, maxNum, minNum = 0;
let testType = 'addition';

//Functions
function randInt(min, max) {
    // A proper random integer function; min/max inclusive. credit: W3Schools.com
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getTestParameters() {
    numQs = document.getElementById('numQuestions').value;
    maxNum = document.getElementById('maxNum').value;
    minNum = document.getElementById('minNum').value;

}

function setTestType(type) {
    testType = type;
    alert(testType);
}

function generateQuestion() {
    let numOne = randInt(minNum, maxNum);
    let numTwo = randInt(minNum, maxNum);
    let strQuestion = '';
    
    switch (testType) {
        case 'addition':
            strQuestion = `${numOne} + ${numTwo}`;
            let answer = numOne + numTwo;
            return [strQuestion, answer];

        case 'subtraction':
            break;

        case 'multiplication':
            break;

        case 'division':
            break;
    }
}

//Event handlers
generateButton.addEventListener('click', (event) => {
    event.preventDefault();
    getTestParameters();
    let [strQuestion,answer] = generateQuestion();
    
    //1.Math: generate a question
    //2.QNA injection: replace inner html of QNA with question 
    //3.Log injection: on input event: send question, input answer, correct answer to an html element
    //  then append the generated element to log section
    //4.qlog injection: compare input answer vs correct answer send to an html element 
    //  then append to qlog
    //5.Math:genereate a question 
    //6. QNA Injection replace inner html of QNA with new question
});
