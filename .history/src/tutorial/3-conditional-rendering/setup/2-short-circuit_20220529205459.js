import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('');
  const firstValue = text || 'hello world';
  const secondValue = text && 'hello world';

  return (
    <>
      <h1>Value 1: {firstValue}</h1>
      <h1>Value 2: {secondValue}</h1>
    </>
  );
};

export default ShortCircuit;
