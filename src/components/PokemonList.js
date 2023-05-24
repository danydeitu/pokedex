import React, { useContext } from 'react';
import styled from 'styled-components';
import { PokemonContext } from '../contexts/PokemonContext';
import Card from './Card';

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 16px;
`;

const PokemonList = () => {
  const { filteredPokemons } = useContext(PokemonContext);

  return (
    <ListContainer>
      {filteredPokemons.map(pokemon => (
        <Card
          key={pokemon.name}
          name={pokemon.name}
          img={`https://pokeapi.co/api/v2/pokemon/${pokemon.name}/img`}
          weight={pokemon.weight}
          abilities={pokemon.abilities}
        />
      ))}
    </ListContainer>
  );
};

export default PokemonList;
