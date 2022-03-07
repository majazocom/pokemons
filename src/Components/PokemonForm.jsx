import React, { useState } from 'react'

export default function PokemonForm(props) {
    const [newPokemon, setNewPokemon] = useState({
        id: null,
        name: '',
        caught: false
    });

    function addPokemon(e, target) {
        let toBeAdded = {...newPokemon};
        if (target === 'id') {
            toBeAdded.id = parseInt(e.target.value);
            setNewPokemon(toBeAdded);
        }
        if (target === 'name') {
            toBeAdded.name = e.target.value;
            setNewPokemon(toBeAdded);
        }
        if (target === 'caught') {
            toBeAdded.caught = e.target.checked;
            setNewPokemon(toBeAdded);
        }
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
        <input type="button" value="Add" onClick={() => {props.addPokemon(newPokemon)}}></input> 
    </article>
  )
}
