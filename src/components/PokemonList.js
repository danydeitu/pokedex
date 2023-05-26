import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { PokemonContext } from '../contexts/PokemonContext';
import styled from 'styled-components';
;

const PokemonListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const PokemonCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  margin: 10px;
  padding: 10px;
  background-color:#0055;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const PokemonImage = styled.img`
  width: 120px;
  height: 110px;
`;

const PokemonName = styled.h3`
  margin-top: 10px;
  font-size: 16px;
  text-align: center;
  color: #333333;
`;

const Button = styled.button`
  background-color: #ff3d00;
  color: #ffffff;
  padding: 8px 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  margin-top: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e65100;
  }
`;

const PokemonList = () => {
  const { filteredPokemons, searchValue, selectedAbilities, togglePokemonSelection, selectedPokemons } = useContext(
    PokemonContext
  );
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100');
        const { results } = response.data;

        // Recorrer los resultados y obtener los datos de cada Pokémon
        const pokemonData = await Promise.all(
          results.map(async (pokemon) => {
            const pokemonResponse = await axios.get(pokemon.url);
            return pokemonResponse.data;
          })
        );

        setPokemons(pokemonData);
      } catch (error) {
        console.error('Error fetching Pokémon data:', error);
      }
    };

    fetchData();
  }, []);

  const filteredPokemonsByName = pokemons.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const filteredPokemonsByAbilities = filteredPokemonsByName.filter(pokemon =>
    selectedAbilities.every(ability =>
      pokemon.abilities.some(pokemonAbility => pokemonAbility.ability.name === ability)
    )
  );

  return (
    <PokemonListContainer>
      {filteredPokemonsByAbilities.map((pokemon) => (
        <PokemonCard key={pokemon.id}>
          <PokemonImage src={pokemon.sprites.front_default} alt={pokemon.name} />
          <PokemonName>{pokemon.name}</PokemonName>
          <p>Weight: {pokemon.weight}</p>
         
          <p>Abilities: {pokemon.abilities.map(ability => ability.ability.name).join(', ')}</p>

          
          <Button onClick={() => togglePokemonSelection(pokemon)}>
            {selectedPokemons.some(p => p.id === pokemon.id) ? 'Remove' : 'Select'}
          
          </Button>
        </PokemonCard>
      ))}
    </PokemonListContainer>
  );
};

export default PokemonList;
