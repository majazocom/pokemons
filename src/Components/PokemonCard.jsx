import React from 'react'

export default function PokemonCard(props) {
    function toggleChecked() {
        props.pokemonCaught(props.pokemon.id);
    }
    return (
        <article>
            <input type="checkbox" onChange={toggleChecked} checked={props.pokemon.caught}></input>
            <h4>{props.pokemon.name}</h4>
        </article>
    )
}
