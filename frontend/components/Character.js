import React, { useState } from 'react';

function Character({ combinedData }) {
  const [showHomeworld, setShowHomeworld] = useState(true);

  const handleClick = () => {
    setShowHomeworld((prevState) => !prevState);
  };

  return (
    <div onClick={handleClick} style={{ cursor: 'pointer' }}>
      
      <p>Planet:{showHomeworld && (
        <span className='character-planet'>{combinedData.homeworld}</span>
      )}</p>
      
    </div>
  );
}

export default Character;