// Simple Data-fetching
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'
import {PokemonDataView,fetchPokemon} from '../pokemon'

let pokemonPromise
const promise = fetchPokemon('pikachu').then(p => pokemonPromise = p)
function PokemonInfo() {
  if (!pokemonPromise) throw promise

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
        <React.Suspense fallback={<div>Loading...</div>}>
          <PokemonInfo />
        </React.Suspense>
      </div>
    </div>
  )
}

export default App
