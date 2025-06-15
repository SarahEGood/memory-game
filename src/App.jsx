import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

let nextId = 0;

function App() {
  const [name, setName] = useState('');
  const [pokemon, setPokemon] = useState([]);

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
      <div className='container'>
        <div className='container-item'>
          <div className='container-image'></div>
          <div className='container-label'></div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
