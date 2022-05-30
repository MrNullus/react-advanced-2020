import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('');
  // Se falso a primeira, retorna o segundo, se verdadeiro o primeiro
  const firstValue = text || 'hello world';
  // Se falso  a primeira retorna a mesma, se verdadeiro retorna a segunda
  const secondValue = text && 'hello world';

  return (
    <>
      <h1>Value 1: {firstValue}</h1>
      <h1>Value 2: {secondValue}</h1>
    </>
  );
};

export default ShortCircuit;
