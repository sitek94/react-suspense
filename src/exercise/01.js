// Simple Data-fetching
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'
import {PokemonDataView, fetchPokemon, PokemonErrorBoundary} from '../pokemon'

let pokemon
let pokemonError
const pokemonPromise = fetchPokemon('pikatron')
  .then(p => (pokemon = p))
  .catch(e => {
    pokemonError = e
  })

function PokemonInfo() {
  if (pokemonError) throw pokemonError
  if (!pokemon) throw pokemonPromise
  return (
    <div>
      <div className="pokemon-info__img-wrapper">
        <img src={pokemonPromise.image} alt={pokemonPromise.name} />
      </div>
      <PokemonDataView pokemon={pokemonPromise} />
    </div>
  )
}

function App() {
  return (
    <div className="pokemon-info-app">
      <div className="pokemon-info">
        <PokemonErrorBoundary>
          <React.Suspense fallback={<div>Loading...</div>}>
            <PokemonInfo />
          </React.Suspense>
        </PokemonErrorBoundary>
      </div>
    </div>
  )
}

export default App
