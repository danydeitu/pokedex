import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const PokemonContext = createContext();

const PokemonProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100');
        const { results } = response.data;

        // Recorrer los resultados y obtener los detalles de cada Pokémon
        const pokemonDetails = await Promise.all(
          results.map(async (pokemon) => {
            const pokemonResponse = await axios.get(pokemon.url);
            return pokemonResponse.data;
          })
        );

        setPokemons(pokemonDetails);
      } catch (error) {
        console.error('Error fetching Pokémon data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <PokemonContext.Provider value={pokemons}>
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;
