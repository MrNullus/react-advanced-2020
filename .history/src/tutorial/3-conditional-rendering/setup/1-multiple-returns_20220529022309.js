import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturns = () => {
  const [loading, setLoading] = useState(false);

  if (loading) {
    return <h2>Loading...</h2>;
    setTimeout(() => setLoading(false), 2000);
  }
  setTimeout(() => setLoading(true), 2000);

  return (
    <h2>multiple returns</h2>
  );
};

export default MultipleReturns;
