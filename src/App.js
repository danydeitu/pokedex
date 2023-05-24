import React from 'react';
import PokemonList from './components/PokemonList';
import Filter from './components/Filter';
import Select from './components/Select';
import PokemonProvider from './contexts/PokemonContext';
import './index.css'

const App = () => {
  return (
    <PokemonProvider>
      <h1>Galeria de Pokemones</h1>
      <Filter />
      <Select />
      <PokemonList />
    </PokemonProvider>
  );
};

export default App;
