function Calculator() {
    this.methods = {
      '+': (a, b) => a + b,
      '-': (a, b) => a - b,
      '*': (a, b) => a * b,
      '/': (a, b) => {
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
  
  const calculator = new Calculator;
  
  console.log(calculator.calculate('2 + 0'));