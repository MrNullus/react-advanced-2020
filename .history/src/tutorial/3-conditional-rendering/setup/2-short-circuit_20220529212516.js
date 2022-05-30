import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('');
  const [isError, setIsError] = useState(false);
  
  // Se falso a primeira, retorna o segundo, se verdadeiro o primeiro
  const firstValue = text || 'hello world';
  // Se falso  a primeira retorna a mesma, se verdadeiro retorna a segunda
  const secondValue = text && 'hello world';
 
  return (
    <>
      <h2>Value 1: {firstValue}</h2>
      <h2>Value 2: {secondValue}</h2>
       
      <br />
      <hr />
      <br />

      <h2>{text || 'daallas hughs'}</h2>
      <h2>{text && 'daallas hughs'}</h2>
      <h2>{!text && 'daallas hughs'}</h2>

      <br />
      <hr />
      <br />

      <button className="btn">
        Toggle Error
      </button>
    </>
  );
};

export default ShortCircuit;
