import React, { useContext } from 'react';
import { PokemonContext } from '../contexts/PokemonContext';

const PokemonState = () => {
  const {
    filteredPokemons,
    searchValue,
    setSearchValue,
    selectedAbilities,
    setSelectedAbilities,
    selectedPokemons,
    togglePokemonSelection,
    removePokemons
  } = useContext(PokemonContext);

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleAbilityChange = (event) => {
    const selectedAbility = event.target.value;

    setSelectedAbilities((prevAbilities) => {
      if (prevAbilities.includes(selectedAbility)) {
        return prevAbilities.filter((ability) => ability !== selectedAbility);
      } else {
        return [...prevAbilities, selectedAbility];
      }
    });
  };

  const handlePokemonToggle = (pokemon) => {
    togglePokemonSelection(pokemon);
  };

  const handleRemovePokemons = () => {
    removePokemons();
  };

  return (
    <div>
      {/* Componente de búsqueda */}
      <input type="text" value={searchValue} onChange={handleSearchChange} />

      {/* Componente de selección de habilidades */}
      <select multiple value={selectedAbilities} onChange={handleAbilityChange}>
        {/* Opciones de habilidades */}
      </select>

      {/* Componente de lista de pokémon */}
      {filteredPokemons.map((pokemon) => (
        <div key={pokemon.id}>
          <input
            type="checkbox"
            checked={selectedPokemons.includes(pokemon)}
            onChange={() => handlePokemonToggle(pokemon)}
          />
          <span>{pokemon.name}</span>
        </div>
      ))}

      {/* Botón para eliminar los pokémon seleccionados */}
      <button onClick={handleRemovePokemons}>Eliminar seleccionados</button>
    </div>
  );
};

export default PokemonState;
