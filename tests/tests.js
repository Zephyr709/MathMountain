//Contstants
const generateButton = document.getElementById('generateButton');
const QNASection = document.getElementById('QNA');
const logSection = document.getElementById('log');
const questionPrompt = document.getElementById('questionPrompt');
const testHeader = document.getElementById('testHeader');
const enterAnswer = document.getElementById('enterAnswer');
const errorPrompt = document.getElementById('errorPrompt');
const submitButton = document.getElementById('submitButton');

//Variables
let numQs, maxNum, minNum = 0;
let testType = 'Addition';
let userAnswer = 0;
let qCounter = 1;
let strQuestion = '';
let answer = 0;

//Functions
const randInt = (min, max) => {
    // A proper random integer function; min/max inclusive. credit: W3Schools.com
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const getTestParameters = () => {
    numQs = document.getElementById('numQuestions').value;
    maxNum = document.getElementById('maxNum').value;
    minNum = document.getElementById('minNum').value;
    testType = document.getElementById('testType').value;
    setTestType(testType);

}

const setTestType = (type) => {
    testType = type;
    testHeader.innerHTML = testType;
}

const setQuestionPrompt = (strQuestion, qNum, numQs) => {
    questionPrompt.innerHTML = `
        Question #${qNum}/${numQs}: ${strQuestion}
    `;
}

const generateQuestion = () => {
    let numOne = randInt(minNum, maxNum);
    let numTwo = randInt(minNum, maxNum);
    let strParam = '';
    let numParam = 0;

    switch (testType) {
        
        case 'Addition':
            strParam = `${numOne} + ${numTwo}`;
            numParam = numOne + numTwo;
            return {strParam, numParam};
            
        case 'Subtraction':
            strParam = `${numOne} - ${numTwo}`;
            numParam = numOne - numTwo;
            return {strParam, numParam};

        case 'Multiplication':
            strParam = `${numOne} x ${numTwo}`;
            numParam = numOne * numTwo;
            return {strParam, numParam};

        case 'Division':
            while (numTwo === 0){
                numTwo = randInt(minNum,maxNum);
            }
            strParam = `${numOne} / ${numTwo}`;
            numParam = numOne / numTwo;
            return {strParam, numParam};
    }
}

const updateLog = () => {
    if (qCounter === 1) {
        if (userAnswer === answer) {
        logSection.innerHTML = `
        <p>
            Question ${qCounter}/${numQs}: ${strQuestion} <br>
            <span style="color:LightGreen;">Your Answer: ${userAnswer}</span> <br>
            Correct Answer: ${answer} 
        </p>`;
        } else {
            logSection.innerHTML = `
        <p>
            Question ${qCounter}/${numQs}: ${strQuestion} <br>
            <span style="color:IndianRed;">Your Answer: ${userAnswer}</span> <br>
            Correct Answer: ${answer} 
        </p>`;
        }
    } else {
        if (userAnswer === answer) {
            logSection.innerHTML = `
            <p>
                Question ${qCounter}/${numQs}: ${strQuestion} <br>
                <span style="color:LightGreen;">Your Answer: ${userAnswer}</span> <br>
                Correct Answer: ${answer} 
            </p>` + logSection.innerHTML;
            } else {
                logSection.innerHTML = `
            <p>
                Question ${qCounter}/${numQs}: ${strQuestion} <br>
                <span style="color:IndianRed;">Your Answer: ${userAnswer}</span> <br>
                Correct Answer: ${answer} 
            </p>` + logSection.innerHTML;
            }
    }

}

const resetTest = () => {
    logSection.innerHTML = `
    <p> Your Question results will appear here.</p>
    `;
    questionPrompt.innerHTML = '';
    qCounter = 1;
}

//Event handlers
generateButton.addEventListener('click', (event) => {
    event.preventDefault();
    document.getElementById("test-container").style.display = 'block';
    getTestParameters();
    resetTest();
    let {strParam,numParam} = generateQuestion();
    strQuestion = strParam;
    answer = numParam;
    setQuestionPrompt(strQuestion, qCounter, numQs);
   
});

enterAnswer.addEventListener('keyup', (event) => {
    if (event.key === "Enter") { 
        errorPrompt.innerHTML = '';

        if (enterAnswer.value === ''){
            errorPrompt.innerHTML = `
            You have tried to submit an empty answer, Please enter a number.`
            return;
        }
        
        if (qCounter <= numQs){
            userAnswer = Number(enterAnswer.value);
            enterAnswer.value = '';
            updateLog();
            qCounter++;
            if (qCounter > numQs){
                questionPrompt.innerHTML = ``;
                return;
            }
           
            let {strParam,numParam} = generateQuestion();
            strQuestion = strParam;
            answer = numParam;
            setQuestionPrompt(strQuestion, qCounter, numQs);
        }
    }


});

submitButton.addEventListener('click', (event) => {
    errorPrompt.innerHTML = '';

        if (enterAnswer.value === ''){
            errorPrompt.innerHTML = `
            You have tried to submit an empty answer, Please enter a number.`
            return;
        }
        
        if (qCounter <= numQs){
            userAnswer = Number(enterAnswer.value);
            enterAnswer.value = '';
            updateLog();
            qCounter++;
            if (qCounter > numQs){
                questionPrompt.innerHTML = ``;
                return;
            }
           
            let {strParam,numParam} = generateQuestion();
            strQuestion = strParam;
            answer = numParam;
            setQuestionPrompt(strQuestion, qCounter, numQs);
        }

});