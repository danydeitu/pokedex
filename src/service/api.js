const BASE_URL = 'https://pokeapi.co/api/v2';

export const getPokemons = async () => {
  try {
    const response = await fetch(`${BASE_URL}/pokemon`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Error fetching pokemons');
  }
};
