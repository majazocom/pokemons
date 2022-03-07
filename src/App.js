import './App.css';
import { useEffect, useState } from 'react';
import PokemonCard from './Components/PokemonCard';
import PokemonForm from './Components/PokemonForm';

function App() {
  const [pokemons, setPokemons] = useState([
    { id: 1, name: "Bulbasaur", caught: false },
    { id: 2, name: "Ivysaur", caught: false },
    { id: 3, name: "Venusaur", caught: false },
    { id: 4, name: "Charmander", caught: false },
    { id: 5, name: "Charmeleon", caught: false },
    { id: 6, name: "Charizard", caught: false }
  ]);
  const [pokeCount, setPokeCount] = useState(0);

  function pokemonCaught(id) {
    //kör vi en kopia på statet
    let pokemonList = [...pokemons];
    //söker vi efter objektet i listan som har id'et som vi fårr från barnkomponenten
    let currentPokemon = pokemonList.find((pokemon) => pokemon.id === id );
    //går in i det objektet och ändrar värdet på propertyn caugth till motsatta värdet
    currentPokemon.caught = !currentPokemon.caught;
    //letar efter index på objekt i listan som matchar argumentet vi tagit in i funktionen
    let currId = pokemonList.findIndex((pokemon) => pokemon.id === id);
    //splicear mha id'et vi matchat, tar bort det gamla objektet och ersätter med vårt ändrade objekt
    pokemonList.splice(currId, 1, currentPokemon);
    //kallar på setPokemons som uppdaterar statet
    setPokemons(pokemonList);
  }

  function updatePokeCount() {
    //skapar en kopia på pokemons
    let caughtPokemons = [...pokemons];
    //filtrerar ut alla objekt som har värdet true på propertyn caught
    caughtPokemons = caughtPokemons.filter((pokemon) => pokemon.caught === true);
    console.log(caughtPokemons);
    //sätter statet pokeCount till längden på listan
    setPokeCount(caughtPokemons.length);
  }

  //useEffect som tar funktionen som skall köras som första parameter och vad som triggar den som andra
  useEffect(updatePokeCount, [pokemons]);

  return (
    <div className="App">
      <h2>Pokedex: ({pokeCount} / 151)</h2>
      {
        pokemons.map((pokemon) => (
          <PokemonCard pokemonCaught={pokemonCaught} pokemon={pokemon} key={pokemon.id} />
        ))
      }
      <PokemonForm />
    </div>
  );
}

export default App;
