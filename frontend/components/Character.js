import React, { useState } from 'react';

const Character = ({ character, planets }) => {
  const [showHomeworld, setShowHomeworld] = useState(false);
  const [showPlanet, setShowPlanet] = useState(false)
  const handleClick = () => {
    setShowHomeworld((prevState) => !prevState);
    setShowPlanet((prevState) => !prevState);
  };

  const homeworld = planets.find((planet) => planet.id === character.homeworld);
  let homeworldName = 'Unknown'
  if (homeworld) {
  homeworldName = homeworld.name
  }

  return (
    <div onClick={handleClick} style={{ cursor: 'pointer' }} className="character-card">
      <h3 className="character-name">{character.name}</h3>
      {showPlanet && <p>Planet: {showHomeworld && <span className='character-planet'>{homeworldName}</span>} </p>}
      
    </div>
  );
};

export default Character;