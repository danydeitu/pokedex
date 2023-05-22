import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPokemons } from './actions/pokemonActions';
import PokemonGallery from './components/PokemonGallery';
import FilterInput from './components/FilterInput';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemons());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Pokedex</h1>
      <PokemonGallery />
      <FilterInput />
    </div>
  );
};

export default App;
