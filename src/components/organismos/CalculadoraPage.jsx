import React, { useState } from 'react';
import Button from './Button'; 

const Calculator = () => {
  // Estado para el valor actual 
  const [currentValue, setCurrentValue] = useState('');
  const [result, setResult] = useState(null); // Estado para el resultado de la operación

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        // uso de eval
        const evalResult = eval(currentValue); 
        setResult(evalResult);
        setCurrentValue(evalResult.toString());
      } catch (error) {
        setResult('Error'); 
      }
    } else if (value === 'C') {
      setCurrentValue('');
      setResult(null);
    } else {
      setCurrentValue(currentValue + value);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="w-full max-w-sm p-6 bg-gray-800 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-purple-400 text-center">Calculadora</h1>
        <div className="mb-4">
          
          <input
            type="text"
            value={currentValue}
            readOnly
            className="w-full p-3 border border-gray-700 rounded bg-gray-900 text-white"
          />
        </div>
        <div className="grid grid-cols-4 gap-4">
          {['7', '8', '9', '/'].map((val) => (
            <Button key={val} value={val} onClick={handleButtonClick} />
          ))}
          {['4', '5', '6', '*'].map((val) => (
            <Button key={val} value={val} onClick={handleButtonClick} />
          ))}
          {['1', '2', '3', '-'].map((val) => (
            <Button key={val} value={val} onClick={handleButtonClick} />
          ))}
          {['0', 'C', '=', '+'].map((val) => (
            <Button key={val} value={val} onClick={handleButtonClick} />
          ))}
        </div>
        {result !== null && (
          <div className="mt-4 text-center text-xl text-purple-400">
            Resultado: {result}
          </div>
        )}
      </div>
    </div>
  );
};

export default Calculator;
