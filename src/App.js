import './App.css';
import { useState } from 'react';
import PokemonCard from './Components/PokemonCard';

function App() {
  const [pokemons, setPokemons] = useState([
    { id: 1, name: "Bulbasaur", caught: false },
    { id: 2, name: "Ivysaur", caught: false },
    { id: 3, name: "Venusaur", caught: false },
    { id: 4, name: "Charmander", caught: false },
    { id: 5, name: "Charmeleon", caught: false },
    { id: 6, name: "Charizard", caught: false }
  ]);
  return (
    <div className="App">
      {
        pokemons.map((pokemon) => (
          <PokemonCard pokemon={pokemon} key={pokemon.id} />
        ))
      }
    </div>
  );
}

export default App;
