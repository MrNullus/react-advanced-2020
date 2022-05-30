import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturns = () => {
  [loading, setLoading] = useState(true);

  if (loading) {
    <h2>Loading...</h2>
  }

  return (
    <h2>multiple returns</h2>
  );
};

export default MultipleReturns;
