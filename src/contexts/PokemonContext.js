// PokemonContext.js
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

  const removePokemon = (pokemon) => {
    setSelectedPokemons(prevPokemons =>
      prevPokemons.filter(p => p.id !== pokemon.id)
    );
  };

  const togglePokemonSelection = (pokemon) => {
    setSelectedPokemons(prevPokemons => {
      if (prevPokemons.some(p => p.id === pokemon.id)) {
        return prevPokemons.filter(p => p.id !== pokemon.id);
      } else {
        return [...prevPokemons, pokemon];
      }
    });
  };
  const selectPokemon = (pokemon) => {
    setSelectedPokemons((prevSelectedPokemons) => [...prevSelectedPokemons, pokemon]);
  };

  const removPokemon = (pokemon) => {
    setSelectedPokemons((prevSelectedPokemons) =>
      prevSelectedPokemons.filter((p) => p.id !== pokemon.id)
    );
  };


    return (
      <PokemonContext.Provider value={{ 
        selectedPokemons, 
        selectPokemon, 
        removPokemon,
        filteredPokemons,
        searchValue,
        setSearchValue,
        selectedAbilities,
        setSelectedAbilities,
        selectedPokemons,
        togglePokemonSelection,
        removePokemon,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;
