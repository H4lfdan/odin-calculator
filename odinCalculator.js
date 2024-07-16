const output = document.getElementById('output');
output.innerHTML = 0;
let inputA = '';
let inputB = '';
let operator = '';
let answer = '';
let hasOperator = false;
let hasDecimal = false;

function typeNum(string) {
    if(!hasOperator) {
        if (answer != '') {
            answer = '';
            inputA = '';
        }
        if (string === '.') {
            if (hasDecimal) {
                return;
            } else if (!hasDecimal) {
                hasDecimal = true;
            }
        }
        inputA += string;
        output.innerHTML = inputA;
    } else if(hasOperator) {
        if (string === '.') {
            if (hasDecimal) {
                return;
            } else if (!hasDecimal) {
                hasDecimal = true;
            }
        }
        inputB += string;
        output.innerHTML = inputB;
    }
}

function typeOper(string) {
    if (inputB != '') {
        if (inputA === '' || inputA === NaN) {
            inputA = '0';
        }
        operate();
    }
    operator = string;
    hasOperator = true;
    hasDecimal = false;
    console.log(inputA);
}

function operate() {
    const a = parseFloat(inputA);
    const b = parseFloat(inputB);

    if(operator === '+') {
        answer = a + b;
    } else if (operator === '-') {
        answer = a - b;
    } else if (operator === '*') {
        answer = a * b;
    } else if (operator === '/') {
        if (inputB === '0') {
            answer = 'wanker';
        } else {
            answer = a / b;
        }
    } else {
        console.log('what the heck');
    }

    console.log(answer);

    let lengthCheck = ('' + answer).split('.');
    if (lengthCheck.length === 2) {
        if (lengthCheck[1].length >= 4) {
            answer = parseFloat(answer).toFixed(3);
            console.log(answer);
        }
    }

    output.innerHTML = answer;
    console.log(inputA , operator , inputB , answer);
    inputA = answer;
    inputB = '';
    operator = '';
    hasOperator = false;

    if (answer === 'wanker' || answer === NaN) {
        inputA = '0';
    }
}

function equals() {
    if (operator === '' || inputB === '') {
        output.innerHTML = inputA;
        inputB = '';
        operator = '';
        hasOperator = false;
    } else {
        operate();
    }
}

function resetEquation() {
    inputA = '';
    inputB = '';
    operator = '';
    output.innerHTML = 0;
    hasOperator = false;
    hasDecimal = false;
    console.log('cleared');
}

//  *   *   *   *   *

// const output = document.getElementById('output');
// let displayValue = '';
// let hasOper = false;
// let typingNum = false;

// function operate() {
//     const equation = displayValue.split(' ');
//     const a = parseInt(equation[0]);
//     const operator = equation[1];
//     const b = parseInt(equation[2]);
//     let answer = '';

//     if(operator === '+') {
//         answer = a + b;
//     } else if (operator === '-') {
//         answer = a - b;
//     } else if (operator === '*') {
//         answer = a * b;
//     } else if (operator === '/') {
//         answer = a / b;
//     } else {
//         console.log('what the heck');
//     }

//     resetEquation(answer);
//     console.log(equation);
//     console.log(a , operator , b)
//     hasOper = false;
// }

// function typeNum(string) {
//     if(!typingNum) {
//         output.innerHTML = '';
//         typingNum = true;
//     }

//     output.innerHTML += string;
//     displayValue += string;
// }

// function typeOper(string) {
//     if(hasOper) {
//         operate();
//         displayValue += string;
//     } else {
//         output.innerHTML = string;
//         displayValue += string;
//     }

//     hasOper = true;
//     typingNum = false;
// }

// function resetEquation(int) {
//     output.innerHTML = int;
//     displayValue = int;
//     typingNum = false;
//     console.log(displayValue);
// }