import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2';

export const getPokemons = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/pokemon?limit=100`);
    const { results } = response.data;

    // Recorrer los resultados y obtener los detalles de cada Pokémon
    const pokemonDetails = await Promise.all(
      results.map(async (pokemon) => {
        const pokemonResponse = await axios.get(pokemon.url);
        const pokemonData = pokemonResponse.data;

        // Obtener el peso del Pokémon
        const weight = pokemonData.weight;

        // Obtener las habilidades del Pokémon
        const abilities = pokemonData.abilities.map((ability) => ability.ability.name);

        // Obtener las estadísticas del Pokémon
        const stats = pokemonData.stats.map((stat) => ({
          name: stat.stat.name,
          value: stat.base_stat,
        }));

        return {
          id: pokemonData.id,
          name: pokemonData.name,
          weight,
          abilities,
          stats,
        };
      })
    );

    return pokemonDetails;
  } catch (error) {
    console.error('Error fetching Pokémon data:', error);
    return [];
  }
};


/*const BASE_URL = 'https://pokeapi.co/api/v2';

export const getPokemons = async () => {
  try {
    const response = await fetch(`${BASE_URL}/pokemon?limit=100`);
    const data = await response.json();
    const { results } = data;

    // Recorrer los resultados y obtener los detalles de cada Pokémon
    const pokemonDetails = await Promise.all(
      results.map(async (pokemon) => {
        const pokemonResponse = await fetch(pokemon.url);
        const pokemonData = await pokemonResponse.json();

        // Obtener el peso del Pokémon
        const weight = pokemonData.weight;

        // Obtener las habilidades del Pokémon
        const abilities = pokemonData.abilities.map((ability) => ability.ability.name);

        // Obtener las estadísticas del Pokémon
        const stats = pokemonData.stats.map((stat) => ({
          name: stat.stat.name,
          value: stat.base_stat,
        }));

        return {
          id: pokemonData.id,
          name: pokemonData.name,
          weight,
          abilities,
          stats,
        };
      })
    );

    return pokemonDetails;
  } catch (error) {
    console.error('Error fetching Pokémon data:', error);
    return [];
  }
};*/
