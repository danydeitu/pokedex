import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deletePokemon } from '../actions/pokemonActions';
import Card from './Card';

const PokemonGallery = () => {
  const pokemons = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deletePokemon(id));
  };

  return (
    <div>
      {pokemons.map((pokemon) => (
        <Card
          key={pokemon.id}
          name={pokemon.name}
          image={pokemon.image}
          weight={pokemon.weight}
          abilities={pokemon.abilities}
        />
      ))}
    </div>
  );
};

export default PokemonGallery;
