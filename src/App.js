import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import PokemonList from './PokemonList'
import Pagination from './Pagination'

function App() {
  const [pokemon, setPokemon] = useState(['bulbasaur', 'charmander'])
  const [currentPageUrl, setCurrentPageUrl] = useState('https://pokeapi.co/api/v2/pokemon')
  const [nextPageUrl, setNextPageUrl] = useState()
  const [prevPageUrl, setPrevPageUrl] = useState()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(true)
    const controller = new AbortController()
    axios
      .get(currentPageUrl, {
        signal: controller.signal,
      })
      .then((res) => {
        setLoading(false)
        setNextPageUrl(res.data.next)
        setPrevPageUrl(res.data.previous)
        setPokemon(res.data.results.map((p) => p.name))
      })

    return () => {
      controller.abort()
    }
  }, [currentPageUrl])
  const toPrevPage = () => {
    setCurrentPageUrl(prevPageUrl)
  }
  const toNextPage = () => {
    setCurrentPageUrl(nextPageUrl)
  }

  if (loading) {
    return 'Loading...'
  } else {
    return (
      <>
        <PokemonList pokemon={pokemon} />
        <Pagination toPrevPage={prevPageUrl ? toPrevPage : null} toNextPage={nextPageUrl ? toNextPage : null} />
      </>
    )
  }
}

export default App
