import React, { useState } from 'react';

function Character({ combinedData }) {
  const [showHomeworld, setShowHomeworld] = useState(false);

  const handleClick = () => {
    setShowHomeworld((prevState) => !prevState);
  };

  return (
    <div>
      <h3 className='character-name' onClick={handleClick}>
        {combinedData.name}
      </h3>
      {showHomeworld && (
        <div>
          <span className='character-planet'>
            Planet: {combinedData.homeworld}
          </span>
        </div>
      )}
    </div>
  );
}

export default Character;