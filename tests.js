//Contstants
const generateButton = document.getElementById('generateButton');
const QNASection = document.getElementById('QNA');
const logSection = document.getElementById('log');
const qlogSection = document.getElementById('qlog');
const questionPrompt = document.getElementById('questionPrompt');
const testHeader = document.getElementById('testHeader');
const enterAnswer = document.getElementById('enterAnswer');

//Variables
let numQs, maxNum, minNum = 0;
let testType = 'addition';
let userAnswer = 0;
let qCounter = 1;

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
    testHeader.innerHTML = testType;
}

function setQuestionPrompt(strQuestion, qNum, numQs) {
    questionPrompt.innerHTML = `
        Question #${qNum}/${numQs}: ${strQuestion}
    `;
}

function generateQuestion() {
    let numOne = randInt(minNum, maxNum);
    let numTwo = randInt(minNum, maxNum);

    switch (testType) {
        case 'Addition':
            let strQuestion = `${numOne} + ${numTwo}`;
            let answer = numOne + numTwo;
            return {strQuestion, answer};

        case 'Subtraction':
            break;

        case 'Multiplication':
            break;

        case 'Division':
            break;
    }
}

//Event handlers
generateButton.addEventListener('click', (event) => {
    event.preventDefault();
    getTestParameters();

    for (let i = 1; i <= numQs; i++ ) {
        let {strQuestion,answer} = generateQuestion();
        setQuestionPrompt(strQuestion, i, numQs);
    }
    

    //1.Math: generate a question
    //2.QNA injection: replace inner html of QNA with question 
    //3.Log injection: on input event: send question, input answer, correct answer to an html element
    //  then append the generated element to log section
    //4.qlog injection: compare input answer vs correct answer send to an html element 
    //  then append to qlog
    //5.Math:genereate a question 
    //6. QNA Injection replace inner html of QNA with new question
});

enterAnswer.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
        userAnswer = Number(enterAnswer.value);
    }


})
