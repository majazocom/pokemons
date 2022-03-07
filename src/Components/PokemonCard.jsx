import React from 'react'

export default function PokemonCard({ pokemon: { name, caught } }) {
    return (
        <article>
            <input type="checkbox" checked={caught}></input>
            <h4>{name}</h4>
        </article>
    )
}
