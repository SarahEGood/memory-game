import { useState } from 'react'

const maxOffset = 1024;
const randoffset = Math.floor(Math.random() * maxOffset);

function selectedPkmn() {
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${randoffset}/`)
        .then(response => response.json())
        .then((data) => {
            console.log(data);
            console.log(data.name);
            console.log(data.id);
            console.log(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`);
        });
}

export default selectedPkmn;