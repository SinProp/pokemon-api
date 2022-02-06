import React, { useState } from 'react';
import './App.css';
import "./bootstrap.css"

import FetchPokemon from "./components/FetchPokemon"
import PokemonDisplay from "./components/PokemonDisplay"


function App() {
  const [pokemon, setPokemon] = useState([])

  return (
    <div className="App container">
      <FetchPokemon pokemon={ pokemon } setPokemon={ setPokemon } />
      <PokemonDisplay pokemon={ pokemon }/>
    </div>
  );
}

export default App;