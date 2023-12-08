import { useState } from 'react'
import './App.css'
import PokemonList from './PokemonList'

function App() {
  const [pokemon, setPokemon] = useState(['bulbasaur', 'charmander'])

  return <PokemonList pokemon={pokemon} />
}

export default App
