const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');
const operate = document.querySelector('#operate');
const clear = document.querySelector('#clear');

function Calculator() {
  this.methods = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '×': (a, b) => a * b,
    '÷': (a, b) => {
      return (b === 0) ? 'Cannot divide by zero' : a / b
    },
  };
    
  this.calculate = function(operation) {
    let splittedNumbersAndOperator = operation.split(' '),
      a = +splittedNumbersAndOperator[0],
      op = splittedNumbersAndOperator[1],
      b = +splittedNumbersAndOperator[2];
      
    if(!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }
      
    return this.methods[op](a, b);
  }
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonValue = button.innerHTML || button.innerText;

    if (['=', 'AC'].includes(buttonValue)) {
      return;
    }

    if(['+', '-', '×', '÷'].includes(buttonValue)) {
      display.value += ` ${buttonValue} `;
    } else {
      display.value += buttonValue;
    }
  });
});

operate.addEventListener('click', () => {
  const calculator = new Calculator;
  
  display.value = calculator.calculate(display.value).toFixed(2);
});

clear.addEventListener('click', () => {
  display.value = '';
});