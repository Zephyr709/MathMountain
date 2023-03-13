const generateButton = document.getElementById('generateButton');

let numQs, maxNum, minNum = 0;


function randInt(min, max) {
    // A proper random integer function; min/max inclusive. credit: W3Schools.com
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getTestParameters() {
    numQs = document.getElementById('numQuestions').value;
    maxNum = document.getElementById('maxNum').value;
    minNum = document.getElementById('minNum').value;

    alert(`numQs is: ${numQs} and maxNum is: ${maxNum} and  minNum is: ${minNum}`);


}