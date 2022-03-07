import React, { useState } from 'react'

export default function PokemonForm() {
    const [newPokemon, setNewPokemon] = useState({
        id: null,
        name: '',
        caught: false
    });

    function addPokemon(e, target) {
        console.log(e.target.value);
        console.log(target);
    }

  return (
    <article>
        <h4>Add new Pokemon</h4>
        <label htmlFor="id">Id:</label>
        <input onChange={(e) => addPokemon(e, 'id')} id="id" type="number"></input>
        <label htmlFor='name'>Name:</label>
        <input onChange={(e) => addPokemon(e, 'name')} id='name' type="text"></input>
        <label htmlFor='caught'>Caught:</label>
        <input onChange={(e) => addPokemon(e, 'caught')} id="caught" type="checkbox"></input>
        <input type="button" value="Add"></input> 
    </article>
  )
}
