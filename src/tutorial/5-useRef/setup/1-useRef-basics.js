import React, { useEffect, useRef } from 'react';

// Preserva os valores
// Não faz a re-renderização
// segmenta o DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null);
  const divContainer = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(refContainer.current.value);
    console.log(divContainer.current);
  };

  useEffect(() => {
    console.log(refContainer.current);
    refContainer.current.focus();
  });

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input type="text" ref={refContainer} />

          <button type="button">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default UseRefBasics;
