import React, { useState } from 'react';

function Character({ combinedData }) {
  const [showHomeworld, setShowHomeworld] = useState(false);

  const handleClick = () => {
    setShowHomeworld((prevState) => !prevState);
  };

  return (  
      <p onClick={handleClick} style={{ cursor: 'pointer' }}>Planet: {showHomeworld && (
        <span className='character-planet'>{combinedData.homeworld}</span>
      )}</p>
      
    
  );
}

export default Character;