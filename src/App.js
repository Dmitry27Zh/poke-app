import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import PokemonList from './PokemonList'

function App() {
  const [pokemon, setPokemon] = useState(['bulbasaur', 'charmander'])
  const [currentPageUrl, setCurrentPageUrl] = useState('https://pokeapi.co/api/v2/pokemon')
  const [nextPageUrl, setNextPageUrl] = useState()
  const [prevPageUrl, setPrevPageUrl] = useState()
  useEffect(() => {
    axios.get(currentPageUrl).then((res) => {
      setNextPageUrl(nextPageUrl)
      setPrevPageUrl(prevPageUrl)
      setPokemon(res.data.results.map((p) => p.name))
    })
  }, [currentPageUrl])

  return <PokemonList pokemon={pokemon} />
}

export default App
