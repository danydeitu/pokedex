import React, { createContext, useEffect, useState } from 'react';
import { getPokemons } from '../services/Api';

export const PokemonContext = createContext();

const PokemonProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [selectedAbilities, setSelectedAbilities] = useState([]);
  const [selectedPokemons, setSelectedPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const data = await getPokemons();
      setPokemons(data);
      setFilteredPokemons(data);
    };
    fetchPokemons();
  }, []);

  useEffect(() => {
    filterPokemons();
  }, [searchValue, selectedAbilities]);

  const filterPokemons = () => {
    let filtered = pokemons;

    if (searchValue) {
      filtered = filtered.filter(pokemon =>
        pokemon.name.toLowerCase().includes(searchValue.toLowerCase())
      );
    }

    if (selectedAbilities.length > 0) {
      filtered = filtered.filter(pokemon =>
        pokemon.abilities.some(ability =>
          selectedAbilities.includes(ability.name)
        )
      );
    }

    setFilteredPokemons(filtered);
  };

  const removePokemons = () => {
    setFilteredPokemons(prevPokemons =>
      prevPokemons.filter(pokemon => !selectedPokemons.includes(pokemon))
    );
    setSelectedPokemons([]);
  };

  const togglePokemonSelection = pokemon => {
    setSelectedPokemons(prevPokemons => {
      if (prevPokemons.includes(pokemon)) {
        return prevPokemons.filter(p => p !== pokemon);
      } else {
        return [...prevPokemons, pokemon];
      }
    });
  };

  return (
    <PokemonContext.Provider
      value={{
        filteredPokemons,
        searchValue,
        setSearchValue,
        selectedAbilities,
        setSelectedAbilities,
        selectedPokemons,
        togglePokemonSelection,
        removePokemons,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;
