import { useState, useEffect } from 'react'
import './App.css'
import {selectAllPkmn} from './pkmnApi.jsx'


function App() {
  const [name, setName] = useState('');
  const [pokemon, setPokemon] = useState([]);
  const [pkmnChoices, setPkmnChoices] = useState(selectAllPkmn());
  console.log(pkmnChoices);

  const checkPokemonExists = (name) => {
    return pokemon.some(item => item.name === name);
  };

  const handleSelect = (name) => {
    if (checkPokemonExists(name)) {
      setPokemon();
      nextId = 0;
    } else {
      setPokemon([pokemon,
        {id: nextId, name: name}
      ]);
      nextId += 1;
    }
  }

  return (
    <>
    <div className='wrapper'>
      <div id='container'>
        {pkmnChoices.map((pkmnItem) =>{
          console.log(pkmnItem);
          console.log(pkmnItem.value);
                return (
                <div key={pkmnItem.id} className='container-item'>
                        <div className='container-image'>
                            <img src = {pkmnItem.imgurl} alt={pkmnItem.name} />
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
