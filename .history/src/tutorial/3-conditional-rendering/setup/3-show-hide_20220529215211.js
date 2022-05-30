import React, { useState, useEffect } from 'react';

const ShowHide = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <button className='btn' onClick={() => setShow(!show)}>
        Show/Hide
      </button>
    </>
  );
};

const Hide = () => {
  return (
    <div style={{ marginTop: '2rem' }}>
      
    </div>
  );
}


export default ShowHide;
