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
let testType = 'Addition';
let userAnswer = 0;
let qCounter = 1;
let strQuestion = '';
let answer = 0;

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
            let strParam = `${numOne} + ${numTwo}`;
            let numParam = numOne + numTwo;
            return {strParam, numParam};

        case 'Subtraction':
            break;

        case 'Multiplication':
            break;

        case 'Division':
            break;
    }
}

function updateLog () {
    if (qCounter === 1) {
        logSection.innerHTML = `
        <p>
            Question ${qCounter}/${numQs}: ${strQuestion} <br>
            Your Answer: ${userAnswer} <br>
            Correct Answer: ${answer} 
        </p>`;
        if (userAnswer === answer) {    
            qlogSection.innerHTML = `
            <p>
                #${qCounter}: :)
            </p>
            `;
        } else {
            qlogSection.innerHTML = `
            <p>
                #${qCounter}: :(
            </p>
            `;
        }
    } else {
        logSection.innerHTML += `
        <p>
            Question ${qCounter}/${numQs}: ${strQuestion} <br>
            Your Answer: ${userAnswer} <br>
            Correct Answer: ${answer} 
        </p>`;
        if (userAnswer === answer) {    
            qlogSection.innerHTML += `
            <p>
                #${qCounter}: :)
            </p>
            `;
        } else {
            qlogSection.innerHTML += `
            <p>
                #${qCounter}: :(
            </p>
            `;
        }
    }

}

//Event handlers
generateButton.addEventListener('click', (event) => {
    event.preventDefault();
    getTestParameters();
    let {strParam,numParam} = generateQuestion();
    strQuestion = strParam;
    answer = numParam;
    setQuestionPrompt(strQuestion, qCounter, numQs);
});

enterAnswer.addEventListener('keyup', (event) => {
    if (qCounter < numQs) {
        if (event.keyCode === 13) {
            userAnswer = Number(enterAnswer.value);
            enterAnswer.value = '';
            updateLog();
            qCounter++;
            let {strParam,numParam} = generateQuestion();
            strQuestion = strParam;
            answer = numParam;
            setQuestionPrompt(strQuestion, qCounter, numQs);
        }


}});
