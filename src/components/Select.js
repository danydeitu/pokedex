import React, { useContext } from 'react';
import styled from 'styled-components';
import { PokemonContext } from '../contexts/PokemonContext';

const SelectContainer = styled.div`
  margin-bottom: 16px;
`;

const Select = () => {
  const { selectedPokemons, togglePokemonSelection, removePokemons } = useContext(PokemonContext);

  const handleRemoveClick = () => {
    removePokemons();
  };

  const handleCheckboxChange = (pokemon) => {
    togglePokemonSelection(pokemon);
  };

  return (
    <SelectContainer>
      <button onClick={handleRemoveClick}>Eliminar Pokemon seleccionado</button>
      {selectedPokemons.map((pokemon) => (
        <label key={pokemon.name}>
          <input
            type="checkbox"
            checked={selectedPokemons.includes(pokemon)}
            onChange={() => handleCheckboxChange(pokemon)}
          />
          {pokemon.name}
        </label>
      ))}
    </SelectContainer>
  );
};

export default Select;
