const BASE_URL = 'https://pokeapi.co/api/v2';
export const getPokemons = async () => {
  const response = await fetch(`${BASE_URL}/pokemon?limit=100`);
  const data = await response.json();

  // Obtener detalles adicionales para cada pokemon
  const pokemonPromises = data.results.map(async (pokemon) => {
    const pokemonResponse = await fetch(pokemon.url);
    const pokemonData = await pokemonResponse.json();
    return {
     
      name: pokemon.name,
      weight: pokemonData.weight,
      abilities: pokemonData.abilities.map((ability) => ability.ability.name),
      // Agrega más propiedades si necesitas
    };
  });

  // Esperar a que se resuelvan todas las promesas
  const pokemons = await Promise.all(pokemonPromises);

  return pokemons;
};

