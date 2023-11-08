import React,{useState, useEffect} from 'react'
import axios from 'axios'
import Character from './Character'


const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {
  const [planets, setPlanets] = useState([]);
  const [people, setPeople] = useState([]);

  useEffect(() => {
    axios.get(urlPlanets).then((response) => {
      setPlanets(response.data);
    });

    axios.get(urlPeople).then((response) => {
      setPeople(response.data);
    });
  }, []);

  const buildPeopleCard = (obj) => {
    return (
      <div className="character-card" key={obj.id}>
        <h3 className="character-name">{obj.name}</h3>
        <h4 className="closed">Some Toggle Text</h4>
      </div>
    );
  };

  console.log(planets);
  console.log(people);

  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p className="cards">See the README of the project for instructions on completing this challenge</p>
      {people.map((person) => buildPeopleCard(person))}
    </div>
  );
}

export default App;

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
