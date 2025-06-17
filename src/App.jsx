import { useState, useEffect } from 'react'
import './App.css'
import {selectedPkmn, selectAllPkmn} from './pkmnApi.jsx'

function App() {
  let nextId = 0;

  const [name, setName] = useState('');
  const [pokemon, setPokemon] = useState([]);
  const [pkmnChoices, setPkmnChoices] = useState([]);

  const fetchData = async () => {
    const response = await selectAllPkmn();
    setPkmnChoices(response);
  }

  useEffect(() => {
    fetchData()
  }, []);

  const checkPokemonExists = (name) => {
    return pokemon.some(item => item.name === name);
  };

  const handleSelect = async (event, name) => {
    if (checkPokemonExists(name)) {
      setPokemon([]);
      nextId = 0;
    } else {
      pokemon.push({id: nextId, name: name});
      nextId += 1;
    }
    const response = await selectAllPkmn();
    setPkmnChoices(response);
  }

  return (
    <>
    <div className='wrapper'>
      <div id='container'>
        {pkmnChoices.map((pkmnItem) =>{
                return (
                <div key={pkmnItem.id} className='container-item'>
                        <div className='container-image'>
                            <img src = {pkmnItem.imgurl}
                              alt={pkmnItem.name}
                              onClick={(event) => handleSelect(event, pkmnItem.name)}
                              />
                        </div>
                        <div className='container-label'>
                          <h2>
                              {pkmnItem.name}
                          </h2>
                        </div>
                </div>
                )})}
      </div>
    </div>
    </>
  )
}

export default App
