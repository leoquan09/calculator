let currentNum = '';
let currentOperator = '';
let pastOperand = '';

let displayText = document.querySelector('.display');

function appendNum(num) {
    // if (num = '.' && currentNum.includes('.')) {
    //     num = '';
    // }
    currentNum += num;
	displayText.textContent = currentNum;
    console.log(currentNum);
}

function clear() {
    currentNum = '';
    currentOperator = '';
    pastOperand = '';
    displayText.textContent = '0';
}

function calculate() {
    const current = parseFloat(currentNum);
    const past = parseFloat(pastOperand);
    let result = 0;

    switch (currentOperator) {
        case '+':
            result = past + current;
            break;
        case '-':
            result = past - current;
            break;
        case '÷':
            if (current === 0) { 
                result = 'why u tryna ruin it' 
            } else {
                result = past / current;
            }
            break;
        case 'x':
            result = past * current;
            break;
    }

    displayText.textContent = result;

    currentNum = result.toString();
    pastOperand = '';
    currentOperator = '';
}

let nums = document.querySelectorAll('.nums');
nums.forEach(num => {
    num.addEventListener('click', () => {
        appendNum(num.textContent);
    });
});

let clearBtn = document.querySelector('.clear');
clearBtn.addEventListener('click', clear);

let operations = document.querySelectorAll('.operation');
operations.forEach(operation => {
    operation.addEventListener('click', () => {
        if (pastOperand !== '' && currentNum !== '') {
            calculate();
        } 

        displayText.textContent = operation.textContent;
        currentOperator = operation.textContent;
        pastOperand = currentNum;
        currentNum = '';
    })
}) 

let calcBtn = document.querySelector('.equal');
calcBtn.addEventListener('click', calculate)