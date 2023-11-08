import React, { useState } from 'react';

function Character({ combinedData }) {
  const [showHomeworld, setShowHomeworld] = useState(false);

  const toggleHomeworld = () => {
    setShowHomeworld((prevState) => !prevState);
  };
  const handleClick = () => {
    setShowHomeworld((prevState) => !prevState);
  };

  return (
    <div>
      
      <span className='character-planet'>{combinedData.homeworld}</span>
      
    </div>
  );
}

export default Character;