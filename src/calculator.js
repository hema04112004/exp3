// src/Calculator.js
import React, { useState } from 'react';
import './calculator.css';

const Calculator = () => {
  const [input, setInput] = useState(''); // input display
  const [result, setResult] = useState(''); // result display

  // Handle button clicks
  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  // Calculate result
  const handleEquals = () => {
    try {
      setResult(eval(input).toString());
    } catch (err) {
      setResult('Error');
    }
  };

  // Clear input and result
  const handleClear = () => {
    setInput('');
    setResult('');
  };

  return (
    <div className="calculator-container">
      <h1 className="heading">React Calculator</h1>
      <div className="calculator">
        <div className="display">
          <div className="input">{input || '0'}</div>
          <div className="result">{result}</div>
        </div>
        <div className="buttons">
          <button onClick={() => handleClick('1')}>1</button>
          <button onClick={() => handleClick('2')}>2</button>
          <button onClick={() => handleClick('3')}>3</button>
          <button onClick={() => handleClick('+')}>+</button>
          <button onClick={() => handleClick('4')}>4</button>
          <button onClick={() => handleClick('5')}>5</button>
          <button onClick={() => handleClick('6')}>6</button>
          <button onClick={() => handleClick('-')}>-</button>
          <button onClick={() => handleClick('7')}>7</button>
          <button onClick={() => handleClick('8')}>8</button>
          <button onClick={() => handleClick('9')}>9</button>
          <button onClick={() => handleClick('*')}>*</button>
          <button onClick={() => handleClick('0')}>0</button>
          <button onClick={() => handleClick('.')}>.</button>
          <button onClick={handleEquals}>=</button>
          <button onClick={() => handleClick('/')}>/</button>
          <button className="clear" onClick={handleClear}>C</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
