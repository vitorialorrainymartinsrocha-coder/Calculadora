import React, { useState } from 'react';
import './Calculadora.css';

function Calculadora() {
  const [result, setResult] = useState('');
  const [expression, setExpression] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setResult(Function('"use strict"; return (' + expression + ')')().toString());
        setExpression('');
     } catch {
  setResult('Erro');
}
    } else if (value === 'C') {
      setResult('');
      setExpression('');
    } else {
      setExpression(expression + value);
    }
  };

  return (
    <div className="Calculadora">
      <h2>Calculadora</h2>
      <div className="display">
        <input type="text" value={expression} readOnly />
        <input type="text" value={result} readOnly />
      </div>
      <div className="buttons">
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={() => handleButtonClick('+')}>+</button>
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleButtonClick('-')}>-</button>
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={() => handleButtonClick('*')}>*</button>
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={() => handleButtonClick('.')}>.</button>
        <button onClick={() => handleButtonClick('/')}>/</button>
        <button onClick={() => handleButtonClick('=')} className="btn-equal">=</button>
        <button onClick={() => handleButtonClick('C')} className="btn-clear">C</button>
      </div>
    </div>
  );
}

export default Calculadora;