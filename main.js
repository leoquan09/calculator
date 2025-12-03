let currentNum = '';
let currentOperator = '';
let pastOperand = '';

function appendNum(num) {
	currentNum += num;
	document.querySelector('.display').textContent = currentNum;
    console.log(currentNum);
}

function clear() {
    currentNum = '';
    currentOperator = '';
    pastOperand = '';
    document.querySelector('.display').textContent = '000';
}

let nums = document.querySelectorAll('.nums');
nums.forEach(num => {
    num.addEventListener('click', () => {
        appendNum(num.textContent);
    });
});

let clearBtn = document.querySelector('.clear');
clearBtn.addEventListener('click', clear);